const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.resolve(__dirname, '..', 'Project_Diagrams_Word');

const code = `flowchart TD
    Start([System Start: User Login]) --> LoginCheck{"Credentials Valid?"}
    LoginCheck -->|No| LoginError[Show Auth Error & Retry]
    LoginError --> Start
    LoginCheck -->|Yes| RoleCheck{"User Role?"}
    
    RoleCheck -->|Educator| OpenForge[Open AI Question Forge]
    OpenForge --> InputTopic[Input Topic & Difficulty]
    InputTopic --> GenerateAI[AI Generates Questions & Rationales]
    GenerateAI --> ReviewQuiz{"Review & Edit?"}
    ReviewQuiz -->|Yes| EditQ[Modify Text or Options]
    EditQ --> SetRules[Configure Duration & Pass Marks]
    ReviewQuiz -->|No| SetRules
    SetRules --> Deploy[Publish & Deploy Quiz]
    Deploy --> EndEducator([Quiz Live for Students])

    RoleCheck -->|Student| Browse[Browse Syllabus & Select Quiz]
    Browse --> NetCheck{"Connectivity Mode?"}
    NetCheck -->|Offline| DLPkg[Download quizpkg Bundle]
    DLPkg --> SolveOffline[Solve in Offline Computer Lab]
    SolveOffline --> LocalSave[Encrypt & Save Locally]
    LocalSave --> Reconnect[Reconnect to Internet & Sync Queue]
    Reconnect --> Submit
    
    NetCheck -->|Online| EnterRoom[Enter Live Proctored Exam Room]
    EnterRoom --> AnswerQ[Answer Questions with Timer]
    AnswerQ --> TabDetect{"Window Blur Detected?"}
    TabDetect -->|Yes| Warning[Log Proctor Violation & Alert]
    TabDetect -->|No| Submit[Finalize & Submit Exam]
    Warning --> Submit
    
    Submit --> AutoGrade[Auto-Score vs Answer Key]
    AutoGrade --> AIBloom[AI Generates Concept Rationale]
    AIBloom --> RenderCard[Display Interactive Scorecard]
    RenderCard --> EndStudent([End])

    classDef startEnd fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#ffffff,font-weight:bold,rx:16px
    classDef decision fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f,font-weight:bold
    classDef educatorStep fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e3a8a,rx:6px
    classDef studentStep fill:#f0fdf4,stroke:#059669,stroke-width:1.5px,color:#064e3b,rx:6px
    classDef alertStep fill:#fef2f2,stroke:#dc2626,stroke-width:1.5px,color:#991b1b,font-weight:bold,rx:6px

    class Start,EndEducator,EndStudent startEnd
    class LoginCheck,RoleCheck,ReviewQuiz,NetCheck,TabDetect decision
    class OpenForge,InputTopic,GenerateAI,EditQ,SetRules,Deploy educatorStep
    class Browse,DLPkg,SolveOffline,LocalSave,Reconnect,EnterRoom,AnswerQ,Submit,AutoGrade,AIBloom,RenderCard studentStep
    class LoginError,Warning alertStep`;

const payload = {
  code,
  mermaid: {
    theme: 'base',
    themeVariables: {
      primaryColor: '#f8fafc',
      primaryTextColor: '#0f172a',
      primaryBorderColor: '#64748b',
      lineColor: '#475569',
      fontFamily: 'Segoe UI, Arial, sans-serif'
    }
  }
};

const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');
const imgUrl = 'https://mermaid.ink/img/' + b64 + '?bgColor=!white&width=1800&scale=2';
const svgUrl = 'https://mermaid.ink/svg/' + b64 + '?bgColor=!white';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status: ' + res.statusCode));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => stream.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  const destPng = path.join(outputDir, '3.4_Activity_Diagram.png');
  const destSvg = path.join(outputDir, '3.4_Activity_Diagram.svg');
  await downloadFile(imgUrl, destPng);
  await downloadFile(svgUrl, destSvg);
  console.log('✓ Successfully downloaded high-res styled 3.4_Activity_Diagram.png & .svg!');
}

run().catch(console.error);
