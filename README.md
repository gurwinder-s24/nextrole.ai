<div align="center">

<img src="client/public/favicon.svg" alt="🧠" width="45" height="45" align="center">

# NextRole.AI

### AI-Powered Career Growth & Job Preparation Platform

<p align="center">
  <b>Production-oriented full-stack AI SaaS platform focused on resume optimization, ATS analysis, interview preparation, and intelligent career workflows.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%2019-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/AI-Gemini%20API-8E75FF?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Auth-Google%20OAuth-EA4335?style=for-the-badge&logo=google" />
  <img src="https://img.shields.io/badge/Payments-Razorpay-0C2451?style=for-the-badge&logo=razorpay" />
</p>

</div>

---

# 🚀 Live Deployment

### Live URL [[click here](https://nextroleai-six.vercel.app/)]

---

# 📌 Project Overview & Features

**NextRole.AI** is a modern AI-powered career platform engineered to help users improve hiring outcomes through intelligent resume analysis, ATS optimization, AI-generated resumes, interview preparation, and role matching workflows.

The platform combines multiple career utilities into a single production-style SaaS ecosystem with authentication, billing, AI pipelines, and protected APIs.

---

# ✨ Core Product Capabilities

## 🔹 AI Resume Analyzer

Upload a PDF resume and receive:
- ATS score breakdown
- Resume strengths
- Weakness detection
- Keyword optimization suggestions
- Formatting and structure recommendations

---

## 🔹 AI Resume Builder

Generate professional ATS-friendly resumes using:
- Manual form-based profile data
- Existing uploaded resumes for enhancement

Supports structured AI-generated output and downloadable PDF export workflows.

---

## 🔹 AI Resume Improver

Users can upload an existing resume PDF and receive:
- Improved phrasing
- Better formatting
- Optimized skill representation
- ATS-focused enhancements
- Cleaner professional summaries

---

## 🔹 AI Job Matcher

Analyze user skills and experience to generate:
- Matching job roles
- Role fit percentages
- Career suitability analysis
- Application guidance
- Improvement suggestions

Supports both:
- Manual profile mode
- Resume upload mode

---

## 🔹 AI Interview Preparation

Generate personalized:
- HR interview questions
- Technical interview questions
- Question hints
- Categorized interview rounds

Supports downloadable interview preparation PDFs.

---

## 🔹 Authentication & Access Control

Secure authentication system powered by:
- Google OAuth login
- JWT-protected APIs
- Protected frontend routes
- Subscription-aware access control

---

## 🔹 SaaS Subscription System

Integrated premium monetization workflows:
- Razorpay payment gateway
- Checkout flow
- Signature verification
- Subscription expiry handling
- Free-tier AI usage limitations

---

# 🛠️ Tech Stack Used

# 🎨 Frontend Application (`client`)

| Layer | Technologies |
|---|---|
| Core Framework | React 19, TypeScript, Vite |
| Routing Layer | React Router |
| Styling System | Tailwind CSS v4 |
| HTTP Client | Axios |
| UI Utilities | react-hot-toast, lucide-react |
| Authentication | Google OAuth |
| PDF Utilities | jsPDF |

---

# ⚙️ Backend Application (`server`)

| Layer | Technologies |
|---|---|
| Runtime Environment | Node.js |
| Backend Framework | Express 5 |
| Language | TypeScript |
| Database Layer | MongoDB + Mongoose |
| Authentication | JWT + Google OAuth |
| AI Integration | Gemini API via @google/genai |
| Payment Infrastructure | Razorpay |

---

# 🧱 Repository Folder Structure

```bash
NextRole/
|
|-- client/
`-- server/
```

---

# ⚡ Step-by-Step Local Development Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/nextrole-ai.git

cd nextrole-ai
```

## 2️⃣ Install Frontend Dependencies

```bash
cd client

npm install
```

## 3️⃣ Install Backend Dependencies

```bash
cd ../server

npm install
```

## 4️⃣ Start Frontend

```bash
cd client

npm run dev
```

## 5️⃣ Start Backend

```bash
cd server

npm run dev
```

---

# 🔐 Environment Variables

## Frontend (`client/.env`)

```env
VITE_SERVER_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_RAZORPAY_KEY=your_razorpay_public_key
```

## Backend (`server/.env`)

```env
PORT=5000
URL=http://localhost:5173
MONGODB_URI=your_mongodb_connection_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SEC=your_super_secure_jwt_secret
API_KEY_GEMINI=your_gemini_api_key
Razorpay_Key=your_razorpay_key
Razorpay_Secret=your_razorpay_secret
```

---

<div align="center">

# ⭐ NextRole.AI

### AI-Powered • SaaS-Oriented • Production-Ready • Career-Focused

</div>
