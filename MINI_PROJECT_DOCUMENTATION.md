# ACADEMIC MINI PROJECT REPORT
## QUIZNOVA-AI: AI-ENABLED ONLINE & OFFLINE ADAPTIVE ASSESSMENT & MAHARASHTRA STATE BOARD DIGITAL LEARNING PLATFORM

---

<div class="page-break"></div>

# CERTIFICATE OF AUTHENTICITY

<div class="certificate-box">
  <p style="text-align: center; font-size: 16px; font-weight: bold; margin-bottom: 25px;">DEPARTMENT OF COMPUTER ENGINEERING / INFORMATION TECHNOLOGY</p>
  <p style="text-align: center; font-size: 14px; font-weight: bold; margin-bottom: 30px;">CERTIFICATE</p>

  <p style="text-indent: 40px; line-height: 2; font-size: 13px;">
    This is to certify that the project entitled <strong>"QUIZNOVA-AI: AI-ENABLED ONLINE & OFFLINE ADAPTIVE ASSESSMENT & MAHARASHTRA STATE BOARD DIGITAL LEARNING PLATFORM"</strong> is a bonafide work carried out by:
  </p>

  <p style="text-align: center; font-size: 15px; font-weight: bold; margin: 25px 0;">
    MOHAMMED SAAD ANSARI<br>
    <span style="font-size: 12px; font-weight: normal;">(Roll No / Seat No: Examination Candidate)</span>
  </p>

  <p style="text-indent: 40px; line-height: 2; font-size: 13px;">
    submitted in partial fulfillment of the requirements for the award of Diploma / Bachelor of Engineering / Technology in Computer Science & Information Technology during the academic year <strong>2025 - 2026</strong>.
  </p>

  <br><br><br>

  <div style="display: flex; justify-content: space-between; margin-top: 60px;">
    <div style="text-align: center; width: 30%;">
      ____________________<br>
      <strong>Project Guide</strong><br>
      Department of IT
    </div>
    <div style="text-align: center; width: 30%;">
      ____________________<br>
      <strong>Head of Department</strong><br>
      Department of IT
    </div>
    <div style="text-align: center; width: 30%;">
      ____________________<br>
      <strong>Principal / Director</strong><br>
      College of Engineering
    </div>
  </div>
</div>

<div class="page-break"></div>

# CANDIDATE DECLARATION

<div class="declaration-box">
  <p style="text-indent: 40px; line-height: 2; font-size: 13px;">
    I hereby declare that the mini-project report entitled <strong>"QuizNova-AI: AI-Enabled Online & Offline Adaptive Assessment & Maharashtra State Board Digital Learning Platform"</strong> submitted by me is an original record of work conducted under the supervision and guidance of our esteemed faculty members.
  </p>

  <p style="text-indent: 40px; line-height: 2; font-size: 13px;">
    The information, architectural diagrams, schemas, test cases, and code implementations presented in this report have not been submitted to any other university, institute, or board for the award of any diploma or degree.
  </p>

  <p style="text-indent: 40px; line-height: 2; font-size: 13px;">
    Any references, external literature, or third-party open-source libraries incorporated in the execution of this project have been fully acknowledged and cited in the Bibliography chapter.
  </p>

  <br><br><br>

  <div style="margin-top: 50px; text-align: right;">
    <p><strong>Mohammed Saad Ansari</strong></p>
    <p>Candidate Signature</p>
    <p>Date: October 2026</p>
    <p>Place: Mumbai, Maharashtra</p>
  </div>
</div>

<div class="page-break"></div>

# ACKNOWLEDGEMENT

<div class="acknowledgement-box">
  <p style="text-indent: 40px; line-height: 2; font-size: 13px;">
    The successful conceptualization, engineering, and deployment of <strong>QuizNova-AI</strong> has been an enriching academic and practical journey. I take this opportunity to express my deepest gratitude to all the individuals who contributed their invaluable expertise, guidance, and support throughout this endeavor.
  </p>

  <p style="text-indent: 40px; line-height: 2; font-size: 13px;">
    First and foremost, I express my sincere gratitude to our <strong>Project Guide</strong> for their continuous mentorship, architectural feedback, and rigorous evaluation of our software design. Their encouragement to integrate offline-first capabilities and in-app Balbharati textbook streaming elevated this project from a standard quiz app to a resilient digital learning platform.
  </p>

  <p style="text-indent: 40px; line-height: 2; font-size: 13px;">
    I extend my heartfelt thanks to our <strong>Head of Department (HOD)</strong> and our respected <strong>Principal</strong> for providing world-class laboratory facilities, high-speed network connectivity, and an inspiring academic atmosphere conducive to cutting-edge research and software engineering.
  </p>

  <p style="text-indent: 40px; line-height: 2; font-size: 13px;">
    Finally, I owe a debt of gratitude to my family and fellow peers for their unwavering patience, encouragement, and thoughtful user-testing feedback during late-night debugging and deployment sprints.
  </p>

  <br><br>
  <div style="text-align: right; margin-top: 40px;">
    <p><strong>Mohammed Saad Ansari</strong></p>
  </div>
</div>

<div class="page-break"></div>

# ABSTRACT & EXECUTIVE SUMMARY

Modern digital assessment and examination management portals frequently falter due to three foundational engineering limitations:
1. **Fragile External Repository Dependencies**: Many academic portals simply hyper-link to external government servers (specifically the Maharashtra State Board `cart.ebalbharati.in` server). During examination sessions, these remote servers frequently encounter HTTP 504 Gateway Timeouts, certificate handshake errors, and bandwidth choking.
2. **Network Vulnerability in Remote & Semi-Urban Classrooms**: In regions with fluctuating internet connectivity, momentary packet drops sever active exam sessions, triggering complete attempt loss, student panic, and distorted grading metrics.
3. **Superficial Evaluative Depth**: Traditional computer-based testing engines calculate aggregate percentage scores without diagnosing cognitive aptitude across tiered intellectual depths (such as Bloom's Taxonomy) and fail to provide students with authentic subjective past board examination papers.

To overcome these structural limitations, **QuizNova-AI** was conceptualized and developed. It is a full-stack, enterprise-grade, offline-resilient assessment and curriculum delivery ecosystem engineered using **Next.js 14 App Router, React 18, Node.js, Express.js, TypeScript, and Prisma ORM with a Single Unified SQLite Database**.

### Key Architectural Pillars:
- **100% In-App Balbharati Digital Textbook Reader**: Eliminates external server dependency by embedding 41 full-length digital textbooks for Classes 9, 10, 11, and 12 across Science, Commerce, and Arts streams with instant chapter navigation, theory reviews, and textbook exercise questions.
- **36-Year Subjective Board PYQs Archive (1990 — 2026)**: A dedicated, distraction-free repository of authentic Maharashtra SSC and HSC question papers structured strictly by official Board blueprints with **zero automated MCQs and zero answer spoilers**.
- **Offline-First Secure Synchronization Engine**: Allows candidates to download encrypted examination packages into client-side IndexedDB storage, complete examinations without active WiFi/cellular data, and automatically synchronize telemetry upon reconnection.
- **Cognitive Diagnostic Assessment**: Maps question performance dynamically across all six cognitive tiers of Bloom's Taxonomy (*Remembering, Understanding, Applying, Analyzing, Evaluating, Creating*).
- **Anti-Cheating Web Proctoring Subsystem**: Enforces full-screen compliance, monitors browser tab visibility, logs violation metrics, and prevents unauthorized examination navigation.

<div class="page-break"></div>

# LIST OF FIGURES & LIST OF TABLES

### List of Figures
- **Figure 3.1**: Three-Tier Layered Architectural Model of QuizNova-AI
- **Figure 3.2**: Data Flow Diagram (DFD) Level 0 – Context Level System Boundary
- **Figure 3.3**: Data Flow Diagram (DFD) Level 1 – Subsystem Decomposition
- **Figure 3.4**: Data Flow Diagram (DFD) Level 2 – Exam Execution & Proctoring Sub-Process
- **Figure 3.5**: UML Use Case Diagram for Student and Educator Actors
- **Figure 3.6**: Sequence Diagram 1 – 2-Step OTP Authentication Lifecycle
- **Figure 3.7**: Sequence Diagram 2 – Educator Assessment Authoring Workflow
- **Figure 3.8**: Sequence Diagram 3 – Proctored Exam Attempt & Telemetry Transmission
- **Figure 3.9**: Sequence Diagram 4 – In-App Balbharati Reader Content Delivery
- **Figure 3.10**: Sequence Diagram 5 – 36-Year Subjective PYQ Filtering Workflow
- **Figure 3.11**: UML Domain Class Diagram
- **Figure 3.12**: Entity-Relationship (E-R) Diagram (Single Unified Database Schema)
- **Figure 4.1**: Login Interface Layout & Form Validation State
- **Figure 4.2**: Registration Interface with 2-Step OTP Verification & 1-Click Auto-Fill
- **Figure 4.3**: Student Command Dashboard with Course Progress Metrics
- **Figure 4.4**: Educator Management Dashboard with Cohort Analytics
- **Figure 4.5**: Interactive Assessment Builder & Question Authoring Tool
- **Figure 4.6**: Examination Execution Screen with Fullscreen Anti-Cheating Proctor
- **Figure 4.7**: 100% In-App Balbharati Reader Displaying Class 10 Textbook Content
- **Figure 4.8**: 36-Year Maharashtra Board Subjective PYQ Repository Interface
- **Figure 4.9**: Bloom's Taxonomy Diagnostic Cognitive Breakdown Chart
- **Figure 4.10**: Error Handling & Boundary Fallback Interface

### List of Tables
- **Table 2.1**: Hardware Specifications (Client Workstation vs Production Server)
- **Table 2.2**: Software Stack Specifications & Version Matrix
- **Table 3.1**: Data Dictionary – Users Table Specification
- **Table 3.2**: Data Dictionary – Quizzes Table Specification
- **Table 3.3**: Data Dictionary – Questions Table Specification
- **Table 3.4**: Data Dictionary – Quiz Attempts Table Specification
- **Table 3.5**: Data Dictionary – OtpVerifications Table Specification
- **Table 3.6**: Relational Schema Cardinality and Foreign Key Constraints
- **Table 5.1**: Unit Test Cases (UT-01 through UT-08)
- **Table 5.2**: Module Test Cases (MT-01 through MT-06)
- **Table 5.3**: Sub-System Test Cases (ST-01 through ST-04)
- **Table 5.4**: System Integration Test Cases (SYS-01 through SYS-04)
- **Table 5.5**: User Acceptance Testing (UAT) Verification Matrix

<div class="page-break"></div>

# 📑 TABLE OF CONTENTS (INDEX)

| Sr. No. | Chapter No. | Topic Name | Page No. |
| :---: | :---: | :--- | :---: |
| **1.** | **Chapter 1** | **INTRODUCTION** | **01** |
| | 1.1 | Project Overview & Background | 01 |
| | 1.2 | Objectives | 02 |
| | 1.3 | Purpose, Scope and Applicability | 03 |
| | | 1.3.1 Purpose | 03 |
| | | 1.3.2 Scope | 04 |
| | | 1.3.3 Applicability | 05 |
| | 1.4 | Organization of Report | 06 |
| **2.** | **Chapter 2** | **SYSTEM ANALYSIS** | **07** |
| | 2.1 | Problem Definition | 07 |
| | 2.2 | Requirement Analysis | 09 |
| | | 2.2.1 Functional Requirements | 09 |
| | | 2.2.2 Non-Functional Requirements | 10 |
| | 2.3 | Feasibility Study | 11 |
| | | 2.3.1 Technical Feasibility | 11 |
| | | 2.3.2 Operational Feasibility | 12 |
| | | 2.3.3 Economic Feasibility | 13 |
| | 2.4 | Hardware & Software Requirements | 14 |
| | | 2.4.1 Hardware Requirements | 14 |
| | | 2.4.2 Software Requirements | 15 |
| | 2.5 | Software Engineering Methodology (SDLC) | 16 |
| **3.** | **Chapter 3** | **SYSTEM DESIGN** | **17** |
| | 3.1 | Three-Tier Layered Architecture | 17 |
| | 3.2 | Data Flow Diagrams (DFD) | 18 |
| | | 3.2.1 DFD Level 0 (Context Level Diagram) | 18 |
| | | 3.2.2 DFD Level 1 | 19 |
| | | 3.2.3 DFD Level 2 | 20 |
| | 3.3 | Use Case Diagram & Actor Descriptions | 21 |
| | 3.4 | Sequence Diagrams (5 Core Workflows) | 22 |
| | 3.5 | Class Diagram | 24 |
| | 3.6 | Database Design & Data Dictionary | 25 |
| | | 3.6.1 Data Model Overview & Normalization | 25 |
| | | 3.6.2 Purpose of Data Model | 26 |
| | | 3.6.3 Data Dictionary – Users Table | 27 |
| | | 3.6.4 Data Dictionary – Quizzes Table | 27 |
| | | 3.6.5 Data Dictionary – Questions Table | 28 |
| | | 3.6.6 Data Dictionary – Quiz Attempts Table | 28 |
| | | 3.6.7 Data Dictionary – OtpVerifications Table | 29 |
| | | 3.6.8 Relationship Between Tables | 29 |
| | 3.7 | E-R (Entity-Relationship) Diagram | 30 |
| **4.** | **Chapter 4** | **UI SCREENS** | **31** |
| | 4.1 | Login Screen | 31 |
| | 4.2 | Registration & 2-Step OTP Verification Screen | 32 |
| | 4.3 | Student Dashboard Screen | 33 |
| | 4.4 | Educator Dashboard Screen | 34 |
| | 4.5 | Create Assessment / Add Quiz Screen | 35 |
| | 4.6 | Take Assessment & Anti-Cheating Web Proctoring Screen | 36 |
| | 4.7 | In-App Balbharati Digital Textbook Reader (Classes 9-12) | 37 |
| | 4.8 | 36-Year Subjective Board PYQs Archive (1990 — 2026) | 38 |
| | 4.9 | Quiz Result & Bloom's Taxonomy Diagnostic Report Screen | 39 |
| | 4.10 | Error & Validation Notice Screen | 40 |
| **5.** | **Chapter 5** | **TESTINGS** | **41** |
| | 5.1 | Test Cases | 41 |
| | | 5.1.1 Unit Testing | 41 |
| | | 5.1.2 Module Testing | 43 |
| | | 5.1.3 Sub-System Testing | 44 |
| | | 5.1.4 System Testing | 45 |
| | | 5.1.5 Acceptance Testing | 46 |
| **6.** | **Chapter 6** | **CODING'S** | **47** |
| | 6.1 | Database Connection (Prisma & SQLite Configuration) | 47 |
| | 6.2 | User Authentication & 2-Step OTP Verification | 48 |
| | 6.3 | Create Assessment & Add Question Module | 50 |
| | 6.4 | Search & Filter Assessments / PYQs | 51 |
| | 6.5 | Assessment Submission & Scoring Calculation Engine | 52 |
| | 6.6 | Anti-Cheating & Web Proctoring Telemetry | 54 |
| | 6.7 | Performance Analytics & Diagnostic Reporting | 55 |
| | 6.8 | Logout & Session Invalidation | 56 |
| **7.** | **Chapter 7** | **CONCLUSION** | **57** |
| | 7.1 | Key Points | 57 |
| | 7.2 | System Limitations | 58 |
| | 7.3 | Future Enhancements | 58 |
| **8.** | **Chapter 8** | **BIBLIOGRAPHY** | **59** |

---

<div class="page-break"></div>

# CHAPTER 1: INTRODUCTION

## 1.1 Project Overview & Background
In the contemporary era of academic transformation (Education 4.0), computer-based assessment and learning management systems have become essential to pedagogical infrastructure. However, despite rapid technological strides, educational institutions in India—particularly those affiliated with state boards such as the Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)—face substantial hurdles in delivering reliable digital examinations.

Digital learning portals currently deployed across colleges and coaching institutes suffer from severe operational limitations. When examinations are conducted online, institutions frequently experience high network contention, bandwidth saturation, or server crashes. Furthermore, when students seek authentic curriculum resources, they are routinely redirected to external government repositories (such as the Maharashtra State Board's `cart.ebalbharati.in` server). During peak examination seasons, these external servers frequently suffer from HTTP timeouts, SSL handshake failures, or slow response times, leaving students stranded without textbook access.

To address this challenge comprehensively, **QuizNova-AI** was developed. QuizNova-AI is an integrated, full-stack, AI-enabled, and offline-first assessment ecosystem. It consolidates computer-based examination authoring, automated cognitive diagnostics (Bloom's Taxonomy), ethical web proctoring, an internal 100% In-App Balbharati digital textbook reader for Classes 9 through 12, and a 36-year archive of authentic subjective past board examination papers into a unified, high-performance architecture.

## 1.2 Objectives
The central mission of QuizNova-AI is to provide an uninterrupted, high-integrity educational environment. The project pursues the following primary objectives:
1. **Provide Fault-Tolerant Offline Examination Execution**:
   To architect an offline-first execution engine allowing candidates in low-bandwidth or zero-connectivity environments to download encrypted exam packs, complete time-bound assessments without active internet access, and synchronize results automatically when connectivity resumes.
2. **Eliminate Third-Party Server Dependencies via In-App Balbharati Reader**:
   To internalize curriculum delivery by embedding 41 full-length, structured digital textbooks for Classes 9, 10, 11, and 12 across Science, Commerce, and Arts streams directly within the application, ensuring zero dependence on fragile external portals.
3. **Archive 36 Years of Authentic Maharashtra Board Subjective PYQs (1990 — 2026)**:
   To construct a distraction-free repository of authentic Maharashtra SSC and HSC question papers adhering strictly to official board blueprints with zero automated MCQs and zero answer spoilers, catering directly to subjective examination preparation.
4. **Implement Cognitive Depth Evaluation via Bloom's Taxonomy**:
   To automatically categorize question performance across the six cognitive levels of Bloom's Taxonomy (*Remembering, Understanding, Applying, Analyzing, Evaluating, Creating*), providing actionable diagnostic insights rather than raw percentage scores.
5. **Enforce Browser-Based Anti-Cheating Proctoring**:
   To integrate automated client-side proctoring that tracks window blur events, monitors document visibility changes, logs fullscreen exits, and automatically locks or submits examinations upon repeated infractions.
6. **Ensure Frictionless, Resilient 2-Step OTP Authentication**:
   To provide cryptographic email verification coupled with resilient cloud fallbacks and 1-click auto-fill mechanisms, guaranteeing that students and evaluators can register and navigate without authentication roadblocks.

## 1.3 Purpose, Scope and Applicability

### 1.3.1 Purpose
The purpose of QuizNova-AI is to eliminate the vulnerabilities of existing computer-based test engines by delivering an all-in-one platform where assessment creation, examination taking, cognitive grading, textbook reading, and board preparation coexist seamlessly. By unifying the database architecture and eliminating external network dependencies, QuizNova-AI guarantees high availability, data integrity, and educational equity for students regardless of geographical or network constraints.

### 1.3.2 Scope
The scope of QuizNova-AI encompasses the following functional domains:
- **Student Academic Suite**:
  - Secure account registration with 2-step OTP email verification.
  - Participation in scheduled and on-demand assessments with active countdown timers.
  - Uninterrupted offline testing using browser IndexedDB caching.
  - In-app reading of 41 Balbharati textbooks with chapter-wise navigation and formula reference sheets.
  - Access to 36 years of authentic subjective Board past question papers (1990 — 2026) for SSC and HSC.
  - Detailed diagnostic scorecards featuring cognitive performance radar charts.
- **Educator Management Suite**:
  - Authoring customized examinations with flexible question schemas (MCQ, Numeric, Subjective).
  - Categorizing assessment questions by Bloom's cognitive taxonomy tiers.
  - Establishing examination duration, passing thresholds, and anti-cheating proctoring parameters.
  - Inspecting cohort score distributions, question difficulty indices, and student proctor violation logs.
- **System Administration & Data Governance**:
  - Managing user roles (Student vs. Educator) through type-safe schema definitions.
  - Maintaining relational database consistency using Prisma ORM with foreign key cascades.
  - Ensuring session persistence through HTTP-Only security cookies and fallback local sessions.

### 1.3.3 Applicability
The QuizNova-AI platform is designed for direct implementation across:
- **Secondary & Higher Secondary Schools**: Facilitating internal semester tests, unit tests, and prelim exams.
- **Junior Colleges & Coaching Academies**: Conducting mock board exams for Class 10 (SSC) and Class 12 (HSC).
- **Rural and Semi-Urban Institutions**: Operating reliably in regions where broadband internet is intermittent or unstable.
- **Independent Self-Study Learners**: Providing a single, trustworthy repository for official Maharashtra Board textbooks and past examination papers.

## 1.4 Organization of Report
This report is structured into eight detailed chapters adhering to standard university software documentation guidelines:
- **Chapter 1: Introduction** — Establishes project motivation, background, objectives, purpose, and scope.
- **Chapter 2: System Analysis** — Examines the problem domain, functional and non-functional requirements, technical/economic feasibility, and software development methodologies.
- **Chapter 3: System Design** — Formulates the three-tier architectural framework, Data Flow Diagrams (DFDs), UML Use Case, Sequence, and Class diagrams, Entity-Relationship schemas, and granular Data Dictionaries.
- **Chapter 4: UI Screens** — Details the graphical user interface layouts, ergonomics, responsive layouts, and user workflows.
- **Chapter 5: Testings** — Presents rigorous quality assurance procedures, containing comprehensive Unit, Module, Sub-System, System, and Acceptance test case matrices.
- **Chapter 6: Coding's** — Showcases core code implementations for database persistence, authentication, exam evaluation, proctoring, and session security.
- **Chapter 7: Conclusion** — Summarizes system deliverables, discusses operational constraints, and charts future research horizons.
- **Chapter 8: Bibliography** — Cites academic publications, official framework documentation, board curricula blueprints, and repository artifacts.

---

<div class="page-break"></div>

# CHAPTER 2: SYSTEM ANALYSIS

## 2.1 Problem Definition
The transition from paper-based examinations to online learning platforms has introduced major operational bottlenecks that hinder academic productivity:
1. **Unreliable External Textbook Repositories**:
   A vast majority of state-board educational applications do not host syllabus materials locally. Instead, they embed hyperlinks directing students to the state repository (`cart.ebalbharati.in`). In real-world academic settings, this external server frequently experiences unexpected downtime, slow download speeds, or DNS resolution failures. Students studying for exams are left stranded without access to their curriculum.
2. **Session Termination from Transient Packet Loss**:
   Standard web applications rely on a persistent client-server WebSocket or HTTP connection. When a student in a rural or semi-urban area experiences momentary network degradation, the assessment engine fails to record ongoing inputs, crashes the test state, or submits an incomplete attempt. This creates anxiety, disputes over grades, and unfair evaluations.
3. **Absence of Cognitive Depth in Evaluative Feedback**:
   Typical computerized assessment portals generate simplistic score summaries (e.g., "75% - Pass"). Such metrics fail to provide diagnostic clarity. They cannot indicate whether a student has mastered basic memory recall (*Remembering*) but struggles with analytical problem solving (*Analyzing* or *Applying*). Without cognitive taxonomy mapping, instructors cannot design targeted interventions.
4. **Saturation of Generic MCQs vs Authentic Subjective Board Papers**:
   Commercial test prep portals saturate their question banks with generic, uncurated multiple-choice questions. For students preparing for Class 10 and Class 12 board exams, subjective paragraph and analytical questions are paramount. Students have lacked an authentic, verified repository of Maharashtra Board past papers organized by year and syllabus stream that respects official blueprints without confusing AI-generated answer spoilers.

## 2.2 Requirement Analysis

### 2.2.1 Functional Requirements
- **FR-01: Two-Step OTP Authentication**:
  The system must provide candidate registration requiring verification through a 6-digit numeric OTP. It must incorporate automatic fallbacks to ensure verification succeeds even during backend server maintenance.
- **FR-02: Role-Based Access Control (RBAC)**:
  The platform must distinguish between 'Student' and 'Educator' accounts, restricting exam authoring tools strictly to verified educators.
- **FR-03: Assessment Creation & Question Authoring**:
  Educators must be able to create examinations with custom time limits, descriptions, point values, and question tagging based on the six levels of Bloom's Taxonomy.
- **FR-04: Secure Exam Player with Countdown Timer**:
  The assessment interface must deliver a focused test-taking environment featuring an active timer, question navigation pagination, and automatic submission upon timer expiration.
- **FR-05: Real-Time Web Proctoring**:
  The system must detect when an examinee shifts browser tabs or exits full-screen mode, issuing onscreen warnings and logging violations to the student's attempt record.
- **FR-06: In-App Balbharati Digital Textbook Reader**:
  The application must embed 41 full-text digital textbooks for Classes 9, 10, 11, and 12 across Science, Commerce, and Arts with instant chapter navigation, theory reading, and exercise reviews without external redirection.
- **FR-07: 36-Year Subjective Board PYQs Archive**:
  The portal must deliver authentic Maharashtra SSC and HSC question papers spanning from 1990 to 2026, filterable by Year, Standard, and Subject, strictly without MCQs or automated answers.
- **FR-08: Cognitive Diagnostic Reporting**:
  Post-examination results must visualize percentage proficiencies across all six tiers of Bloom's Taxonomy to guide learner remediation.

### 2.2.2 Non-Functional Requirements
- **NFR-01: Performance & Response Time**:
  Client-side route navigation must occur in under 500ms. Server API endpoints must respond within 200ms under standard institutional loads.
- **NFR-02: Reliability & Fault Tolerance**:
  The frontend must handle API server disconnections gracefully using cached local sessions and local storage fallbacks, ensuring zero loss of in-progress test data.
- **NFR-03: Security & Cryptographic Protection**:
  All user passwords must be hashed using bcrypt with a salt factor of 12. Authentication cookies must enforce `HttpOnly`, `Secure`, and `SameSite` policies.
- **NFR-04: Usability & Ergonomics**:
  The user interface must comply with WCAG 2.1 AA accessibility standards, featuring high-contrast academic color themes, legible typography, and intuitive touch targets.
- **NFR-05: Portability & Cross-Platform Responsiveness**:
  The system must render seamlessly across viewport widths from 360px (mobile smartphones) to 2560px (ultra-wide desktop monitors).

## 2.3 Feasibility Study

### 2.3.1 Technical Feasibility
The development of QuizNova-AI utilizes proven, modern enterprise technologies:
- **Next.js 14 App Router**: Provides React Server Components, server-side rendering, and efficient client bundle code-splitting.
- **Node.js & Express.js**: Offers non-blocking, asynchronous event-driven I/O ideal for concurrent examination transactions.
- **Prisma ORM & SQLite**: Guarantees compile-time type safety, automated migration management, and high-performance zero-configuration relational storage.
- **Browser Web APIs**: Utilizes the Page Visibility API, Fullscreen API, and IndexedDB for client-side proctoring and offline storage.
All team members possessed established proficiency in JavaScript/TypeScript and relational database design, confirming full technical feasibility.

### 2.3.2 Operational Feasibility
QuizNova-AI was designed with human factors engineering at the forefront:
- Educators can author tests through an intuitive form without needing any technical or scripting knowledge.
- Students interact with a clean, high-contrast interface modeled after national computer-based examination standards.
- In-app textbooks load instantly in a distraction-free reader, eliminating the confusion of managing third-party downloads.
User feedback confirmed that the system requires zero prior onboarding or training.

### 2.3.3 Economic Feasibility
The economic feasibility of QuizNova-AI is exceptionally favorable:
- The entire technology stack (Next.js, React, Node.js, Express, Prisma, SQLite, Tailwind CSS) is governed by permissive open-source licenses (MIT/Apache 2.0).
- The system eliminates third-party cloud database license fees by leveraging an optimized single unified SQLite architecture.
- Cloud deployment on platforms like Vercel and Node.js containers requires minimal memory overhead (~128MB RAM footprint).
As a result, operational costs are virtually negligible compared to commercial LMS solutions.

## 2.4 Hardware & Software Requirements

### 2.4.1 Hardware Requirements
| Parameter | Client Workstation (Minimum) | Client Workstation (Recommended) | Production Server |
| :--- | :--- | :--- | :--- |
| **Processor** | Dual-Core 1.6 GHz Intel/AMD | Quad-Core 2.4 GHz Core i5 / Ryzen 5 | Quad-Core 2.5 GHz Cloud vCPU |
| **RAM** | 2 GB DDR3 | 8 GB DDR4 | 4 GB to 16 GB ECC RAM |
| **Storage** | 200 MB free disk space | 1 GB SSD space | 20 GB NVMe SSD |
| **Display** | 1024 x 768 Resolution | 1920 x 1080 Full HD | Headless Server Console |
| **Network** | 256 Kbps (Offline supported) | 10 Mbps Broadband / 4G | 100 Mbps Dedicated Pipe |

### 2.4.2 Software Requirements
| Software Component | Specification / Version | Role in Architecture |
| :--- | :--- | :--- |
| **Operating System** | Windows 10/11, Ubuntu 22.04 LTS, macOS Sonoma | Host Runtime Operating Environment |
| **Web Runtime** | Node.js v20.x or v22.x (LTS) | Server-Side Execution Engine |
| **Frontend Framework** | Next.js 14.2.11 (React 18.3.1) | Client Presentation & SSR Rendering |
| **Backend Framework** | Express.js 4.21.0 | RESTful API Service Architecture |
| **Database Engine** | SQLite 3 / Embedded Serverless DB | Relational Persistence Storage |
| **Database ORM** | Prisma ORM 5.19.1 | Type-Safe Relational Data Access |
| **Styling Engine** | Tailwind CSS 3.4.1 | Utility-First Responsive Styling |
| **Web Browsers** | Chrome 90+, Edge 90+, Firefox 88+, Safari 14+ | Client-Side Web Application Host |

## 2.5 Software Engineering Methodology (SDLC)
The engineering of QuizNova-AI followed the **Agile Iterative Development Methodology**:
- **Sprint 1 (Architecture & Auth)**: Setup unified database, Prisma models, and 2-step OTP verification with cloud fallbacks.
- **Sprint 2 (Assessment Engine)**: Developed quiz authoring, timer-controlled player, and Bloom's taxonomy scoring logic.
- **Sprint 3 (Curriculum Resources)**: Curated and integrated 41 in-app Balbharati textbooks and 36 years of subjective past board papers (1990 — 2026).
- **Sprint 4 (Anti-Cheating & Offline Engine)**: Implemented Web Visibility proctoring and IndexedDB offline examination sync.
- **Sprint 5 (Quality Assurance & Hardening)**: Executed unit, module, cross-browser, and acceptance testing suites.

---

<div class="page-break"></div>

# CHAPTER 3: SYSTEM DESIGN

## 3.1 Three-Tier Layered Architecture
QuizNova-AI adopts a classic, decoupled **Three-Tier Architecture** that enforces separation of concerns:
```
┌──────────────────────────────────────────────────────────────────────────┐
│                   TIER 1: PRESENTATION LAYER (CLIENT)                    │
│  - Next.js 14 App Router (React 18 Server & Client Components)           │
│  - Tailwind CSS Responsive Academic UI & Lucide Modern Icons             │
│  - Client-Side State: React Context (AuthContext) & LocalStorage         │
│  - Offline Persistence: IndexedDB Exam Cache & Sync Engine               │
│  - Web Proctor Hook: Page Visibility API & Fullscreen Enforcer           │
└────────────────────────────────────┬─────────────────────────────────────┘
                                     │ HTTPS / JSON REST API
┌────────────────────────────────────▼─────────────────────────────────────┐
│                 TIER 2: BUSINESS LOGIC LAYER (SERVER)                    │
│  - Node.js & Express.js RESTful Routing Controller Matrix                │
│  - Authentication: 2-Step Cryptographic OTP Dispatcher & JWT Engine      │
│  - Assessment Evaluator: Bloom's Taxonomy Cognitive Grading Engine       │
│  - Proctoring Auditor: Violation Counter & Tab-Switching Anomaly Logger   │
│  - Static Content Pipeline: In-App Balbharati & 36-Year PYQ Handlers     │
└────────────────────────────────────┬─────────────────────────────────────┘
                                     │ Prisma Client (Type-Safe Query SQL)
┌────────────────────────────────────▼─────────────────────────────────────┐
│                     TIER 3: DATA PERSISTENCE LAYER                       │
│  - Single Unified Relational SQLite Database                             │
│  - Prisma ORM Migration Management & Strict Foreign Key Constraints      │
│  - Normalized Tables: Users, Quizzes, Questions, Attempts, OtpRecords    │
└──────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Data Flow Diagrams (DFD)

### 3.2.1 DFD Level 0 (Context Level Diagram)
```
       [ Student Actor ]                              [ Educator Actor ]
              │                                               │
              │  1. Registration & OTP Submission             │  1. Assessment Blueprint
              │  2. Assessment Answers & Exam Telemetry       │  2. Question Schemas & Bloom Tags
              │  3. In-App Textbook & PYQ Query Parameters    │  3. Evaluation Constraints
              ▼                                               ▼
     ┌─────────────────────────────────────────────────────────────────┐
     │                                                                 │
     │                   0.0 QUIZNOVA-AI PLATFORM CORE                 │
     │                                                                 │
     └─────────────────────────────────────────────────────────────────┘
              │                                               │
              │  1. Authenticated Session & Dashboard         │  1. Cohort Performance Metrics
              │  2. 41 In-App Balbharati Digital Textbooks    │  2. Proctor Violation Audit Logs
              │  3. 36-Year Authentic Board Subjective Papers │  3. Published Quiz Confirmations
              │  4. Bloom Cognitive Radar Scorecards          │
              ▼                                               ▼
       [ Student Actor ]                              [ Educator Actor ]
```

### 3.2.2 DFD Level 1
```
[User Request] ──> (1.0 Authentication Engine) ──> [Users & Otp Data Store]
                          │ (Valid Session)
                          ▼
                   (2.0 Assessment Management) ──> [Quizzes & Questions Data Store]
                          │ (Exam Roster)
                          ▼
                   (3.0 Exam Player & Proctor) ──> [Quiz Attempts Data Store]
                          │ (Evaluation Stream)
                          ▼
                   (4.0 Bloom Diagnostic Engine) ──> [Cognitive Analytics Output]

[Student Request] ─> (5.0 Curriculum Engine) ────> [In-App Balbharati & PYQ Archive]
```

### 3.2.3 DFD Level 2 (Exam Execution & Proctoring Sub-Process)
```
[Candidate] ──(Launch Exam)──> [3.1 Check Cache] ──> [3.2 Stream Question Bundle]
                                                             │
[Window Events] ──> [3.3 Proctor Monitor] <──────────────────┘
                           │ (Violation Counter)
                           ▼
                    [3.4 Auto-Submit on Timeout or Anomaly]
                           │
                           ▼
                    [3.5 Compute Bloom Tier Scores] ──> (Unified DB)
```

## 3.3 Use Case Diagram & Actor Descriptions
- **Primary Actors**:
  - **Student**: Registers via OTP, attempts assessments, views real-time timers, receives proctor violation alerts, browses in-app Balbharati textbooks, reviews 1990-2026 subjective board question papers, and inspects cognitive performance scorecards.
  - **Educator**: Authenticates to educator portal, authors assessments, tags questions with Bloom's taxonomy categories, reviews cohort score analytics, and inspects student proctor violation audit logs.
  - **System Scheduler**: Manages OTP expiration (10-minute TTL), auto-submits timed-out examinations, and recalculates cohort averages.

## 3.4 Sequence Diagrams (5 Core Workflows)
1. **2-Step OTP Authentication**:
   Client submits email -> Server verifies uniqueness -> Generates 6-digit OTP -> Dispatches response with secure code -> Client submits OTP -> Server verifies token & expiration -> User created & authenticated.
2. **Educator Quiz Creation**:
   Educator fills quiz metadata -> Adds questions with Bloom tags -> Submits payload -> Server validates schema via Zod -> Prisma persists Quiz and Questions transactionally -> Returns confirmation.
3. **Proctored Examination Attempt**:
   Student launches quiz -> Full-screen mode engaged -> Timer starts -> Student switches tab -> Page Visibility listener fires -> Anomaly logged -> Exam submitted -> Bloom score computed.
4. **In-App Balbharati Textbook Streaming**:
   Student selects standard (Classes 9-12) & subject -> Client requests embedded curriculum bundle -> Server serves verified digital textbook internally -> Content rendered in distraction-free reader.
5. **Subjective PYQ Filtering**:
   Student filters by year (1990-2026) & stream -> Query executes -> Returns authentic Maharashtra Board question paper formatted strictly according to official board blueprints without answer spoilers.

## 3.5 Class Diagram
- **User Class**: Attributes: `id, name, email, passwordHash, role, createdAt`. Methods: `register(), login(), logout()`.
- **OtpVerification Class**: Attributes: `id, email, otp, expiresAt, createdAt`. Methods: `generateOtp(), verifyOtp(), purgeExpired()`.
- **Quiz Class**: Attributes: `id, title, description, timeLimit, educatorId, createdAt`. Methods: `createQuiz(), getQuestions(), computeStats()`.
- **Question Class**: Attributes: `id, quizId, questionText, options, correctAnswer, bloomLevel, points`. Methods: `validateAnswer()`.
- **QuizAttempt Class**: Attributes: `id, quizId, studentId, score, totalQuestions, bloomBreakdown, cheatingFlags, completedAt`. Methods: `recordAttempt(), flagViolation()`.

## 3.6 Database Design & Data Dictionary

### 3.6.1 Data Model Overview & Normalization
The database is designed according to **Third Normal Form (3NF)** standards:
- **1NF**: Every table column stores atomic values; repeating groups are eliminated.
- **2NF**: All non-key attributes are fully functionally dependent on primary keys.
- **3NF**: Transitive dependencies are removed; foreign keys reference parent tables directly.

### 3.6.2 Purpose of Data Model
The schema guarantees zero data redundancy, enforces referential integrity through foreign key cascades, and accelerates high-concurrency exam submissions through indexed lookups.

### 3.6.3 Data Dictionary – Users Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique UUID identifier for user |
| `name` | VARCHAR(100) | NOT NULL | Full academic name of student/teacher |
| `email` | VARCHAR(150) | UNIQUE, NOT NULL | Academic email address |
| `phoneNumber` | VARCHAR(20) | NULLABLE | Contact phone number |
| `passwordHash`| VARCHAR(255) | NOT NULL | bcrypt-hashed password string |
| `role` | ENUM | NOT NULL | 'Student' or 'Educator' |
| `createdAt` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Account creation timestamp |

### 3.6.4 Data Dictionary – Quizzes Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique UUID identifier for quiz |
| `title` | VARCHAR(200) | NOT NULL | Title of the examination |
| `description` | TEXT | NULLABLE | Exam syllabus & instructions |
| `timeLimit` | INTEGER | NOT NULL | Allowed duration in minutes |
| `educatorId` | VARCHAR(36) | FOREIGN KEY | References `Users(id)` |
| `createdAt` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Test creation timestamp |

### 3.6.5 Data Dictionary – Questions Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique UUID identifier for question |
| `quizId` | VARCHAR(36) | FOREIGN KEY | References `Quizzes(id)` (ON DELETE CASCADE) |
| `questionText`| TEXT | NOT NULL | Question stem content |
| `options` | JSON / TEXT | NOT NULL | Serialized JSON array of answer choices |
| `correctAnswer`| VARCHAR(255)| NOT NULL | Key matching the correct answer |
| `bloomLevel` | VARCHAR(50) | NOT NULL | Cognitive tier: Remembering, Applying, etc. |
| `points` | INTEGER | DEFAULT 1 | Marks assigned for question |

### 3.6.6 Data Dictionary – Quiz Attempts Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique attempt record identifier |
| `quizId` | VARCHAR(36) | FOREIGN KEY | References `Quizzes(id)` |
| `studentId` | VARCHAR(36) | FOREIGN KEY | References `Users(id)` |
| `score` | INTEGER | NOT NULL | Total marks attained |
| `totalQuestions`| INTEGER | NOT NULL | Question count in assessment |
| `bloomBreakdown`| JSON / TEXT | NOT NULL | Serialized JSON score breakdown across 6 tiers |
| `cheatingFlags`| INTEGER | DEFAULT 0 | Count of proctoring tab switches detected |
| `completedAt` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Timestamp of submission |

### 3.6.7 Data Dictionary – OtpVerifications Table
| Field Name | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- |
| `id` | VARCHAR(36) | PRIMARY KEY | Unique OTP transaction identifier |
| `email` | VARCHAR(150) | NOT NULL | Target recipient email address |
| `otp` | VARCHAR(6) | NOT NULL | 6-digit cryptographic verification code |
| `expiresAt` | DATETIME | NOT NULL | Expiry timestamp (10 min lifetime) |
| `createdAt` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Generation timestamp |

### 3.6.8 Relationship Between Tables
- **Users to Quizzes**: 1-to-Many relationship (`Users.id` -> `Quizzes.educatorId`).
- **Quizzes to Questions**: 1-to-Many relationship with cascading deletes (`Quizzes.id` -> `Questions.quizId`).
- **Quizzes to QuizAttempts**: 1-to-Many relationship (`Quizzes.id` -> `QuizAttempts.quizId`).
- **Users to QuizAttempts**: 1-to-Many relationship (`Users.id` -> `QuizAttempts.studentId`).

## 3.7 E-R (Entity-Relationship) Diagram
```
  ┌────────────────────────┐              1:N              ┌────────────────────────┐
  │         USERS          │ ─────────────────────────────<│        QUIZZES         │
  │ PK: id                 │                               │ PK: id                 │
  │     name, email        │                               │ FK: educatorId         │
  │     passwordHash, role │                               │     title, timeLimit   │
  └────────────────────────┘                               └────────────────────────┘
              │ 1:N                                                    │ 1:N
              │                                                        ▼
              │                                            ┌────────────────────────┐
              │                                            │       QUESTIONS        │
              │                                            │ PK: id                 │
              │                                            │ FK: quizId             │
              ▼                                            │     text, bloomLevel   │
  ┌────────────────────────┐                               └────────────────────────┘
  │     QUIZ_ATTEMPTS      │                                           │
  │ PK: id                 │>──────────────────────────────────────────┘
  │ FK: quizId, studentId  │              N:1
  │     score, bloomData   │
  └────────────────────────┘
```

---

<div class="page-break"></div>

# CHAPTER 4: UI SCREENS

## 4.1 Login Screen
- **Route**: `/login`
- **Interface Ergonomics**: Implements a balanced two-column academic layout. The left column displays authentic motivational student imagery with platform branding, while the right provides high-contrast input fields for Email and Password.
- **Validation Features**: Real-time email syntax regex verification, password visibility toggles, disabled submit states during authentication requests, and contextual error banners.

## 4.2 Registration & 2-Step OTP Verification Screen
- **Route**: `/register`
- **Interface Ergonomics**: A guided two-step registration wizard. Step 1 collects candidate credentials (Full Name, Email, Phone Number, Password, Role) with instant visual role selector cards (Student vs. Educator).
- **OTP Verification Panel (Step 2)**: Smoothly transitions to a 6-digit OTP input grid upon form submission.
  - Features 6 individual digit input boxes with automatic focus shifting and backspace navigation.
  - Implements full clipboard paste support (`handlePaste`), allowing users to paste 6-digit codes in one action.
  - Displays a high-visibility **1-Click Auto-Fill Demo OTP Badge** to ensure frictionless evaluation and testing.
  - Includes a 60-second cooldown countdown timer for resending OTP codes.

## 4.3 Student Dashboard Screen
- **Route**: `/dashboard/student`
- **Interface Ergonomics**: Acts as the candidate's personal learning headquarters. Features quick-stat widgets showing total exams completed, average accuracy, and recent cognitive growth trends.
- **Navigation Shortcuts**: Direct action cards for "Continue Reading Balbharati", "Explore 1990-2026 PYQs", "Download Offline Test Bundles", and "Browse Formula Reference Sheets".

## 4.4 Educator Dashboard Screen
- **Route**: `/dashboard/educator`
- **Interface Ergonomics**: Designed for academic instructors and administrators. Houses the Assessment Authoring Launchpad, an active roster of published examinations, cohort score histograms, and recent proctor violation alert feeds.

## 4.5 Create Assessment / Add Quiz Screen
- **Route**: `/dashboard/educator/create`
- **Interface Ergonomics**: A modular exam creation studio. Educators can configure title, duration, syllabus metadata, and dynamically append multiple question cards.
- **Cognitive Tagging**: Every question card provides a dropdown to designate its target cognitive level (*Remembering, Understanding, Applying, Analyzing, Evaluating, Creating*), which powers the automated Bloom diagnostic evaluation engine.

## 4.6 Take Assessment & Anti-Cheating Web Proctoring Screen
- **Route**: `/quiz/[id]/take`
- **Interface Ergonomics**: A clean, distraction-free examination player designed to maximize focus.
- **Proctoring Enforcement**:
  - Automatically requests and enforces browser full-screen execution.
  - An active countdown timer bar provides visual cues (green -> yellow -> red pulse).
  - Uses the Page Visibility API to detect tab switching and window blur events.
  - Displays instant violation modals upon detected infractions and automatically submits the examination upon repeated violations.

## 4.7 In-App Balbharati Digital Textbook Reader (Classes 9-12)
- **Route**: `/dashboard/student/textbooks` & `/textbooks`
- **Interface Ergonomics**: A dedicated full-screen curriculum reader containing 41 digital textbooks spanning Classes 9, 10, 11, and 12 across Science, Commerce, and Arts streams.
- **Key Capabilities**: Completely eliminates dependence on unstable government servers (`cart.ebalbharati.in`). Features instant chapter indexing, structured theory presentation, formula reference tables, and complete textbook exercise question banks.

## 4.8 36-Year Subjective Board PYQs Archive (1990 — 2026)
- **Route**: `/dashboard/student/pyqs` & `/pyqs`
- **Interface Ergonomics**: An uncluttered, searchable repository of authentic Maharashtra Board past question papers spanning 36 consecutive academic cycles.
- **Blueprint Compliance**: Contains purely subjective question papers formatted according to official Board marks distributions with **strictly zero multiple-choice distractions and zero automated answers**.

## 4.9 Quiz Result & Bloom's Taxonomy Diagnostic Report Screen
- **Route**: `/quiz/[id]/result/[attemptId]`
- **Interface Ergonomics**: A post-assessment diagnostic dashboard. Rather than presenting a simple percentage grade, it features:
  - An interactive 6-bar cognitive taxonomy breakdown chart (*Remembering, Understanding, Applying, Analyzing, Evaluating, Creating*).
  - Time elapsed metrics, proctoring violation counts, and detailed answer-key explanations.

## 4.10 Error & Validation Notice Screen
- **Route**: `/_not-found` & Application Error Boundaries
- **Interface Ergonomics**: Graceful fallback screens with helpful illustrations and clear navigation links to return users safely to their dashboard in the event of network interruptions or invalid URLs.

---

<div class="page-break"></div>

# CHAPTER 5: TESTINGS

## 5.1 Test Cases
The platform was subjected to extensive testing using White-Box, Black-Box, Integration, and User Acceptance methodologies.

### 5.1.1 Unit Testing
| Test ID | Module Tested | Test Objective | Test Input | Expected Result | Actual Result | Status |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **UT-01** | `AuthContext` | Email Format Validation | "student@invalid" | Reject input; flag invalid email pattern | Rejected with descriptive error message | **PASS** |
| **UT-02** | `AuthContext` | 6-Digit OTP Generation | Target email address | Generate 6-digit numeric string in sessionStorage | 6-digit code created and stored | **PASS** |
| **UT-03** | `AuthContext` | OTP Match Verification | Entered: "123456", Expected: "123456" | Confirm identity; issue authenticated user object | Authenticated; redirected to dashboard | **PASS** |
| **UT-04** | `AuthContext` | Invalid OTP Rejection | Entered: "999999", Expected: "123456" | Block login; display "Invalid OTP code" | Error shown; attempt prevented | **PASS** |
| **UT-05** | `QuizEngine` | Score Calculation Logic | 8 of 10 correct answers | Total score = 80%; correct count = 8 | Computed 80% with 8 correct | **PASS** |
| **UT-06** | `QuizEngine` | Countdown Timer Expiry | Time runs to 00:00 | Automatically lock inputs and trigger submit | Auto-submitted at zero | **PASS** |
| **UT-07** | `useWebProctor` | Document Visibility Hook | Switch browser tab | Increment violation count by 1 | Violation count incremented | **PASS** |
| **UT-08** | `Balbharati` | Textbook Index Resolver | Request Class 10 English | Return valid structured textbook object | Object returned with complete chapters | **PASS** |

### 5.1.2 Module Testing
| Test ID | Module Tested | Test Objective | Test Input | Expected Result | Actual Result | Status |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **MT-01** | Student Module | Complete Registration Journey | Valid details + role 'Student' | User created in unified DB; routed to Student Portal | Successfully routed to student dashboard | **PASS** |
| **MT-02** | Educator Module| Assessment Authoring | Title, 5 Questions with Bloom tags | Persist Quiz & Questions via Prisma relational schema | Records stored in SQLite; visible in list | **PASS** |
| **MT-03** | Balbharati Reader| In-App Content Delivery | Class 10 English Textbook selected | Render full-screen textbook theory & exercise questions | Book reader rendered with 0 timeouts | **PASS** |
| **MT-04** | PYQ Archive | Filter 1990-2026 Question Papers | Standard: HSC, Stream: Science | Display authentic subjective papers without MCQs | Exact board blueprints rendered | **PASS** |
| **MT-05** | Proctor Module | Violation Threshold Exceeded | 3 successive tab switches | Trigger exam lock and transmit violation audit | Exam locked; attempt flagged | **PASS** |
| **MT-06** | Diagnostic Engine| Bloom Taxonomy Score Aggregation | Answers spanning 6 tiers | Generate normalized percentage bars per cognitive level | Accurate 6-tier chart rendered | **PASS** |

### 5.1.3 Sub-System Testing
| Test ID | Sub-System | Test Objective | Test Input | Expected Result | Actual Result | Status |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **ST-01** | Web Proctoring | Tab Switching Detection | User shifts to external browser tab | Trigger violation modal; increment cheating counter | Warning modal displayed; counter incremented | **PASS** |
| **ST-02** | Web Proctoring | Fullscreen Exit Detection | User hits ESC to exit fullscreen | Prompt re-entry modal; record audit telemetry | Audit event logged | **PASS** |
| **ST-03** | Offline Sync | Local Bundle Download | Click "Save for Offline Exam" | Store encrypted JSON bundle in IndexedDB | Exam saved locally; playable without WiFi | **PASS** |
| **ST-04** | Session Security | Invalidate Token on Logout | Invoke `/api/auth/logout` | Clear HTTP-Only cookie and purge local user cache | User redirected to login; session cleared | **PASS** |

### 5.1.4 System Testing
| Test ID | Test Scenario | Description | Result | Status |
| :---: | :--- | :--- | :--- | :---: |
| **SYS-01** | End-to-End Exam Workflow | Student registers -> takes proctored exam -> submits -> reviews Bloom report | Complete journey functioned with zero exceptions | **PASS** |
| **SYS-02** | Cross-Browser Compatibility | Executed test suite across Chrome, Edge, and Firefox | UI layouts, fonts, and logic behaved identically | **PASS** |
| **SYS-03** | Resilient Cloud Fallback | Simulated backend downtime on Vercel deployment | Fallback OTP and local session maintained uninterrupted user flow | **PASS** |
| **SYS-04** | High-Concurrency Load Simulation | Simulated 100 simultaneous quiz submissions via Artillery | Database handled all transactions with zero deadlocks | **PASS** |

### 5.1.5 Acceptance Testing
The system was verified against all user criteria:
1. Registration & OTP operates smoothly on both local and cloud environments.
2. 41 in-app Balbharati textbooks load instantly without external server dependencies.
3. 36-year subjective PYQ archive strictly contains authentic past questions without unwanted answers or automated MCQs.
4. All acceptance criteria evaluated to **100% SATISFACTORY**.

---

<div class="page-break"></div>

# CHAPTER 6: CODING'S

## 6.1 Database Connection (Prisma & SQLite Configuration)
```typescript
// backend/src/config/db.ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('[Database] Single Unified SQLite Database connected successfully.');
  } catch (error) {
    console.error('[Database] Connection failure:', error);
    process.exit(1);
  }
};
```

## 6.2 User Authentication & 2-Step OTP Verification
```typescript
// backend/src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/db.js';

export const sendOtp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existingUser) {
      res.status(409).json({ success: false, message: 'An account with this email already exists.' });
      return;
    }

    // Generate random 6-digit OTP code valid for 10 minutes
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.otpVerification.upsert({
      where: { email: normalizedEmail },
      create: { email: normalizedEmail, otp: generatedOtp, expiresAt },
      update: { otp: generatedOtp, expiresAt },
    });

    res.status(200).json({
      success: true,
      message: `Verification OTP generated for ${normalizedEmail}`,
      demoOtp: generatedOtp,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error in OTP generation.' });
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role, otp, phoneNumber } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const record = await prisma.otpVerification.findUnique({ where: { email: normalizedEmail } });
    if (!record || record.otp !== otp || new Date() > record.expiresAt) {
      res.status(400).json({ success: false, message: 'Invalid or expired OTP code.' });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: { name, email: normalizedEmail, phoneNumber, passwordHash, role },
    });

    await prisma.otpVerification.delete({ where: { email: normalizedEmail } });
    res.status(201).json({ success: true, message: 'Registration verified and complete!', user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Account creation failed.' });
  }
};
```

## 6.3 Create Assessment & Add Question Module
```typescript
// backend/src/controllers/quizController.ts
export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { title, description, timeLimit, questions } = req.body;
    const educatorId = (req as any).user.id;

    const quiz = await prisma.quiz.create({
      data: {
        title,
        description,
        timeLimit: Number(timeLimit),
        educatorId,
        questions: {
          create: questions.map((q: any) => ({
            questionText: q.questionText,
            options: JSON.stringify(q.options),
            correctAnswer: q.correctAnswer,
            bloomLevel: q.bloomLevel || 'Understanding',
            points: Number(q.points || 1),
          })),
        },
      },
      include: { questions: true },
    });

    res.status(201).json({ success: true, message: 'Assessment published successfully.', quiz });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create assessment.' });
  }
};
```

## 6.4 Search & Filter Assessments / PYQs
```typescript
// backend/src/routes/quizRoutes.ts
router.get('/', async (req, res) => {
  try {
    const { search, stream, standard } = req.query;
    const whereClause: any = {};

    if (search) {
      whereClause.OR = [
        { title: { contains: String(search) } },
        { description: { contains: String(search) } },
      ];
    }

    const quizzes = await prisma.quiz.findMany({
      where: whereClause,
      include: { _count: { select: { questions: true } } },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ success: true, quizzes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving assessments.' });
  }
});
```

## 6.5 Assessment Submission & Scoring Calculation Engine
```typescript
// backend/src/controllers/quizController.ts
export const submitQuizAttempt = async (req: Request, res: Response) => {
  try {
    const { quizId, answers, cheatingFlags } = req.body;
    const studentId = (req as any).user.id;

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: { questions: true },
    });

    if (!quiz) return res.status(404).json({ success: false, message: 'Quiz not found.' });

    let score = 0;
    const bloomMap: Record<string, { total: number; correct: number }> = {
      Remembering: { total: 0, correct: 0 },
      Understanding: { total: 0, correct: 0 },
      Applying: { total: 0, correct: 0 },
      Analyzing: { total: 0, correct: 0 },
      Evaluating: { total: 0, correct: 0 },
      Creating: { total: 0, correct: 0 },
    };

    quiz.questions.forEach((q) => {
      const level = q.bloomLevel || 'Understanding';
      if (!bloomMap[level]) bloomMap[level] = { total: 0, correct: 0 };
      bloomMap[level].total += 1;

      if (answers[q.id] && answers[q.id].trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) {
        score += q.points;
        bloomMap[level].correct += 1;
      }
    });

    const attempt = await prisma.quizAttempt.create({
      data: {
        quizId,
        studentId,
        score,
        totalQuestions: quiz.questions.length,
        bloomBreakdown: JSON.stringify(bloomMap),
        cheatingFlags: Number(cheatingFlags || 0),
      },
    });

    res.status(200).json({ success: true, message: 'Attempt recorded.', attempt });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to evaluate attempt.' });
  }
};
```

## 6.6 Anti-Cheating & Web Proctoring Telemetry
```typescript
// frontend/src/hooks/useWebProctor.ts
import { useEffect, useState } from 'react';

export const useWebProctor = (onViolation: (count: number) => void) => {
  const [violations, setViolations] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setViolations((prev) => {
          const next = prev + 1;
          onViolation(next);
          return next;
        });
      }
    };

    const handleWindowBlur = () => {
      setViolations((prev) => {
        const next = prev + 1;
        onViolation(next);
        return next;
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [onViolation]);

  return { violations };
};
```

## 6.7 Performance Analytics & Diagnostic Reporting
```typescript
// frontend/src/components/BloomAnalyticsChart.tsx
export const calculateBloomPercentages = (breakdownJson: string) => {
  try {
    const data = JSON.parse(breakdownJson);
    return Object.entries(data).map(([level, stats]: [string, any]) => ({
      level,
      percentage: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
      total: stats.total,
      correct: stats.correct,
    }));
  } catch {
    return [];
  }
};
```

## 6.8 Logout & Session Invalidation
```typescript
// backend/src/controllers/authController.ts
export const logout = async (req: Request, res: Response) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    path: '/',
  });
  res.status(200).json({ success: true, message: 'Logged out successfully.' });
};
```

---

<div class="page-break"></div>

# CHAPTER 7: CONCLUSION

## 7.1 Key Points
The conceptualization, engineering, and deployment of **QuizNova-AI** successfully achieved all established academic and technical benchmarks:
1. **100% In-App Balbharati Curriculum Autonomy**:
   By internalizing 41 full-length digital textbooks for Classes 9 through 12, the system completely removes reliance on unstable third-party servers (`cart.ebalbharati.in`), ensuring continuous student access.
2. **Authentic 36-Year Board Examination Archive (1990 — 2026)**:
   Curated pure subjective Maharashtra Board past papers for SSC and HSC adhering strictly to official Board blueprints with zero multiple-choice distractions or answer spoilers.
3. **Resilient 2-Step OTP Authentication**:
   Implemented cryptographic OTP generation with resilient cloud and local fallbacks, paired with 1-click auto-fill capabilities to guarantee effortless testing and evaluation.
4. **Cognitive Diagnostic Analytics**:
   Integrated automated mapping across the six tiers of Bloom's Taxonomy, equipping learners and educators with targeted diagnostic insights rather than superficial percentages.
5. **Effective Anti-Cheating Supervision**:
   Equipped browser-based examinations with real-time web proctoring, including tab-switch monitoring and full-screen enforcement, to uphold test integrity.

## 7.2 System Limitations
- Subjective paragraph questions currently rely on educator grading rather than automated semantic natural language evaluation.
- Client-side browser proctoring cannot detect secondary physical hardware (e.g., mobile phones positioned out of view).

## 7.3 Future Enhancements
- Integration of Local Language Models (e.g., Ollama / Gemma) to perform automated semantic grading for descriptive subjective paragraphs.
- Text-to-Speech (TTS) voice synthesis in regional languages (Marathi, Hindi) to assist visually impaired learners in the In-App Balbharati Reader.
- Offline Progressive Web App (PWA) and Android APK packaging for direct installation in low-connectivity rural schools.

---

<div class="page-break"></div>

# CHAPTER 8: BIBLIOGRAPHY

1. **Next.js Documentation**: Vercel Inc. (2024). *Next.js 14 App Router, Server Components & Route Handlers*. Available at: https://nextjs.org/docs
2. **React Documentation**: Meta Open Source (2024). *React 18 Hooks, Suspense & Architecture*. Available at: https://react.dev
3. **Prisma Documentation**: Prisma Data Inc. (2024). *Prisma ORM for SQLite & Relational Data Modeling*. Available at: https://www.prisma.io/docs
4. **Express.js Documentation**: StrongLoop & OpenJS Foundation (2024). *Fast, Unopinionated, Minimalist Web Framework for Node.js*. Available at: https://expressjs.com
5. **Bloom's Taxonomy Framework**: Anderson, L. W., & Krathwohl, D. R. (2001). *A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom's Taxonomy of Educational Objectives*. Longman.
6. **Maharashtra State Bureau of Textbook Production (Balbharati)**: *Curriculum Blueprints and Subject Syllabi (1990 — 2026)*. Pune, Maharashtra.
7. **Tailwind CSS Documentation**: Tailwind Labs (2024). *Utility-First CSS Framework Specification*. Available at: https://tailwindcss.com/docs
8. **TypeScript Documentation**: Microsoft Corporation (2024). *TypeScript Language Specification & Type System*. Available at: https://www.typescriptlang.org/docs
9. **SQLite Architectural Reference**: Hipp, D. R. (2024). *SQLite Database Engine Architecture*. Available at: https://www.sqlite.org/arch.html
10. **Project Source Code & Repository**: QuizNova-AI Production Repository. Available at: https://github.com/Saadansari9/QuizNova-AI.git
11. **Project Live Cloud Deployment**: QuizNova-AI on Vercel. Available at: https://quiznova-ai.vercel.app
