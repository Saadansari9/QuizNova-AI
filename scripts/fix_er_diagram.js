const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = path.resolve(__dirname, '..', 'Project_Diagrams_Word');

const erCode = `erDiagram
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
    }`;

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
    code: erCode,
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

  console.log('Fetching high-res styled 3.7_ER_Diagram ...');
  for (let i = 1; i <= 5; i++) {
    try {
      await downloadFile(imgUrl, path.join(outputDir, '3.7_ER_Diagram.png'));
      await downloadFile(svgUrl, path.join(outputDir, '3.7_ER_Diagram.svg'));
      console.log('✓ Successfully downloaded high-res styled 3.7_ER_Diagram.png & .svg!');
      return;
    } catch (e) {
      console.log(`  Attempt ${i} failed (${e.message}), retrying in 2s...`);
      await delay(2000);
    }
  }
}

run().catch(console.error);
