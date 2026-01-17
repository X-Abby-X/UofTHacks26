# gemini_client.py
import os
import time
from google import genai

class GeminiFileManager:
    def __init__(self, client):
        # Prefer env var in real apps; allow passing key for dev
        self.client = client

    def upload_and_wait(self, file_path: str, display_name: str | None = None, mime_type: str | None = None):
        """
        Uploads a file using the new Files API and (optionally) waits for it to be usable.
        """
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Could not find file at {file_path}")

        print(f"Uploading {display_name or os.path.basename(file_path)}...")

        # New SDK upload
        # docs show: myfile = client.files.upload(file="path/to/file")
        upload_kwargs = {"file": file_path}

        # Some file types benefit from explicit mimeType. If you know it (e.g., 'application/pdf'), pass it.
        if mime_type:
            upload_kwargs["config"] = {"mimeType": mime_type}

        f = self.client.files.upload(**upload_kwargs)

        # Optional "wait": only if the returned object exposes a state and it’s not active yet.
        # (This keeps your old behavior but won’t crash if state isn't present.)
        while getattr(getattr(f, "state", None), "name", None) == "PROCESSING":
            print(".", end="", flush=True)
            time.sleep(2)
            f = self.client.files.get(name=f.name)

        if getattr(getattr(f, "state", None), "name", None) == "FAILED":
            raise ValueError(f"File {display_name or file_path} failed to process.")

        print(f"\n{display_name or os.path.basename(file_path)} is READY.")
        return f

    def list_all_files(self):
        """Returns a list (iterator) of files currently uploaded."""
        return list(self.client.files.list())
