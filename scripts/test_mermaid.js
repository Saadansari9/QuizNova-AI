const https = require('https');

function test(code, label) {
  const payload = { code, mermaid: { theme: 'default' } };
  const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');
  return new Promise(resolve => {
    https.get('https://mermaid.ink/svg/' + b64, res => {
      console.log(label, '->', res.statusCode);
      resolve();
    });
  });
}

async function run() {
  // Option A: Flat flowchart TD without subgraphs
  const codeFlat = `flowchart TD
    Start([System Entry: User Authentication]) --> LoginCheck{Credentials Valid?}
    LoginCheck -->|No| LoginError[Display Authentication Error]
    LoginError --> Start
    LoginCheck -->|Yes| RoleSelect{Select User Role}

    RoleSelect -->|Educator| E_Forge[Access AI Question Forge]
    E_Forge --> E_Prompt[Specify Topic, Grade & Bloom Distribution]
    E_Prompt --> E_Gen[AI Generates Validated MCQs & Distractors]
    E_Gen --> E_Review{Manual Review & Tuning?}
    E_Review -->|Edit| E_Edit[Refine Question Text, Options & LaTeX]
    E_Review -->|Accept| E_Rules[Configure Time Limit, Passing Score & Offline Mode]
    E_Edit --> E_Rules
    E_Rules --> E_Deploy[Deploy & Publish Exam to Academic Catalog]
    E_Deploy --> E_End([Exam Live in Catalog])

    RoleSelect -->|Student| S_Browse[Browse Academic Catalog & Select Exam]
    S_Browse --> S_Mode{Exam Delivery Mode?}

    S_Mode -->|Offline Computer Lab| S_OfflineDL[Download Encrypted .quizpkg Bundle]
    S_OfflineDL --> S_OfflinePlay[Execute in Local Sandbox & IndexedDB]
    S_OfflinePlay --> S_LocalSave[Encrypt Attempt Locally on Disk]
    S_LocalSave --> S_SyncReconnect[Auto-Sync Submissions When Reconnected]

    S_Mode -->|Online Live Exam| S_LiveRoom[Enter Fullscreen Proctored Exam Room]
    S_LiveRoom --> S_AnswerLoop[Answer Questions Under Countdown Timer]
    S_AnswerLoop --> S_BlurDetect{Window Blur / Tab Switch Detected?}
    S_BlurDetect -->|Yes| S_Warn[Increment Violation Counter & Trigger Warning]
    S_Warn --> S_AnswerLoop
    S_BlurDetect -->|No| S_Verify[Review Selected Answers]
    S_Verify --> S_FinalSubmit[Finalize & Submit Responses]

    S_SyncReconnect --> S_Grade[Automated Answer Key Scoring Matrix]
    S_FinalSubmit --> S_Grade
    S_Grade --> S_BloomDiag[AI Bloom Cognitive Diagnostic Evaluation]
    S_BloomDiag --> S_Scorecard[Deliver Interactive Performance Scorecard]
    S_Scorecard --> S_End([Assessment Lifecycle Complete])

    classDef startEnd fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef decision fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f,font-weight:bold
    classDef stepEducator fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e3a8a
    classDef stepStudent fill:#f0fdf4,stroke:#059669,stroke-width:1.5px,color:#064e3b
    classDef warnStep fill:#fef2f2,stroke:#dc2626,stroke-width:1.5px,color:#991b1b,font-weight:bold

    class Start,E_End,S_End startEnd
    class LoginCheck,RoleSelect,E_Review,S_Mode,S_BlurDetect decision
    class E_Forge,E_Prompt,E_Gen,E_Edit,E_Rules,E_Deploy stepEducator
    class S_Browse,S_OfflineDL,S_OfflinePlay,S_LocalSave,S_SyncReconnect,S_LiveRoom,S_AnswerLoop,S_Verify,S_FinalSubmit,S_Grade,S_BloomDiag,S_Scorecard stepStudent
    class S_Warn,LoginError warnStep`;

  await test(codeFlat, 'Option A: Flat flowchart with classes');
}

run();
