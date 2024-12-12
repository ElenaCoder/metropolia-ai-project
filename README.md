🔔 🦄🦄🦄 🔔
---

# English to Finnish Translator

## Overview
This is a simple **English to Finnish Translator** built using **Flask** on the backend and modern **JavaScript** on the frontend. The app allows users to input English text, translates it to Finnish using the **Helsinki-NLP Opus-MT model**, and displays the translated text on the same page without reloading. The solution leverages Flask's routing and middleware capabilities, the Hugging Face Transformers library for translation, and JavaScript's fetch API for dynamic updates.

## Features
- Translate text from English to Finnish using the Helsinki-NLP/opus-mt-en-fi model from Hugging Face.
- Interactive UI with real-time user input and results.
- Hosted on a free-tier server for demonstration purposes.

## Technologies Used
- **Backend**: Flask, Python, Hugging Face Inference API
- **Frontend**: HTML, JavaScript, Bootstrap
- **Deployment**: Render free tier

## How to Use
1. Enter English text in the text field on the page.
2. Click the "Translate" button to get the Finnish translation.

**Note:**
- This project is hosted on a free-tier server for demonstration purposes.
- Delays may occur due to server inactivity and model loading times.
- The server takes approximately **50 seconds** to wake up after inactivity, and the model may take **20 seconds** to load for the first request.

## Project Structure
The project uses a layered architecture for better modularity and scalability.
Here's a breakdown of the structure:

```
metropolia-ai-project/
├── app.py                 # Main Flask application entry point
├── controllers/           # Handles request-response logic
│   └── translation_controller.py
├── services/              # Business logic and integrations
│   └── translation_service.py
├── middlewares/           # Error handling and other middleware
│   └── error_handler.py
├── static/                # Static files (CSS, JS)
│   └── scripts/
│       └── index.js       # JavaScript for dynamic form submission
├── templates/             # HTML templates for the frontend
│   └── index.html
├── assets/                # solution 2 navigation demo
│   └── solution1-navigation-demo2.gif
├── venv/                  # Virtual environment for Python dependencies
├── .env                   # Environment variables (not included in the repo)
├── .gitignore             # Git ignored files and directories
├── Procfile               # Deployment configuration for Render or similar platforms
├── README.md              # Project documentation (this file)
└── requirements.txt       # Python dependencies
```

## Translation Service Implementation

I have done two different implementations ([Solution 1](https://github.com/ElenaCoder/metropolia-ai-project-local) and [Solution 2](https://github.com/ElenaCoder/metropolia-ai-project)) for handling English-to-Finnish translations.
<details>

<summary>Solution 1: Local Model Loading -- For Local Use</summary>
This solution uses the Helsinki-NLP/opus-mt-en-fi translation model from Hugging Face by loading it locally via the transformers library.

**Advantages:**
- No reliance on external APIs.
- Ideal for local development on machines with sufficient memory.

**Limitations:**
- Memory-intensive and cannot be deployed on free-tier platforms like Render.
- Requires downloading and initializing the entire model on the local machine.

</details>

<details>
<summary>Solution 2 (*current): Hugging Face Inference API -- For Local and Deployment</summary>
This solution utilizes the Hugging Face Inference API, offloading the translation model to Hugging Face’s servers.

**Advantages:**
- Lightweight and works well on platforms with limited memory, such as free-tier Render deployments.
- Can be deployed and accessed remotely.

**Limitations:**
- Depends on the availability and performance of the Hugging Face API.
- Requires a valid Hugging Face API token.

</details>


## How to Run Locally with Solution 2:

<details>

<summary>1. Clone the repository:</summary>

```
git clone https://github.com/ElenaCoder/metropolia-ai-project.git
cd metropolia-ai-project
```
</details>

<details>

<summary>2. Set up a virtual environment:</summary>

```
python -m venv venv
source venv/Scripts/activate  # Windows
# or
source venv/bin/activate      # macOS/Linux
```
</details>

<details>

<summary>3. Get a Hugging Face API Token:</summary>

If you don’t already have a token, follow these steps:
- Sign up or log in to [Hugging Face](https://huggingface.co/).
- Generate an API token in your account settings under **Access Tokens**.

For detailed steps, refer to the section **Steps to Get a Hugging Face API Token.**
</details>

<details>

<summary>4. Set up environment variables:</summary>

  - Create a `.env` file in the root directory.
  - Add your Hugging Face API token: `HUGGING_FACE_API_TOKEN=your_token_here`

</details>

<details>

<summary>5. Install dependencies:</summary>

```
pip install -r requirements.txt
```
</details>

<details>

<summary>6. Run the application:</summary>

```
python app.py
```
</details>

<details>

<summary>7. Access the app:</summary>

Open `http://127.0.0.1:5000` in your browser.

</details>

<details>

<summary>8. Deployment.</summary>

 The app is deployed on Render's free tier. You can access the live demo here: [English-to-Finnish Translator Web App](https://metropolia-ai-project.onrender.com/)

**Note:**
The app is deployed on Render's free tier for demonstration purposes, which has some limitations. The server may need to wake up if it's inactive. If you see a **502 error**, this is normal—please wait for about **1 minute** and **refresh** the page to try again.

 </details>


## Steps to Get a Hugging Face API Token
If you don't already have a Hugging Face API token, follow these steps:
<details>

<summary>1. Sign Up:</summary>

- Go to [Hugging Face](https://huggingface.co/) and create a free account if you don't already have one.

</details>

<details>

<summary>2. Log In:</summary>

- Log in to your Hugging Face account.

</details>

<details>

<summary>3. Generate an API Token:</summary>

- Navigate to your account settings by clicking your profile picture in the top-right corner of the Hugging Face website.
- Select **Access Tokens** from the menu.
- Click **New Token** to generate a token.
  - Provide a name for the token (e.g., "Metropolia-AI-Project").
  - Set the role to read.
- Copy the generated token.

</details>

<details>

<summary>4. Save the Token:</summary>

- Create a file named `.env` in the project root directory if it doesn’t already exist.
- Add the following line to the `.env` file:
```
HUGGING_FACE_API_TOKEN=your_api_token_here
```
Replace **your_api_token_here** with the token you copied in the previous step.

</details>

<details>

<summary>5. Test the Token:</summary>

- Ensure the token is working by running the project:
```
python app.py
```
</details>


## Known Limitations
 - **Server delays:** Hosted on a free-tier server, which may cause delays after inactivity (~50 seconds).
 - **Model loading time:** The translation model takes ~20 seconds to load for the first request.

## Project preview

Explore a sneak peek of the **English to Finnish Translator - Solution 1** project with this animated GIF showcasing key features and the user interface.

![UI project GIF](./assets/solution1-navigation-demo.gif)

## Contact
For questions or feedback, feel free to reach out:
 - [GitHub: ElenaCoder](https://github.com/ElenaCoder)
 - [LinkedIn: Elena Golovanova](https://www.linkedin.com/in/elena-golovanova/)
