# processor.py
from __future__ import annotations

from typing import Optional, Union
from google import genai

# Uploaded file type varies; we treat it as "object" to avoid tight coupling.
FileOrPath = Union[str, object]


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
