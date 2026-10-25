const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.resolve(__dirname, '..', 'Project_Diagrams_Word');

const code = `flowchart TD
    Start([Start]) --> Login[User Login]
    Login --> RoleCheck{"User Role?"}
    
    RoleCheck -->|Educator| OpenForge[Open AI Question Forge]
    OpenForge --> InputTopic[Input Topic and Difficulty]
    InputTopic --> GenerateAI[AI Generates Questions and Rationales]
    GenerateAI --> ReviewQuiz{"Review and Edit?"}
    ReviewQuiz -->|Yes| EditQ[Modify Text or Options]
    EditQ --> SetRules[Configure Duration and Pass Marks]
    ReviewQuiz -->|No| SetRules
    SetRules --> Deploy[Publish and Deploy Quiz]
    Deploy --> EndEducator([Quiz Live for Students])

    RoleCheck -->|Student| Browse[Browse Syllabus and Select Quiz]
    Browse --> NetCheck{"Connectivity Mode?"}
    NetCheck -->|Offline| DLPkg[Download quizpkg Bundle]
    DLPkg --> SolveOffline[Solve in Offline Computer Lab]
    SolveOffline --> LocalSave[Encrypt and Save Locally]
    LocalSave --> Reconnect[Reconnect to Internet and Sync Queue]
    Reconnect --> Submit
    
    NetCheck -->|Online| EnterRoom[Enter Live Proctored Exam Room]
    EnterRoom --> AnswerQ[Answer Questions with Timer]
    AnswerQ --> TabDetect{"Window Blur Detected?"}
    TabDetect -->|Yes| Warning[Log Proctor Violation and Alert]
    TabDetect -->|No| Submit[Finalize and Submit Exam]
    Warning --> Submit
    
    Submit --> AutoGrade[Auto-Score vs Answer Key]
    AutoGrade --> AIBloom[AI Generates Concept Rationale]
    AIBloom --> RenderCard[Display Interactive Scorecard]
    RenderCard --> EndStudent([End])`;

const payload = {
  code,
  mermaid: { theme: 'default' }
};

const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');
const imgUrl = 'https://mermaid.ink/img/' + b64 + '?bgColor=!white';
const svgUrl = 'https://mermaid.ink/svg/' + b64 + '?bgColor=!white';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error('Failed: ' + response.statusCode));
      }
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  await downloadFile(imgUrl, path.join(outputDir, '3.4_Activity_Diagram.png'));
  await downloadFile(svgUrl, path.join(outputDir, '3.4_Activity_Diagram.svg'));
  console.log('✓ Successfully saved 3.4_Activity_Diagram.png and .svg!');
}

run();
