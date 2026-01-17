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
                        "question_number": 1,
                        "detected_error": "Sign error in KCL equation at Node A.",
                        "study_tip": "Review KCL conventions; remember that currents leaving the node are typically positive.",
                        "unit_id": "Op-Amps"
                    },
                    {
                        "question_number": 4,
                        "detected_error": "Incorrect diode model used (ideal vs. constant voltage drop).",
                        "study_tip": "Check the problem statement for specific diode parameters before starting your DC analysis.",
                        "unit_id": "Diodes"
                    }
                ],
                "updated_current_grade": 82, # Mocking a scenario where this is the only graded item
                "full_history": updated_milestones,
                "archetype": "Visionary Architect",
                "identity_insight": "You possess a deep grasp of Op-Amp theory, but your 'Visionary' nature leads to minor execution slips in KCL signs."

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