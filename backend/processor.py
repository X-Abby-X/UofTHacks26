from __future__ import annotations
from typing import Optional, Union, List, Dict, Any
from google import genai
from config import DEV_MODE
import json

# Type alias for clarity
FileOrUrl = Union[str, Any]

class AcademicProcessor:
    def __init__(
        self,
        api_key: Optional[str] = None,
        client: Optional[genai.Client] = None,
        model_name: str = "gemini-2.0-flash",
    ):
        self.client = client or genai.Client(api_key=api_key)
        self.model_name = model_name
        
    def process_syllabus(self, syllabus_url: str) -> Dict[str, Any]:
        if DEV_MODE:
            print(">>> [DEV MODE] Returning Mock ECE231 Syllabus Data")
            return {
                "milestones": [
                    { "name": "Midterm", "weight": 25, "date": "2025-10-23" },
                    { "name": "Quizzes", "weight": 10, "date": "Multiple" },
                    { "name": "Labs", "weight": 10, "date": "Weekly" },
                    { "name": "Homework", "weight": 5, "date": "Weekly" },
                    { "name": "Final Exam", "weight": 50, "date": "Final Period" }
                ]
            }
        """
        ACT AS: Academic Auditor.
        TASK: Extract the full 'Marking Scheme' from the ECE231 syllabus.
        """
        prompt = """
        TASK: Identify every assessment category and its TOTAL weight (%) from the syllabus.
        
        STRICT RULES:
        1. Capture: Midterm, Quizzes, Labs, Homework, and Final Exam.
        2. Combine multi-part items: '5 Labs, 2% each' must be returned as a single item 'Labs' with weight 10.
        3. Do not include 'Bonus' marks in the 100% total unless explicitly listed.
        
        OUTPUT FORMAT (JSON):
        {
          "milestones": [
            { "name": "Midterm", "weight": 25, "date": "2025-10-23" },
            { "name": "Quizzes", "weight": 10, "date": "Multiple" },
            { "name": "Labs", "weight": 10, "date": "Weekly" },
            { "name": "Homework", "weight": 5, "date": "Weekly" },
            { "name": "Final Exam", "weight": 50, "date": "Final Period" }
          ]
        }
        """
        # Gemini 2.0 can process public URLs directly as a content part
        response = self.client.models.generate_content(
            model=self.model_name,
            contents=[syllabus_url, prompt],
            config={'response_mime_type': 'application/json'}
        )
        return json.loads(response.text)

    def analyze_and_deduce_grade(
        self, 
        submission_url: str, 
        existing_milestones: List[Dict[str, Any]]
    ) -> Dict[str, Any]:
        if DEV_MODE:
            print(">>> [DEV MODE] Returning Dummy Midterm Analysis")
            
            # Logic: Find the 'Midterm' milestone to update its score
            updated_milestones = []
            for m in existing_milestones:
                new_m = m.copy()
                if m['name'] == 'Midterm':
                    new_m['score'] = 82  # Simulate a scored midterm
                updated_milestones.append(new_m)

            return {
                "analysis_report": [
                    {
                        "question_number": 2,
                        "detected_error": "Incorrect small-signal output voltage expression; output does not match the 1.032 gain factor calculated.",
                        "study_tip": "Re-evaluate the superposition of DC and AC signals. While your small-signal resistance (621.23 Ω) was correct, ensure the final time-domain expression accurately reflects the amplified sine wave component.",
                        "unit_id": "Diodes & Small-Signal Models"
                    },
                    {
                        "question_number": 3,
                        "detected_error": "Inaccurate waveform sketching for vR2; failed to correctly identify clipping or conduction intervals for the 5V offset.",
                        "study_tip": "Review diode conduction states when a DC bias (5V) is present. Practice sketching piecewise waveforms by determining the exact 'turn-on' time when vin(t) exceeds the bias voltage.",
                        "unit_id": "Diode Waveform Analysis"
                    },
                    {
                        "question_number": 6,
                        "detected_error": "Calculation error in maximum load current; identified as 1.4A instead of 1.4mA based on the 15kΩ series resistor.",
                        "study_tip": "Double-check unit scaling when working with kilo-ohms (kΩ). A 21V drop across 15kΩ results in milliamperes (mA), not amperes (A). Unit consistency is vital for Zener regulator power ratings.",
                        "unit_id": "Zener Regulators"
                    }
                ],
                "updated_current_grade": 90.3,
                "full_history": updated_milestones,
                "archetype": "Visionary Architect",
                "identity_insight": "Your conceptual grasp of complex multi-diode circuits is elite, but your 'Visionary' nature leads to minor execution slips in unit scaling (A vs mA) and time-domain signal expressions."
            }
        """
        Analyzes a student exam/lab PDF, updates their score for that milestone,
        and calculates the new overall course average.
        """
        milestones_json = json.dumps(existing_milestones)

        prompt = f"""
        ACT AS: Academic Auditor & Grade Prophet.
        CONTEXT: The course has the following initialized milestones: {milestones_json}

        TASK:
        1. Grade the attached student submission (PDF) out of 100.
        2. Identify which milestone this belongs to (e.g., if it's a Midterm, find the "Midterm" milestone).
        3. CALCULATE the new overall course grade using the weighted average formula.
        
        WEIGHTED FORMULA: 
        Current Grade = (Sum of all [Score * Weight]) / (Sum of all Weights currently completed)

        OUTPUT FORMAT (JSON):
        {{
          "analysis_report": [
            {{ "question_number": 1, "detected_error": "...", "study_tip": "...", "unit_id": "..." }}
          ],
          "updated_current_grade": 82,
          "full_history": [
             {{ "name": "Midterm", "weight": 25, "score": 85, "date": "2025-10-23" }},
             ... (all other milestones preserved)
          ]
        }}
        """
        response = self.client.models.generate_content(
            model=self.model_name,
            contents=[submission_url, prompt],
            config={'response_mime_type': 'application/json'}
        )
        return json.loads(response.text)