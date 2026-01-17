import os
import json
from google import genai
from supabase import create_client, Client
from gemini_client import GeminiFileManager
from processor import AcademicProcessor
from config import API_KEY, SUPABASE_URL, SUPABASE_KEY

# Initialize Supabase
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def run_feedback_system(course_id: str, submission_id: str):
    """
    course_id: The UUID of the course
    submission_id: The UUID of the new submission
    """
    client = genai.Client(api_key=API_KEY)
    manager = GeminiFileManager(client=client)
    processor = AcademicProcessor(client=client)

    # 1. Fetch current Course context from Supabase
    # We need existing milestones to calculate the new weighted average
    course_response = supabase.table("courses").select("milestones, current_grade").eq("id", course_id).single().execute()
    course_data = course_response.data
    existing_milestones = course_data.get("milestones") or []

    # 2. Upload the new student submission
    # In a production flow, you'd pull these from Supabase Storage
    student_exam_path = "files/midterm.pdf"
    student_exam_file = manager.upload_and_wait(student_exam_path, "StudentExam", mime_type="application/pdf")

    print(f"\n--- Analyzing Submission & Deducing Grade for Course: {course_id} ---")
    
    # 3. Use the new Processor method for Analysis + Grade Deduction
    # This replaces 'grade_midterm' and 'extract_knowledge_map'
    audit_results = processor.analyze_and_deduce_grade(
        student_submission=student_exam_file,
        existing_milestones=existing_milestones
    )

    # 4. Atomic Update: Update both the Course (Global) and the Submission (Specific)
    try:
        # Update Course with new overall grade and appended milestones
        supabase.table("courses").update({
            "current_grade": audit_results["updated_current_grade"],
            "milestones": audit_results["full_history"]
        }).eq("id", course_id).execute()

        # Update Submission with the specific error report
        supabase.table("submissions").update({
            "analysis_report": audit_results["analysis_report"]
        }).eq("id", submission_id).execute()
        
        print(f"Successfully updated! New Course Grade: {audit_results['updated_current_grade']}%")
        print("Analysis report saved to submission record.")

    except Exception as e:
        print(f"Failed to update Supabase: {e}")

if __name__ == "__main__":
    # Test IDs from your Drizzle Studio
    TEST_COURSE_ID = "64e46166-25a6-4f3f-b2f4-2c9f79af4f4f"
    TEST_SUBMISSION_ID = "fa4e9211-4695-40eb-ac2d-1027e2590a8b"
    
    run_feedback_system(TEST_COURSE_ID, TEST_SUBMISSION_ID)