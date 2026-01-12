# 🚀 Day 10 – Login Form + Git Workflow

## 📌 Project Overview
This is a professional login form built using **HTML, CSS, and JavaScript** with the following features:
- ✅ Email & Password Fields
- ✅ Password Strength Indicator
- ✅ Real-time Form Validation
- ✅ Show/Hide Password Toggle
- ✅ SweetAlert for success messages
- ✅ Fully Responsive UI

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- [SweetAlert CDN](https://sweetalert.js.org/) for popups

## 🌿 Git Branch Workflow Followed
```bash
git init
git checkout -b main
# Main branch initialized

git checkout -b feature/login-ui
# Feature branch created for development

# After committing:
git checkout main
git merge feature/login-ui
git push origin main
