from google import genai
from gemini_client import GeminiFileManager
from processor import AcademicProcessor
from config import API_KEY

def run_feedback_system():
    client = genai.Client(api_key=API_KEY)

    manager = GeminiFileManager(client=client)
    processor = AcademicProcessor(client=client)

    files_to_upload = {
        "syllabus": "files/syllabus.pdf",
        "solutions": "files/midtermAnswers.pdf",
        "student_exam": "files/midterm.pdf"
    }

    active_files = {}
    for key, path in files_to_upload.items():
        active_files[key] = manager.upload_and_wait(path, key.capitalize(), mime_type="application/pdf")

    print("\n--- [Pass 1] Distilling Syllabus ---")
    knowledge_map = processor.extract_knowledge_map(active_files["syllabus"])
    print("Knowledge Map Created successfully.")

    print("\n--- [Pass 2] Analyzing Midterm Performance ---")
    final_report = processor.grade_midterm(
        knowledge_map,
        active_files["solutions"],
        active_files["student_exam"],
    )

    print("\n" + "=" * 50)
    print("           STUDENT FEEDBACK REPORT")
    print("=" * 50)
    print(final_report)

if __name__ == "__main__":
    run_feedback_system()
