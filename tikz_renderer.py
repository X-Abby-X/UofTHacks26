import os
import subprocess
from pdf2image import convert_from_path

LATEX_TEMPLATE = r"""
\documentclass{{standalone}}
\usepackage[siunitx, american]{{circuitikz}}
\begin{{document}}
\begin{{circuitikz}}[scale=1.2, transform shape]
{}
\end{{circuitikz}}
\end{{document}}
"""


def sanitize_label(label: str) -> str:
    """
    Replace Unicode symbols with LaTeX commands and wrap in math mode.
    """
    if not label:
        return ""
    label = label.replace("Ω", r"\Omega")
    return f"${label}$"


def resolve_point(p):
    """
    Accepts either:
    - [x, y]
    - string node name (e.g. "U1_out")
    """
    if isinstance(p, str):
        return p
    return f"({p[0]},{p[1]})"


def render_tikz(spec: dict, output_path: str):
    mapping = {
        "V": "V",
        "R": "R",
        "C": "C",
        "L": "L",
        "D": "D",
        "short": "short"
    }

    commands = []
    opamp_count = 0

    for c in spec.get("components", []):
        ctype = c.get("type", "R")

        # ---------- GROUND ----------
        if ctype == "ground":
            st = resolve_point(c["start"])
            commands.append(f"\\draw {st} node[ground]{{}};")
            continue

        # ---------- SHORT / WIRE ----------
        if ctype == "short":
            st = resolve_point(c["start"])
            en = resolve_point(c["end"])
            commands.append(f"\\draw {st} -- {en};")
            continue


        # ---------- OP AMP ----------
        if ctype == "opamp":
            opamp_count += 1
            op_id = f"U{opamp_count}"

            x, y = c["start"]

            # Draw op-amp body
            commands.append(
                f"\\node[op amp] ({op_id}) at ({x},{y}) {{}};"
            )

            # Optional label
            if "label" in c:
                commands.append(
                    f"\\node[above] at ({op_id}.north) {{{sanitize_label(c['label'])}}};"
                )

            # Define pins
            if "pin_plus" in c:
                px, py = c["pin_plus"]
                commands.append(f"\\coordinate ({op_id}_plus) at ({px},{py});")
                commands.append(f"\\draw ({op_id}.+) -- ({op_id}_plus);")

            if "pin_minus" in c:
                mx, my = c["pin_minus"]
                commands.append(f"\\coordinate ({op_id}_minus) at ({mx},{my});")
                commands.append(f"\\draw ({op_id}.-) -- ({op_id}_minus);")

            if "pin_out" in c:
                ox, oy = c["pin_out"]
                commands.append(f"\\coordinate ({op_id}_out) at ({ox},{oy});")
                commands.append(f"\\draw ({op_id}.out) -- ({op_id}_out);")

            continue

        # ---------- STANDARD COMPONENTS ----------
        st = resolve_point(c["start"])
        en = resolve_point(c["end"])
        label = sanitize_label(c.get("label", ""))

        commands.append(
            f"\\draw {st} to[{mapping.get(ctype, 'R')}, l={{{label}}}] {en};"
        )

    # ---------- WRITE LATEX ----------
    temp_tex = "temp.tex"
    temp_pdf = "temp.pdf"

    with open(temp_tex, "w", encoding="utf-8") as f:
        f.write(LATEX_TEMPLATE.format("\n    ".join(commands)))

    # ---------- COMPILE ----------
    proc = subprocess.run(
        ["pdflatex", "-interaction=nonstopmode", temp_tex],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    if proc.returncode != 0 or not os.path.exists(temp_pdf):
        raise RuntimeError(
            f"PDF compilation failed.\nSTDOUT:\n{proc.stdout}\nSTDERR:\n{proc.stderr}"
        )

    # ---------- PDF → PNG ----------
    images = convert_from_path(temp_pdf, single_file=True)
    images[0].save(output_path, "PNG")

    # ---------- CLEANUP ----------
    for ext in [".tex", ".pdf", ".aux", ".log"]:
        if os.path.exists("temp" + ext):
            os.remove("temp" + ext)

    print(f"✅ Rendered circuit saved to {output_path}")
