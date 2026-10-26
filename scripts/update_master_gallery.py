import os

desktop_dir = r"C:\Users\mohammed saad\OneDrive\Desktop\QuizNova_All_Images"

diagrams = [
    ("3.1_Class_Diagram.png", "Figure 3.1: Comprehensive UML Domain Class Diagram"),
    ("3.2_Use_Case_Diagram.png", "Figure 3.2: System Use-Case Diagram for Admin & Student"),
    ("3.2.1_Admin_Use_Case.png", "Figure 3.3: Admin Dedicated Use-Case Flow"),
    ("3.3_Sequence_Diagram.png", "Figure 3.4: Proctored Assessment Lifecycle Sequence Diagram"),
    ("3.4_Activity_Diagram.png", "Figure 3.5: Exam Execution & Supervision Activity Diagram"),
    ("3.5.1_Level_0_DFD.png", "Figure 3.6: Context Level DFD Level 0"),
    ("3.5.2_Level_1_DFD.png", "Figure 3.7: Functional Decomposition DFD Level 1"),
    ("3.5.3_Level_2A_DFD.png", "Figure 3.8: Online Exam Subsystem DFD Level 2A"),
    ("3.5.4_Level_2B_DFD.png", "Figure 3.9: Offline Sync Architecture DFD Level 2B"),
    ("3.5.6_Gantt_Chart.png", "Figure 3.10: Project SDLC Gantt Chart Schedule"),
    ("3.7_ER_Diagram.png", "Figure 3.11: Single Unified Relational E-R Diagram"),
]

ui_screens = [
    ("Figure_4.1_Login_Interface.png", "Figure 4.1: Login Interface Layout with Direct Credential & Google Sign-In"),
    ("Figure_4.2_Student_Dashboard.png", "Figure 4.2: Student Command Dashboard Interface"),
    ("Figure_4.2B_Educator_Dashboard.png", "Figure 4.2B: Educator Analytics & Assessment Hub Interface"),
    ("Figure_4.3_Create_Assessment_Studio.png", "Figure 4.3: Create Assessment / Add Quiz Studio Screen"),
    ("Figure_4.4_Search_Assessment_PYQs.png", "Figure 4.4: 36-Year Board PYQ Archive & Search Screen"),
    ("Figure_4.4B_Balbharati_Textbooks_Reader.png", "Figure 4.4B: In-App 41 Balbharati Digital Textbooks Reader"),
    ("Figure_4.5_View_Assessment_Details.png", "Figure 4.5: View Assessment Details & Syllabus Overview Screen"),
    ("Figure_4.6_Take_Assessment_Player.png", "Figure 4.6: Take Assessment Player & Fullscreen Anti-Cheating Screen"),
    ("Figure_4.7_Proctoring_Flag_Modal.png", "Figure 4.7: Proctoring Flag & Alert Modal Notification Screen"),
    ("Figure_4.8_Cognitive_Diagnostic_Report.png", "Figure 4.8: Cognitive Diagnostic & Performance Evaluation Report Screen"),
    ("Figure_4.9_Error_Fallback_Boundary.png", "Figure 4.9: Error Handling & Boundary Fallback Interface"),
]

code_modules = [
    ("6.1_Database_Connection_Code.png", "6.1} Database Connection (Prisma & SQLite Singleton)"),
    ("6.2_Admin_Google_Auth_Code.png", "6.2} Administrator Login & Google Authentication"),
    ("6.3_Create_Assessment_Code.png", "6.3} Create Assessment & Add Question Module"),
    ("6.4_Search_PYQ_Filtering_Code.png", "6.4} Search Assessment & 36-Year PYQ Filtering Engine"),
    ("6.5_Assessment_Evaluation_Code.png", "6.5} Assessment Submission & 6-Tier Bloom Evaluation"),
    ("6.6_Web_Proctoring_Code.png", "6.6} Web Proctoring & Anti-Cheating Telemetry Hook"),
    ("6.7_Performance_Analytics_Code.png", "6.7} Performance Analytics & Bloom Mastery Diagnostics"),
    ("6.8_Logout_Session_Code.png", "6.8} Logout & HTTP-Only Session Invalidation"),
]

def make_card(fname, title, is_code=False):
    bg_style = 'background:#0f172a;' if is_code else 'background:#ffffff;'
    return f"""
    <div class="card">
      <h3>
        <span>{title}</span>
        <a class="btn" href="{fname}" download>Download Image</a>
      </h3>
      <div class="img-box" style="{bg_style}"><img src="{fname}" alt="{title}"></div>
      <p class="hint">Location: <code>Desktop/QuizNova_All_Images/{fname}</code></p>
    </div>
    """

html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>QuizNova-AI Master Project Image Vault</title>
  <style>
    body {{ font-family: 'Segoe UI', Arial, sans-serif; background: #0f172a; padding: 40px 20px; margin: 0; color: #f8fafc; }}
    .container {{ max-width: 1250px; margin: 0 auto; }}
    h1 {{ text-align: center; color: #38bdf8; font-size: 34px; margin-bottom: 6px; }}
    p.sub {{ text-align: center; color: #94a3b8; font-size: 16px; margin-bottom: 35px; }}
    .nav-pills {{ display: flex; justify-content: center; gap: 15px; margin-bottom: 40px; flex-wrap: wrap; }}
    .nav-pill {{ background: #1e293b; color: #38bdf8; padding: 10px 22px; border-radius: 30px; text-decoration: none; font-weight: bold; border: 1px solid #334155; }}
    .nav-pill:hover {{ background: #0284c7; color: white; }}
    h2.section-title {{ color: #facc15; border-bottom: 2px solid #334155; padding-bottom: 10px; margin-top: 55px; font-size: 24px; display: flex; justify-content: space-between; align-items: center; }}
    .card {{ background: #1e293b; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.4); padding: 24px; margin-bottom: 35px; border: 1px solid #334155; }}
    .card h3 {{ margin-top: 0; color: #f1f5f9; border-bottom: 1px solid #334155; padding-bottom: 12px; font-size: 18px; display: flex; justify-content: space-between; align-items: center; }}
    .img-box {{ border-radius: 10px; padding: 16px; margin: 18px 0; display: flex; justify-content: center; align-items: center; box-shadow: inset 0 2px 6px rgba(0,0,0,0.06); }}
    .card img {{ max-width: 100%; height: auto; display: block; border-radius: 6px; border: 1px solid #cbd5e1; }}
    .btn {{ background: #0284c7; color: white; padding: 8px 18px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold; transition: background 0.2s; }}
    .btn:hover {{ background: #0369a1; }}
    .hint {{ font-size: 13px; color: #94a3b8; font-style: italic; }}
    code {{ background: #334155; padding: 2px 6px; border-radius: 4px; color: #38bdf8; }}
  </style>
</head>
<body>
  <div class="container">
    <h1>QuizNova-AI Project Black Book Master Vault</h1>
    <p class="sub">Complete Visual Archive: High-Definition Architecture Diagrams, Real Web UI Screenshots & Colorful IDE Code</p>

    <div class="nav-pills">
      <a class="nav-pill" href="#ch3">📐 Chapter 3: System Diagrams (11)</a>
      <a class="nav-pill" href="#ch4" style="color:#4ade80;">📸 Chapter 4: UI Screenshots (11)</a>
      <a class="nav-pill" href="#ch6" style="color:#c084fc;">💻 Chapter 6: Source Code (8)</a>
    </div>

    <h2 id="ch4" class="section-title">
      <span>📸 CHAPTER 4: REAL WEBSITE UI SCREENSHOTS (FIGURES 4.1 TO 4.9)</span>
      <span style="font-size:14px; color:#94a3b8;">11 Real UI Screens</span>
    </h2>
    {''.join(make_card(f, t) for f, t in ui_screens)}

    <h2 id="ch3" class="section-title">
      <span>📐 CHAPTER 3: HIGH-DEFINITION SYSTEM ARCHITECTURE DIAGRAMS</span>
      <span style="font-size:14px; color:#94a3b8;">11 HD Diagrams</span>
    </h2>
    {''.join(make_card(f, t) for f, t in diagrams)}

    <h2 id="ch6" class="section-title">
      <span>💻 CHAPTER 6: COLORFUL IDE SOURCE CODE MODULES</span>
      <span style="font-size:14px; color:#94a3b8;">8 Syntax-Highlighted Modules</span>
    </h2>
    {''.join(make_card(f, t, is_code=True) for f, t in code_modules)}

  </div>
</body>
</html>
"""

viewer_path = os.path.join(desktop_dir, "view_all_images.html")
with open(viewer_path, "w", encoding="utf-8") as f:
    f.write(html)

print("SUCCESS: Master gallery updated with all UI screenshots, diagrams, and code!")
