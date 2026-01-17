import os, subprocess, shutil
from pdf2image import convert_from_path

LATEX_TEMPLATE = r"""
\documentclass[margin=10pt]{standalone}
\usepackage[american]{circuitikz}
\begin{document}
\begin{circuitikz}[scale=1.2, transform shape]
    %s
\end{circuitikz}
\end{document}
"""

def render_tikz(spec, output_path):
    mapping = {"V": "V", "R": "R", "C": "C", "L": "L", "D": "D", "short": "short", "ground": "node[ground]{}"}
    commands = []
    
    for c in spec.get("components", []):
        st = f"({c['start'][0]},{c['start'][1]})"
        ctype = c.get("type", "R")
        if ctype == "ground":
            commands.append(f"\\draw {st} {mapping['ground']};")
            continue
        
        en_coord = c.get("end")
        if not en_coord: continue
        en = f"({en_coord[0]},{en_coord[1]})"
        
        if ctype == "short":
            commands.append(f"\\draw {st} -- {en};")
        else:
            commands.append(f"\\draw {st} to[{mapping.get(ctype,'R')}, l={c.get('label','')}] {en};")

    with open("temp.tex", "w", encoding="utf-8") as f:
        f.write(LATEX_TEMPLATE % "\n    ".join(commands))

    try:
        subprocess.run(["pdflatex", "-interaction=nonstopmode", "temp.tex"], check=True)
        images = convert_from_path("temp.pdf", single_file=True)
        images[0].save(output_path, "PNG")
    finally:
        for ext in [".tex", ".pdf", ".aux", ".log"]:
            if os.path.exists("temp"+ext): os.remove("temp"+ext)