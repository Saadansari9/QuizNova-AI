const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.resolve(__dirname, '..', 'Project_Diagrams_Word');

const fullActivityCode = `flowchart TD
    StartNode([Start]) --> LoginNode[User Authentication]
    LoginNode --> RoleChoice{Choose Role}
    
    RoleChoice -->|Educator| ForgeNode[Open AI Question Forge]
    ForgeNode --> InputNode[Input Topic and Difficulty]
    InputNode --> AIGenNode[AI Synthesizes Questions]
    AIGenNode --> ReviewChoice{Review Questions}
    ReviewChoice -->|Edit| EditNode[Modify Options and Rationales]
    EditNode --> ConfigNode[Configure Time Limit and Passing Score]
    ReviewChoice -->|Approve| ConfigNode
    ConfigNode --> DeployNode[Publish Quiz to Exam Catalog]
    DeployNode --> EndEducatorNode([Quiz Live for Students])

    RoleChoice -->|Student| CatalogNode[Browse Syllabus and Select Quiz]
    CatalogNode --> ModeChoice{Select Mode}
    ModeChoice -->|Offline| PkgNode[Download quizpkg Bundle]
    PkgNode --> LabNode[Attempt Test in Offline Lab]
    LabNode --> LocalSaveNode[Save Encrypted Attempt in Browser]
    LocalSaveNode --> SyncNode[Reconnect to Network and Sync]
    SyncNode --> SubmitNode
    
    ModeChoice -->|Online| RoomNode[Enter Proctored Exam Room]
    RoomNode --> AnswerNode[Answer Questions within Timer]
    AnswerNode --> FocusChoice{Focus Lost?}
    FocusChoice -->|Yes| WarnNode[Log Proctor Violation and Alert]
    WarnNode --> SubmitNode[Finalize and Submit Exam]
    FocusChoice -->|No| SubmitNode
    
    SubmitNode --> ScoreNode[Automated Grading vs Answer Key]
    ScoreNode --> BloomNode[AI Synthesizes Concept Summary]
    BloomNode --> CardNode[Display Interactive Scorecard]
    CardNode --> EndStudentNode([End])`;

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
  const payload = { code: fullActivityCode, mermaid: { theme: 'default' } };
  const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');
  const imgUrl = 'https://mermaid.ink/img/' + b64 + '?bgColor=!white';
  const svgUrl = 'https://mermaid.ink/svg/' + b64 + '?bgColor=!white';

  await downloadFile(imgUrl, path.join(outputDir, '3.4_Activity_Diagram.png'));
  await downloadFile(svgUrl, path.join(outputDir, '3.4_Activity_Diagram.svg'));
  console.log('✓ Successfully downloaded 3.4_Activity_Diagram.png and .svg!');
}

run();
