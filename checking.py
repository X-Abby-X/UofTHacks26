# # check_gemini_key_fixed.py
# from google import genai
# from config import API_KEY

# def main():
#     try:
#         client = genai.Client(api_key=API_KEY)
#         # List all available models
#         models = client.models.list()
#         if not models:
#             print("No models available. Your API key may not have access yet.")
#         else:
#             print("API Key is valid! Available models:")
#             for m in models:
#                 # Access attributes, not dictionary keys
#                 print(f"- {m.name}: {getattr(m, 'description', 'No description')}")
#     except Exception as e:
#         print("API key check failed:")
#         print(e)

# if __name__ == "__main__":
#     main()

# test_gen.py
from google import genai
from config import API_KEY

def main():
    client = genai.Client(api_key=API_KEY)
    prompt = "Write a short sentence introducing yourself as an AI professor."

    try:
        resp = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[prompt]
        )
        print("Generation succeeded! Here's the output:\n")
        print(resp.text)
    except Exception as e:
        print("Generation failed:")
        print(e)

if __name__ == "__main__":
    main()
