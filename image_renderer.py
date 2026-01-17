# # image_renderer.py
# import os
# import matplotlib
# matplotlib.use("Agg") # Required for running on servers/without a display
# import matplotlib.pyplot as plt
# import numpy as np
# from typing import Any, Dict

# def render_image(image_spec: Dict[str, Any], output_path: str) -> str:
#     spec = image_spec.get("spec") or {}
#     img_type = (image_spec.get("type") or "").lower()

#     if img_type == "graph":
#         # 1. Setup Data
#         x_range = spec.get("x_range", [0, 10])
#         x = np.linspace(float(x_range[0]), float(x_range[1]), 1000)
#         func_str = spec.get("function", "np.sin(x)")
        
#         # 2. Safety check & Execute function
#         # We allow numpy functions through a safe eval-like approach
#         try:
#             # Create a safe namespace for the math evaluation
#             safe_dict = {"x": x, "np": np}
#             y = eval(func_str, {"__builtins__": None}, safe_dict)
#         except Exception as e:
#             print(f"Math Error in graph: {e}")
#             y = np.zeros_like(x) # Fallback to flat line

#         # 3. Plotting
#         plt.figure(figsize=(6, 4))
#         plt.plot(x, y, linewidth=2, color='blue')
#         plt.title(spec.get("title", "Signal Analysis"))
#         plt.xlabel(spec.get("x_label", "Time (s)"))
#         plt.ylabel(spec.get("y_label", "Amplitude"))
#         plt.grid(True, linestyle='--', alpha=0.7)
        
#         # Ensure directory exists
#         os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
#         plt.savefig(output_path, dpi=150, bbox_inches='tight')
#         plt.close()
        
#     else:
#         # This keeps the logic clean: circuits go to TikZ, graphs come here
#         raise ValueError(f"Unsupported image type '{img_type}'. Use tikz_renderer for circuits.")
    
#     return os.path.abspath(output_path)

# image_renderer.py
import os
import matplotlib
matplotlib.use("Agg") # Required for running on servers/without a display
import matplotlib.pyplot as plt
import numpy as np
from typing import Any, Dict

def render_image(image_spec: Dict[str, Any], output_path: str) -> str:
    spec = image_spec.get("spec") or {}
    img_type = (image_spec.get("type") or "").lower()

    if img_type == "graph":
        # 1. Setup Data
        x_range = spec.get("x_range", [0, 10])
        x = np.linspace(float(x_range[0]), float(x_range[1]), 1000)
        func_str = spec.get("function", "np.sin(x)")
        
        # 2. Safety check & Execute function
        # We allow numpy functions through a safe eval-like approach
        try:
            # Create a safe namespace for the math evaluation
            safe_dict = {"x": x, "np": np}
            y = eval(func_str, {"__builtins__": None}, safe_dict)
        except Exception as e:
            print(f"Math Error in graph: {e}")
            y = np.zeros_like(x) # Fallback to flat line

        # 3. Plotting
        plt.figure(figsize=(6, 4))
        plt.plot(x, y, linewidth=2, color='blue')
        plt.title(spec.get("title", "Signal Analysis"))
        plt.xlabel(spec.get("x_label", "Time (s)"))
        plt.ylabel(spec.get("y_label", "Amplitude"))
        plt.grid(True, linestyle='--', alpha=0.7)
        
        # Ensure directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        plt.savefig(output_path, dpi=150, bbox_inches='tight')
        plt.close()
        
    else:
        # This keeps the logic clean: circuits go to TikZ, graphs come here
        raise ValueError(f"Unsupported image type '{img_type}'. Use tikz_renderer for circuits.")
    
    return os.path.abspath(output_path)