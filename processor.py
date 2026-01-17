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
from __future__ import annotations
import json
from google import genai
from typing import Optional, Union

# Uploaded file type varies; we treat it as "object" to avoid tight coupling.
FileOrPath = Union[str, object]



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
    
# A
class AcademicProcessor:
    def __init__(
        self,
        api_key: Optional[str] = None,
        client: Optional[genai.Client] = None,
        model_name: str = "gemini-2.5-flash",
    ):
        if client is not None:
            self.client = client
        else:
            # genai.Client() will also pick up GEMINI_API_KEY env var if api_key is None. :contentReference[oaicite:1]{index=1}
            self.client = genai.Client(api_key=api_key)

        self.model_name = model_name  # model ids like gemini-2.5-flash are valid. :contentReference[oaicite:2]{index=2}

    def _ensure_uploaded(self, file_or_path: FileOrPath):
        """Accepts an uploaded file object OR a local filepath string and returns an uploaded file object."""
        if isinstance(file_or_path, str):
            # New SDK uses: client.files.upload(file='path/to/file') :contentReference[oaicite:3]{index=3}
            return self.client.files.upload(file=file_or_path)
        return file_or_path

    def extract_knowledge_map(self, syllabus: FileOrPath) -> str:
        """Pass 1: Normalizes any syllabus into a clean topic list."""
        syllabus_file = self._ensure_uploaded(syllabus)

        prompt = """
ACT AS: Academic Curriculum Parser.
TASK: Extract a 'Knowledge Map' from the attached Syllabus.

RULES:
1. Ignore: Grading weights, lab schedules, professor contact info, and late policies.
2. Identify: The chronological academic units (e.g., 'Week 1: Op Amp Models', 'Week 4: Diode Characteristics').
3. Extract: For each unit, list the primary technical keywords.

OUTPUT:
Return JSON with this shape:

{
  "units": [
    {
      "unit_title": "Week 1: ...",
      "keywords": ["...", "...", "..."]
    }
  ]
}
"""
        resp = self.client.models.generate_content(
            model=self.model_name,
            contents=[syllabus_file, prompt],
        )
        return resp.text

    def grade_midterm(
        self,
        knowledge_map: str,
        solutions: FileOrPath,
        student: FileOrPath,
    ) -> str:
        """Pass 2: The grading engine."""
        solutions_file = self._ensure_uploaded(solutions)
        student_file = self._ensure_uploaded(student)

        prompt = f"""
ACT AS: Senior Teaching Assistant.

CONTEXT: You are grading an electronics midterm using this Knowledge Map:
{knowledge_map}

INPUTS:
- 'Solutions Manual': The only source of truth for correct answers.
- 'Student Midterm': The work you need to evaluate.

TASK:
1. Compare the Student Midterm to the Solutions Manual question-by-question.
2. For errors, identify the EXACT line or calculation step where the student deviated.
3. Map the error to a Unit from the Knowledge Map.
4. Provide a 'Correction' and a 'Study Tip'.

FORMAT:
Return a report with sections:
- Question #
- Detected Error
- Course Unit
- Correction
- Study Tip
"""
        resp = self.client.models.generate_content(
            model=self.model_name,
            contents=[solutions_file, student_file, prompt],
        )
        return resp.text
    
    
#V
class AcademicProcessor2:
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