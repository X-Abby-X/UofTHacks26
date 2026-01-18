
from __future__ import annotations
import time
import json
from google import genai
from typing import Optional, Union

FileOrPath = Union[str, object]

# Cooldown in seconds between API calls
DEFAULT_COOLDOWN = 1.5  # adjust depending on your quota

def _extract_json(text: str) -> str:
    raw = (text or "").strip()
    if raw.startswith("```"):
        raw = raw.split("\n", 1)[1] if "\n" in raw else raw
        if raw.endswith("```"):
            raw = raw[:-3].strip()
    start = raw.find("{")
    end = raw.rfind("}")
    if start == -1 or end == -1 or end <= start:
        return raw
    return raw[start : end + 1]

def _loads_json_or_debug(text: str, debug_path: str) -> dict:
    cleaned = _extract_json(text)
    try:
        return json.loads(cleaned)
    except Exception as e:
        with open(debug_path, "w", encoding="utf-8") as f:
            f.write(text or "")
        raise ValueError(f"Gemini returned invalid JSON. Saved raw response to: {debug_path}\nOriginal error: {e}")

# --- AcademicProcessor with cooldown ---
# class AcademicProcessor:
#     def __init__(
#         self,
#         api_key: Optional[str] = None,
#         client: Optional[genai.Client] = None,
#         model_name: str = "gemini-2.0-flash",
#         cooldown: float = DEFAULT_COOLDOWN
#     ):
#         self.client = client or genai.Client(api_key=api_key)
#         self.model_name = model_name
#         self.cooldown = cooldown

#     def _ensure_uploaded(self, file_or_path: FileOrPath):
#         if isinstance(file_or_path, str):
#             return self.client.files.upload(file=file_or_path)
#         return file_or_path

#     def extract_knowledge_map(self, syllabus: FileOrPath) -> str:
#         syllabus_file = self._ensure_uploaded(syllabus)
#         prompt = "..."  # keep your original prompt here
#         resp = self.client.models.generate_content(
#             model=self.model_name,
#             contents=[syllabus_file, prompt],
#         )
#         time.sleep(self.cooldown)
#         return resp.text

#     def grade_midterm(self, knowledge_map: str, solutions: FileOrPath, student: FileOrPath) -> str:
#         solutions_file = self._ensure_uploaded(solutions)
#         student_file = self._ensure_uploaded(student)
#         prompt = """            
#             ACT AS: Academic Curriculum Parser.
#             TASK: Extract a 'Knowledge Map' from the attached Syllabus.

#             RULES:
#             1. Ignore: Grading weights, lab schedules, professor contact info, and late policies.
#             2. Identify: The chronological academic units (e.g., 'Week 1: Op Amp Models', 'Week 4: Diode Characteristics').
#             3. Extract: For each unit, list the primary technical keywords.

#             OUTPUT:
#             Return JSON with this shape:

#             {
#             "units": [
#                 {
#                 "unit_title": "Week 1: ...",
#                 "keywords": ["...", "...", "..."]
#                 }
#             ]
#             }
#             """
#         resp = self.client.models.generate_content(
#             model=self.model_name,
#             contents=[solutions_file, student_file, prompt],
#         )
#         time.sleep(self.cooldown)
#         return resp.text


# --- AcademicProcessor2 with cooldown ---
class AcademicProcessor2:
    def __init__(self, client, cooldown: float = DEFAULT_COOLDOWN):
        self.client = client
        self.cooldown = cooldown

    def extract_knowledge_map(self, syllabus) -> dict:
        prompt = """
            Extract a Knowledge Map from this syllabus.
            Return ONLY valid JSON in this exact schema:
            {"units": [{"unit_title": "...", "keywords": ["..."]}]}
            No markdown. No code fences. No extra text.
        """
        resp = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[syllabus, prompt],
        )
        time.sleep(self.cooldown)
        return _loads_json_or_debug(resp.text, debug_path="debug_knowledge_map.txt")


# --- ExamProcessor with cooldown ---
class ExamProcessor:
    def __init__(self, client, cooldown: float = DEFAULT_COOLDOWN):
        self.client = client
        self.cooldown = cooldown

    def gen_question(self, knowledge_map: dict, solutions) -> dict:
        prompt = f"""
            SYSTEM ROLE:
            You are an Electrical Engineering Professor creating realistic exam questions.

            CONTEXT (Knowledge Map JSON):
            {json.dumps(knowledge_map, indent=2)}

            TASK:
            Generate EXACTLY 6 exam questions.
            Each question MUST include a valid CircuiTikZ-style circuit specification.

            ========================
            HARD RULES (MANDATORY)
            ========================

            OUTPUT RULES:
            - Return ONLY valid JSON.
            - NO explanations.
            - NO markdown.
            - NO comments.
            - DO NOT use \\text or any LaTeX commands with backslashes.
            - All text must be plain or wrapped in valid JSON strings.
            - Only use valid JSON escape sequences: \\", \\\\, \\n, \\t, etc.
            - If any rule is violated, the output is INVALID.
            

            QUESTION RULES:
            1. Each question must have a UNIQUE integer "question_id".
            2. "question_id" MUST be a positive integer.
            3. "requires_image" MUST be true for all questions.

            IMAGE PATH RULE (CRITICAL):
            - "rendered_image_path" MUST follow this EXACT pattern:
            "public\\\\images\\\\question_<question_id>.png"
            - The number in the filename MUST EXACTLY MATCH "question_id".
            - Example:
            If "question_id": 4
            then "rendered_image_path": "public\\\\images\\\\question_4.png"

            ========================
            CIRCUIT LAYOUT RULES
            ========================

            1. Coordinate grid range: (0,0) to (10,10) ONLY.
            2. Component lengths MUST be EXACTLY 2 or 4 units.
            3. DO NOT STACK components.
            Every component must use NEW coordinates.
            4. GROUND must always connect to [0,0].

            RECTANGLE RULE (DEFAULT TO THIS SHAPE):
            - Path A: [0,0] → [0,4]   (Voltage Source)
            - Path B: [0,4] → [4,4]   (Resistor)
            - Path C: [4,4] → [4,0]   (Resistor)
            - Path D: [4,0] → [0,0]   (short)

            ========================
            ALLOWED COMPONENT TYPES
            (EXACT STRINGS ONLY)
            ========================

            "V", "R", "C", "L", "D", "short", "ground", "opamp"

            DO NOT invent new types.
            DO NOT rename types.
            "Op Amps" MUST be written as "opamp".

            ========================
            COMPONENT FORMAT
            ========================

            Voltage Source:
            {{
            "type": "V",
            "label": "...",
            "start": [x,y],
            "end": [x,y]
            }}

            Resistor:
            {{
            "type": "R",
            "label": "...",
            "start": [x,y],
            "end": [x,y]
            }}

            Diode:
            {{
            "type": "D",
            "label": "...",
            "start": [x,y],
            "end": [x,y]
            }}

            Short / Wire:
            {{
            "type": "short",
            "start": [x,y],
            "end": [x,y]
            }}

            Ground:
            {{
            "type": "ground",
            "start": [0,0]
            }}

            Op Amp:
            {{
            "type": "opamp",
            "label": "...",
            "pos": [x,y],
            "plus": [x,y],
            "minus": [x,y],
            "out": [x,y],
            "show_label": true
            }}

            ========================
            FINAL JSON SCHEMA
            ========================

            Return EXACTLY this structure:

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
                    "components": [ ... ]
                    }}
                }},
                "rendered_image_path": "public\\\\images\\\\question_1.png"
                }}
            ]
            }}

            ========================
            VALID EXAMPLE (REFERENCE)
            ========================

            {{
            "questions": [
                {{
                "question_id": 1,
                "unit": "DC Circuits",
                "question_text": "Find the current through the 1kΩ resistor.",
                "requires_image": true,
                "image": {{
                    "type": "circuit",
                    "spec": {{
                    "components": [
                        {{ "type": "V", "label": "12V", "start": [0,0], "end": [0,4] }},
                        {{ "type": "R", "label": "1kΩ", "start": [0,4], "end": [4,4] }},
                        {{ "type": "R", "label": "2kΩ", "start": [4,4], "end": [4,0] }},
                        {{ "type": "short", "start": [4,0], "end": [0,0] }},
                        {{ "type": "ground", "start": [0,0] }}
                    ]
                    }}
                }},
                "rendered_image_path": "public\\\\images\\\\question_1.png"
                }}
            ]
            }}

            """ 
        resp = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[solutions, prompt],
        )
        time.sleep(self.cooldown)
        return _loads_json_or_debug(resp.text, debug_path="debug_questions.txt")




# def _extract_json(text: str) -> str:
#     """
#     Extract the outermost JSON object from a Gemini response that may include
#     code fences or extra commentary.
#     """
#     raw = (text or "").strip()

#     # Remove triple-backtick fenced blocks if present
#     if raw.startswith("```"):
#         # drop first fence line
#         raw = raw.split("\n", 1)[1] if "\n" in raw else raw
#         # drop last fence
#         if raw.endswith("```"):
#             raw = raw[:-3].strip()

#     # Now take the substring from first "{" to last "}"
#     start = raw.find("{")
#     end = raw.rfind("}")
#     if start == -1 or end == -1 or end <= start:
#         return raw  # return as-is; caller will error nicely
#     return raw[start : end + 1]

# def _loads_json_or_debug(text: str, debug_path: str) -> dict:
#     """
#     Try to parse JSON. On failure, write the raw text to debug_path and raise.
#     """
#     cleaned = _extract_json(text)
#     try:
#         return json.loads(cleaned)
#     except Exception as e:
#         with open(debug_path, "w", encoding="utf-8") as f:
#             f.write(text or "")
#         raise ValueError(
#             f"Gemini returned invalid JSON. Saved raw response to: {debug_path}\n"
#             f"Original error: {e}"
#         )
    
# # A
# class AcademicProcessor:
#     def __init__(
#         self,
#         api_key: Optional[str] = None,
#         client: Optional[genai.Client] = None,
#         model_name: str = "gemini-2.0-flash",
#     ):
#         if client is not None:
#             self.client = client
#         else:
#             # genai.Client() will also pick up GEMINI_API_KEY env var if api_key is None. :contentReference[oaicite:1]{index=1}
#             self.client = genai.Client(api_key=api_key)

#         self.model_name = model_name  # model ids like gemini-2.5-flash are valid. :contentReference[oaicite:2]{index=2}

#     def _ensure_uploaded(self, file_or_path: FileOrPath):
#         """Accepts an uploaded file object OR a local filepath string and returns an uploaded file object."""
#         if isinstance(file_or_path, str):
#             # New SDK uses: client.files.upload(file='path/to/file') :contentReference[oaicite:3]{index=3}
#             return self.client.files.upload(file=file_or_path)
#         return file_or_path

#     def extract_knowledge_map(self, syllabus: FileOrPath) -> str:
#         """Pass 1: Normalizes any syllabus into a clean topic list."""
#         syllabus_file = self._ensure_uploaded(syllabus)

#         prompt = """
#             ACT AS: Academic Curriculum Parser.
#             TASK: Extract a 'Knowledge Map' from the attached Syllabus.

#             RULES:
#             1. Ignore: Grading weights, lab schedules, professor contact info, and late policies.
#             2. Identify: The chronological academic units (e.g., 'Week 1: Op Amp Models', 'Week 4: Diode Characteristics').
#             3. Extract: For each unit, list the primary technical keywords.

#             OUTPUT:
#             Return JSON with this shape:

#             {
#             "units": [
#                 {
#                 "unit_title": "Week 1: ...",
#                 "keywords": ["...", "...", "..."]
#                 }
#             ]
#             }
#             """
#         resp = self.client.models.generate_content(
#             model=self.model_name,
#             contents=[syllabus_file, prompt],
#         )
#         return resp.text

#     def grade_midterm(
#         self,
#         knowledge_map: str,
#         solutions: FileOrPath,
#         student: FileOrPath,
#     ) -> str:
#         """Pass 2: The grading engine."""
#         solutions_file = self._ensure_uploaded(solutions)
#         student_file = self._ensure_uploaded(student)

#         prompt = f"""
# ACT AS: Senior Teaching Assistant.

# CONTEXT: You are grading an electronics midterm using this Knowledge Map:
# {knowledge_map}

# INPUTS:
# - 'Solutions Manual': The only source of truth for correct answers.
# - 'Student Midterm': The work you need to evaluate.

# TASK:
# 1. Compare the Student Midterm to the Solutions Manual question-by-question.
# 2. For errors, identify the EXACT line or calculation step where the student deviated.
# 3. Map the error to a Unit from the Knowledge Map.
# 4. Provide a 'Correction' and a 'Study Tip'.

# FORMAT:
# Return a report with sections:
# - Question #
# - Detected Error
# - Course Unit
# - Correction
# - Study Tip
# """
#         resp = self.client.models.generate_content(
#             model=self.model_name,
#             contents=[solutions_file, student_file, prompt],
#         )
#         return resp.text
    
    
# #V
# class AcademicProcessor2:
#     def __init__(self, client):
#         self.client = client

#     def extract_knowledge_map(self, syllabus) -> dict:
#         prompt = (
#             "Extract a Knowledge Map from this syllabus.\n"
#             "Return ONLY valid JSON in this exact schema:\n"
#             "{'units': [{'unit_title': '...', 'keywords': ['...']}]}\n"
#             "No markdown. No code fences. No extra text."
#         )
#         resp = self.client.models.generate_content(
#             model="gemini-2.0-flash",
#             contents=[syllabus, prompt],
#         )
#         return _loads_json_or_debug(resp.text, debug_path="debug_knowledge_map.txt")

# class ExamProcessor:
#     def __init__(self, client):
#         self.client = client

#     def gen_question(self, knowledge_map: dict, solutions) -> dict:
#         prompt = f"""
#             SYSTEM ROLE:
#             You are an Electrical Engineering Professor creating realistic exam questions.

#             CONTEXT (Knowledge Map JSON):
#             {json.dumps(knowledge_map, indent=2)}

#             TASK:
#             Generate EXACTLY 6 exam questions.
#             Each question MUST include a valid CircuiTikZ-style circuit specification.

#             ========================
#             HARD RULES (MANDATORY)
#             ========================

#             OUTPUT RULES:
#             - Return ONLY valid JSON.
#             - NO explanations.
#             - NO markdown.
#             - NO comments.
#             - If any rule is violated, the output is INVALID.

#             QUESTION RULES:
#             1. Each question must have a UNIQUE integer "question_id".
#             2. "question_id" MUST be a positive integer.
#             3. "requires_image" MUST be true for all questions.

#             IMAGE PATH RULE (CRITICAL):
#             - "rendered_image_path" MUST follow this EXACT pattern:
#             "public\\\\images\\\\question_<question_id>.png"
#             - The number in the filename MUST EXACTLY MATCH "question_id".
#             - Example:
#             If "question_id": 4
#             then "rendered_image_path": "public\\\\images\\\\question_4.png"

#             ========================
#             CIRCUIT LAYOUT RULES
#             ========================

#             1. Coordinate grid range: (0,0) to (10,10) ONLY.
#             2. Component lengths MUST be EXACTLY 2 or 4 units.
#             3. DO NOT STACK components.
#             Every component must use NEW coordinates.
#             4. GROUND must always connect to [0,0].

#             RECTANGLE RULE (DEFAULT TO THIS SHAPE):
#             - Path A: [0,0] → [0,4]   (Voltage Source)
#             - Path B: [0,4] → [4,4]   (Resistor)
#             - Path C: [4,4] → [4,0]   (Resistor)
#             - Path D: [4,0] → [0,0]   (short)

#             ========================
#             ALLOWED COMPONENT TYPES
#             (EXACT STRINGS ONLY)
#             ========================

#             "V", "R", "C", "L", "D", "short", "ground", "opamp"

#             DO NOT invent new types.
#             DO NOT rename types.
#             "Op Amps" MUST be written as "opamp".

#             ========================
#             COMPONENT FORMAT
#             ========================

#             Voltage Source:
#             {{
#             "type": "V",
#             "label": "...",
#             "start": [x,y],
#             "end": [x,y]
#             }}

#             Resistor:
#             {{
#             "type": "R",
#             "label": "...",
#             "start": [x,y],
#             "end": [x,y]
#             }}

#             Diode:
#             {{
#             "type": "D",
#             "label": "...",
#             "start": [x,y],
#             "end": [x,y]
#             }}

#             Short / Wire:
#             {{
#             "type": "short",
#             "start": [x,y],
#             "end": [x,y]
#             }}

#             Ground:
#             {{
#             "type": "ground",
#             "start": [0,0]
#             }}

#             Op Amp:
#             {{
#             "type": "opamp",
#             "label": "...",
#             "pos": [x,y],
#             "plus": [x,y],
#             "minus": [x,y],
#             "out": [x,y],
#             "show_label": true
#             }}

#             ========================
#             FINAL JSON SCHEMA
#             ========================

#             Return EXACTLY this structure:

#             {{
#             "questions": [
#                 {{
#                 "question_id": 1,
#                 "unit": "...",
#                 "question_text": "...",
#                 "requires_image": true,
#                 "image": {{
#                     "type": "circuit",
#                     "spec": {{
#                     "components": [ ... ]
#                     }}
#                 }},
#                 "rendered_image_path": "public\\\\images\\\\question_1.png"
#                 }}
#             ]
#             }}

#             ========================
#             VALID EXAMPLE (REFERENCE)
#             ========================

#             {{
#             "questions": [
#                 {{
#                 "question_id": 1,
#                 "unit": "DC Circuits",
#                 "question_text": "Find the current through the 1kΩ resistor.",
#                 "requires_image": true,
#                 "image": {{
#                     "type": "circuit",
#                     "spec": {{
#                     "components": [
#                         {{ "type": "V", "label": "12V", "start": [0,0], "end": [0,4] }},
#                         {{ "type": "R", "label": "1kΩ", "start": [0,4], "end": [4,4] }},
#                         {{ "type": "R", "label": "2kΩ", "start": [4,4], "end": [4,0] }},
#                         {{ "type": "short", "start": [4,0], "end": [0,0] }},
#                         {{ "type": "ground", "start": [0,0] }}
#                     ]
#                     }}
#                 }},
#                 "rendered_image_path": "public\\\\images\\\\question_1.png"
#                 }}
#             ]
#             }}

#             NOW GENERATE 6 QUESTIONS.
#             """

#         resp = self.client.models.generate_content(
#             model="gemini-2.0-flash",
#             contents=[solutions, prompt],
#         )
#         return _loads_json_or_debug(resp.text, debug_path="debug_questions.txt")
    



#     # def gen_question(self, knowledge_map: dict, solutions) -> dict:
#     #     prompt = f"""
#     #     ACT AS: Electrical Engineering Professor.
#     #     CONTEXT (Knowledge Map JSON):
#     #     {json.dumps(knowledge_map, indent=2)}

#     #     TASK: Generate 6 exam questions with CircuiTikZ schematics.

#     #     STRICT LAYOUT RULES:
#     #     1. Coordinate Grid: (0,0) to (10,10).
#     #     2. Standard Component Length: EXACTLY 2 or 4 units (e.g., [0,0] to [0,2]).
#     #     3. THE RECTANGLE RULE: To make a circuit look real, follow a path:
#     #     - Path A: [0,0] to [0,4] (Voltage Source)
#     #     - Path B: [0,4] to [4,4] (Resistor 1)
#     #     - Path C: [4,4] to [4,0] (Resistor 2)
#     #     - Path D: [4,0] to [0,0] (Wire/Short)
#     #     4. DO NOT STACK. Every component must move to a NEW coordinate.
#     #     5. GROUND: Always attach to [0,0].

#     #     Allowed component types (exact strings):
#     #     "V", "R", "C", "L", "D", "short", "ground", "Op Amps"
#     #     (Do NOT invent new types.)

#     #     Within the components section, here are the format for different component
        
#     #     For V
#     #     {{
#     #         "type": "V",
#     #         "label": "...",
#     #         "start": [0,0],
#     #         "end": [0,0]
#     #     }}

#     #     For R
#     #     {{
#     #         "type": "R",
#     #         "label": "...",
#     #         "start": [0,0],
#     #         "end": [0,0]
#     #     }}

#     #     For D
#     #     {{
#     #         "type": "D",
#     #         "label": "...",
#     #         "start": [0,0],
#     #         "end": [0,0]
#     #     }}

#     #     For short
#     #     {{
#     #         "type": "short",
#     #         "start": [0,0],
#     #         "end": [0,0]
#     #     }}

#     #     For ground
#     #     {{
#     #         "type": "ground",
#     #         "start": [0,0]
#     #     }}

#     #     For Op Amps
#     #     {{
#     #         "type": "opamp",
#     #         "label": "...",
#     #         "pos": [0,0],
#     #         "plus": [0,0],
#     #         "minus": [0,0],
#     #         "out": [0,0],
#     #         "show_label": true
#     #     }}

#     #     Return ONLY valid JSON matching this schema:
#     #     {{
#     #         "question_id": 1,
#     #         "unit": "...",
#     #         "question_text": "...",
#     #         "requires_image": true,
#     #         "image": {{
#     #             "type": "circuit",
#     #             "spec": {{
#     #                 "components": [
#     #                     {{
#     #                         "mention below"
#     #                     }}
#     #                 ]
#     #             }}
#     #         }},
#     #         "rendered_image_path": "public\\images\\question_qestion_id.png"
#     #     }}

       
#     #     """