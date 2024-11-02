let btn = document.querySelector("button");

async function get() {
    let str = document.getElementById('ipt').value;
    let prompt = "Explain in brief in 8 lines";
    let resultDisplay = document.getElementById('h2');
    
    // Show loading message
    resultDisplay.innerText = "Loading, please wait...";
    
    try {
        let response = await fetch(`https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(str)}&key=YOUR_SECURE_KEY`);
        
        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the response
        let result = await response.json();
        
        // Display the AI-generated answer
        resultDisplay.innerText = result.answer;
        console.log(result.answer);
    } catch (error) {
        console.error("Error:", error);
        resultDisplay.innerText = "An error occurred. Please try again.";
    }
}

// Add event listener to the button
btn.addEventListener("click", get);
