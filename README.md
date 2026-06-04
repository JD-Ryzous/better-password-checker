# 🔐 Terminal Password Strength Checker

A modern **Flask-based Password Strength Checker** with a hacker-style terminal interface. The application analyzes passwords in real time and provides security feedback based on common password policies.

---

## 🚀 Features

* Real-time password analysis
* Hacker-themed terminal UI
* Strength progress bar
* Checks for:

  * Minimum length (8+ characters)
  * Uppercase letters
  * Lowercase letters
  * Numbers
  * Special characters
* Detailed security feedback
* Built using Python Flask

---

## 📸 Preview

```text
SYS_ACCESS_TERMINAL

> Enter your key for strength analysis_

STATUS: HACKER-PROOF

████████████████████
```

---

## 🛠️ Technologies Used

* Python 3
* Flask
* HTML5
* CSS3
* JavaScript
* Regular Expressions (Regex)

---

## 📂 Project Structure

```text
password-strength-checker/
│
├── app.py
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/JD-Ryzous/password-strength-checker-.git
```

### 2. Enter the project folder

```bash
cd password-strength-checker-
```

### 3. Install Flask

```bash
pip install flask
```

### 4. Run the application

```bash
python app.py
```

### 5. Open your browser

```text
http://127.0.0.1:5000
```

---

## 🔍 Password Evaluation Rules

| Check             | Points |
| ----------------- | ------ |
| 8+ Characters     | +1     |
| Uppercase Letter  | +1     |
| Lowercase Letter  | +1     |
| Number            | +1     |
| Special Character | +1     |

---

## 📊 Strength Levels

| Score | Result                 |
| ----- | ---------------------- |
| 0     | CRITICAL_VULNERABILITY |
| 1-2   | WEAK                   |
| 3     | MODERATE               |
| 4     | STRONG                 |
| 5     | HACKER-PROOF           |

---

## 💻 Example

### Input

```text
Jagdish@2026
```

### Output

```text
STATUS: HACKER-PROOF

✔ Minimum length
✔ Uppercase letter
✔ Lowercase letter
✔ Number
✔ Special character
```

---

## 🎯 Learning Objectives

This project helped me practice:

* Python Programming
* Flask Web Framework
* API Routes
* JSON Responses
* HTML/CSS UI Design
* JavaScript Fetch API
* Regular Expressions
* Cyber Security Fundamentals

---

## 👨‍💻 Author

**JEGDISH E**

🎓 Cyber Security Student
🐍 Python Learner
🛡️ Web Security Enthusiast

GitHub:
https://github.com/JD-Ryzous

---

## 📜 License

This project is created for educational and portfolio purposes.
