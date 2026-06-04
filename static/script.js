async function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthText = document.getElementById("strength");
    const progressFill = document.getElementById("progress-fill");
    const feedbackList = document.getElementById("feedback-list");

    // Reset if empty
    if (password.length === 0) {
        strengthText.innerText = "AWAITING_INPUT";
        strengthText.style.color = "#0f0";
        progressFill.style.width = "0%";
        feedbackList.innerHTML = "";
        return;
    }

    // Send data to Python backend
    const response = await fetch("/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password: password })
    });

    const data = await response.json();

    // Update UI based on response
    strengthText.innerText = data.level;
    progressFill.style.width = (data.score * 20) + "%";

    // Dynamic coloring based on threat level
    if (data.score <= 2) {
        progressFill.style.backgroundColor = "#ff3333"; // Red
        strengthText.style.color = "#ff3333";
    } else if (data.score === 3) {
        progressFill.style.backgroundColor = "#ffcc00"; // Yellow
        strengthText.style.color = "#ffcc00";
    } else {
        progressFill.style.backgroundColor = "#0f0"; // Green
        strengthText.style.color = "#0f0";
    }

    // Render missing requirements
    feedbackList.innerHTML = "";
    data.feedback.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        feedbackList.appendChild(li);
    });
}
