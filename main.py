# import os, json
# from google import genai
# from config import API_KEY
# from gemini_client import GeminiFileManager
# from processor import AcademicProcessor, ExamProcessor
# from tikz_renderer import render_tikz

# def main():
#     client = genai.Client(api_key=API_KEY)
#     mgr = GeminiFileManager(client)
#     procA = AcademicProcessor(client)
#     procE = ExamProcessor(client)

#     os.makedirs("images", exist_ok=True)
#     json_path = "generated_questions.json"

#     # --- STEP 1: LOAD OR GENERATE QUESTIONS ---
#     if os.path.exists(json_path):
#         print(f"Loading existing questions from {json_path}...")
#         with open(json_path, "r", encoding="utf-8") as f:
#             questions = json.load(f)
#     else:
#         print("No existing questions found. Calling Gemini...")
#         syl = mgr.upload_and_wait("files/syllabus.pdf", "Syllabus", "application/pdf")
#         sol = mgr.upload_and_wait("files/midtermAnswers.pdf", "Solutions", "application/pdf")
        
#         # k_map = procA.extract_knowledge_map(syl)
#         # questions = procE.gen_question(k_map, sol)
        
#         # Save them immediately so we have a record
#         with open(json_path, "w", encoding="utf-8") as f:
#             json.dump(questions, f, indent=2)

#     # --- STEP 2: RENDER IMAGES FROM THE JSON ---
#     for q in questions.get("questions", []):
#         qid = q.get("question_id")
#         img_data = q.get("image")
        
#         if q.get("requires_image") and img_data and img_data.get("type") == "circuit":
#             path = f"images/question_{qid}.png"
            
#             # This is the "Magic" line: only render if the image is missing
#             if not os.path.exists(path):
#                 print(f"Rendering Q{qid} from JSON spec...")
#                 try:
#                     render_tikz(img_data["spec"], path)
#                 except Exception as e:
#                     print(f"Failed to render Q{qid}: {e}")
#             else:
#                 print(f"Image for Q{qid} already exists, skipping render.")

#     print("\nWorkflow Complete! Run 'python app.py' to view the results.")

# if __name__ == "__main__":
#     main()


import os, json
from google import genai
from config import API_KEY
from gemini_client import GeminiFileManager
from processor import AcademicProcessor2, ExamProcessor
from tikz_renderer import render_tikz

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
            procA = AcademicProcessor(client)
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
    main()