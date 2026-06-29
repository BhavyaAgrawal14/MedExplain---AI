# 🩺 MedExplain AI

> An AI-powered medical report analyzer that converts complex medical reports into simple, understandable health insights.

🌐 **Live Demo:** https://med-explain-ai-ashy.vercel.app/

💻 **GitHub Repository:** https://github.com/BhavyaAgrawal14/MedExplain---AI

---

## 📖 Overview

MedExplain AI helps users understand medical reports by extracting text from PDFs and images, analyzing the report using an AI model, and presenting easy-to-understand health insights.

The application combines OCR, PDF parsing, and Large Language Models (LLMs) to simplify medical terminology and generate actionable recommendations.

---

## ✨ Features

- 📄 Upload medical reports in **PDF** or **image** format
- 🔍 OCR support for scanned reports
- 📑 PDF text extraction
- 🤖 AI-powered report analysis using **Groq LLM**
- ❤️ Health Score
- 🟢 Risk Level Assessment
- 📋 Simplified Medical Summary
- ⚠️ Abnormal Test Value Detection
- 💡 Personalized Recommendations
- 🥗 Diet Suggestions
- 🏃 Exercise Suggestions
- 📅 Follow-up Recommendations
- 🚫 Detects non-medical uploads
- 📱 Fully responsive UI

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast
- Lucide React

### Backend

- Node.js
- Express.js
- Multer
- pdf-parse
- Tesseract.js
- Groq SDK

### AI

- Groq LLM

### Deployment

- Vercel
- Render

---

## 📂 Folder Structure

```
MedExplain---AI
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   └── assets
│
├── backend
│   ├── routes
│   ├── services
│   ├── parser
│   ├── uploads
│   └── server.js
```

---

## 📸 Screenshots

### Home Page

> Add screenshot here

![Home](screenshots/home.png)

---

### Upload & Analysis

> Add screenshot here

![Upload](screenshots/upload.png)

---

### Dashboard

> Add screenshot here

![Dashboard](screenshots/dashboard.png)

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/BhavyaAgrawal14/MedExplain---AI.git

cd MedExplain---AI
```

---

### Backend

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=5000

GROQ_API_KEY=your_api_key_here
```

Start backend

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend

```bash
npm run dev
```

---

## 🌍 Live Demo

Frontend

https://med-explain-ai-ashy.vercel.app/

Backend

https://medexplain-ai-backend.onrender.com

---

## 🔮 Future Improvements

- Authentication
- Medical Report History
- Multi-language Support
- Download AI Analysis as PDF
- Dark Mode
- Doctor Question Generator
- Medical Trend Tracking

---

## ⚠️ Disclaimer

This project is for educational purposes only.

The AI-generated analysis should **not** be considered medical advice. Always consult a qualified healthcare professional.

---

## 👨‍💻 Author

**Bhavya Agrawal**

GitHub:
https://github.com/BhavyaAgrawal14

LinkedIn:
(Add your LinkedIn profile)

---

⭐ If you like this project, consider giving it a star!