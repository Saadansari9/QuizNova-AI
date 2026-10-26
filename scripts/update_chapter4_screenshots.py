import os
import sys
import io
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

src_docx = r"C:\Users\mohammed saad\OneDrive\Desktop\quiz-platform-auth\QUIZNOVA_AI_BLACK_BOOK_PROJECT_REPORT_HD_VISUALS.docx"
output_project_docx = r"C:\Users\mohammed saad\OneDrive\Desktop\quiz-platform-auth\QUIZNOVA_AI_BLACK_BOOK_PROJECT_REPORT_HD_VISUALS.docx"
output_desktop_docx = r"C:\Users\mohammed saad\OneDrive\Desktop\QUIZNOVA_AI_BLACK_BOOK_PROJECT_REPORT.docx"
output_desktop_alt = r"C:\Users\mohammed saad\OneDrive\Desktop\QUIZNOVA_AI_BLACK_BOOK_PROJECT_REPORT_HD_VISUALS.docx"

img_dir = r"C:\Users\mohammed saad\OneDrive\Desktop\QuizNova_All_Images"

print("Loading document...")
doc = docx.Document(src_docx)
body = doc._body._element

ch4_heading_idx = None
ch5_heading_idx = None

for i in range(200, len(body)):
    el = body[i]
    t = ''.join(el.itertext()).strip()
    if 'CHAPTER 4' in t.upper() and ch4_heading_idx is None:
        ch4_heading_idx = i
    elif 'CHAPTER 5' in t.upper() and ch5_heading_idx is None:
        ch5_heading_idx = i

print(f"Chapter 4 at index {ch4_heading_idx}, Chapter 5 at index {ch5_heading_idx}")

ch5_element = body[ch5_heading_idx]

# Remove legacy elements between Chapter 4 and Chapter 5
legacy_count = ch5_heading_idx - (ch4_heading_idx + 1)
print(f"Removing {legacy_count} legacy Chapter 4 elements...")
for _ in range(legacy_count):
    el_to_remove = body[ch4_heading_idx + 1]
    body.remove(el_to_remove)

print("Legacy Chapter 4 elements cleanly removed.")

def add_p_before(text, bold_prefix=None, space_after=6):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.line_spacing = 1.15
    if bold_prefix:
        r_pre = p.add_run(bold_prefix)
        r_pre.font.bold = True
        r_pre.font.size = Pt(11)
        r_pre.font.color.rgb = RGBColor(15, 23, 42)
    r_body = p.add_run(text)
    r_body.font.size = Pt(11)
    r_body.font.color.rgb = RGBColor(51, 65, 85)
    ch5_element.addprevious(p._p)
    return p

def add_heading2_before(title):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(14)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.keep_with_next = True
    run = p.add_run(title)
    run.font.bold = True
    run.font.size = Pt(13)
    run.font.color.rgb = RGBColor(15, 23, 42) # Slate 900
    ch5_element.addprevious(p._p)
    return p

def add_screenshot_before(img_filename, caption_text, width_in=6.0):
    img_path = os.path.join(img_dir, img_filename)
    if not os.path.exists(img_path):
        print(f"⚠ Warning: Image not found {img_path}")
        return None

    # Image paragraph
    p_img = doc.add_paragraph()
    p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_img.paragraph_format.space_before = Pt(8)
    p_img.paragraph_format.space_after = Pt(4)
    p_img.paragraph_format.keep_with_next = True
    run_img = p_img.add_run()
    run_img.add_picture(img_path, width=Inches(width_in))
    ch5_element.addprevious(p_img._p)

    # Caption paragraph
    p_cap = doc.add_paragraph()
    p_cap.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_cap.paragraph_format.space_before = Pt(2)
    p_cap.paragraph_format.space_after = Pt(14)
    run_cap = p_cap.add_run(caption_text)
    run_cap.font.italic = True
    run_cap.font.bold = True
    run_cap.font.size = Pt(9.5)
    run_cap.font.color.rgb = RGBColor(71, 85, 105)
    ch5_element.addprevious(p_cap._p)
    return p_img

print("Inserting cleanly structured Chapter 4 sections with real screenshots...")

# Overview paragraph
add_p_before(
    "The user interface of QuizNova-AI is engineered with Next.js 14 App Router, React 18, and Tailwind CSS. "
    "Designed specifically for high-stakes academic testing and distraction-free Maharashtra State Board preparation, "
    "the interface emphasizes ergonomics, accessibility, and high contrast. Below are the actual production interface "
    "screenshots across all key user workflows.",
    bold_prefix="Chapter Overview: ",
    space_after=10
)

# 4.1 Login
add_heading2_before("4.1} Login.")
add_p_before("/login", bold_prefix="Route: ")
add_p_before(
    "The login portal implements a modern responsive layout. The left pane showcases inspirational academic "
    "branding, while the right pane provides credential inputs alongside a dedicated 'Continue with Google' button for "
    "instantaneous 1-click OAuth authentication without requiring intermediate OTP steps.",
    bold_prefix="Interface Ergonomics & Design: "
)
add_p_before(
    "Real-time email regex validation, password visibility toggle, active submit state disabling, and contextual error banners.",
    bold_prefix="Validation Features: "
)
add_screenshot_before("Figure_4.1_Login_Interface.png", "Figure 4.1: Login Interface Layout with Direct Credential & Google Sign-In", width_in=6.0)

# 4.2 Dashboard
add_heading2_before("4.2} Dashboard.")
add_p_before("/dashboard/student  &  /dashboard/educator", bold_prefix="Route: ")
add_p_before(
    "The primary dashboard tailors widgets dynamically according to the authenticated user's role. Candidates see available "
    "assessments, average performance statistics, and quick navigation shortcuts to textbooks and past papers. Instructors "
    "access the Assessment Creation Studio launchpad, class attempt rosters, and security audit telemetry.",
    bold_prefix="Interface Ergonomics & Design: "
)
add_screenshot_before("Figure_4.2_Student_Dashboard.png", "Figure 4.2: Student and Educator Dashboard Interface (Candidate View)", width_in=6.0)
add_screenshot_before("Figure_4.2B_Educator_Dashboard.png", "Figure 4.2B: Educator Management Hub & Assessment Authoring View", width_in=6.0)

# 4.3 Add Assessment / Create Quiz
add_heading2_before("4.3} Add Assessment / Create Quiz.")
add_p_before("/dashboard/educator/create", bold_prefix="Route: ")
add_p_before(
    "A modular examination builder allowing educators to configure assessment parameters (title, duration, standard, passing threshold) "
    "and author multiple question cards. Every card features a deterministic dropdown to assign its Bloom's Taxonomy cognitive tier "
    "(Remembering, Understanding, Applying, Analyzing, Evaluating, Creating) for automated post-test diagnostic analytics.",
    bold_prefix="Interface Ergonomics & Design: "
)
add_screenshot_before("Figure_4.3_Create_Assessment_Studio.png", "Figure 4.3: Create Assessment / Add Quiz Studio Screen", width_in=6.0)

# 4.4 Search Assessments / PYQs
add_heading2_before("4.4} Search Assessments / PYQs.")
add_p_before("/dashboard/student/pyqs  &  /textbooks", bold_prefix="Route: ")
add_p_before(
    "A fast, searchable catalog for locating past board examination papers and Balbharati digital textbooks. "
    "Candidates can filter across 36 continuous academic years (1990 — 2026), Standard (Class 10 SSC vs Class 12 HSC), "
    "Academic Stream (Science, Commerce, Arts), and Subject. Papers feature authentic subjective questions with zero multiple-choice "
    "distortions and zero answer spoilers.",
    bold_prefix="Interface Ergonomics & Design: "
)
add_screenshot_before("Figure_4.4_Search_Assessment_PYQs.png", "Figure 4.4: Search Assessment, PYQ & Curriculum Search Screen", width_in=6.0)
add_screenshot_before("Figure_4.4B_Balbharati_Textbooks_Reader.png", "Figure 4.4B: In-App 41 Balbharati Digital Textbooks Reader Interface", width_in=6.0)

# 4.5 View Assessment Details
add_heading2_before("4.5} View Assessment Details.")
add_p_before("/dashboard/student (Assessment Catalog Compartment)", bold_prefix="Route: ")
add_p_before(
    "An overview interface presented prior to commencing an assessment. It details the assessment title, faculty convener, "
    "allocated time limit, passing percentage, total marks, syllabus topics covered, and explicit examination rules regarding "
    "fullscreen compliance and anti-cheating supervision.",
    bold_prefix="Interface Ergonomics & Design: "
)
add_screenshot_before("Figure_4.5_View_Assessment_Details.png", "Figure 4.5: View Assessment Details & Syllabus Overview Screen", width_in=6.0)

# 4.6 Take Assessment & Submit
add_heading2_before("4.6} Take Assessment & Submit.")
add_p_before("/quiz/[id]/take", bold_prefix="Route: ")
add_p_before(
    "A distraction-free, full-screen examination player designed to maximize candidate concentration. Features an active hardware "
    "clock countdown timer bar, clear question navigation palettes with status indicators (Answered, Unvisited, Flagged for Review), "
    "and persistent local storage caching to survive accidental tab reloads.",
    bold_prefix="Interface Ergonomics & Design: "
)
add_screenshot_before("Figure_4.6_Take_Assessment_Player.png", "Figure 4.6: Take Assessment Player & Fullscreen Anti-Cheating Screen", width_in=6.0)

# 4.7 Proctoring Flag & Alert Modal
add_heading2_before("4.7} Proctoring Flag & Alert Modal.")
add_p_before("In-Exam Modal Overlay & Proctoring Audit Feeds", bold_prefix="Route: ")
add_p_before(
    "A warning overlay triggered immediately when an integrity anomaly occurs. When a candidate switches browser tabs or minimizes "
    "fullscreen, the Page Visibility sentinel intercepts the event, increments the violation counter, and displays a prominent warning modal. "
    "Exceeding the maximum allowed violation threshold (3 strikes) triggers automated exam submission.",
    bold_prefix="Interface Ergonomics & Design: "
)
add_screenshot_before("Figure_4.7_Proctoring_Flag_Modal.png", "Figure 4.7: Proctoring Flag & Alert Modal Notification Screen", width_in=6.0)

# 4.8 Cognitive Diagnostic Report
add_heading2_before("4.8} Cognitive Diagnostic Report.")
add_p_before("/quiz/[id]/result/[attemptId]", bold_prefix="Route: ")
add_p_before(
    "A comprehensive post-examination diagnostic scorecard. Rather than a superficial percentage score, the dashboard visualizes an "
    "interactive 6-bar cognitive breakdown chart across Bloom's Taxonomy (Remembering, Understanding, Applying, Analyzing, Evaluating, Creating), "
    "accurate time-elapsed metrics, question-wise answer explanations, and AI-synthesized pedagogical recommendations.",
    bold_prefix="Interface Ergonomics & Design: "
)
add_screenshot_before("Figure_4.8_Cognitive_Diagnostic_Report.png", "Figure 4.8: Cognitive Diagnostic & Performance Evaluation Report Screen", width_in=6.0)

# 4.9 Error & Fallback Boundary
add_heading2_before("4.9} Error & Fallback Boundary.")
add_p_before("/_not-found  &  Application Error Boundaries", bold_prefix="Route: ")
add_p_before(
    "A friendly, retro-styled fallback screen providing clear navigation links to return users safely to their dashboard in the event of "
    "invalid routes or runtime exceptions, safeguarding candidate states during unexpected errors.",
    bold_prefix="Interface Ergonomics & Design: "
)
add_screenshot_before("Figure_4.9_Error_Fallback_Boundary.png", "Figure 4.9: Error Handling & Boundary Fallback Interface", width_in=6.0)

def safe_save(target_doc, path):
    try:
        target_doc.save(path)
        print(f"Successfully saved: {path}")
        return True
    except PermissionError:
        print(f"File locked by Word ({path}). Trying alternate...")
        base, ext = os.path.splitext(path)
        alt = f"{base}_V2{ext}"
        target_doc.save(alt)
        print(f"Saved to alternate: {alt}")
        return False

print("Saving updated document with all Chapter 4 UI screenshots...")
safe_save(doc, output_project_docx)
safe_save(doc, output_desktop_docx)
safe_save(doc, output_desktop_alt)

print("SUCCESS: Chapter 4 completely updated with real screenshots embedded!")
