# backend/config.py
import os
from dotenv import load_dotenv

# This loads the .env file located inside the /backend folder
load_dotenv()

# Gemini Config
API_KEY = os.getenv("API_KEY")

# Supabase Config
SUPABASE_URL = os.getenv("NEXT_PUBLIC_SUPABASE_URL")
# IMPORTANT: Use the Service Role Key for the backend to allow writing to DB
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY") 

# Optional: Model selection
MODEL_NAME = "gemini-1.5-flash" # or gemini-2.0-flash

DEV_MODE = True