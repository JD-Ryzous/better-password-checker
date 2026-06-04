from flask import Flask, render_template, request, jsonify
import re

app = Flask(__name__)

def evaluate_password(password):
    score = 0
    feedback = []

    # Check criteria
    if len(password) >= 8:
        score += 1
    else:
        feedback.append("[!] Needs at least 8 characters.")

    if re.search(r"[A-Z]", password):
        score += 1
    else:
        feedback.append("[!] Needs an uppercase letter.")

    if re.search(r"[a-z]", password):
        score += 1
    else:
        feedback.append("[!] Needs a lowercase letter.")

    if re.search(r"\d", password):
        score += 1
    else:
        feedback.append("[!] Needs a numeric digit.")

    if re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        score += 1
    else:
        feedback.append("[!] Needs a special character.")

    # Determine rank
    levels = {0: "CRITICAL_VULNERABILITY", 1: "WEAK", 2: "WEAK", 3: "MODERATE", 4: "STRONG", 5: "HACKER-PROOF"}
    
    return {"level": levels[score], "score": score, "feedback": feedback}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/check", methods=["POST"])
def check():
    data = request.get_json()
    password = data.get("password", "")
    result = evaluate_password(password)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
