const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.resolve(__dirname, '..', 'Project_Diagrams_Word');

const fullActivityCode = `flowchart TD
    StartNode([Start: User Authentication]) --> LoginNode[Credentials Verification]
    LoginNode --> RoleChoice{Choose User Role}
    
    RoleChoice -->|Educator| ForgeNode[Open AI Question Forge Console]
    ForgeNode --> InputNode[Input Subject Topic and Bloom Tier]
    InputNode --> AIGenNode[AI Synthesizes Questions and Rationales]
    AIGenNode --> ReviewChoice{Review Questions}
    ReviewChoice -->|Edit| EditNode[Refine Distractors, Keys and LaTeX]
    EditNode --> ConfigNode[Configure Time Limit and Passing Score]
    ReviewChoice -->|Approve| ConfigNode
    ConfigNode --> DeployNode[Publish Quiz to Academic Catalog]
    DeployNode --> EndEducatorNode([Quiz Live in Student Catalog])

    RoleChoice -->|Student| CatalogNode[Browse Syllabus and Select Quiz]
    CatalogNode --> ModeChoice{Select Delivery Mode}
    ModeChoice -->|Offline| PkgNode[Download Encrypted quizpkg Package]
    PkgNode --> LabNode[Attempt Test in Offline Computer Lab]
    LabNode --> LocalSaveNode[Save Encrypted Attempt in IndexedDB]
    LocalSaveNode --> SyncNode[Reconnect to Network and Sync Queue]
    SyncNode --> SubmitNode
    
    ModeChoice -->|Online| RoomNode[Enter Fullscreen Proctored Exam Room]
    RoomNode --> AnswerNode[Answer Questions Under Countdown Timer]
    AnswerNode --> FocusChoice{Focus Lost or Window Blur}
    FocusChoice -->|Yes| WarnNode[Log Proctor Violation and Alert Candidate]
    WarnNode --> SubmitNode[Finalize and Submit Assessment]
    FocusChoice -->|No| SubmitNode
    
    SubmitNode --> ScoreNode[Automated Grading vs Answer Key Matrix]
    ScoreNode --> BloomNode[AI Synthesizes 6-Tier Bloom Diagnostics]
    BloomNode --> CardNode[Display Interactive Performance Scorecard]
    CardNode --> EndStudentNode([End: Assessment Complete])

    classDef startEnd fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#ffffff,font-weight:bold,rx:16px
    classDef decision fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f,font-weight:bold
    classDef educatorStep fill:#eff6ff,stroke:#2563eb,stroke-width:1.5px,color:#1e3a8a,rx:6px
    classDef studentStep fill:#f0fdf4,stroke:#059669,stroke-width:1.5px,color:#064e3b,rx:6px
    classDef alertStep fill:#fef2f2,stroke:#dc2626,stroke-width:1.5px,color:#991b1b,font-weight:bold,rx:6px

    class StartNode,EndEducatorNode,EndStudentNode startEnd
    class RoleChoice,ReviewChoice,ModeChoice,FocusChoice decision
    class ForgeNode,InputNode,AIGenNode,EditNode,ConfigNode,DeployNode educatorStep
    class CatalogNode,PkgNode,LabNode,LocalSaveNode,SyncNode,RoomNode,AnswerNode,SubmitNode,ScoreNode,BloomNode,CardNode studentStep
    class WarnNode alertStep`;

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error('Failed: ' + response.statusCode));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  const payload = {
    code: fullActivityCode,
    mermaid: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#eff6ff',
        primaryTextColor: '#1e3a8a',
        primaryBorderColor: '#3b82f6',
        lineColor: '#475569',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }
    }
  };
  const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');
  const imgUrl = 'https://mermaid.ink/img/' + b64 + '?bgColor=!white&width=1800&scale=2';
  const svgUrl = 'https://mermaid.ink/svg/' + b64 + '?bgColor=!white';

  console.log('Fetching high-res styled 3.4_Activity_Diagram ...');
  for (let i = 1; i <= 5; i++) {
    try {
      await downloadFile(imgUrl, path.join(outputDir, '3.4_Activity_Diagram.png'));
      await downloadFile(svgUrl, path.join(outputDir, '3.4_Activity_Diagram.svg'));
      console.log('✓ Successfully downloaded high-res styled 3.4_Activity_Diagram.png & .svg!');
      return;
    } catch (e) {
      console.log(`  Attempt ${i} failed (${e.message}), retrying in 2s...`);
      await delay(2000);
    }
  }
}

run().catch(console.error);
