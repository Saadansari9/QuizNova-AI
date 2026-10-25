const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.resolve(__dirname, '..', 'Project_Diagrams_Word');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const diagrams = [
  {
    name: '3.4_Activity_Diagram',
    title: '3.4 Activity Diagram',
    code: `flowchart TD
    Start([Start]) --> Login[User Authentication]
    Login --> RoleCheck{Role?}
    
    RoleCheck -->|Educator| OpenForge[Open AI Question Forge]
    OpenForge --> InputPrompt[Input Topic and Difficulty]
    InputPrompt --> GenerateAI[AI Generates Questions and Rationales]
    GenerateAI --> ReviewQuiz{Review and Edit?}
    ReviewQuiz -->|Yes| EditQ[Modify Text or Options]
    EditQ --> SetRules[Set Duration, Pass Target and Offline Mode]
    ReviewQuiz -->|No| SetRules
    SetRules --> Deploy[Deploy and Publish to Exam Catalog]
    Deploy --> EndEducator([Quiz Live for Students])

    RoleCheck -->|Student| Browse[Browse Syllabus and Select Quiz]
    Browse --> NetCheck{Connectivity Mode?}
    NetCheck -->|Offline| DLPkg[Download quizpkg Bundle]
    DLPkg --> SolveOffline[Solve in Offline Computer Lab]
    SolveOffline --> LocalSave[Encrypt and Save in LocalStorage]
    LocalSave --> Reconnect[Reconnect to Internet and Sync Queue]
    Reconnect --> Submit
    
    NetCheck -->|Online| EnterRoom[Enter Live Proctored Exam Room]
    EnterRoom --> AnswerQ[Answer Questions with Timer]
    AnswerQ --> TabDetect{Window Blur Detected?}
    TabDetect -->|Yes| Warning[Log Violation and Alert Student]
    TabDetect -->|No| AnswerQ
    Warning --> AnswerQ
    AnswerQ --> Submit[Finalize and Submit Exam]
    
    Submit --> AutoGrade[Auto-Score Evaluation vs Answer Key]
    AutoGrade --> AIBloom[AI Generates Concept Summary]
    AIBloom --> RenderCard[Render Interactive Scorecard]
    RenderCard --> EndStudent([End])`
  },
  {
    name: '3.5.2_Level_1_DFD',
    title: '3.5.2 Level 1 DFD (Functional Decomposition)',
    code: `flowchart TB
    Student["Student"]
    Educator["Educator"]

    P1(["1.0 Authentication and Session Engine"])
    P2(["2.0 AI Question Synthesizer"])
    P3(["3.0 Exam Execution and Proctor"])
    P4(["4.0 Evaluation and Feedback Engine"])
    P5(["5.0 Offline Packaging and Sync"])

    subgraph DataStore["Central Storage"]
        DS1[("Users and Credentials")]
        DS2[("Quizzes and Questions")]
        DS3[("Quiz Attempts and Analytics")]
    end

    Student & Educator -->|"Sign In Data"| P1
    P1 <-->|"Verify and Persist"| DS1
    P1 -->|"Session Token"| Student & Educator

    Educator -->|"Topic Specs"| P2
    P2 <-->|"Store Quiz and Questions"| DS2
    P2 -->|"Generated Questions"| Educator

    Student -->|"Start Exam"| P3
    DS2 -->|"Read Questions"| P3
    P3 -->|"Exam Room Telemetry"| Student
    Student -->|"Submitted Responses"| P3
    P3 -->|"Raw Submission Data"| P4

    DS2 -->|"Answer Keys"| P4
    P4 <-->|"Store Score"| DS3
    P4 -->|"Scorecard"| Student
    DS3 -->|"Performance Trends"| Educator

    Educator & Student -->|"Download Package"| P5
    DS2 -->|"Read Exam Data"| P5
    P5 -->|"Export quizpkg"| Educator & Student
    Student -->|"Upload Sync Batch"| P5
    P5 -->|"Forward Submissions"| P4`
  },
  {
    name: '3.5.3_Level_2A_DFD',
    title: '3.5.3 Level 2A DFD (Online Exam & Live Proctoring)',
    code: `flowchart TD
    Student["Student Client"]

    subgraph ExamProc["Process 3.0: Online Exam Execution Subsystem"]
        P3_1["3.1 Session Timer and Navigation"]
        P3_2["3.2 Focus Loss and Tab Detector"]
        P4_1["4.1 Answer Matrix Scoring Engine"]
        P4_2["4.2 Bloom Diagnostic Formulator"]
    end

    subgraph Database["Database Tables"]
        T_Quiz[("quizzes and questions")]
        T_Attempt[("quiz_attempts")]
    end

    Student -->|"Select Option"| P3_1
    Student -->|"Window Blur Event"| P3_2
    P3_2 -->|"Increment Violation Count"| P3_1
    P3_1 -->|"Submit Payload"| P4_1
    T_Quiz -->|"Fetch Correct Answer Keys"| P4_1
    P4_1 -->|"Raw Marks and Accuracy"| P4_2
    P4_2 -->|"Insert Graded Record"| T_Attempt
    T_Attempt -->|"Deliver Final AI Scorecard"| Student`
  },
  {
    name: '3.5.4_Level_2B_DFD',
    title: '3.5.4 Level 2B DFD (Offline Exam & Batch Sync)',
    code: `flowchart TD
    Student["Student Browser"]

    subgraph OfflineSystem["Process 5.0: Offline Sync Architecture"]
        P5_1["5.1 Package Bundler"]
        P5_2["5.2 Local Storage Cache Manager"]
        P5_3["5.3 Offline Exam Execution Sandbox"]
        P5_4["5.4 Batch Sync Reconciliation Engine"]
    end

    subgraph CentralDB["Server Database"]
        DB_Quizzes[("quizzes")]
        DB_Attempts[("quiz_attempts")]
    end

    Student -->|"Click Save Offline"| P5_1
    DB_Quizzes -->|"Extract Quiz and Question Records"| P5_1
    P5_1 -->|"Encrypted quizpkg json"| P5_2

    P5_2 -->|"Load Local Package"| P5_3
    Student -->|"Complete Offline Test"| P5_3
    P5_3 -->|"Record Attempt with Synced False"| P5_2

    Student -->|"Reconnect and Click Sync Now"| P5_4
    P5_2 -->|"Read Pending Attempts Array"| P5_4
    P5_4 -->|"Insert Graded Attempts"| DB_Attempts
    DB_Attempts -->|"Sync Confirmation"| Student`
  }
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
  for (let i = 0; i < diagrams.length; i++) {
    const item = diagrams[i];
    const payload = {
      code: item.code,
      mermaid: { theme: 'default' }
    };
    const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');
    const imgUrl = 'https://mermaid.ink/img/' + b64 + '?bgColor=!white';
    const svgUrl = 'https://mermaid.ink/svg/' + b64 + '?bgColor=!white';
    
    const pngPath = path.join(outputDir, item.name + '.png');
    const svgPath = path.join(outputDir, item.name + '.svg');

    console.log('Fetching ' + item.name + '...');
    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await downloadFile(imgUrl, pngPath);
        await downloadFile(svgUrl, svgPath);
        console.log('✓ Successfully saved: ' + item.name + '.png');
        success = true;
        break;
      } catch (e) {
        console.log('Attempt ' + attempt + ' failed for ' + item.name + ': ' + e.message + ', retrying in 3s...');
        await sleep(3000);
      }
    }
    await sleep(2500);
  }
  console.log('All remaining diagrams saved successfully!');
}

run();
