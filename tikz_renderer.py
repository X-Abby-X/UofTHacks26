# tikz_renderer.py
# JSON circuit spec -> circuitikz -> PNG
# CLEAN + STABLE VERSION

import os
import re
import shutil
import subprocess
import time
from pdf2image import convert_from_path

LATEX_TEMPLATE = r"""
\documentclass[10pt]{article}
\usepackage[margin=10pt]{geometry}
\usepackage[american]{circuitikz}
\pagestyle{empty}
\begin{document}
\begin{center}
\begin{circuitikz}[scale=1.2, transform shape]
__BODY__
\end{circuitikz}
\end{center}
\end{document}
"""


# -------------------------
# Label handling (SAFE)
# -------------------------
def _latex_escape_label(s: str) -> str:
    """
    Labels are DISPLAY TEXT ONLY.
    No math mode. No \text{}. Minimal escaping.
    """
    if not s:
        return ""

    s = str(s)

    # Replace problematic unicode
    s = s.replace("Ω", "Ohm")

    # Escape only what actually breaks LaTeX text
    s = s.replace("%", r"\%")
    s = s.replace("&", r"\&")
    s = s.replace("#", r"\#")
    s = s.replace("_", r"\_")

    # Normalize spaces
    s = re.sub(r"\s+", " ", s).strip()
    return s


def _safe_node_id(s: str, default="U1"):
    """TikZ node names must be simple ASCII."""
    if not s:
        return default
    s = re.sub(r"\W+", "_", str(s))
    if s[0].isdigit():
        s = "N" + s
    return s


def _pt(xy):
    return f"({xy[0]},{xy[1]})"


# -------------------------
# Main renderer
# -------------------------
def render_tikz(spec: dict, output_path: str):
    mapping = {
        "V": "V",
        "R": "R",
        "C": "C",
        "L": "L",
        "D": "D",
    }

    commands = []

    for c in spec.get("components", []):
        ctype = c.get("type", "R")

        # -------- OP AMP --------
        if ctype == "opamp":
            pos = c.get("pos") or c.get("start")
            if not pos or len(pos) != 2:
                continue

            x, y = pos
            node_id = _safe_node_id(c.get("label", "U1"))
            label = _latex_escape_label(c.get("label", node_id))

            commands.append(f"\\node[op amp] ({node_id}) at ({x},{y}) {{}};")

            if c.get("show_label", True):
                commands.append(f"\\node at ({x},{y-0.9}) {{{label}}};")

            if "plus" in c:
                px, py = c["plus"]
                commands.append(f"\\draw ({px},{py}) -- ({node_id}.+);")

            if "minus" in c:
                mx, my = c["minus"]
                commands.append(f"\\draw ({mx},{my}) -- ({node_id}.-);")

            if "out" in c:
                ox, oy = c["out"]
                commands.append(f"\\draw ({node_id}.out) -- ({ox},{oy});")

            continue

        # -------- GROUNDS --------
        if ctype == "ground":
            commands.append(f"\\draw {_pt(c['start'])} node[ground]{{}};")
            continue

        # -------- WIRES --------
        if ctype == "short":
            commands.append(f"\\draw {_pt(c['start'])} -- {_pt(c['end'])};")
            continue

        # -------- NORMAL ELEMENTS --------
        if "start" not in c or "end" not in c:
            continue

        st = _pt(c["start"])
        en = _pt(c["end"])
        elem = mapping.get(ctype, "R")
        label = _latex_escape_label(c.get("label", ""))

        if label:
            commands.append(f"\\draw {st} to[{elem}, l={{{label}}}] {en};")
        else:
            commands.append(f"\\draw {st} to[{elem}] {en};")

    # -------------------------
    # Compile LaTeX
    # -------------------------
    tex = LATEX_TEMPLATE.replace("__BODY__", "\n".join(commands))

    stamp = time.strftime("%Y%m%d_%H%M%S")
    base = f"temp_{stamp}"
    tex_file = base + ".tex"
    pdf_file = base + ".pdf"

    with open(tex_file, "w", encoding="utf-8") as f:
        f.write(tex)

    try:
        subprocess.run(
            ["pdflatex", "-interaction=nonstopmode", "-halt-on-error", tex_file],
            check=True,
            stdout=subprocess.DEVNULL,
        )

        images = convert_from_path(pdf_file, single_file=True)
        os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
        images[0].save(output_path, "PNG")

    except subprocess.CalledProcessError:
        debug_dir = os.path.join(os.path.dirname(output_path) or ".", "_latex_debug")
        os.makedirs(debug_dir, exist_ok=True)
        for ext in [".tex", ".pdf", ".aux", ".log"]:
            if os.path.exists(base + ext):
                shutil.copy2(base + ext, debug_dir)
        raise

    finally:
        for ext in [".tex", ".pdf", ".aux", ".log"]:
            if os.path.exists(base + ext):
                os.remove(base + ext)
