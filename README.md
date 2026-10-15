# 🎓 QuizNova-AI: Complete Codebase Directory & Project Guide

> **AI-Enabled Online & Offline Adaptive Assessment & Maharashtra State Board Digital Learning Platform**

---

## 📂 Project Directory Structure

Your project is located at:
`C:\Users\mohammed saad\OneDrive\Desktop\quiz-platform-auth`

Below is the complete directory map of all source code files in your project:

```
quiz-platform-auth/
├── 📄 MINI_PROJECT_DOCUMENTATION.md      # Full 60-page Academic Black Book Documentation
├── 📄 QuizNova_AI_Mini_Project_Report.pdf# Compiled 60-page PDF ready for university submission
├── 📄 QuizNova_AI_Report.html            # Renderable HTML print template
├── 📄 README.md                          # Quick start guide & directory index
│
├── 📁 backend/                           # Node.js + Express.js + Prisma ORM + TypeScript
│   ├── package.json                      # Backend dependencies & scripts
│   ├── tsconfig.json                     # TypeScript compiler configuration
│   ├── .env                              # Environment variables (Database URL, JWT Secret)
│   ├── 📁 prisma/
│   │   ├── schema.prisma                 # SQLite relational database schema models
│   │   └── dev.db                        # SQLite database file
│   └── 📁 src/
│       ├── server.ts                     # Main Express server entry point (Port 5000)
│       ├── 📁 config/
│       │   └── db.ts                     # Prisma ORM client connection
│       ├── 📁 controllers/
│       │   ├── authController.ts         # Login, direct registration, sessions
│       │   ├── quizController.ts         # Quiz creation, submission, Bloom evaluation
│       │   └── resourceController.ts     # Balbharati books & PYQ endpoints
│       ├── 📁 middlewares/
│       │   └── authMiddleware.ts         # JWT cookie validation & role guarding
│       ├── 📁 routes/
│       │   ├── authRoutes.ts             # /api/auth routes
│       │   ├── quizRoutes.ts             # /api/quiz routes
│       │   └── resourceRoutes.ts         # /api/resources routes
│       ├── 📁 services/
│       │   └── aiGenerator.ts            # Bloom's taxonomy calculation logic
│       └── 📁 types/
│           └── auth.ts                   # TypeScript interfaces & types
│
└── 📁 frontend/                          # Next.js 14 (App Router) + React 18 + Tailwind CSS
    ├── package.json                      # Frontend dependencies & scripts
    ├── tsconfig.json                     # TypeScript compiler configuration
    ├── next.config.js                    # Next.js config & backend API rewrites
    ├── tailwind.config.ts                # Tailwind CSS styling configuration
    ├── postcss.config.mjs                # PostCSS configuration
    └── 📁 src/
        ├── middleware.ts                 # Next.js session guard & auth routing
        ├── 📁 app/
        │   ├── layout.tsx                # Root layout with Navbar & AuthProvider
        │   ├── page.tsx                  # Landing / Home page with feature highlights
        │   ├── globals.css               # Global styling & Tailwind utilities
        │   ├── 📁 (auth)/
        │   │   ├── 📁 login/
        │   │   │   └── page.tsx          # Login page (Email/Password + 1-Click Google Auth)
        │   │   └── 📁 register/
        │   │       └── page.tsx          # Direct account registration (No OTP)
        │   ├── 📁 dashboard/
        │   │   ├── page.tsx              # Role-based dispatcher
        │   │   ├── 📁 student/
        │   │   │   ├── page.tsx          # Student dashboard & quiz roster
        │   │   │   ├── 📁 textbooks/
        │   │   │   │   └── page.tsx      # In-App Balbharati digital textbook reader
        │   │   │   ├── 📁 pyqs/
        │   │   │   │   └── page.tsx      # 36-year Maharashtra Board PYQ archive
        │   │   │   ├── 📁 formulas/
        │   │   │   │   └── page.tsx      # Formula cheat sheets & references
        │   │   │   └── 📁 offline/
        │   │   │       └── page.tsx      # Offline cached exams manager
        │   │   └── 📁 educator/
        │   │       ├── page.tsx          # Educator dashboard & cohort analytics
        │   │       └── 📁 create/
        │   │           └── page.tsx      # Quiz builder studio with Bloom tagging
        │   ├── 📁 quiz/
        │   │   ├── 📁 [id]/
        │   │   │   ├── 📁 take/
        │   │   │   │   └── page.tsx      # Timed, proctored full-screen test player
        │   │   │   └── 📁 result/[attemptId]/
        │   │   │       └── page.tsx      # Bloom's taxonomy diagnostic score report
        │   │   └── 📁 offline/[id]/
        │   │       └── page.tsx          # Offline test player running from IndexedDB
        │   ├── 📁 textbooks/
        │   │   └── page.tsx              # Public textbook catalog
        │   └── 📁 pyqs/
        │       └── page.tsx              # Public PYQ catalog
        ├── 📁 components/
        │   ├── Navbar.tsx                # Navigation header with user badge & logout
        │   └── ProtectedRoute.tsx        # Client-side route protection
        ├── 📁 context/
        │   └── AuthContext.tsx           # Global authentication state, login & Google Auth
        ├── 📁 data/
        │   ├── maharashtraTextbooks.ts   # 41 Balbharati digital textbooks catalog
        │   ├── maharashtraTextbookChapters.ts # In-app textbook chapters & exercises
        │   └── maharashtraBoardPyqPapers.ts # 36-year authentic subjective past board papers
        ├── 📁 lib/
        │   ├── api.ts                    # Axios API client configured with credentials
        │   └── offlineStorage.ts         # IndexedDB caching for offline assessments
        └── 📁 types/
            ├── auth.ts                   # User, session, and role interfaces
            └── quiz.ts                   # Quiz, question, attempt, and analytics types
```

---

## 🚀 How to Run the Complete Project Locally

### 1. Start Backend API (Port 5000)
Open a terminal in the project directory:
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```
*Backend runs on `http://localhost:5000`*

### 2. Start Frontend Website (Port 3000)
Open a second terminal in the project directory:
```bash
cd frontend
npm install
npm run dev
```
*Frontend runs on `http://localhost:3000`*

---

## 🔗 GitHub Repository
All code is tracked and pushed to:
**https://github.com/Saadansari9/QuizNova-AI.git** (Branch: `main`)
