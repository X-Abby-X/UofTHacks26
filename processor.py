# import json
# from google import genai
# from typing import Optional, Union, Any, Dict

# def _strip_code_fences(text: str) -> str:
#     raw = (text or "").strip()
#     if raw.startswith("```"):
#         raw = raw.strip().strip("`").replace("json", "", 1).strip()
#     start = raw.find("{")
#     end = raw.rfind("}")
#     if start != -1 and end != -1 and end > start:
#         raw = raw[start : end + 1]
#     return raw

# class AcademicProcessor:
#     def __init__(self, client): self.client = client
#     def extract_knowledge_map(self, syllabus):
#         prompt = "Extract a Knowledge Map from this syllabus. Return JSON: {'units': [{'unit_title': '...', 'keywords': [...]}]}"
#         resp = self.client.models.generate_content(model="gemini-2.0-flash", contents=[syllabus, prompt])
#         return resp.text

# class ExamProcessor:
#     def __init__(self, client): self.client = client
#     def gen_question(self, knowledge_map, solutions):
#         prompt = f"""
# ACT AS: Electrical Engineering Professor. 
# CONTEXT: {knowledge_map}
# TASK: Generate 6 exam questions with CircuiTikZ schematics.

# STRICT LAYOUT RULES:
# 1. Coordinate Grid: (0,0) to (10,10).
# 2. Standard Component Length: EXACTLY 2 or 4 units (e.g., [0,0] to [0,2]).
# 3. THE RECTANGLE RULE: To make a circuit look real, follow a path:
#    - Path A: [0,0] to [0,4] (Voltage Source)
#    - Path B: [0,4] to [4,4] (Resistor 1)
#    - Path C: [4,4] to [4,0] (Resistor 2)
#    - Path D: [4,0] to [0,0] (Wire/Short)
# 4. DO NOT STACK. Every component must move to a NEW coordinate.
# 5. GROUND: Always attach to [0,0].

# Types: "V", "R", "C", "L", "D", "short", "ground".
# SCHEMA:
# {{ "questions": [ {{ "question_id": 1, "question_text": "...", "requires_image": true, 
#   "image": {{ "type": "circuit", "spec": {{ "components": [ 
#     {{ "type": "V", "label": "12V", "start": [0,0], "end": [0,4] }},
#     {{ "type": "R", "label": "1k", "start": [0,4], "end": [4,4] }},
#     {{ "type": "ground", "start": [0,0] }}
#   ] }} }} }} ] }}
# """
#         resp = self.client.models.generate_content(model="gemini-2.0-flash", contents=[solutions, prompt])
#         return json.loads(_strip_code_fences(resp.text))

import json
from google import genai

def _extract_json(text: str) -> str:
    """
    Extract the outermost JSON object from a Gemini response that may include
    code fences or extra commentary.
    """
    raw = (text or "").strip()

    # Remove triple-backtick fenced blocks if present
    if raw.startswith("```"):
        # drop first fence line
        raw = raw.split("\n", 1)[1] if "\n" in raw else raw
        # drop last fence
        if raw.endswith("```"):
            raw = raw[:-3].strip()

    # Now take the substring from first "{" to last "}"
    start = raw.find("{")
    end = raw.rfind("}")
    if start == -1 or end == -1 or end <= start:
        return raw  # return as-is; caller will error nicely
    return raw[start : end + 1]

def _loads_json_or_debug(text: str, debug_path: str) -> dict:
    """
    Try to parse JSON. On failure, write the raw text to debug_path and raise.
    """
    cleaned = _extract_json(text)
    try:
        return json.loads(cleaned)
    except Exception as e:
        with open(debug_path, "w", encoding="utf-8") as f:
            f.write(text or "")
        raise ValueError(
            f"Gemini returned invalid JSON. Saved raw response to: {debug_path}\n"
            f"Original error: {e}"
        )

class AcademicProcessor:
    def __init__(self, client):
        self.client = client

    def extract_knowledge_map(self, syllabus) -> dict:
        prompt = (
            "Extract a Knowledge Map from this syllabus.\n"
            "Return ONLY valid JSON in this exact schema:\n"
            "{'units': [{'unit_title': '...', 'keywords': ['...']}]}\n"
            "No markdown. No code fences. No extra text."
        )
        resp = self.client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[syllabus, prompt],
        )
        return _loads_json_or_debug(resp.text, debug_path="debug_knowledge_map.txt")

class ExamProcessor:
    def __init__(self, client):
        self.client = client

    def gen_question(self, knowledge_map: dict, solutions) -> dict:
        prompt = f"""
ACT AS: Electrical Engineering Professor.
CONTEXT (Knowledge Map JSON):
{json.dumps(knowledge_map, indent=2)}

TASK: Generate 6 exam questions with CircuiTikZ schematics.

STRICT LAYOUT RULES:
1. Coordinate Grid: (0,0) to (10,10).
2. Standard Component Length: EXACTLY 2 or 4 units (e.g., [0,0] to [0,2]).
3. THE RECTANGLE RULE: To make a circuit look real, follow a path:
   - Path A: [0,0] to [0,4] (Voltage Source)
   - Path B: [0,4] to [4,4] (Resistor 1)
   - Path C: [4,4] to [4,0] (Resistor 2)
   - Path D: [4,0] to [0,0] (Wire/Short)
4. DO NOT STACK. Every component must move to a NEW coordinate.
5. GROUND: Always attach to [0,0].

Allowed component types (exact strings):
"V", "R", "C", "L", "D", "short", "ground"
(Do NOT invent new types.)

Return ONLY valid JSON matching this schema:

{{
  "questions": [
    {{
      "question_id": 1,
      "unit": "...",
      "question_text": "...",
      "requires_image": true,
      "image": {{
        "type": "circuit",
        "spec": {{
          "components": [
            {{ "type": "V", "label": "12V", "start": [0,0], "end": [0,4] }},
            {{ "type": "R", "label": "1k", "start": [0,4], "end": [4,4] }},
            {{ "type": "ground", "start": [0,0] }}
          ]
        }}
      }}
    }}
  ]
}}
"""
        resp = self.client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[solutions, prompt],
        )
        return _loads_json_or_debug(resp.text, debug_path="debug_questions.txt")