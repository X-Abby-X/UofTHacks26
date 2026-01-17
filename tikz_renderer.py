# import os
# import subprocess
# from pdf2image import convert_from_path

# LATEX_TEMPLATE = r"""
# \documentclass{{standalone}}
# \usepackage[siunitx, american]{{circuitikz}}
# \begin{{document}}
# \begin{{circuitikz}}[scale=1.2, transform shape]
# {}
# \end{{circuitikz}}
# \end{{document}}
# """


# def sanitize_label(label: str) -> str:
#     """
#     Replace Unicode symbols with LaTeX commands and wrap in math mode.
#     """
#     if not label:
#         return ""
#     label = label.replace("Ω", r"\Omega")
#     return f"${label}$"


# def resolve_point(p):
#     """
#     Accepts either:
#     - [x, y]
#     - string node name (e.g. "U1_out")
#     """
#     if isinstance(p, str):
#         return p
#     return f"({p[0]},{p[1]})"


# def render_tikz(spec: dict, output_path: str):
#     mapping = {
#         "V": "V",
#         "R": "R",
#         "C": "C",
#         "L": "L",
#         "D": "D",
#         "short": "short"
#     }

#     commands = []
#     opamp_count = 0

#     for c in spec.get("components", []):
#         ctype = c.get("type", "R")

#         # ---------- GROUND ----------
#         if ctype == "ground":
#             st = resolve_point(c["start"])
#             commands.append(f"\\draw {st} node[ground]{{}};")
#             continue

#         # ---------- SHORT / WIRE ----------
#         if ctype == "short":
#             st = resolve_point(c["start"])
#             en = resolve_point(c["end"])
#             commands.append(f"\\draw {st} -- {en};")
#             continue


#         # ---------- OP AMP ----------
#         if ctype == "opamp":
#             opamp_count += 1
#             op_id = f"U{opamp_count}"

#             x, y = c["start"]

#             # Draw op-amp body
#             commands.append(
#                 f"\\node[op amp] ({op_id}) at ({x},{y}) {{}};"
#             )

#             # Optional label
#             if "label" in c:
#                 commands.append(
#                     f"\\node[above] at ({op_id}.north) {{{sanitize_label(c['label'])}}};"
#                 )

#             # Define pins
#             if "pin_plus" in c:
#                 px, py = c["pin_plus"]
#                 commands.append(f"\\coordinate ({op_id}_plus) at ({px},{py});")
#                 commands.append(f"\\draw ({op_id}.+) -- ({op_id}_plus);")

#             if "pin_minus" in c:
#                 mx, my = c["pin_minus"]
#                 commands.append(f"\\coordinate ({op_id}_minus) at ({mx},{my});")
#                 commands.append(f"\\draw ({op_id}.-) -- ({op_id}_minus);")

#             if "pin_out" in c:
#                 ox, oy = c["pin_out"]
#                 commands.append(f"\\coordinate ({op_id}_out) at ({ox},{oy});")
#                 commands.append(f"\\draw ({op_id}.out) -- ({op_id}_out);")

#             continue

#         # ---------- STANDARD COMPONENTS ----------
#         st = resolve_point(c["start"])
#         en = resolve_point(c["end"])
#         label = sanitize_label(c.get("label", ""))

#         commands.append(
#             f"\\draw {st} to[{mapping.get(ctype, 'R')}, l={{{label}}}] {en};"
#         )

#     # ---------- WRITE LATEX ----------
#     temp_tex = "temp.tex"
#     temp_pdf = "temp.pdf"

#     with open(temp_tex, "w", encoding="utf-8") as f:
#         f.write(LATEX_TEMPLATE.format("\n    ".join(commands)))

#     # ---------- COMPILE ----------
#     proc = subprocess.run(
#         ["pdflatex", "-interaction=nonstopmode", temp_tex],
#         stdout=subprocess.PIPE,
#         stderr=subprocess.PIPE,
#         text=True
#     )

#     if proc.returncode != 0 or not os.path.exists(temp_pdf):
#         raise RuntimeError(
#             f"PDF compilation failed.\nSTDOUT:\n{proc.stdout}\nSTDERR:\n{proc.stderr}"
#         )

#     # ---------- PDF → PNG ----------
#     images = convert_from_path(temp_pdf, single_file=True)
#     images[0].save(output_path, "PNG")

#     # ---------- CLEANUP ----------
#     for ext in [".tex", ".pdf", ".aux", ".log"]:
#         if os.path.exists("temp" + ext):
#             os.remove("temp" + ext)

#     print(f"✅ Rendered circuit saved to {output_path}")


# tikz_renderer.py
# Drop-in renderer: JSON circuit spec -> LaTeX (circuitikz) -> PNG
# Fixes:
# - Avoids LaTeX 'standalone' dependency (uses article + geometry)
# - Avoids Python .format() brace collisions by using __BODY__ + .replace()
# - Uses circuitikz labels correctly (l=... not TikZ key /tikz/l)
# - Escapes LaTeX labels safely (keeps node ids clean)
# - Adds basic op-amp support via TikZ node[op amp]

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
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\pagestyle{empty}
\begin{document}
\begin{center}
\begin{circuitikz}[scale=1.2, transform shape]
__BODY__
\end{circuitikz}
\end{center}
\end{document}
"""


def _latex_escape_label(s: str) -> str:
    """Make labels safe for pdfLaTeX + circuitikz (display text only)."""
    if s is None:
        return ""
    s = str(s)

    # Replace Unicode ohm with LaTeX math omega
    s = s.replace("Ω", r"$\Omega$")

    # Escape characters that commonly break LaTeX in labels
    s = s.replace("\\", r"\textbackslash{}")
    s = s.replace("_", r"\_")
    s = s.replace("%", r"\%")
    s = s.replace("&", r"\&")
    s = s.replace("#", r"\#")
    s = s.replace("{", r"\{")
    s = s.replace("}", r"\}")

    # Collapse whitespace
    s = re.sub(r"\s+", " ", s).strip()
    return s


def _safe_node_id(s: str, default: str = "A1") -> str:
    """TikZ node ids must be plain (no spaces, no TeX escapes)."""
    if not s:
        return default
    s = str(s).strip()
    s = re.sub(r"\s+", "_", s)
    s = re.sub(r"[^A-Za-z0-9_:\-]", "_", s)
    if not s:
        return default
    if s[0].isdigit():
        s = "N" + s
    return s


def _pt(xy):
    return f"({xy[0]},{xy[1]})"


def render_tikz(spec: dict, output_path: str):
    """
    Renders a circuitikz diagram from spec into a PNG at output_path.

    On LaTeX failure, keeps a copy of temp files under:
      <output_dir>/_latex_debug/
    """
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

        # -------------------------
        # OP-AMP SUPPORT (node-based)
        # -------------------------
        # Example:
        # {
        #   "type":"opamp",
        #   "pos":[6,5],
        #   "label":"A1",
        #   "show_label": true,
        #   "plus":[3,4],
        #   "minus":[3,6],
        #   "out":[9,5]
        # }
        if ctype == "opamp":
            if "pos" in c and isinstance(c["pos"], (list, tuple)) and len(c["pos"]) == 2:
                x, y = c["pos"]
            elif "start" in c and isinstance(c["start"], (list, tuple)) and len(c["start"]) == 2:
                x, y = c["start"]
            else:
                continue

            node_id = _safe_node_id(c.get("label", ""), default="A1")
            shown_label = _latex_escape_label(c.get("label", node_id))

            commands.append(f"\\node[op amp] ({node_id}) at ({x},{y}) {{}};")

            if c.get("show_label", True):
                commands.append(f"\\node at ({x},{y-0.9}) {{{shown_label}}};")

            if "plus" in c and isinstance(c["plus"], (list, tuple)) and len(c["plus"]) == 2:
                px, py = c["plus"]
                commands.append(f"\\draw ({px},{py}) -- ({node_id}.+);")

            if "minus" in c and isinstance(c["minus"], (list, tuple)) and len(c["minus"]) == 2:
                mx, my = c["minus"]
                commands.append(f"\\draw ({mx},{my}) -- ({node_id}.-);")

            if "out" in c and isinstance(c["out"], (list, tuple)) and len(c["out"]) == 2:
                ox, oy = c["out"]
                commands.append(f"\\draw ({node_id}.out) -- ({ox},{oy});")

            continue

        # -------------------------
        # Everything else uses start/end
        # -------------------------
        if "start" not in c or not isinstance(c["start"], (list, tuple)) or len(c["start"]) != 2:
            continue

        st = _pt(c["start"])

        if ctype == "ground":
            commands.append(f"\\draw {st} node[ground]{{}};")
            continue

        en_coord = c.get("end")
        if not en_coord or not isinstance(en_coord, (list, tuple)) or len(en_coord) != 2:
            continue
        en = _pt(en_coord)

        if ctype == "short":
            commands.append(f"\\draw {st} -- {en};")
            continue

        elem = mapping.get(ctype, "R")
        label = _latex_escape_label(c.get("label", ""))

        # IMPORTANT: circuitikz uses l=... (NOT /tikz/l)
        if label:
            commands.append(f"\\draw {st} to[{elem}, l={{{label}}}] {en};")
        else:
            commands.append(f"\\draw {st} to[{elem}] {en};")

    tex_content = LATEX_TEMPLATE.replace("__BODY__", "\n".join(commands))

    stamp = time.strftime("%Y%m%d_%H%M%S")
    base = f"temp_{stamp}"
    tex_file = base + ".tex"
    pdf_file = base + ".pdf"

    with open(tex_file, "w", encoding="utf-8") as f:
        f.write(tex_content)

    ok = False
    try:
        subprocess.run(
            ["pdflatex", "-interaction=nonstopmode", "-halt-on-error", tex_file],
            check=True,
        )

        images = convert_from_path(pdf_file, single_file=True)
        os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
        images[0].save(output_path, "PNG")
        ok = True

    except subprocess.CalledProcessError as e:
        out_dir = os.path.dirname(output_path) or "."
        debug_dir = os.path.join(out_dir, "_latex_debug")
        os.makedirs(debug_dir, exist_ok=True)

        for ext in [".tex", ".pdf", ".aux", ".log"]:
            src = base + ext
            if os.path.exists(src):
                shutil.copy2(src, os.path.join(debug_dir, src))

        raise e

    finally:
        if ok:
            for ext in [".tex", ".pdf", ".aux", ".log"]:
                p = base + ext
                if os.path.exists(p):
                    os.remove(p)