const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.resolve(__dirname, '..', 'Project_Diagrams_Word');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const diagrams = [
  {
    name: '3.1_Class_Diagram',
    title: 'Figure 3.1: Comprehensive UML Domain Class Diagram',
    code: `classDiagram
    direction TB
    class User {
        +String id [PK]
        +String name
        +String email [UK]
        +String passwordHash
        +String role
        +validatePassword(plainPassword) Boolean
    }
    class Quiz {
        +String id [PK]
        +String educatorId [FK]
        +String title
        +String topic
        +String difficulty
        +Int durationMinutes
        +Float passingScore
        +Boolean isPublished
        +exportPackage() Object
    }
    class Question {
        +String id [PK]
        +String quizId [FK]
        +String questionText
        +String[] options
        +Int correctAnswer
        +String bloomLevel
        +String rationale
        +Int points
        +checkAnswer(selectedIndex) Boolean
    }
    class QuizAttempt {
        +String id [PK]
        +String quizId [FK]
        +String studentId [FK]
        +Float scoreObtained
        +Float percentage
        +Int violationCount
        +String bloomData
        +Boolean isOfflineSynced
    }
    class AuthController {
        +register(data)
        +login(credentials)
        +googleOAuth(role)
        +logout()
    }
    class ExamController {
        +fetchQuizzes()
        +startExamSession(quizId)
        +submitExam(answers, violations)
        +syncOfflineBatch(attempts)
    }
    class AISynthesizerService {
        +generateQuestions(topic, count, bloom)
        +generateDiagnosticFeedback(score, topic)
    }
    class OfflineStorageManager {
        +saveQuizPackage(quizData)
        +recordOfflineAttempt(attempt)
        +getPendingSyncQueue()
    }

    User "1" --> "0..*" Quiz : authors
    User "1" --> "0..*" QuizAttempt : submits
    Quiz "1" *-- "1..*" Question : contains
    Quiz "1" --> "0..*" QuizAttempt : records
    ExamController ..> Quiz : orchestrates
    ExamController ..> QuizAttempt : records
    ExamController ..> AISynthesizerService : invokes
    OfflineStorageManager ..> Quiz : caches`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#e0e7ff',
        primaryTextColor: '#1e1b4b',
        primaryBorderColor: '#4f46e5',
        lineColor: '#475569',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.2_Use_Case_Diagram',
    title: 'Figure 3.2: System Use-Case Diagram for Admin / Educator and Student Roles',
    code: `flowchart LR
    subgraph Actors["System Actors"]
        Student["Candidate / Student"]
        Educator["Educator / Teacher"]
    end

    subgraph Platform["QuizNova-AI Examination Platform"]
        subgraph AuthZone["Authentication & Identity"]
            UC1(["1-Click Google OAuth & Credentials"])
            UC2(["Role-Based Dashboard Authorization"])
        end

        subgraph StudentZone["Student Assessment Operations"]
            UC3(["Browse Syllabus & PYQ Textbooks"])
            UC4(["Take Live Exam with Fullscreen Proctoring"])
            UC5(["Download Offline Encrypted Quiz (.quizpkg)"])
            UC6(["Solve Offline & Auto-Sync on Reconnect"])
            UC7(["View AI Bloom Diagnostic Scorecard"])
        end

        subgraph EducatorZone["Educator Authoring & Analytics"]
            UC8(["AI Question Synthesis with Bloom Tiers"])
            UC9(["Manual Question Forge & LaTeX Formulae"])
            UC10(["Configure Passing Criteria & Timer Rules"])
            UC11(["Monitor Student Attempt Violations"])
            UC12(["Aggregate Performance Analytics"])
        end
    end

    Student --> UC1
    Student --> UC2
    Student --> UC3
    Student --> UC4
    Student --> UC5
    Student --> UC6
    Student --> UC7

    Educator --> UC1
    Educator --> UC2
    Educator --> UC8
    Educator --> UC9
    Educator --> UC10
    Educator --> UC11
    Educator --> UC12

    classDef studentActor fill:#ecfdf5,stroke:#059669,stroke-width:2.5px,color:#064e3b,font-weight:bold,rx:8px
    classDef educatorActor fill:#eff6ff,stroke:#2563eb,stroke-width:2.5px,color:#1e3a8a,font-weight:bold,rx:8px
    classDef authUsecase fill:#fdf4ff,stroke:#c026d3,stroke-width:1.5px,color:#701a75,font-size:13px
    classDef edUsecase fill:#eff6ff,stroke:#3b82f6,stroke-width:1.5px,color:#1e40af,font-size:13px
    classDef stUsecase fill:#f0fdf4,stroke:#10b981,stroke-width:1.5px,color:#065f46,font-size:13px

    class Student studentActor
    class Educator educatorActor
    class UC1,UC2 authUsecase
    class UC3,UC4,UC5,UC6,UC7 stUsecase
    class UC8,UC9,UC10,UC11,UC12 edUsecase`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#eff6ff',
        primaryTextColor: '#1e3a8a',
        primaryBorderColor: '#3b82f6',
        lineColor: '#64748b',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.2.1_Admin_Use_Case',
    title: 'Figure 3.3: Admin Dedicated Use-Case & Assessment Creation Flow',
    code: `flowchart LR
    Admin["Super Admin / System Director"]

    subgraph Console["QuizNova-AI Central Administration & Governance Subsystem"]
        direction TB
        subgraph UserGov["1. User & Identity Governance"]
            AUC1(["Account Verification & Role Elevation"])
            AUC2(["Student & Educator Directory Audits"])
        end

        subgraph CurriculumGov["2. Academic Curriculum Management"]
            AUC3(["Subject & Chapter Hierarchy Configuration"])
            AUC4(["Balbharati Textbook & PYQ Asset Management"])
        end

        subgraph SecurityGov["3. Integrity, Security & Proctoring"]
            AUC5(["Tab-Switch & Blur Incident Log Review"])
            AUC6(["Offline Encrypted Sync Reconciliation"])
        end

        subgraph SystemGov["4. System Infrastructure & Health"]
            AUC7(["Database Snapshot & Backup Operations"])
            AUC8(["AI Gateway API Quota & Latency Monitoring"])
        end
    end

    Admin --> AUC1
    Admin --> AUC2
    Admin --> AUC3
    Admin --> AUC4
    Admin --> AUC5
    Admin --> AUC6
    Admin --> AUC7
    Admin --> AUC8

    classDef adminActor fill:#fff1f2,stroke:#e11d48,stroke-width:2.5px,color:#881337,font-weight:bold,rx:10px
    classDef case1 fill:#f0fdf4,stroke:#16a34a,stroke-width:1.5px,color:#14532d
    classDef case2 fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e3a8a
    classDef case3 fill:#fff7ed,stroke:#ea580c,stroke-width:1.5px,color:#7c2d12
    classDef case4 fill:#faf5ff,stroke:#9333ea,stroke-width:1.5px,color:#581c87

    class Admin adminActor
    class AUC1,AUC2 case1
    class AUC3,AUC4 case2
    class AUC5,AUC6 case3
    class AUC7,AUC8 case4`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#f8fafc',
        primaryTextColor: '#0f172a',
        primaryBorderColor: '#64748b',
        lineColor: '#64748b',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.3_Sequence_Diagram',
    title: 'Figure 3.4: High-Concurrency Sequence Diagram for Proctored Assessment Lifecycle',
    code: `sequenceDiagram
    autonumber
    actor Educator as Educator
    actor Student as Student
    participant UI as Next.js Client
    participant ExamSvc as Exam Engine Controller
    participant AISvc as AI Bloom Synthesizer
    participant DB as SQLite DB (Prisma ORM)

    Note over Educator,DB: Phase 1: AI Question Synthesis & Exam Publishing
    Educator->>UI: Input Topic ("Physics Gravitation", 5 MCQs, Tier: High)
    UI->>ExamSvc: POST /api/quiz/generate-ai
    ExamSvc->>AISvc: Synthesize Questions with Bloom Rationale
    AISvc-->>ExamSvc: Return Validated MCQs + Options + Explanations
    ExamSvc-->>UI: Display in Question Forge Editor
    Educator->>UI: Configure Duration (30 mins) & Click "Publish Exam"
    UI->>ExamSvc: POST /api/quiz/create
    ExamSvc->>DB: INSERT INTO quizzes & questions
    DB-->>ExamSvc: Success (Record Created)
    ExamSvc-->>UI: 201 Created (Exam Live in Catalog)

    Note over Student,DB: Phase 2: Proctored Exam Execution & Anti-Cheat
    Student->>UI: Select Exam & Click "Start Proctored Attempt"
    UI->>ExamSvc: GET /api/quiz/:id
    ExamSvc->>DB: Query Quiz & Randomized Questions
    DB-->>ExamSvc: Return Exam Package
    ExamSvc-->>UI: Launch Fullscreen Proctored Room

    critical Focus Loss Sentinel Active
        Student-->>UI: Tab Switch / Focus Loss Detected
        UI->>UI: Increment violationCount & Trigger Modal Warning
    end

    Note over Student,DB: Phase 3: Submission & AI Diagnostic Evaluation
    Student->>UI: Click "Submit Exam"
    UI->>ExamSvc: POST /api/quiz/:id/submit {answers, violationCount}
    ExamSvc->>DB: Fetch Correct Answer Keys & Calculate Score
    ExamSvc->>AISvc: Analyze Student Mastery across Bloom Tiers
    AISvc-->>ExamSvc: Return Diagnostic Insights & Recommendations
    ExamSvc->>DB: INSERT INTO quiz_attempts (score, bloomData, violations)
    DB-->>ExamSvc: Attempt Persisted
    ExamSvc-->>UI: Deliver Final Diagnostic Scorecard
    UI-->>Student: Display Score, Bloom Radar & Concept Breakdown`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#eff6ff',
        primaryTextColor: '#1e3a8a',
        primaryBorderColor: '#3b82f6',
        actorBkg: '#f8fafc',
        actorBorder: '#2563eb',
        actorTextColor: '#0f172a',
        signalColor: '#1e40af',
        signalTextColor: '#1e293b',
        labelBoxBkgColor: '#f1f5f9',
        labelBoxBorderColor: '#94a3b8',
        labelTextColor: '#0f172a',
        loopTextColor: '#dc2626',
        noteBkgColor: '#fef3c7',
        noteBorderColor: '#f59e0b',
        noteTextColor: '#78350f',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.4_Activity_Diagram',
    title: 'Figure 3.5: System Activity Diagram for Exam Execution and Anti-Cheating Supervision',
    code: `flowchart TD
    Start([System Entry: User Authentication]) --> AuthDecision{"Credentials Valid?"}
    AuthDecision -->|No| AuthError["Show Auth Error & Retry"]
    AuthError --> Start
    AuthDecision -->|Yes| RoleRoute{"User Role?"}

    subgraph EducatorFlow["Educator Workflow: Assessment Authoring & Publishing"]
        E1["Access AI Question Forge Console"] --> E2["Specify Topic, Grade & Bloom Distribution"]
        E2 --> E3["AI Generates Validated MCQs & Distractors"]
        E3 --> E4{"Manual Review & Tuning?"}
        E4 -->|Edit| E5["Refine Question Text, Options & LaTeX"]
        E4 -->|Accept| E6["Configure Exam Rules (Timer, Passing Score, Offline Mode)"]
        E5 --> E6
        E6 --> E7["Publish Exam to Academic Catalog"]
        E7 --> E_End([Exam Live in Catalog])
    end

    subgraph StudentFlow["Student Workflow: Examination & Anti-Cheat Supervision"]
        S1["Browse Academic Catalog & Select Exam"] --> S2{"Execution Mode?"}
        
        S2 -->|Offline Computer Lab| S3["Download Encrypted .quizpkg Bundle"]
        S3 --> S4["Execute in Local Sandbox (IndexedDB)"]
        S4 --> S5["Encrypt Attempt Locally on Disk"]
        S5 --> S6["Auto-Sync Pending Attempts When Online"]

        S2 -->|Online Live Exam| S7["Launch Fullscreen Proctored Room"]
        S7 --> S8["Answer Questions Under Countdown Timer"]
        S8 --> S9{"Tab Switch / Blur Detected?"}
        S9 -->|Yes| S10["Log Violation & Trigger Warning Alert"]
        S10 --> S8
        S9 -->|No| S11["Review Marked Answers"]
        S11 --> S12["Finalize & Submit Responses"]

        S6 --> S13["Automated Answer Matrix Grading"]
        S12 --> S13
        S13 --> S14["AI Bloom Cognitive Diagnostics Engine"]
        S14 --> S15["Render Interactive Mastery Scorecard"]
        S15 --> S_End([Assessment Complete])
    end

    RoleRoute -->|Educator| E1
    RoleRoute -->|Student| S1

    classDef startEnd fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#ffffff,font-weight:bold,rx:20px
    classDef decision fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f,font-weight:bold
    classDef stepEducator fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e3a8a,rx:6px
    classDef stepStudent fill:#f0fdf4,stroke:#059669,stroke-width:1.5px,color:#064e3b,rx:6px
    classDef warningStep fill:#fef2f2,stroke:#dc2626,stroke-width:1.5px,color:#991b1b,font-weight:bold,rx:6px

    class Start,E_End,S_End startEnd
    class AuthDecision,RoleRoute,E4,S2,S9 decision
    class E1,E2,E3,E5,E6,E7 stepEducator
    class S1,S3,S4,S5,S6,S7,S8,S11,S12,S13,S14,S15 stepStudent
    class S10,AuthError warningStep`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#f8fafc',
        primaryTextColor: '#0f172a',
        primaryBorderColor: '#64748b',
        lineColor: '#475569',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.5.1_Level_0_DFD',
    title: 'Figure 3.6: Data Flow Diagram (DFD) Level 0 - Context Level System Boundary',
    code: `flowchart TD
    Student["Candidate / Student"]
    Educator["Educator / Teacher"]
    Admin["Super Admin"]

    Platform(["0.0<br/><b>QuizNova-AI Core Platform</b><br/>(Next.js + Prisma ORM + AI Engine)"])
    
    Database[("Unified Relational Database<br/>(Users, Quizzes, Questions, Attempts)")]
    AIService[["AI Bloom Synthesizer<br/>(Gemini / OpenAI Engine)"]]

    Student -->|"1. Credentials, Exam Responses, Offline Sync Batch"| Platform
    Platform -->|"2. Available Tests, Proctored Room, AI Scorecard"| Student

    Educator -->|"3. Exam Specifications, Custom MCQs, Grading Rules"| Platform
    Platform -->|"4. Synthesized Bloom Questions, Class Analytics"| Educator

    Admin -->|"5. User Moderation, Curriculum Assets, Sync Oversight"| Platform
    Platform -->|"6. System Audit Logs, Health Metrics, Violation Records"| Admin

    Platform <-->|"Database Transactions & Schema Queries"| Database
    Platform <-->|"Prompt Synthesis & Diagnostic Feedback"| AIService

    classDef entity fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a,font-weight:bold,rx:8px
    classDef coreSystem fill:#1e1b4b,stroke:#6366f1,stroke-width:3px,color:#ffffff,font-weight:bold,font-size:15px,rx:18px
    classDef store fill:#f0fdf4,stroke:#059669,stroke-width:2px,color:#064e3b,font-weight:bold
    classDef extService fill:#faf5ff,stroke:#9333ea,stroke-width:2px,color:#581c87,font-weight:bold

    class Student,Educator,Admin entity
    class Platform coreSystem
    class Database store
    class AIService extService`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        lineColor: '#334155',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.5.2_Level_1_DFD',
    title: 'Figure 3.7: Data Flow Diagram (DFD) Level 1 - Subsystem Functional Decomposition',
    code: `flowchart TB
    Student["Student"]
    Educator["Educator"]

    P1(["1.0 Authentication & Identity Management"])
    P2(["2.0 AI Question Synthesizer & Question Forge"])
    P3(["3.0 Proctored Exam Execution & Anti-Cheat"])
    P4(["4.0 Evaluation & Bloom Diagnostic Engine"])
    P5(["5.0 Offline Packaging & Sync Reconciliation"])

    subgraph DataStores["Central Relational Data Repository"]
        DS1[("D1: Users & Auth Records")]
        DS2[("D2: Quizzes, Questions & Keys")]
        DS3[("D3: Quiz Attempts & Bloom Diagnostics")]
        DS4[("D4: Offline Package Cache & Sync Queue")]
    end

    Student & Educator -->|"Registration & Credentials"| P1
    P1 <-->|"Verify & Persist"| DS1
    P1 -->|"JWT / Session Token"| Student & Educator

    Educator -->|"Topic, Count & Bloom Distribution"| P2
    P2 <-->|"Persist Exam & Questions"| DS2
    P2 -->|"Generated Question Array"| Educator

    Student -->|"Start Exam Request"| P3
    DS2 -->|"Read Randomized Questions"| P3
    P3 -->|"Exam Telemetry & Proctor Warnings"| Student
    Student -->|"Submitted Responses & Tab Blur Log"| P3
    P3 -->|"Raw Submission Data"| P4

    DS2 -->|"Correct Answer Keys"| P4
    P4 <-->|"Persist Score & Diagnostic Breakdown"| DS3
    P4 -->|"Scorecard & AI Feedback"| Student
    DS3 -->|"Class Performance Trends"| Educator

    Educator & Student -->|"Export / Download Package"| P5
    DS2 -->|"Read Exam Data"| P5
    P5 -->|"Export .quizpkg Bundle"| Educator & Student
    Student -->|"Upload Pending Sync Queue"| P5
    P5 <-->|"Queue Verification"| DS4
    P5 -->|"Forward Validated Submissions"| P4

    classDef userNode fill:#eff6ff,stroke:#1d4ed8,stroke-width:2px,color:#1e3a8a,font-weight:bold,rx:6px
    classDef procNode fill:#ffffff,stroke:#6366f1,stroke-width:2px,color:#1e1b4b,font-weight:bold,rx:12px
    classDef storeNode fill:#f0fdf4,stroke:#15803d,stroke-width:2px,color:#14532d,font-weight:bold

    class Student,Educator userNode
    class P1,P2,P3,P4,P5 procNode
    class DS1,DS2,DS3,DS4 storeNode`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        lineColor: '#475569',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.5.3_Level_2A_DFD',
    title: 'Figure 3.8: Data Flow Diagram (DFD) Level 2A - Assessment Creation & Bloom Engine',
    code: `flowchart TD
    Student["Student Client (Browser)"]

    subgraph Subsystem3["Process 3.0: Online Exam Execution & Anti-Cheat Subsystem"]
        P3_1["3.1 Session Timer & Question Navigation Engine"]
        P3_2["3.2 Fullscreen & Tab-Switch Blur Sentinel"]
        P4_1["4.1 Answer Matrix Scoring Engine"]
        P4_2["4.2 Bloom Taxonomy Diagnostic Formulator"]
    end

    subgraph RelationalDB["Central Database"]
        T_Quiz[("quizzes & questions")]
        T_Attempt[("quiz_attempts")]
    end

    Student -->|"1. Select Option A/B/C/D"| P3_1
    Student -->|"2. Window Blur Event"| P3_2
    P3_2 -->|"3. Increment violationCount"| P3_1
    P3_1 -->|"4. Display Anti-Cheat Warning"| Student

    P3_1 -->|"5. Final Submit Payload"| P4_1
    T_Quiz -->|"6. Fetch Answer Keys"| P4_1
    P4_1 -->|"7. Raw Score & Correct Tally"| P4_2
    P4_2 -->|"8. Write Graded Attempt"| T_Attempt
    T_Attempt -->|"9. Deliver Comprehensive Scorecard"| Student

    classDef studentBox fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a,font-weight:bold,rx:6px
    classDef procBox fill:#ffffff,stroke:#6366f1,stroke-width:2px,color:#1e1b4b,rx:8px
    classDef dbBox fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#14532d,font-weight:bold

    class Student studentBox
    class P3_1,P3_2,P4_1,P4_2 procBox
    class T_Quiz,T_Attempt dbBox`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        lineColor: '#475569',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.5.4_Level_2B_DFD',
    title: 'Figure 3.9: Data Flow Diagram (DFD) Level 2B - Exam Execution & Proctoring Sub-Process',
    code: `flowchart TD
    Student["Student Workstation (Offline Lab)"]

    subgraph Subsystem5["Process 5.0: Offline Packaging & Sync Engine"]
        P5_1["5.1 Package Bundler & Cryptographic Signer"]
        P5_2["5.2 IndexedDB / LocalStorage Cache Manager"]
        P5_3["5.3 Offline Exam Execution Sandbox"]
        P5_4["5.4 Batch Sync Reconciliation Engine"]
    end

    subgraph ServerStore["Central Server Database"]
        DB_Quizzes[("quizzes & questions")]
        DB_Attempts[("quiz_attempts")]
    end

    Student -->|"1. Request 'Download for Offline'"| P5_1
    DB_Quizzes -->|"2. Extract Exam Payload"| P5_1
    P5_1 -->|"3. Export Encrypted .quizpkg"| P5_2

    P5_2 -->|"4. Load Local Quiz into Sandbox"| P5_3
    Student -->|"5. Complete Exam (No Internet)"| P5_3
    P5_3 -->|"6. Store Attempt (synced=false)"| P5_2

    Student -->|"7. Reconnect & Trigger 'Sync Now'"| P5_4
    P5_2 -->|"8. Read Pending Attempts Array"| P5_4
    P5_4 -->|"9. Validate & Insert Attempts"| DB_Attempts
    DB_Attempts -->|"10. Deliver Sync Confirmation"| Student

    classDef studentBox fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a,font-weight:bold,rx:6px
    classDef procBox fill:#ffffff,stroke:#6366f1,stroke-width:2px,color:#1e1b4b,rx:8px
    classDef dbBox fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#14532d,font-weight:bold

    class Student studentBox
    class P5_1,P5_2,P5_3,P5_4 procBox
    class DB_Quizzes,DB_Attempts dbBox`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        lineColor: '#475569',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.5.6_Gantt_Chart',
    title: 'Figure 3.10: Project SDLC Gantt Chart & Engineering Sprint Schedule',
    code: `gantt
    dateFormat  YYYY-MM-DD
    title Project Engineering & SDLC Sprint Timeline
    excludes    weekends

    section Sprint 1: Architecture
    Requirements & Feasibility Survey :done, s1_1, 2026-06-01, 14d
    Prisma Database Schema & Domain Model :done, s1_2, after s1_1, 14d

    section Sprint 2: Core Platform
    Next.js UI & Responsive Retro Design :done, s2_1, after s1_2, 14d
    1-Click Google OAuth & Auth Hub :done, s2_2, after s2_1, 14d

    section Sprint 3: AI & Proctoring
    AI Question Forge with Bloom Taxonomy :done, s3_1, after s2_2, 14d
    Proctoring Sentinel & Tab-Switch Detector :done, s3_2, after s3_1, 14d

    section Sprint 4: Offline & Library
    Offline IndexedDB Cache & .quizpkg Sync :done, s4_1, after s3_2, 14d
    41 Balbharati Textbooks & 36-Yr PYQ Archive :done, s4_2, after s4_1, 14d

    section Sprint 5: Testing & Deployment
    Comprehensive End-to-End Testing :done, s5_1, after s4_2, 14d
    Vercel Deployment & Academic Black Book :done, s5_2, after s5_1, 14d`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#e0e7ff',
        primaryTextColor: '#1e1b4b',
        primaryBorderColor: '#4f46e5',
        sectionBkgColor: '#f8fafc',
        altSectionBkgColor: '#ffffff',
        taskBorderColor: '#3b82f6',
        taskBkgColor: '#3b82f6',
        taskTextLightColor: '#ffffff',
        taskTextColor: '#ffffff',
        activeTaskBorderColor: '#10b981',
        activeTaskBkgColor: '#10b981',
        gridColor: '#e2e8f0',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  },
  {
    name: '3.7_ER_Diagram',
    title: 'Figure 3.11: Entity-Relationship (E-R) Diagram (Single Unified Relational Schema)',
    code: `erDiagram
    USERS ||--o{ QUIZZES : "authors (1:N)"
    USERS ||--o{ QUIZ_ATTEMPTS : "submits (1:N)"
    USERS ||..o{ OTP_VERIFICATIONS : "verifies email (1:N)"
    QUIZZES ||--|{ QUESTIONS : "contains (1:N)"
    QUIZZES ||--o{ QUIZ_ATTEMPTS : "recorded_in (1:N)"

    USERS {
        string id PK "UUID primary key"
        string name "User full name"
        string email UK "Unique login email"
        string password_hash "Bcrypt salted hash"
        string role "STUDENT | EDUCATOR"
        string phone_number "Optional contact"
        datetime created_at "Registration date"
    }

    QUIZZES {
        string id PK "UUID primary key"
        string educator_id FK "References USERS(id)"
        string title "Assessment title"
        string topic "Subject / Concept area"
        string difficulty "Easy | Medium | Hard"
        int duration_minutes "Exam time limit"
        float passing_score "Passing percentage"
        boolean is_published "Catalog visibility"
        boolean allow_offline "Export flag"
    }

    QUESTIONS {
        string id PK "UUID primary key"
        string quiz_id FK "References QUIZZES(id)"
        string question_text "Full question statement"
        json options "Array of 4 options"
        int correct_answer "Zero-based index (0-3)"
        string bloom_level "Remember | Apply | Analyze"
        string rationale "AI conceptual explanation"
        int points "Marks allocated"
    }

    QUIZ_ATTEMPTS {
        string id PK "UUID primary key"
        string quiz_id FK "References QUIZZES(id)"
        string student_id FK "References USERS(id)"
        float score_obtained "Marks scored"
        float total_marks "Maximum marks"
        float percentage "Normalized score %"
        json bloom_data "6-tier cognitive breakdown"
        int violation_count "Tab blur & exit events"
        datetime completed_at "Submission timestamp"
    }

    OTP_VERIFICATIONS {
        string id PK "UUID primary key"
        string email UK "Target user email"
        string otp "6-digit secure code"
        datetime expires_at "Expiry timestamp"
    }`,
    mermaidConfig: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#eff6ff',
        primaryTextColor: '#1e3a8a',
        primaryBorderColor: '#3b82f6',
        lineColor: '#475569',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        let errData = '';
        res.on('data', chunk => errData += chunk);
        res.on('end', () => reject(new Error(`HTTP ${res.statusCode}: ${errData}`)));
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(resolve);
      });
    }).on('error', reject);
  });
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function run() {
  console.log('--- Generating Ultra High-Res, Modern Styled Diagrams ---');

  let htmlGallery = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>QuizNova-AI Upgraded Modern Visual Diagrams</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #0f172a; padding: 40px 20px; margin: 0; color: #f8fafc; }
    .container { max-width: 1200px; margin: 0 auto; }
    h1 { text-align: center; color: #38bdf8; margin-bottom: 8px; font-size: 32px; }
    p.sub { text-align: center; color: #94a3b8; margin-bottom: 40px; font-size: 16px; }
    .card { background: #1e293b; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.4); padding: 28px; margin-bottom: 40px; border: 1px solid #334155; }
    .card h2 { margin-top: 0; color: #f1f5f9; border-bottom: 1px solid #334155; padding-bottom: 14px; font-size: 20px; display: flex; justify-content: space-between; align-items: center; }
    .img-wrapper { background: #ffffff; border-radius: 12px; padding: 20px; margin: 20px 0; display: flex; justify-content: center; align-items: center; box-shadow: inset 0 2px 6px rgba(0,0,0,0.06); }
    .card img { max-width: 100%; height: auto; display: block; border-radius: 6px; }
    .btn { background: #0284c7; color: white; padding: 8px 18px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: bold; transition: background 0.2s; }
    .btn:hover { background: #0369a1; }
    .btn-svg { background: #059669; margin-left: 8px; }
    .btn-svg:hover { background: #047857; }
    .hint { font-size: 13px; color: #94a3b8; font-style: italic; margin-top: 10px; }
    code { background: #334155; padding: 2px 6px; border-radius: 4px; color: #38bdf8; }
  </style>
</head>
<body>
  <div class="container">
    <h1>QuizNova-AI Modern Visual Diagrams</h1>
    <p class="sub">High-Resolution (Retina Scale), Modern Colors, Crisp Typography & Professional Engineering Layouts</p>
`;

  for (let i = 0; i < diagrams.length; i++) {
    const item = diagrams[i];
    const payload = {
      code: item.code,
      mermaid: item.mermaidConfig || { theme: 'default' }
    };
    const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');
    
    // High-resolution URLs with width and scale
    const imgUrl = 'https://mermaid.ink/img/' + b64 + '?bgColor=!white&width=1800&scale=2';
    const svgUrl = 'https://mermaid.ink/svg/' + b64 + '?bgColor=!white';
    
    const pngPath = path.join(outputDir, item.name + '.png');
    const svgPath = path.join(outputDir, item.name + '.svg');

    console.log(`[${i+1}/${diagrams.length}] Generating ${item.name} ...`);

    let attempts = 0;
    let success = false;
    while (attempts < 3 && !success) {
      attempts++;
      try {
        await downloadFile(imgUrl, pngPath);
        await downloadFile(svgUrl, svgPath);
        console.log(`  ✓ Saved: ${item.name}.png & .svg`);
        success = true;
      } catch (err) {
        console.warn(`  ⚠ Attempt ${attempts} failed for ${item.name}: ${err.message}`);
        await delay(2000);
      }
    }

    if (!success) {
      console.error(`  ❌ Failed to download ${item.name}`);
    }

    htmlGallery += `
    <div class="card">
      <h2>
        <span>${item.title}</span>
        <div>
          <a class="btn" href="${item.name}.png" download>Download PNG</a>
          <a class="btn btn-svg" href="${item.name}.svg" download>Download SVG</a>
        </div>
      </h2>
      <div class="img-wrapper">
        <img src="${item.name}.png" alt="${item.title}">
      </div>
      <p class="hint">Location: <code>Project_Diagrams_Word/${item.name}.png</code></p>
    </div>
    `;

    // Polite delay between API calls to avoid rate limiting
    await delay(1200);
  }

  htmlGallery += `</div></body></html>`;
  fs.writeFileSync(path.join(outputDir, 'diagrams_preview.html'), htmlGallery, 'utf8');
  console.log('\nAll diagrams generated successfully in: ' + outputDir);
}

run();
