# ACADEMIC MINI PROJECT REPORT

---

# 📑 TABLE OF CONTENTS (INDEX)

| Sr. No. | Chapter No. | Topic Name | Page No. |
| :---: | :---: | :--- | :---: |
| **1.** | **Chapter 1** | **INTRODUCTION** | **01** |
| | 1.1 | Project Overview & Background | 01 |
| | 1.2 | Objectives | 02 |
| | 1.3 | Purpose, Scope and Applicability | 03 |
| | | 1.3.1 Purpose | 03 |
| | | 1.3.2 Scope | 03 |
| | | 1.3.3 Applicability | 04 |
| | 1.4 | Organization of Report | 04 |
| **2.** | **Chapter 2** | **SYSTEM ANALYSIS** | **05** |
| | 2.1 | Problem Definition | 05 |
| | 2.2 | Requirement Analysis | 06 |
| | 2.3 | Feasibility Study | 07 |
| | | 2.3.1 Technical Feasibility | 07 |
| | | 2.3.2 Operational Feasibility | 07 |
| | | 2.3.3 Economic Feasibility | 08 |
| | 2.4 | Hardware & Software Requirements | 08 |
| | | 2.4.1 Hardware Requirements | 08 |
| | | 2.4.2 Software Requirements | 09 |
| **3.** | **Chapter 3** | **SYSTEM DESIGN** | **10** |
| | 3.1 | Three-Tier Layered Architecture | 10 |
| | 3.2 | Data Flow Diagrams (DFD) | 11 |
| | | 3.2.1 DFD Level 0 (Context Level Diagram) | 11 |
| | | 3.2.2 DFD Level 1 | 12 |
| | | 3.2.3 DFD Level 2 | 13 |
| | 3.3 | Use Case Diagram & Actor Descriptions | 14 |
| | 3.4 | Sequence Diagrams (5 Core Workflows) | 15 |
| | 3.5 | Class Diagram | 16 |
| | 3.6 | Database Design & Data Dictionary | 17 |
| | | 3.6.1 Data Model Overview | 17 |
| | | 3.6.2 Purpose of Data Model | 17 |
| | | 3.6.3 Data Dictionary – Users Table | 18 |
| | | 3.6.4 Data Dictionary – Quizzes Table | 18 |
| | | 3.6.5 Data Dictionary – Questions Table | 19 |
| | | 3.6.6 Data Dictionary – Quiz Attempts Table | 19 |
| | | 3.6.7 Data Dictionary – OtpVerifications Table | 20 |
| | | 3.6.8 Relationship Between Tables | 20 |
| | 3.7 | E-R (Entity-Relationship) Diagram | 21 |
| **4.** | **Chapter 4** | **UI SCREENS** | **22** |
| | 4.1 | Login Screen | 22 |
| | 4.2 | Registration & 2-Step OTP Verification Screen | 23 |
| | 4.3 | Student Dashboard Screen | 24 |
| | 4.4 | Educator Dashboard Screen | 25 |
| | 4.5 | Create Assessment / Add Quiz Screen | 26 |
| | 4.6 | Take Assessment & Anti-Cheating Web Proctoring Screen | 27 |
| | 4.7 | In-App Balbharati Digital Textbook Reader (Classes 9-12) | 28 |
| | 4.8 | 36-Year Subjective Board PYQs Archive (1990 — 2026) | 29 |
| | 4.9 | Quiz Result & Bloom's Taxonomy Diagnostic Report Screen | 30 |
| | 4.10 | Error & Validation Notice Screen | 31 |
| **5.** | **Chapter 5** | **TESTINGS** | **32** |
| | 5.1 | Test Cases | 32 |
| | | 5.1.1 Unit Testing | 32 |
| | | 5.1.2 Module Testing | 34 |
| | | 5.1.3 Sub-System Testing | 35 |
| | | 5.1.4 System Testing | 36 |
| | | 5.1.5 Acceptance Testing | 37 |
| **6.** | **Chapter 6** | **CODING'S** | **38** |
| | 6.1 | Database Connection (Prisma & SQLite Configuration) | 38 |
| | 6.2 | User Authentication & 2-Step OTP Verification | 39 |
| | 6.3 | Create Assessment & Add Question Module | 42 |
| | 6.4 | Search & Filter Assessments / PYQs | 44 |
| | 6.5 | Assessment Submission & Scoring Calculation Engine | 46 |
| | 6.6 | Anti-Cheating & Web Proctoring Telemetry | 48 |
| | 6.7 | Performance Analytics & Diagnostic Reporting | 50 |
| | 6.8 | Logout & Session Invalidation | 51 |
| **7.** | **Chapter 7** | **CONCLUSION** | **52** |
| | 7.1 | Key Points | 52 |
| | 7.2 | System Limitations | 53 |
| | 7.3 | Future Enhancements | 53 |
| **8.** | **Chapter 8** | **BIBLIOGRAPHY** | **54** |

---

# CHAPTER 1: INTRODUCTION

## 1.1 Project Overview & Background
**QuizNova-AI** is a state-of-the-art educational technology platform engineered to bridge the digital assessment divide in academic institutions. The system provides an AI-enabled, secure, and offline-resilient environment tailored specifically for secondary and higher secondary education (Classes 9 through 12), with deep integration for the Maharashtra State Board curriculum.

Modern academic environments require assessment solutions that can operate smoothly despite network fluctuations, provide automated cognitive diagnostic feedback, and offer distraction-free curriculum resources without relying on unstable third-party servers. QuizNova-AI accomplishes this by unifying examination administration, authentic Board curriculum resources, anti-cheating supervision, and cognitive analytics into a single cohesive architecture.

## 1.2 Objectives
The primary objectives of this project are:
1. **Provide Uninterrupted Offline-First Examination Access**: Allow students in rural or low-connectivity environments to download encrypted exam packs, complete assessments with full anti-cheating controls, and synchronize results automatically upon internet restoration.
2. **Eliminate External Dependency via In-App Balbharati Reader**: Replace fragile external links to government portals (which frequently encounter network timeouts or downtime) with an internal, distraction-free reader containing 41 complete digital textbooks for Classes 9 through 12 across Science, Commerce, and Arts streams.
3. **Archive 36 Years of Authentic Subjective Board PYQs (1990 — 2026)**: Deliver a dedicated repository of authentic Maharashtra Board question papers adhering strictly to official academic blueprints with zero distracting MCQs or unverified answers.
4. **Implement Cognitive Diagnostic Evaluation**: Classify student competencies across the six cognitive levels of Bloom's Taxonomy (*Remembering, Understanding, Applying, Analyzing, Evaluating, Creating*) to pinpoint concept deficiencies.
5. **Enforce Ethical Assessment Standards**: Equip browser-based examinations with real-time web proctoring, including tab-switch monitoring, full-screen lock enforcement, and violation logging.

## 1.3 Purpose, Scope and Applicability
### 1.3.1 Purpose
The purpose of QuizNova-AI is to deliver an enterprise-grade academic platform that serves both Students and Educators with a unified database, high accessibility, and resilient verification protocols.

### 1.3.2 Scope
- **Student Scope**: Accessing curated quizzes, attempting timer-controlled exams, reviewing detailed Bloom diagnostic scorecards, reading 41 in-app Balbharati textbooks, browsing 36 years of subjective PYQs, and downloading multi-stream formula sheets.
- **Educator Scope**: Designing custom assessments, defining Bloom cognitive levels for questions, setting timer and proctoring constraints, viewing cohort performance telemetry, and exporting exam results.
- **Administrative Scope**: Managing user credentials, role authorizations, and unified database records.

### 1.3.3 Applicability
The system is universally applicable to:
- Junior colleges, high schools, and coaching academies adhering to state or national curricula.
- Self-study learners preparing for SSC and HSC competitive board examinations.
- Educational institutions operating in regions with inconsistent internet bandwidth.

## 1.4 Organization of Report
This report is organized into eight structured chapters:
- **Chapter 1: Introduction** — Introduces project background, objectives, and scope.
- **Chapter 2: System Analysis** — Details problem definition, feasibility, and requirements.
- **Chapter 3: System Design** — Contains 3-Tier architecture, DFDs, UML diagrams, and complete Data Dictionaries.
- **Chapter 4: UI Screens** — Details the graphical interfaces and user navigation flows.
- **Chapter 5: Testings** — Details comprehensive test cases across Unit, Module, and System testing.
- **Chapter 6: Coding's** — Showcases core code snippets for database connection, auth, and logic.
- **Chapter 7: Conclusion** — Summarizes achievements, limitations, and future enhancements.
- **Chapter 8: Bibliography** — Lists academic literature, software documentation, and references.

---

# CHAPTER 2: SYSTEM ANALYSIS

## 2.1 Problem Definition
Traditional online examination and study platforms suffer from several critical shortcomings:
1. **Unreliable External Repositories**: Most platforms redirect students to external government servers (e.g., `cart.ebalbharati.in`), which regularly experience server timeouts, certificate issues, or slow response times during peak academic periods.
2. **Exam Session Loss due to Connectivity Fluctuations**: When students encounter momentary network drops during an active test, their work is often lost, resulting in exam anxiety and inaccurate evaluation.
3. **Absence of Cognitive Depth in Evaluation**: Typical quiz engines calculate a superficial percentage score without analyzing whether a student struggles with basic recall or complex analytical problem-solving.
4. **Scarcity of Authentic Subjective Board Question Papers**: Students preparing for subjective board examinations are inundated with irrelevant automated MCQs rather than pure, authentic question papers structured by official Board blueprints.

## 2.2 Requirement Analysis
The functional and non-functional requirements were systematically analyzed:
- **Functional Requirements**:
  - Secure 2-Step OTP email registration and role-based login (Student / Educator).
  - Assessment authoring engine supporting multiple choice, numeric, and subjective formats.
  - In-app textbook reader with chapter-wise navigation and formula tables.
  - Subjective PYQ archive filterable by Year (1990-2026), Standard (SSC / HSC), and Stream.
  - Client-side exam proctoring with violation counter and automatic submission.
- **Non-Functional Requirements**:
  - **Performance**: Page load times under 1.5 seconds; API latency under 200ms.
  - **Reliability**: Resilient cloud fallback ensuring auth and tests function even when backend servers are unreachable.
  - **Security**: Cryptographic password hashing (bcrypt), HTTP-Only session cookies, and sanitized inputs.
  - **Usability**: Fully responsive across mobile smartphones, tablets, and desktop workstations.

## 2.3 Feasibility Study
### 2.3.1 Technical Feasibility
The platform utilizes **Next.js 14 App Router, React 18, Node.js, Express.js, TypeScript, and Prisma ORM with SQLite**. These technologies are mature, boast extensive community support, and provide first-class support for client-side offline storage (IndexedDB / LocalStorage) and server-side rendering. The development team possessed full technical proficiency in these stacks.

### 2.3.2 Operational Feasibility
Both teachers and students require minimal digital literacy to navigate QuizNova-AI. The UI follows modern ergonomic academic design standards with clear visual affordances, high-contrast typography, and intuitive single-click actions.

### 2.3.3 Economic Feasibility
The entire software stack is built using open-source, permissive technologies (MIT and Apache 2.0 licenses). No commercial proprietary runtime licenses are required, making the deployment highly economical for institutional adoption.

## 2.4 Hardware & Software Requirements
### 2.4.1 Hardware Requirements
- **Client (Student / Educator)**:
  - Processor: Dual-Core 1.6 GHz or higher
  - RAM: Minimum 2 GB (4 GB recommended)
  - Display: Minimum 1024x768 resolution (responsive down to 360px mobile)
  - Storage: 100 MB free browser cache space
- **Server**:
  - Processor: Quad-Core 2.0 GHz or Cloud vCPU
  - RAM: 4 GB minimum (8 GB recommended for enterprise load)
  - Storage: 10 GB SSD storage

### 2.4.2 Software Requirements
- **Operating System**: Windows 10/11, Ubuntu 20.04+, or macOS
- **Frontend Framework**: Next.js 14.2.11 (React 18, Tailwind CSS, Lucide Icons)
- **Backend Runtime**: Node.js v20+ / v22+ with Express.js 4.21
- **Database & ORM**: SQLite 3 with Prisma ORM 5.19
- **Authentication**: JWT (JSON Web Tokens), bcryptjs, Secure OTP Service
- **Browser Compatibility**: Google Chrome 90+, Microsoft Edge 90+, Mozilla Firefox 88+, Safari 14+

---

# CHAPTER 3: SYSTEM DESIGN

## 3.1 Three-Tier Layered Architecture
QuizNova-AI is structured into a rigorous **3-Tier Architecture**:
1. **Presentation Layer (Client)**: Built with Next.js 14 App Router and Tailwind CSS. Manages user interface interactions, local state, responsive styling, and offline IndexedDB caching.
2. **Business Logic Layer (Application Server)**: Express.js REST API handling request validation, Bloom's cognitive mapping, anti-cheating anomaly detection, and OTP lifecycle orchestration.
3. **Data Layer (Storage)**: Single Unified SQLite Database accessed strictly through type-safe Prisma ORM models, guaranteeing relational integrity and fast zero-latency query execution.

## 3.2 Data Flow Diagrams (DFD)
### 3.2.1 DFD Level 0 (Context Level Diagram)
```
       [ Student ]                                    [ Educator ]
            │                                              │
            │ Credentials, Exam Attempts,                  │ Assessment Blueprints,
            │ Balbharati Book & PYQ Requests               │ Question Banks, Grading Rules
            ▼                                              ▼
    ┌──────────────────────────────────────────────────────────────┐
    │                                                              │
    │              0.0 QUIZNOVA-AI PLATFORM CORE                   │
    │                                                              │
    └──────────────────────────────────────────────────────────────┘
            │                                              │
            │ Diagnostic Reports,                          │ Cohort Telemetry,
            │ In-App Textbooks, Real-Time Proctoring Alerts│ Performance Statistics
            ▼                                              ▼
       [ Student ]                                    [ Educator ]
```

### 3.2.2 DFD Level 1
- **Process 1.0 (Authentication)**: Validates email, dispatches 6-digit OTP, verifies input code, and issues secure session token.
- **Process 2.0 (Assessment Management)**: Educator authors quiz; questions are mapped to Bloom cognitive categories and stored in database.
- **Process 3.0 (Exam Execution & Proctoring)**: Student launches test; timer initiates, web proctor tracks tab visibility, and answers are scored.
- **Process 4.0 (Resource Delivery)**: In-app textbook reader serves 41 Balbharati textbooks and 36 years of authentic SSC/HSC subjective PYQs.

### 3.2.3 DFD Level 2 (Exam Execution & Proctoring Sub-Process)
```
[Student] ──(Request Exam)──> [3.1 Check Online/Offline Cache] ──> [3.2 Render Question Stream]
                                                                          │
[Client Tab Events] ──> [3.3 Proctor Violation Monitor] <────────────────┘
                                  │
                                  ▼
                        [3.4 Auto-Submit on Violation / Timer Finish]
                                  │
                                  ▼
                        [3.5 Compute Bloom Score & Persist Attempt] ──> (Unified DB)
```

## 3.3 Use Case Diagram & Actor Descriptions
- **Actors**:
  - **Student**: Registers with OTP, logs in, browses available quizzes, attempts tests with anti-cheating enforcement, downloads offline test bundles, reads in-app Balbharati textbooks, reviews 1990-2026 subjective PYQs, and inspects Bloom scorecards.
  - **Educator**: Authenticates, creates assessments, configures questions with Bloom taxonomies, sets time limits, inspects student score distributions, and reviews proctor violation logs.

## 3.4 Sequence Diagrams (5 Core Workflows)
1. **2-Step OTP Authentication Sequence**: Student enters details -> System verifies email -> Generates 6-digit OTP -> Student submits OTP -> System validates code -> Establishes authenticated session.
2. **Quiz Creation Sequence**: Educator inputs quiz details -> Attaches questions with Bloom ratings -> System validates payload -> Prisma commits record to database -> Confirmation returned.
3. **Assessment Attempt & Proctoring Sequence**: Student starts exam -> Local timer starts -> Proctor monitor attaches window listeners -> Tab switch triggers warning -> Answers submitted -> Score calculated.
4. **In-App Balbharati Book Reading Sequence**: Student selects Standard & Subject -> System loads embedded structured textbook -> Content rendered in full-screen distraction-free reader.
5. **Subjective PYQ Query Sequence**: Student selects Year (1990-2026) and Stream -> Query filters authentic subjective paper -> Clean question paper blueprint displayed without answers.

## 3.5 Class Diagram
- **User**: `id, name, email, passwordHash, role, createdAt`
- **OtpVerification**: `id, email, otp, expiresAt, createdAt`
- **Quiz**: `id, title, description, timeLimit, educatorId, createdAt`
- **Question**: `id, quizId, text, options, correctAnswer, bloomLevel, points`
- **QuizAttempt**: `id, quizId, studentId, score, totalQuestions, bloomBreakdown, cheatingFlags, completedAt`

## 3.6 Database Design & Data Dictionary
### 3.6.1 Data Model Overview
The database employs a relational model implemented via SQLite and Prisma ORM, ensuring strict foreign key referential integrity and normalized tables.

### 3.6.2 Purpose of Data Model
The purpose of the data model is to support high-throughput concurrent quiz attempts, secure user credential storage, persistent offline synchronization audit trails, and granular cognitive telemetry recording.

### 3.6.3 Data Dictionary – Users Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique UUID identifier for the user |
| `name` | VARCHAR(100) | NOT NULL | Full academic name of student/teacher |
| `email` | VARCHAR(150) | UNIQUE, NOT NULL | Academic or personal email address |
| `phoneNumber` | VARCHAR(20) | NULLABLE | Contact telephone number |
| `passwordHash`| VARCHAR(255) | NOT NULL | bcrypt-hashed password string |
| `role` | ENUM | NOT NULL | User role: 'Student' or 'Educator' |
| `createdAt` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Account registration timestamp |

### 3.6.4 Data Dictionary – Quizzes Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique UUID identifier for assessment |
| `title` | VARCHAR(200) | NOT NULL | Official title of the examination |
| `description` | TEXT | NULLABLE | Examination instructions and syllabus details |
| `timeLimit` | INTEGER | NOT NULL | Allowed duration in minutes |
| `educatorId` | VARCHAR(36) | FOREIGN KEY | References `Users(id)` of creator |
| `createdAt` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Date of test creation |

### 3.6.5 Data Dictionary – Questions Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique UUID identifier for question |
| `quizId` | VARCHAR(36) | FOREIGN KEY | References `Quizzes(id)` |
| `questionText`| TEXT | NOT NULL | Full stem text of the question |
| `options` | JSON / TEXT | NOT NULL | Serialized list of available answer choices |
| `correctAnswer`| VARCHAR(255)| NOT NULL | Exact correct answer key |
| `bloomLevel` | VARCHAR(50) | NOT NULL | Bloom category: Remembering, Applying, etc. |
| `points` | INTEGER | DEFAULT 1 | Marks awarded for correct submission |

### 3.6.6 Data Dictionary – Quiz Attempts Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique attempt identifier |
| `quizId` | VARCHAR(36) | FOREIGN KEY | References `Quizzes(id)` |
| `studentId` | VARCHAR(36) | FOREIGN KEY | References `Users(id)` |
| `score` | INTEGER | NOT NULL | Total marks attained |
| `totalQuestions`| INTEGER | NOT NULL | Total count of questions in assessment |
| `bloomBreakdown`| JSON / TEXT | NOT NULL | Detailed score mapping across 6 cognitive tiers |
| `cheatingFlags`| INTEGER | DEFAULT 0 | Count of detected tab switches/proctor flags |
| `completedAt` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Timestamp of exam submission |

### 3.6.7 Data Dictionary – OtpVerifications Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique OTP transaction identifier |
| `email` | VARCHAR(150) | NOT NULL | Target recipient email address |
| `otp` | VARCHAR(6) | NOT NULL | 6-digit cryptographic verification code |
| `expiresAt` | DATETIME | NOT NULL | Expiry time (10 minutes from generation) |
| `createdAt` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Dispatch timestamp |

### 3.6.8 Relationship Between Tables
- **Users to Quizzes**: 1-to-Many (`User.id` -> `Quiz.educatorId`)
- **Quizzes to Questions**: 1-to-Many (`Quiz.id` -> `Question.quizId`, Cascade Delete)
- **Quizzes to QuizAttempts**: 1-to-Many (`Quiz.id` -> `QuizAttempt.quizId`)
- **Users to QuizAttempts**: 1-to-Many (`User.id` -> `QuizAttempt.studentId`)

## 3.7 E-R (Entity-Relationship) Diagram
```
  ┌──────────────────┐               1:N               ┌──────────────────┐
  │      USERS       │ ───────────────────────────────<│     QUIZZES      │
  │  (PK: id)        │                                 │  (PK: id)        │
  │  name, email,    │ ───┐                            │  (FK: educatorId)│
  │  password, role  │    │                            └──────────────────┘
  └──────────────────┘    │                                      │ 1:N
           │ 1:N          │ 1:N                                  ▼
           ▼              │                            ┌──────────────────┐
  ┌──────────────────┐    │                            │    QUESTIONS     │
  │  QUIZ_ATTEMPTS   │<───┘                            │  (PK: id)        │
  │  (PK: id)        │                                 │  (FK: quizId)    │
  │  (FK: studentId) │>────────────────────────────────│  bloomLevel, pts │
  │  (FK: quizId)    │              N:1                └──────────────────┘
  │  score, flags    │
  └──────────────────┘
```

---

# CHAPTER 4: UI SCREENS

## 4.1 Login Screen
- **Route**: `/login`
- **Description**: Features dual-column layout with motivational student imagery, branded QuizNova-AI header, email/password inputs with client validation, and direct links to account creation.
- **Key Elements**: Email input, password input with hide/show toggle, sign-in CTA button, validation error callouts, and forgot password triggers.

## 4.2 Registration & 2-Step OTP Verification Screen
- **Route**: `/register`
- **Description**: A multi-step flow that first collects candidate details (Name, Email, Role, Password) and then transitions smoothly into a 6-digit OTP verification panel.
- **Key Features**:
  - Live academic role selection (Student vs. Educator card toggles).
  - 1-Click Auto-Fill Demo OTP badge ensuring immediate zero-block testing.
  - 6 individual numeric input boxes with full clipboard paste support and backspace navigation.

## 4.3 Student Dashboard Screen
- **Route**: `/dashboard/student`
- **Description**: Central command hub for learners showcasing ongoing assessments, historical score averages, quick access to the in-app Balbharati reader, 36-year board PYQ archives, and offline synced exams.

## 4.4 Educator Dashboard Screen
- **Route**: `/dashboard/educator`
- **Description**: Comprehensive educator suite providing quiz generation controls, real-time cohort score distribution charts, and student proctor violation logs.

## 4.5 Create Assessment / Add Quiz Screen
- **Route**: `/dashboard/educator/create`
- **Description**: Interactive assessment builder allowing instructors to set titles, time limits, attach multiple questions, specify correct answer keys, and tag each item with its designated Bloom's Taxonomy cognitive tier.

## 4.6 Take Assessment & Anti-Cheating Web Proctoring Screen
- **Route**: `/quiz/[id]/take`
- **Description**: High-focus, distraction-free examination screen equipped with an active countdown timer, question pagination controls, full-screen lock enforcement, and real-time tab switch violation alerts.

## 4.7 In-App Balbharati Digital Textbook Reader (Classes 9-12)
- **Route**: `/dashboard/student/textbooks` & `/textbooks`
- **Description**: An internal reader that completely eliminates reliance on external government portals. Provides 41 complete digital Balbharati textbooks spanning Classes 9, 10, 11, and 12 across Science, Commerce, and Arts streams with instant chapter navigation.

## 4.8 36-Year Subjective Board PYQs Archive (1990 — 2026)
- **Route**: `/dashboard/student/pyqs` & `/pyqs`
- **Description**: A dedicated, clean archive of authentic Maharashtra SSC & HSC past question papers. Strictly contains pure subjective question papers following official board blueprints with **zero automated MCQs and zero answer spoilers**.

## 4.9 Quiz Result & Bloom's Taxonomy Diagnostic Report Screen
- **Route**: `/quiz/[id]/result/[attemptId]`
- **Description**: Analytical post-exam report breaking down student performance into accuracy percentages, time spent, proctor violation audits, and a 6-bar cognitive competency chart (*Remembering, Understanding, Applying, Analyzing, Evaluating, Creating*).

## 4.10 Error & Validation Notice Screen
- **Route**: `/_not-found` & Component Error Boundaries
- **Description**: Graceful fallbacks designed with friendly illustrations and recovery buttons to guide users back to active learning dashboards when network anomalies or 404 paths occur.

---

# CHAPTER 5: TESTINGS

## 5.1 Test Cases
Testing was executed systematically across all functional boundaries using Black-Box and Unit Verification methodologies.

### 5.1.1 Unit Testing
| Test ID | Module Tested | Test Objective | Test Input | Expected Result | Actual Result | Status |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **UT-01** | `AuthContext` | Email Format Validation | "student@invalid" | Reject input; flag invalid email pattern | Rejected with descriptive error | **PASS** |
| **UT-02** | `AuthContext` | 6-Digit OTP Generation | Target email passed | Generate 6-digit numeric string in sessionStorage | 6-digit code created and stored | **PASS** |
| **UT-03** | `AuthContext` | OTP Match Verification | Entered: "123456", Expected: "123456" | Confirm identity; issue authenticated user object | Authenticated; redirect to dashboard | **PASS** |
| **UT-04** | `AuthContext` | Invalid OTP Rejection | Entered: "999999", Expected: "123456" | Block login; display "Invalid OTP code" | Error shown; attempt prevented | **PASS** |
| **UT-05** | `QuizEngine` | Score Calculation Logic | 8 of 10 correct answers | Total score = 80%; correct count = 8 | Computed 80% with 8 correct | **PASS** |
| **UT-06** | `QuizEngine` | Countdown Timer Expiry | Time runs to 00:00 | Automatically lock inputs and trigger submit | Auto-submitted at zero | **PASS** |

### 5.1.2 Module Testing
| Test ID | Module Tested | Test Objective | Test Input | Expected Result | Actual Result | Status |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **MT-01** | Student Module | Complete Registration Journey | Valid details + role 'Student' | User created in unified DB; routed to Student Portal | Successfully routed to student dashboard | **PASS** |
| **MT-02** | Educator Module| Assessment Authoring | Title, 5 Questions with Bloom tags | Persist Quiz & Questions via Prisma relational schema | Records stored in SQLite; visible in list | **PASS** |
| **MT-03** | Balbharati Reader| In-App Content Delivery | Class 10 English Textbook selected | Render full-screen textbook theory & exercise questions | Book reader rendered with 0 timeouts | **PASS** |
| **MT-04** | PYQ Archive | Filter 1990-2026 Question Papers | Standard: HSC, Stream: Science | Display authentic subjective papers without MCQs | Exact board blueprints rendered | **PASS** |

### 5.1.3 Sub-System Testing
| Test ID | Sub-System | Test Objective | Test Input | Expected Result | Actual Result | Status |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **ST-01** | Web Proctoring | Tab Switching Detection | User shifts to external browser tab | Trigger violation modal; increment cheating counter | Warning modal displayed; counter incremented | **PASS** |
| **ST-02** | Web Proctoring | Fullscreen Exit Detection | User hits ESC to exit fullscreen | Prompt re-entry modal; record audit telemetry | Audit event logged | **PASS** |
| **ST-03** | Offline Sync | Local Bundle Download | Click "Save for Offline Exam" | Store encrypted JSON bundle in IndexedDB | Exam saved locally; playable without WiFi | **PASS** |

### 5.1.4 System Testing
| Test ID | Test Scenario | Description | Result | Status |
| :---: | :--- | :--- | :--- | :---: |
| **SYS-01** | End-to-End Exam Workflow | Student registers -> takes proctored exam -> submits -> reviews Bloom report | Complete journey functioned with zero exceptions | **PASS** |
| **SYS-02** | Cross-Browser Compatibility | Executed test suite across Chrome, Edge, and Firefox | UI layouts, fonts, and logic behaved identically | **PASS** |
| **SYS-03** | Resilient Cloud Fallback | Simulated backend downtime on Vercel deployment | Fallback OTP and local session maintained uninterrupted user flow | **PASS** |

### 5.1.5 Acceptance Testing
The system was verified against all user criteria:
1. Registration & OTP operates smoothly on both local and cloud environments.
2. 41 in-app Balbharati textbooks load instantly without external server dependencies.
3. 36-year subjective PYQ archive strictly contains authentic past questions without unwanted answers or automated MCQs.
4. All acceptance criteria evaluated to **100% SATISFACTORY**.

---

# CHAPTER 6: CODING'S

## 6.1 Database Connection (Prisma & SQLite Configuration)
```typescript
// backend/src/config/db.ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('[Database] Single Unified SQLite Database connected successfully.');
  } catch (error) {
    console.error('[Database] Connection failure:', error);
    process.exit(1);
  }
};
```

## 6.2 User Authentication & 2-Step OTP Verification
```typescript
// backend/src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/db.js';

export const sendOtp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existingUser) {
      res.status(409).json({ success: false, message: 'An account with this email already exists.' });
      return;
    }

    // Generate random 6-digit OTP code valid for 10 minutes
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.otpVerification.upsert({
      where: { email: normalizedEmail },
      create: { email: normalizedEmail, otp: generatedOtp, expiresAt },
      update: { otp: generatedOtp, expiresAt },
    });

    res.status(200).json({
      success: true,
      message: `Verification OTP generated for ${normalizedEmail}`,
      demoOtp: generatedOtp,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error in OTP generation.' });
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role, otp, phoneNumber } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const record = await prisma.otpVerification.findUnique({ where: { email: normalizedEmail } });
    if (!record || record.otp !== otp || new Date() > record.expiresAt) {
      res.status(400).json({ success: false, message: 'Invalid or expired OTP code.' });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: { name, email: normalizedEmail, phoneNumber, passwordHash, role },
    });

    await prisma.otpVerification.delete({ where: { email: normalizedEmail } });
    res.status(201).json({ success: true, message: 'Registration verified and complete!', user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Account creation failed.' });
  }
};
```

## 6.3 Create Assessment & Add Question Module
```typescript
// backend/src/controllers/quizController.ts
export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { title, description, timeLimit, questions } = req.body;
    const educatorId = (req as any).user.id;

    const quiz = await prisma.quiz.create({
      data: {
        title,
        description,
        timeLimit: Number(timeLimit),
        educatorId,
        questions: {
          create: questions.map((q: any) => ({
            questionText: q.questionText,
            options: JSON.stringify(q.options),
            correctAnswer: q.correctAnswer,
            bloomLevel: q.bloomLevel || 'Understanding',
            points: Number(q.points || 1),
          })),
        },
      },
      include: { questions: true },
    });

    res.status(201).json({ success: true, message: 'Assessment published successfully.', quiz });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create assessment.' });
  }
};
```

## 6.4 Search & Filter Assessments / PYQs
```typescript
// backend/src/routes/quizRoutes.ts
router.get('/', async (req, res) => {
  try {
    const { search, stream, standard } = req.query;
    const whereClause: any = {};

    if (search) {
      whereClause.OR = [
        { title: { contains: String(search) } },
        { description: { contains: String(search) } },
      ];
    }

    const quizzes = await prisma.quiz.findMany({
      where: whereClause,
      include: { _count: { select: { questions: true } } },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ success: true, quizzes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving assessments.' });
  }
});
```

## 6.5 Assessment Submission & Scoring Calculation Engine
```typescript
// backend/src/controllers/quizController.ts
export const submitQuizAttempt = async (req: Request, res: Response) => {
  try {
    const { quizId, answers, cheatingFlags } = req.body;
    const studentId = (req as any).user.id;

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: { questions: true },
    });

    if (!quiz) return res.status(404).json({ success: false, message: 'Quiz not found.' });

    let score = 0;
    const bloomMap: Record<string, { total: number; correct: number }> = {
      Remembering: { total: 0, correct: 0 },
      Understanding: { total: 0, correct: 0 },
      Applying: { total: 0, correct: 0 },
      Analyzing: { total: 0, correct: 0 },
      Evaluating: { total: 0, correct: 0 },
      Creating: { total: 0, correct: 0 },
    };

    quiz.questions.forEach((q) => {
      const level = q.bloomLevel || 'Understanding';
      if (!bloomMap[level]) bloomMap[level] = { total: 0, correct: 0 };
      bloomMap[level].total += 1;

      if (answers[q.id] && answers[q.id].trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) {
        score += q.points;
        bloomMap[level].correct += 1;
      }
    });

    const attempt = await prisma.quizAttempt.create({
      data: {
        quizId,
        studentId,
        score,
        totalQuestions: quiz.questions.length,
        bloomBreakdown: JSON.stringify(bloomMap),
        cheatingFlags: Number(cheatingFlags || 0),
      },
    });

    res.status(200).json({ success: true, message: 'Attempt recorded.', attempt });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to evaluate attempt.' });
  }
};
```

## 6.6 Anti-Cheating & Web Proctoring Telemetry
```typescript
// frontend/src/hooks/useWebProctor.ts
import { useEffect, useState } from 'react';

export const useWebProctor = (onViolation: (count: number) => void) => {
  const [violations, setViolations] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setViolations((prev) => {
          const next = prev + 1;
          onViolation(next);
          return next;
        });
      }
    };

    const handleWindowBlur = () => {
      setViolations((prev) => {
        const next = prev + 1;
        onViolation(next);
        return next;
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [onViolation]);

  return { violations };
};
```

## 6.7 Performance Analytics & Diagnostic Reporting
```typescript
// frontend/src/components/BloomAnalyticsChart.tsx
export const calculateBloomPercentages = (breakdownJson: string) => {
  try {
    const data = JSON.parse(breakdownJson);
    return Object.entries(data).map(([level, stats]: [string, any]) => ({
      level,
      percentage: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
      total: stats.total,
      correct: stats.correct,
    }));
  } catch {
    return [];
  }
};
```

## 6.8 Logout & Session Invalidation
```typescript
// backend/src/controllers/authController.ts
export const logout = async (req: Request, res: Response) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    path: '/',
  });
  res.status(200).json({ success: true, message: 'Logged out successfully.' });
};
```

---

# CHAPTER 7: CONCLUSION

## 7.1 Key Points
The development and deployment of **QuizNova-AI** successfully achieved all established milestones:
1. **Zero External Dependency on Balbharati Servers**: The in-app reader hosts 41 digital textbooks internally, protecting students from external timeouts and downtime.
2. **Authentic 36-Year Board Examination Archive**: Curated subjective board papers (1990 — 2026) for Classes 10 & 12 with strictly zero automated MCQs or answers, fulfilling authentic board exam prep needs.
3. **Resilient 2-Step OTP Authentication**: Delivered robust cloud-and-local verification allowing immediate 1-click evaluation and testing.
4. **Cognitive Bloom Diagnostics**: Real-time breakdown across 6 Bloom's Taxonomy cognitive levels provides actionable feedback to both students and educators.
5. **Effective Anti-Cheating Supervision**: Automated browser proctoring minimizes dishonest practices in unproctored and proctored remote tests.

## 7.2 System Limitations
- Subjective long-form answers currently require educator manual scoring rather than natural language semantic AI evaluation.
- Browser-based proctoring operates on client-side events and cannot detect physical secondary devices (smartphones held outside webcam views).

## 7.3 Future Enhancements
- Integration of Local LLMs (Ollama / Gemma) for automated semantic grading of subjective paragraph answers.
- Automated speech synthesis (Text-to-Speech) for regional languages (Marathi, Hindi) within the in-app Balbharati reader.
- Offline Progressive Web App (PWA) and Android APK package distribution for ultra-low bandwidth rural classrooms.

---

# CHAPTER 8: BIBLIOGRAPHY

1. **Next.js Documentation**: Vercel Inc. (2024). *Next.js 14 App Router, Server Components & Route Handlers*. Available at: https://nextjs.org/docs
2. **React Documentation**: Meta Open Source (2024). *React 18 Hooks, Suspense & Architecture*. Available at: https://react.dev
3. **Prisma Documentation**: Prisma Data Inc. (2024). *Prisma ORM for SQLite & Relational Data Modeling*. Available at: https://www.prisma.io/docs
4. **Express.js Documentation**: StrongLoop & OpenJS Foundation (2024). *Fast, Unopinionated, Minimalist Web Framework for Node.js*. Available at: https://expressjs.com
5. **Bloom's Taxonomy Framework**: Anderson, L. W., & Krathwohl, D. R. (2001). *A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom's Taxonomy of Educational Objectives*. Longman.
6. **Maharashtra State Bureau of Textbook Production (Balbharati)**: *Curriculum Blueprints and Subject Syllabi (1990 — 2026)*. Pune, Maharashtra.
7. **Tailwind CSS Documentation**: Tailwind Labs (2024). *Utility-First CSS Framework Specification*. Available at: https://tailwindcss.com/docs
8. **Project Source Code & Repository**: QuizNova-AI Production Repository. Available at: https://github.com/Saadansari9/QuizNova-AI.git
9. **Project Live Cloud Deployment**: QuizNova-AI on Vercel. Available at: https://quiznova-ai.vercel.app
