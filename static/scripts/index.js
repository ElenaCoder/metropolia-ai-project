const form = document.getElementById("translateForm");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");
const loadingIndicator = document.getElementById("loading-indicator");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const text = document.getElementById("textToTranslate").value.trim();
    resultDiv.classList.add("d-none");
    errorDiv.classList.add("d-none");

    if (!text) {
        errorDiv.textContent = "Error: Input cannot be empty.";
        errorDiv.classList.remove("d-none");
        return;
    }

    resultDiv.textContent = "Translating...";
    resultDiv.classList.remove("d-none");
    loadingIndicator.style.display = "block"; // Show the loading indicator

    try {
        const response = await fetchWithRetry("/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();

        if (response.ok) {
            resultDiv.textContent = `Translation: ${data.translated_text}`;
            resultDiv.classList.remove("alert-danger");
            resultDiv.classList.add("alert-success");
            resultDiv.classList.remove("d-none");
        } else {

            let userFriendlyMessage;
            if (data.error && data.error.includes("is currently loading")) {
                userFriendlyMessage = "The translation service is initializing. Please try again shortly.";
            } else {
                userFriendlyMessage = "An error occurred while processing your request. Please try again later.";
            }

            errorDiv.textContent = `Error: ${userFriendlyMessage}`;
            errorDiv.classList.remove("d-none");
        }
    } catch (error) {
        errorDiv.textContent = "Error: Unable to connect to the server.";
        errorDiv.classList.remove("d-none");
    } finally {
        loadingIndicator.style.display = "none"; // Hide the loading indicator
    }
});

/**
 * Helper function to handle retries for 502 errors
 */
async function fetchWithRetry(url, options, retries = 5, delay = 10000) {
    for (let attempt = 0; attempt < retries; attempt++) {
        const response = await fetch(url, options);
        if (response.status === 502) {
            console.warn(`Server is waking up. Retrying in ${delay / 1000} seconds...`);
            await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
            return response;
        }
    }
    throw new Error("Maximum retry attempts reached.");
}