import os, json
from google import genai

from gemini_client import GeminiFileManager
from processor import AcademicProcessor, AcademicProcessor2, ExamProcessor
from tikz_renderer import render_tikz



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


def load_questions(json_path: str):
    if not os.path.exists(json_path):
        return None
    with open(json_path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_questions(json_path: str, questions: dict):
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(questions, f, indent=2)

def main():
    os.makedirs("images", exist_ok=True)
    json_path = "generated_questions.json"

    # ===== STEP 1: PRIMARY = LOAD JSON =====
    questions = load_questions(json_path)
    if questions is not None:
        print(f"Loaded existing questions from {json_path}.")
    else:
        # ===== FALLBACK = CALL GEMINI =====
        print(f"No {json_path} found. Falling back to Gemini...")

        try:
            client = genai.Client(api_key=API_KEY)
            mgr = GeminiFileManager(client)
            procA = AcademicProcessor2(client)
            procE = ExamProcessor(client)

            syl = mgr.upload_and_wait("files/syllabus.pdf", "Syllabus", "application/pdf")
            sol = mgr.upload_and_wait("files/midtermAnswers.pdf", "Solutions", "application/pdf")

            k_map = procA.extract_knowledge_map(syl)
            questions = procE.gen_question(k_map, sol)

            save_questions(json_path, questions)
            print(f"Saved generated questions to {json_path}.")

        except Exception as e:
            print("\nGemini fallback FAILED. Here is the error:\n")
            print(e)
            print("\nNothing to do because JSON was missing and Gemini failed. Exiting.")
            return

    # ===== STEP 2: RENDER IMAGES FROM JSON =====
    for q in questions.get("questions", []):
        qid = q.get("question_id")
        img_data = q.get("image")

        if q.get("requires_image") and img_data and img_data.get("type") == "circuit":
            path = f"images/question_{qid}.png"

            if not os.path.exists(path):
                print(f"Rendering Q{qid} from JSON spec...")
                try:
                    render_tikz(img_data["spec"], path)
                except Exception as e:
                    print(f"Failed to render Q{qid}: {e}")
            else:
                print(f"Image for Q{qid} already exists, skipping render.")

    print("\nWorkflow Complete! Run 'python app.py' to view the results.")

if __name__ == "__main__":
    run_feedback_system()
    main()
