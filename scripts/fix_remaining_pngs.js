const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.resolve(__dirname, '..', 'Project_Diagrams_Word');

const diagrams = [
  {
    name: '3.5.2_Level_1_DFD',
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
    name: '3.5.4_Level_2B_DFD',
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
  for (const item of diagrams) {
    const payload = { code: item.code, mermaid: { theme: 'default' } };
    const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');
    const imgUrl = 'https://mermaid.ink/img/' + b64 + '?bgColor=!white';
    await downloadFile(imgUrl, path.join(outputDir, item.name + '.png'));
    console.log('✓ Saved ' + item.name + '.png');
    await new Promise(r => setTimeout(r, 2000));
  }
}

run();
