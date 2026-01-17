# gemini_client.py
import os
import time
import json
from typing import Optional
from google import genai


CACHE_FILE = ".file_cache.json"


class GeminiFileManager:
    def __init__(self, client: genai.Client):
        self.client = client
        self._cache = self._load_cache()

    def _load_cache(self) -> dict:
        if os.path.exists(CACHE_FILE):
            try:
                with open(CACHE_FILE, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception:
                return {}
        return {}

    def _save_cache(self) -> None:
        try:
            with open(CACHE_FILE, "w", encoding="utf-8") as f:
                json.dump(self._cache, f, indent=2)
        except Exception:
            pass

    def _cache_key(self, file_path: str, mime_type: Optional[str]) -> str:
        abspath = os.path.abspath(file_path)
        mtime = os.path.getmtime(file_path)
        return f"{abspath}|{mtime}|{mime_type or ''}"

    def upload_and_wait(
        self,
        file_path: str,
        display_name: Optional[str] = None,
        mime_type: Optional[str] = None,
    ):
        """
        Uploads a file using the Files API and waits for it to be usable.
        Uses a tiny local cache to avoid re-uploading unchanged files.
        """
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Could not find file at {file_path}")

        key = self._cache_key(file_path, mime_type)

        # Try to reuse previously uploaded file (if still exists)
        cached_name = self._cache.get(key)
        if cached_name:
            try:
                f = self.client.files.get(name=cached_name)
                # If file still exists, just return it
                print(f"Reusing uploaded file for {display_name or os.path.basename(file_path)} (name={f.name})")
                return f
            except Exception:
                # Cached file no longer valid; fall through to upload
                self._cache.pop(key, None)
                self._save_cache()

        print(f"Uploading {display_name or os.path.basename(file_path)}...")

        upload_kwargs = {"file": file_path}
        if mime_type:
            upload_kwargs["config"] = {"mimeType": mime_type}

        f = self.client.files.upload(**upload_kwargs)

        # Wait for PROCESSING -> ACTIVE (when supported)
        while getattr(getattr(f, "state", None), "name", None) == "PROCESSING":
            print(".", end="", flush=True)
            time.sleep(2)
            f = self.client.files.get(name=f.name)

        if getattr(getattr(f, "state", None), "name", None) == "FAILED":
            raise ValueError(f"File {display_name or file_path} failed to process.")

        print(f"\n{display_name or os.path.basename(file_path)} is READY. (name={getattr(f, 'name', '')})")

        # Save cache for future runs
        if getattr(f, "name", None):
            self._cache[key] = f.name
            self._save_cache()

        return f

    def list_all_files(self):
        """Returns a list of files currently uploaded."""
        return list(self.client.files.list())
