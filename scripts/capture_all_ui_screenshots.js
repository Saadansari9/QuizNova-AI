const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const desktopDir = path.resolve('C:\\Users\\mohammed saad\\OneDrive\\Desktop\\QuizNova_All_Images');
const projectDir = path.resolve(__dirname, '..', 'Project_UI_Screenshots');
const artifactDir = path.resolve('C:\\Users\\mohammed saad\\.gemini\\antigravity\\brain\\5ea6a609-404f-416f-b8fc-79047196e534\\images');

if (!fs.existsSync(desktopDir)) fs.mkdirSync(desktopDir, { recursive: true });
if (!fs.existsSync(projectDir)) fs.mkdirSync(projectDir, { recursive: true });
if (!fs.existsSync(artifactDir)) fs.mkdirSync(artifactDir, { recursive: true });

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function saveScreenshot(page, filename) {
  const p1 = path.join(desktopDir, filename);
  const p2 = path.join(projectDir, filename);
  const p3 = path.join(artifactDir, filename);

  await page.screenshot({ path: p1, fullPage: false });
  fs.copyFileSync(p1, p2);
  fs.copyFileSync(p1, p3);
  console.log(`✓ Saved: ${filename}`);
}

async function run() {
  console.log('--- Launching Edge Headless to Capture All Chapter 4 UI Screenshots ---');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

  // 1. Figure 4.1: Login Interface
  console.log('Capturing Figure 4.1: Login Interface...');
  await page.goto('http://localhost:3000/login', { waitUntil: 'domcontentloaded' });
  await delay(1800);
  await saveScreenshot(page, 'Figure_4.1_Login_Interface.png');

  // Helper to set user in localStorage
  const setStudentAuth = async () => {
    await page.evaluate(() => {
      const student = {
        id: 'usr_student_saad',
        name: 'Mohammed Saad (Student)',
        email: 'saadansari.learner@gmail.com',
        role: 'Student',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('quiznova_current_user', JSON.stringify(student));
      document.cookie = `token=active_session_${Date.now()}; path=/; max-age=604800; SameSite=Lax`;
    });
  };

  const setEducatorAuth = async () => {
    await page.evaluate(() => {
      const educator = {
        id: 'usr_educator_saad',
        name: 'Prof. Mohammed Saad (Educator)',
        email: 'saadansari.educator@gmail.com',
        role: 'Educator',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('quiznova_current_user', JSON.stringify(educator));
      document.cookie = `token=active_session_${Date.now()}; path=/; max-age=604800; SameSite=Lax`;
    });
  };

  // 2. Figure 4.2: Student Dashboard
  console.log('Capturing Figure 4.2: Student Dashboard...');
  await setStudentAuth();
  await page.goto('http://localhost:3000/dashboard/student', { waitUntil: 'domcontentloaded' });
  await delay(2000);
  await saveScreenshot(page, 'Figure_4.2_Student_Dashboard.png');

  // 2B. Figure 4.2B: Educator Dashboard
  console.log('Capturing Figure 4.2B: Educator Dashboard...');
  await setEducatorAuth();
  await page.goto('http://localhost:3000/dashboard/educator', { waitUntil: 'domcontentloaded' });
  await delay(2000);
  await saveScreenshot(page, 'Figure_4.2B_Educator_Dashboard.png');

  // 3. Figure 4.3: Create Assessment Studio
  console.log('Capturing Figure 4.3: Create Assessment Studio...');
  await setEducatorAuth();
  await page.goto('http://localhost:3000/dashboard/educator/create', { waitUntil: 'domcontentloaded' });
  await delay(2000);
  await saveScreenshot(page, 'Figure_4.3_Create_Assessment_Studio.png');

  // 4. Figure 4.4: 36-Year Board PYQ Search Vault
  console.log('Capturing Figure 4.4: Search Assessment & PYQs...');
  await setStudentAuth();
  await page.goto('http://localhost:3000/dashboard/student/pyqs', { waitUntil: 'domcontentloaded' });
  await delay(2000);
  await saveScreenshot(page, 'Figure_4.4_Search_Assessment_PYQs.png');

  // 4B. Figure 4.4B: In-App Balbharati Textbooks Reader
  console.log('Capturing Figure 4.4B: Balbharati Digital Textbooks Reader...');
  await setStudentAuth();
  await page.goto('http://localhost:3000/textbooks', { waitUntil: 'domcontentloaded' });
  await delay(2000);
  await saveScreenshot(page, 'Figure_4.4B_Balbharati_Textbooks_Reader.png');

  // 5. Figure 4.5: View Assessment Details & Syllabus Overview
  console.log('Capturing Figure 4.5: View Assessment Details...');
  await setStudentAuth();
  await page.goto('http://localhost:3000/dashboard/student', { waitUntil: 'domcontentloaded' });
  await delay(1800);
  // Scroll to exam catalog cards to frame assessment details & syllabus topics
  await page.evaluate(() => {
    const examHeader = Array.from(document.querySelectorAll('h2, h3')).find(el => el.textContent.includes('AVAILABLE EXAMINATIONS'));
    if (examHeader) examHeader.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await delay(800);
  await saveScreenshot(page, 'Figure_4.5_View_Assessment_Details.png');

  // 6. Figure 4.6: Take Assessment Player (Live Exam Interface)
  console.log('Capturing Figure 4.6: Take Assessment Player & Fullscreen Exam Room...');
  await setStudentAuth();
  await page.goto('http://localhost:3000/quiz/quiz_mb_sci_10_01/take', { waitUntil: 'domcontentloaded' });
  await delay(2500);
  await saveScreenshot(page, 'Figure_4.6_Take_Assessment_Player.png');

  // 7. Figure 4.7: Proctoring Flag & Alert Modal Notification Screen
  console.log('Capturing Figure 4.7: Proctoring Flag & Alert Modal...');
  // Trigger tab switch violation modal
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { value: true, writable: true, configurable: true });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await delay(1000);
  await saveScreenshot(page, 'Figure_4.7_Proctoring_Flag_Modal.png');

  // 8. Figure 4.8: Cognitive Diagnostic Report (Bloom's Taxonomy Scorecard)
  console.log('Capturing Figure 4.8: Cognitive Diagnostic Report...');
  await setStudentAuth();
  await page.goto('http://localhost:3000/quiz/quiz_mb_sci_10_01/result/att_demo_mastery_01', { waitUntil: 'domcontentloaded' });
  await delay(2500);
  await saveScreenshot(page, 'Figure_4.8_Cognitive_Diagnostic_Report.png');

  // 9. Figure 4.9: Error & Fallback Boundary (404 Fallback)
  console.log('Capturing Figure 4.9: Error & Fallback Boundary...');
  await page.goto('http://localhost:3000/compartment-non-existent-fallback', { waitUntil: 'domcontentloaded' });
  await delay(1800);
  await saveScreenshot(page, 'Figure_4.9_Error_Fallback_Boundary.png');

  await browser.close();
  console.log('\n--- ALL CHAPTER 4 UI SCREENSHOTS SUCCESSFULLY CAPTURED! ---');
}

run().catch(console.error);
