# Solution 2
"""
This solution uses Hugging Face’s Inference API instead of loading the model locally.

The key benefit of this approach is that it significantly reduces memory usage, as the translation model
(Helsinki-NLP/opus-mt-en-fi) runs on Hugging Face’s servers rather than the local environment.

This makes it ideal for deployment on platforms with limited resources, like the free tier on Render.
"""

import os
from dotenv import load_dotenv
import requests

# Load environment variables from .env
load_dotenv()

def translate_to_finnish(text):
    """Translate English text to Finnish using Hugging Face API."""
    url = "https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-en-fi"
    token = os.getenv("HUGGING_FACE_API_TOKEN")
    if not token:
        raise ValueError("HUGGING_FACE_API_TOKEN is not set in environment variables")

    headers = {"Authorization": f"Bearer {token}"}
    payload = {"inputs": text}

    response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        return response.json()[0]["translation_text"]
    else:
        raise RuntimeError(f"Translation API failed: {response.text}")
