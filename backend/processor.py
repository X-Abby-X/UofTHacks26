from __future__ import annotations
from typing import Optional, Union, List, Dict, Any
from google import genai
from config import DEV_MODE
import json

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
        
        prompt = """
        TASK: Identify every assessment category and its TOTAL weight (%) from the syllabus.
        STRICT RULES:
        1. Capture: Midterm, Quizzes, Labs, Homework, and Final Exam.
        2. Combine multi-part items: '5 Labs, 2% each' must be returned as a single item 'Labs' with weight 10.
        
        OUTPUT FORMAT (JSON):
        {
          "milestones": [
            { "name": "Midterm", "weight": 25, "date": "2025-10-23" },
            { "name": "Quizzes", "weight": 10, "date": "Multiple" }
          ]
        }
        """
        response = self.client.models.generate_content(
            model=self.model_name,
            contents=[syllabus_url, prompt],
            config={'response_mime_type': 'application/json'}
        )
        return json.loads(response.text)

    # backend/processor.py
    def analyze_and_deduce_grade(
        self, 
        submission_url: str, 
        existing_milestones: List[Dict[str, Any]],
        course_id: str # This now receives course.name from actions.ts
    ) -> Dict[str, Any]:
        
        if DEV_MODE:
            cid = course_id.lower()
            print(f">>> [DEV MODE] Logic switch based on name: {cid}")
            
            if "mat291" in cid:
                target_score = 87.5
                target_milestone = "Quizzes"
                analysis_report = [
                    {
                        "question_number": 1,
                        "detected_error": "Calculation error in Divergence Theorem computation; final numerical solution mismatch.",
                        "study_tip": "Review the final computation steps for Volume integrals. While you correctly identified that the divergence of F is 3 and successfully argued the relationship between the volume and the boundary integral, ensure the final evaluation remains consistent with the divergence constant.",
                        "unit_id": "Vector Calculus: Divergence Theorem" 
                    },
                    {
                        "question_number": 2,
                        "detected_error": "Incorrect evaluation of circulation along closed contours C and L; improper surface selection for Stokes' Theorem.",
                        "study_tip": "Focus on identifying valid surfaces S that do not pass through singularities. You correctly noted that the curl is not defined on the z-axis, but points were lost on the final evaluation of circulation along C and L. Practice direct parametrization for non-simply connected domains.",
                        "unit_id": "Vector Calculus: Stokes' Theorem & Circulation"
                    },
                    {
                        "question_number": 3,
                        "detected_error": "None identified. Full marks awarded for correct cylindrical transformation and observation point analysis.", 
                        "study_tip": "Excellent execution on the transformation matrix application and the translation to the localized reference point. Continue using this structured step-by-step approach—translating to Cartesian before Cylindrical—to ensure precision in multi-step field problems.", 
                        "unit_id": "Coordinate Transformations: Spherical & Cylindrical" 
                    }
                ]
                insight = "You demonstrate elite proficiency in coordinate transformations and spatial reasoning. Your 'Visionary' nature allowed you to navigate the complex shift from spherical to cylindrical flawlessly, though smaller computational details in standard vector theorems currently prevent full system resonance."
            
            else: # Default to ECE231
                target_score = 90.3 
                target_milestone = "Midterm"
                analysis_report = [
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
                
                insight = "Your conceptual grasp of complex multi-diode circuits is elite, but your 'Visionary' nature leads to minor execution slips in unit scaling (A vs mA) and time-domain signal expressions."

            # Update only the target milestone
            updated_milestones = []
            for m in existing_milestones:
                new_m = m.copy()
                if m['name'].lower() == target_milestone.lower():
                    new_m['score'] = target_score
                updated_milestones.append(new_m)

            return {
                "analysis_report": analysis_report,
                "updated_current_grade": target_score,
                "full_history": updated_milestones,
                "archetype": "Visionary Architect",
                "identity_insight": insight
            }