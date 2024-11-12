
async function call(prompt, context) {
    try {
        document.getElementById('h3').innerHTML = "Fetching response...";
        const response = await fetch(`https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=2046c535afeb092fo82f1d306d8a2b2t`);
        const data = await response.json();
        document.getElementById('result').innerHTML = data.answer || "I couldn't find an answer to your question. Please try again.";
        document.getElementById('h3').innerHTML = "Response received!";
    } catch (error) {
        console.error(error);
        document.getElementById('h3').innerHTML = "Error fetching response.";
        document.getElementById('result').innerHTML = "Something went wrong. Please try again later.";
    }
}

function get() {
    const userInput = document.getElementById('ipt').value.trim();
    if (userInput) {
        call(userInput, "Provide a brief Ayurveda-based answer.");
    } else {
        document.getElementById('result').innerHTML = "Please enter a valid question.";
        document.getElementById('h3').innerHTML = "Waiting for your query...";
    }
}
