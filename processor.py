import json
from google import genai
from typing import Optional, Union, Any, Dict

def _strip_code_fences(text: str) -> str:
    raw = (text or "").strip()
    if raw.startswith("```"):
        raw = raw.strip().strip("`").replace("json", "", 1).strip()
    start = raw.find("{")
    end = raw.rfind("}")
    if start != -1 and end != -1 and end > start:
        raw = raw[start : end + 1]
    return raw

class AcademicProcessor:
    def __init__(self, client): self.client = client
    def extract_knowledge_map(self, syllabus):
        prompt = "Extract a Knowledge Map from this syllabus. Return JSON: {'units': [{'unit_title': '...', 'keywords': [...]}]}"
        resp = self.client.models.generate_content(model="gemini-2.0-flash", contents=[syllabus, prompt])
        return resp.text

class ExamProcessor:
    def __init__(self, client): self.client = client
    def gen_question(self, knowledge_map, solutions):
        prompt = f"""
ACT AS: Electrical Engineering Professor. 
CONTEXT: {knowledge_map}
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

Types: "V", "R", "C", "L", "D", "short", "ground".
SCHEMA:
{{ "questions": [ {{ "question_id": 1, "question_text": "...", "requires_image": true, 
  "image": {{ "type": "circuit", "spec": {{ "components": [ 
    {{ "type": "V", "label": "12V", "start": [0,0], "end": [0,4] }},
    {{ "type": "R", "label": "1k", "start": [0,4], "end": [4,4] }},
    {{ "type": "ground", "start": [0,0] }}
  ] }} }} }} ] }}
"""
        resp = self.client.models.generate_content(model="gemini-2.0-flash", contents=[solutions, prompt])
        return json.loads(_strip_code_fences(resp.text))