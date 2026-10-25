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
    title: '3.1 Class Diagram',
    code: `classDiagram
    class User {
        +String id
        +String name
        +String email
        +String passwordHash
        +String role
        +validatePassword(plainPassword) Boolean
    }

    class Quiz {
        +String id
        +String educatorId
        +String title
        +String topic
        +String difficulty
        +Int durationMinutes
        +Int passPercentage
        +Boolean allowOffline
        +exportPackage() Object
    }

    class Question {
        +String id
        +String quizId
        +String questionText
        +String[] options
        +Int correctAnswer
        +String explanation
        +String bloomLevel
        +Int points
        +checkAnswer(selectedIndex) Boolean
    }

    class QuizAttempt {
        +String id
        +String quizId
        +String studentId
        +Float score
        +Float percentage
        +Boolean isPassed
        +Int tabSwitchCount
        +String aiFeedbackSummary
        +Boolean isOfflineSynced
    }

    class AuthController {
        +register(data)
        +login(credentials)
        +googleLogin(role)
        +logout()
    }

    class ExamController {
        +fetchAvailableQuizzes()
        +startExamSession(quizId)
        +submitExam(answers, tabSwitches)
        +syncOfflineAttempts(batch)
    }

    class AISynthesizerService {
        +generateQuestions(topic, count, difficulty)
        +generateDiagnosticFeedback(score, topic)
    }

    class OfflineStorageManager {
        +saveQuizOffline(pkg)
        +recordAttemptLocally(attempt)
        +getPendingSyncQueue()
    }

    User "1" --> "0..*" Quiz : creates
    User "1" --> "0..*" QuizAttempt : submits
    Quiz "1" *-- "1..*" Question : contains
    Quiz "1" --> "0..*" QuizAttempt : evaluated_in
    ExamController ..> Quiz : manages
    ExamController ..> QuizAttempt : records
    ExamController ..> AISynthesizerService : invokes
    OfflineStorageManager ..> Quiz : caches`
  },
  {
    name: '3.2_Use_Case_Diagram',
    title: '3.2 Use-Case Diagram',
    code: `flowchart LR
    Student((Student))
    Educator((Educator))

    subgraph SystemBoundary["QuizNova-AI Platform"]
        UC1(["1. Register & Authenticate (OTP / Google)"])
        UC2(["2. Browse Syllabus Compartments & PYQs"])
        UC3(["3. Take Live Proctored Exam (Tab-Switch Monitored)"])
        UC4(["4. Download Encrypted Offline Exam (.quizpkg)"])
        UC5(["5. Sync Offline Submissions"])
        UC6(["6. View AI Diagnostic Scorecard"])
        UC7(["7. AI Question Synthesis (Bloom Taxonomy)"])
        UC8(["8. Manual Question Authoring & Editing"])
        UC9(["9. Publish & Configure Exam Rules"])
        UC10(["10. Export Offline Exam Bundle"])
        UC11(["11. View Aggregate Performance Analytics"])
    end

    Student --> UC1
    Student --> UC2
    Student --> UC3
    Student --> UC4
    Student --> UC5
    Student --> UC6

    Educator --> UC1
    Educator --> UC7
    Educator --> UC8
    Educator --> UC9
    Educator --> UC10
    Educator --> UC11`
  },
  {
    name: '3.2.1_Admin_Use_Case',
    title: '3.2.1 Admin Use-Case Diagram',
    code: `flowchart LR
    Admin((Admin / Super Educator))

    subgraph AdminSubsystem["QuizNova-AI Admin Management Console"]
        AUC1(["User Management (Activate / Deactivate Accounts)"])
        AUC2(["Curriculum & Subject Configuration (Class 9-12)"])
        AUC3(["Global Exam Moderation & Content Approval"])
        AUC4(["Proctoring Violation Audits & Flagged Attempts"])
        AUC5(["Offline Cryptographic Sync Queue Inspection"])
        AUC6(["System Performance & Database Backup"])
    end

    Admin --> AUC1
    Admin --> AUC2
    Admin --> AUC3
    Admin --> AUC4
    Admin --> AUC5
    Admin --> AUC6`
  },
  {
    name: '3.3_Sequence_Diagram',
    title: '3.3 Sequence Diagram',
    code: `sequenceDiagram
    autonumber
    actor Student as Student
    actor Educator as Educator
    participant Frontend as Next.js Client
    participant Controller as Exam / Quiz Controller
    participant AIService as AI Bloom Synthesizer
    participant DB as Unified Database (Prisma)

    Educator->>Frontend: Enter Topic, Count (5) & Bloom Level
    Frontend->>Controller: POST /api/quiz/generate-ai
    Controller->>AIService: generateQuestions(topic, count, difficulty)
    AIService-->>Controller: Return validated MCQs + explanations
    Controller-->>Frontend: Display generated questions in Editor
    Educator->>Frontend: Set time limit (30m) & click "Publish Quiz"
    Frontend->>Controller: POST /api/quiz/create
    Controller->>DB: INSERT Quiz and Questions records
    DB-->>Controller: Saved successfully
    Controller-->>Frontend: 201 Created

    Student->>Frontend: Select Quiz & click "Start Exam"
    Frontend->>Controller: GET /api/quiz/:id
    Controller->>DB: Fetch Quiz & randomized Question array
    DB-->>Controller: Quiz payload
    Controller-->>Frontend: Render active proctored exam room
    
    opt Focus Loss Detection
        Student->>Frontend: Switches window/tab
        Frontend->>Frontend: Increment tabSwitchCount & trigger warning
    end

    Student->>Frontend: Finalize & Submit Test
    Frontend->>Controller: POST /api/quiz/:id/submit
    Controller->>DB: Compare options with correct answer keys
    Controller->>AIService: Formulate Bloom diagnostic feedback
    AIService-->>Controller: Feedback summary text
    Controller->>DB: INSERT QuizAttempt record
    DB-->>Controller: Saved Attempt
    Controller-->>Frontend: Return Scorecard with AI Rationale
    Frontend-->>Student: Display visual mastery badge & analytics`
  },
  {
    name: '3.4_Activity_Diagram',
    title: '3.4 Activity Diagram',
    code: `flowchart TD
    Start([Start]) --> Login[User Authentication]
    Login --> RoleCheck{Role?}
    
    RoleCheck -->|Educator| OpenForge[Open AI Question Forge]
    OpenForge --> InputPrompt[Input Topic & Difficulty]
    InputPrompt --> GenerateAI[AI Generates Questions & Rationales]
    GenerateAI --> ReviewQuiz{Review & Edit?}
    ReviewQuiz -->|Yes| EditQ[Modify Text / Options]
    EditQ --> SetRules[Set Duration, Pass % & Offline Mode]
    ReviewQuiz -->|No| SetRules
    SetRules --> Deploy[Deploy & Publish to Exam Catalog]
    Deploy --> EndEducator([Quiz Live for Students])

    RoleCheck -->|Student| Browse[Browse Syllabus & Select Quiz]
    Browse --> NetCheck{Connectivity Mode?}
    NetCheck -->|Offline| DLPkg[Download .quizpkg Bundle]
    DLPkg --> SolveOffline[Solve in Offline Computer Lab]
    SolveOffline --> LocalSave[Encrypt & Save in Browser LocalStorage]
    LocalSave --> Reconnect[Reconnect to Internet & Sync Queue]
    Reconnect --> Submit
    
    NetCheck -->|Online| EnterRoom[Enter Live Proctored Exam Room]
    EnterRoom --> AnswerQ[Answer Questions with Timer]
    AnswerQ --> TabDetect{Window Blur Detected?}
    TabDetect -->|Yes| Warning[Log Violation & Alert Student]
    TabDetect -->|No| AnswerQ
    Warning --> AnswerQ
    AnswerQ --> Submit[Finalize & Submit Exam]
    
    Submit --> AutoGrade[Auto-Score Evaluation vs Answer Key]
    AutoGrade --> AIBloom[AI Generates Concept Rationale Summary]
    AIBloom --> RenderCard[Render Interactive Scorecard]
    RenderCard --> EndStudent([End])`
  },
  {
    name: '3.5.1_Level_0_DFD',
    title: '3.5.1 Level 0 DFD (Context Diagram)',
    code: `flowchart TD
    Student["Student"]
    Educator["Educator"]
    System(["0.0<br/>QuizNova-AI Core Platform"])
    DB[("Unified Database Store")]

    Student -->|"1. Credentials, Exam Answers, Sync Packets"| System
    System -->|"2. Available Tests, Proctor Warnings, AI Scorecard"| Student

    Educator -->|"3. Credentials, Exam Specs, Custom Questions"| System
    System -->|"4. Synthesized Bloom Questions, Class Analytics"| Educator

    System <-->|"Read / Write Operations via Prisma ORM"| DB`
  },
  {
    name: '3.5.2_Level_1_DFD',
    title: '3.5.2 Level 1 DFD (Functional Decomposition)',
    code: `flowchart TB
    S["Student"]
    E["Educator"]

    P1(["1.0 Authentication & User Session Engine"])
    P2(["2.0 AI Question Synthesizer & Authoring"])
    P3(["3.0 Exam Execution & Anti-Cheat Proctor"])
    P4(["4.0 Evaluation & Bloom Feedback Generator"])
    P5(["5.0 Offline Packaging & Sync Engine"])

    subgraph DataStore["Central Storage"]
        DS1[("Users & Credentials")]
        DS2[("Quizzes & Questions")]
        DS3[("Quiz Attempts & Analytics")]
    end

    S & E -->|"Sign In / Register Data"| P1
    P1 <-->|"Verify & Persist"| DS1
    P1 -->|"Session Token"| S & E

    E -->|"Topic & Difficulty Specs"| P2
    P2 <-->|"Store Quiz & Questions"| DS2
    P2 -->|"Generated Question Array"| E

    S -->|"Start Test Request"| P3
    DS2 -->|"Read Questions"| P3
    P3 -->|"Exam Room Telemetry"| S
    S -->|"Submitted Responses"| P3
    P3 -->|"Raw Submission Data"| P4

    DS2 -->|"Answer Keys"| P4
    P4 <-->|"Store Score & Rationale"| DS3
    P4 -->|"Scorecard & AI Report"| S
    DS3 -->|"Performance Trends"| E

    E & S -->|"Download Package"| P5
    DS2 -->|"Read Exam Data"| P5
    P5 -->|"Export .quizpkg"| E & S
    S -->|"Upload Pending Sync Batch"| P5
    P5 -->|"Forward Submissions"| P4`
  },
  {
    name: '3.5.3_Level_2A_DFD',
    title: '3.5.3 Level 2A DFD (Online Exam & Live Proctoring)',
    code: `flowchart TD
    Student["Student Client"]

    subgraph ExamProc["Process 3.0: Online Exam Execution Subsystem"]
        P3_1["3.1 Session Timer & Question Navigation"]
        P3_2["3.2 Focus Loss & Tab-Switch Detector"]
        P4_1["4.1 Answer Matrix Scoring Engine"]
        P4_2["4.2 Bloom Taxonomy Diagnostic Formulator"]
    end

    subgraph Database["Database Tables"]
        T_Quiz[("quizzes & questions")]
        T_Attempt[("quiz_attempts")]
    end

    Student -->|"Select Option A/B/C/D"| P3_1
    Student -->|"Window Blur Event"| P3_2
    P3_2 -->|"Increment Violation Count"| P3_1
    P3_1 -->|"Submit Payload"| P4_1
    T_Quiz -->|"Fetch Correct Answer Keys"| P4_1
    P4_1 -->|"Raw Marks & Accuracy %"| P4_2
    P4_2 -->|"Insert Graded Record"| T_Attempt
    T_Attempt -->|"Deliver Final AI Scorecard"| Student`
  },
  {
    name: '3.5.4_Level_2B_DFD',
    title: '3.5.4 Level 2B DFD (Offline Exam & Batch Sync)',
    code: `flowchart TD
    Student["Student Browser"]

    subgraph OfflineSystem["Process 5.0: Offline Sync Architecture"]
        P5_1["5.1 Package Bundler & SHA Checksum Generator"]
        P5_2["5.2 Local Storage Cache Manager"]
        P5_3["5.3 Offline Exam Execution Sandbox"]
        P5_4["5.4 Batch Sync Reconciliation Engine"]
    end

    subgraph CentralDB["Server Database"]
        DB_Quizzes[("quizzes")]
        DB_Attempts[("quiz_attempts")]
    end

    Student -->|"Click 'Save Offline'"| P5_1
    DB_Quizzes -->|"Extract Quiz & Question Records"| P5_1
    P5_1 -->|"Encrypted .quizpkg.json"| P5_2

    P5_2 -->|"Load Local Package"| P5_3
    Student -->|"Complete Offline Test"| P5_3
    P5_3 -->|"Record Attempt with Synced=False"| P5_2

    Student -->|"Reconnect & Click 'Sync Now'"| P5_4
    P5_2 -->|"Read Pending Attempts Array"| P5_4
    P5_4 -->|"Insert Graded Attempts"| DB_Attempts
    DB_Attempts -->|"Sync Confirmation"| Student`
  },
  {
    name: '3.5.6_Gantt_Chart',
    title: '3.5.6 Gantt Chart (Project Timeline)',
    code: `flowchart LR
    M1["Week 1-2<br/>Requirements Analysis<br/>& Literature Review"] --> M2["Week 3-4<br/>System Architecture<br/>& Database Design"]
    M2 --> M3["Week 5-6<br/>Frontend Development<br/>Next.js + RetroUI"]
    M3 --> M4["Week 7-8<br/>Backend API Engine<br/>& Auth (OTP/Google)"]
    M4 --> M5["Week 9-10<br/>AI Bloom Synthesizer<br/>& Question Forge"]
    M5 --> M6["Week 11-12<br/>Offline Storage Engine<br/>& Batch Sync Manager"]
    M6 --> M7["Week 13-14<br/>System Testing<br/>& Proctoring Audit"]
    M7 --> M8["Week 15-16<br/>Production Deployment<br/>& Report Documentation"]`
  },
  {
    name: '3.7_ER_Diagram',
    title: '3.7 Entity-Relationship (E-R) Diagram',
    code: `erDiagram
    USERS ||--o{ QUIZZES : "authors (1:N)"
    USERS ||--o{ QUIZ_ATTEMPTS : "submits (1:N)"
    USERS ||..o{ OTP_VERIFICATIONS : "verifies email"
    QUIZZES ||--|{ QUESTIONS : "contains (1:N)"
    QUIZZES ||--o{ QUIZ_ATTEMPTS : "records (1:N)"

    USERS {
        string id PK
        string name
        string email UK
        string phone_number
        string password_hash
        string role
        datetime created_at
    }

    OTP_VERIFICATIONS {
        string id PK
        string email UK
        string otp
        datetime expires_at
    }

    QUIZZES {
        string id PK
        string educator_id FK
        string title
        string topic
        string difficulty
        int duration_minutes
        int pass_percentage
        boolean allow_offline
    }

    QUESTIONS {
        string id PK
        string quiz_id FK
        string question_text
        string options
        int correct_answer
        string explanation
        string bloom_level
        int points
    }

    QUIZ_ATTEMPTS {
        string id PK
        string quiz_id FK
        string student_id FK
        float score
        float max_score
        float percentage
        boolean is_passed
        int time_taken_seconds
        int tab_switch_count
        string ai_feedback_summary
        boolean is_offline_synced
        datetime completed_at
    }`
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error('Failed to download: ' + response.statusCode));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading all diagrams as high-res images...');
  
  let htmlGallery = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>QuizNova-AI Chapter 3 Diagrams (For Word / PDF)</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f6fa; padding: 30px; margin: 0; color: #1e293b; }
    h1 { text-align: center; color: #0f172a; margin-bottom: 8px; }
    p.sub { text-align: center; color: #64748b; margin-bottom: 30px; }
    .card { background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); padding: 24px; margin-bottom: 35px; border: 1px solid #e2e8f0; }
    .card h2 { margin-top: 0; color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; font-size: 18px; display: flex; justify-content: space-between; align-items: center; }
    .card img { max-width: 100%; height: auto; display: block; margin: 20px auto; border: 1px solid #cbd5e1; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); background: white; }
    .btn { background: #3b82f6; color: white; padding: 6px 14px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: bold; }
    .btn:hover { background: #2563eb; }
    .hint { font-size: 12px; color: #64748b; font-style: italic; margin-top: 8px; }
  </style>
</head>
<body>
  <h1>QuizNova-AI Project Report Diagrams</h1>
  <p class="sub">Right click any image below & select <b>"Copy Image"</b>, then paste (Ctrl+V) directly into Microsoft Word or Google Docs!</p>
`;

  for (let i = 0; i < diagrams.length; i++) {
    const item = diagrams[i];
    const payload = {
      code: item.code,
      mermaid: { theme: 'default' }
    };
    const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');
    
    // PNG and SVG URLs
    const imgUrl = 'https://mermaid.ink/img/' + b64 + '?bgColor=!white';
    const svgUrl = 'https://mermaid.ink/svg/' + b64 + '?bgColor=!white';
    
    const pngPath = path.join(outputDir, item.name + '.png');
    const svgPath = path.join(outputDir, item.name + '.svg');

    try {
      console.log('Fetching [' + (i+1) + '/' + diagrams.length + '] ' + item.name + '.png ...');
      await downloadFile(imgUrl, pngPath);
      await downloadFile(svgUrl, svgPath);
      console.log('✓ Saved: ' + item.name + '.png');
    } catch (e) {
      console.error('Error fetching ' + item.name + ':', e.message);
    }

    htmlGallery += `
    <div class="card">
      <h2>
        <span>${item.title}</span>
        <div>
          <a class="btn" href="${item.name}.png" download>Download PNG</a>
          <a class="btn" style="background:#10b981; margin-left:6px;" href="${item.name}.svg" download>Download SVG</a>
        </div>
      </h2>
      <img src="${item.name}.png" alt="${item.title}">
      <p class="hint">File Name: <code>${item.name}.png</code> (Located in <code>Project_Diagrams_Word/</code>)</p>
    </div>
    `;
  }

  htmlGallery += `</body></html>`;
  fs.writeFileSync(path.join(outputDir, 'diagrams_preview.html'), htmlGallery, 'utf8');
  console.log('All diagrams generated and saved in: ' + outputDir);
}

run();
