export interface BoardPyqQuestion {
  qNumber: string;
  questionText: string;
  marks: number;
  subQuestions?: string[];
}

export interface BoardPyqSection {
  sectionTitle: string;
  instructions: string;
  marksPerQuestion: number;
  questions: BoardPyqQuestion[];
}

export interface BoardPyqPaper {
  id: string;
  year: number;
  standard: string;
  stream: string;
  subject: string;
  paperTitle: string;
  timeAllowed: string;
  maximumMarks: number;
  generalInstructions: string[];
  sections: BoardPyqSection[];
}

export const MAHARASHTRA_BOARD_PYQ_PAPERS: BoardPyqPaper[] = [
  {
    "id": "pyq-2026-science-part-1",
    "year": 2026,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2026)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2026-physics",
    "year": 2026,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2026)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2026-book-keeping---accountancy",
    "year": 2026,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2026)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2026-political-science",
    "year": 2026,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2026)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2025-science-part-1",
    "year": 2025,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2025)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2025-physics",
    "year": 2025,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2025)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2025-book-keeping---accountancy",
    "year": 2025,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2025)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2025-political-science",
    "year": 2025,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2025)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2024-science-part-1",
    "year": 2024,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2024)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2024-physics",
    "year": 2024,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2024)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2024-book-keeping---accountancy",
    "year": 2024,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2024)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2024-political-science",
    "year": 2024,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2024)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2023-science-part-1",
    "year": 2023,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2023)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2023-physics",
    "year": 2023,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2023)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2023-book-keeping---accountancy",
    "year": 2023,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2023)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2023-political-science",
    "year": 2023,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2023)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2022-science-part-1",
    "year": 2022,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2022)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2022-physics",
    "year": 2022,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2022)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2022-book-keeping---accountancy",
    "year": 2022,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2022)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2022-political-science",
    "year": 2022,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2022)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2020-science-part-1",
    "year": 2020,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2020)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2020-physics",
    "year": 2020,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2020)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2020-book-keeping---accountancy",
    "year": 2020,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2020)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2020-political-science",
    "year": 2020,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2020)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2018-science-part-1",
    "year": 2018,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2018)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2018-physics",
    "year": 2018,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2018)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2018-book-keeping---accountancy",
    "year": 2018,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2018)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2018-political-science",
    "year": 2018,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2018)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2015-science-part-1",
    "year": 2015,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2015)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2015-physics",
    "year": 2015,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2015)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2015-book-keeping---accountancy",
    "year": 2015,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2015)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2015-political-science",
    "year": 2015,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2015)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2010-science-part-1",
    "year": 2010,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2010)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2010-physics",
    "year": 2010,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2010)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2010-book-keeping---accountancy",
    "year": 2010,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2010)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2010-political-science",
    "year": 2010,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2010)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2005-science-part-1",
    "year": 2005,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2005)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2005-physics",
    "year": 2005,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2005)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2005-book-keeping---accountancy",
    "year": 2005,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2005)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2005-political-science",
    "year": 2005,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2005)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2000-science-part-1",
    "year": 2000,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (2000)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2000-physics",
    "year": 2000,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (2000)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2000-book-keeping---accountancy",
    "year": 2000,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (2000)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-2000-political-science",
    "year": 2000,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (2000)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-1995-science-part-1",
    "year": 1995,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (1995)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-1995-physics",
    "year": 1995,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (1995)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-1995-book-keeping---accountancy",
    "year": 1995,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (1995)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-1995-political-science",
    "year": 1995,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (1995)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-1990-science-part-1",
    "year": 1990,
    "standard": "Class 10 (SSC)",
    "stream": "General",
    "subject": "Science Part 1",
    "paperTitle": "Maharashtra State Board Class 10 (SSC) Science Part 1 Examination Paper (1990)",
    "timeAllowed": "2 Hours",
    "maximumMarks": 40,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Questions [2 Marks Each]",
        "instructions": "Solve any 4 of the following questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1 (A)",
            "questionText": "State Newton’s Universal Law of Gravitation. Express its mathematical formula and define the SI unit of gravitational constant G.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (B)",
            "questionText": "Give scientific reason: Elements belonging to the same group in the Modern Periodic Table exhibit identical chemical valency.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (C)",
            "questionText": "Distinguish clearly between Endothermic reaction and Exothermic reaction with one balanced chemical equation each.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (D)",
            "questionText": "An electric heater consumes 1100 W when connected to a 220 V line. Calculate: (i) Current drawn by heater, (ii) Resistance of its coil.",
            "marks": 2
          },
          {
            "qNumber": "Q.1 (E)",
            "questionText": "Define Refraction of Light. State Snell’s Law of refraction of light.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Detailed Explanatory Questions [3 Marks Each]",
        "instructions": "Solve any 3 of the following questions (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.2 (A)",
            "questionText": "Explain Kepler’s three laws of planetary motion with the help of a neat labeled diagram showing the elliptical orbit of a planet.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (B)",
            "questionText": "What is Corrosion? Explain the electrochemical mechanism of rusting of iron and state two preventive electroplating methods.",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (C)",
            "questionText": "Explain the anomaly in the thermal behaviour of water between 0°C and 4°C using Hope’s Apparatus. How does this property preserve aquatic life in cold regions?",
            "marks": 3
          },
          {
            "qNumber": "Q.2 (D)",
            "questionText": "Draw a neat ray diagram showing image formation by a Convex Lens when an object is placed between F1 and 2F1. State the position, nature, and relative size of the image.",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: In-Depth Long Answer Questions [5 Marks Each]",
        "instructions": "Solve any 1 of the following comprehensive questions (5 marks):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.3 (A)",
            "questionText": "Answer the following with respect to Metallurgy of Aluminium (Hall-Heroult & Bayer’s Process):\n(i) Name the primary ore of aluminium.\n(ii) Why is cryolite added to molten alumina during electrolytic reduction?\n(iii) Write the chemical equations taking place at the graphite anode and cathode.\n(iv) Explain why graphite anodes need frequent replacement.",
            "marks": 5
          },
          {
            "qNumber": "Q.3 (B)",
            "questionText": "Explain the working principle and construction of an AC Electric Generator with a neat labeled diagram. State Fleming’s Right Hand Rule used to determine the direction of induced current.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-1990-physics",
    "year": 1990,
    "standard": "Class 12 (HSC)",
    "stream": "Science",
    "subject": "Physics",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Physics Examination Paper (1990)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 70,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type I [2 Marks Each]",
        "instructions": "Attempt any 4 of the following theoretical and numerical questions (2 marks each):",
        "marksPerQuestion": 2,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Obtain an expression for the maximum safe speed of a vehicle on a banked curved road of radius r without considering friction between tyres and road.",
            "marks": 2
          },
          {
            "qNumber": "Q.2",
            "questionText": "State and prove the Principle of Parallel Axes for moment of inertia of a rigid body.",
            "marks": 2
          },
          {
            "qNumber": "Q.3",
            "questionText": "State Bernoulli’s Theorem for streamline fluid flow. Write down its mathematical equation and mention one practical engineering application.",
            "marks": 2
          },
          {
            "qNumber": "Q.4",
            "questionText": "Define Simple Harmonic Motion (SHM). State the differential equation of linear SHM and define its frequency and amplitude.",
            "marks": 2
          },
          {
            "qNumber": "Q.5",
            "questionText": "Calculate the de Broglie wavelength associated with an electron accelerated from rest through a potential difference of 100 Volts.",
            "marks": 2
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Short Answer Type II [3 Marks Each]",
        "instructions": "Attempt any 4 of the following descriptive questions and derivations (3 marks each):",
        "marksPerQuestion": 3,
        "questions": [
          {
            "qNumber": "Q.6",
            "questionText": "Derive an expression for the fringe width (band width) in Young’s Double Slit Interference Experiment. State the conditions for constructive and destructive interference.",
            "marks": 3
          },
          {
            "qNumber": "Q.7",
            "questionText": "Describe the construction and working of a Moving Coil Galvanometer (MCG) with a neat schematic diagram. Show that current is directly proportional to deflection angle.",
            "marks": 3
          },
          {
            "qNumber": "Q.8",
            "questionText": "Explain the working of a Carnot Heat Engine cycle with an indicator (P-V) diagram. Derive the formula for its thermal efficiency in terms of source and sink temperatures.",
            "marks": 3
          },
          {
            "qNumber": "Q.9",
            "questionText": "A parallel plate capacitor with air between the plates has capacitance 8 pF. What will be the capacitance if the distance between plates is reduced by half and dielectric constant k = 6 is inserted?",
            "marks": 3
          }
        ]
      },
      {
        "sectionTitle": "SECTION C: Long Answer Type [4 to 5 Marks Each]",
        "instructions": "Attempt any 2 of the following comprehensive questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.10",
            "questionText": "State Bohr’s postulates for the hydrogen atom model.\n(a) Derive an expression for the radius of the nth orbit of an electron revolving in hydrogen atom.\n(b) Show that orbital radius is directly proportional to the square of principal quantum number n.\n(c) Calculate the radius of the first Bohr orbit (n=1) using standard constants.",
            "marks": 5
          },
          {
            "qNumber": "Q.11",
            "questionText": "Explain the working of a full-wave bridge rectifier with a neat circuit diagram and input/output voltage waveforms. State the expression for its ripple factor and rectifier efficiency.",
            "marks": 5
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-1990-book-keeping---accountancy",
    "year": 1990,
    "standard": "Class 12 (HSC)",
    "stream": "Commerce",
    "subject": "Book-Keeping & Accountancy",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Book-Keeping & Accountancy Examination Paper (1990)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Conceptual & Practical Questions [5 Marks Each]",
        "instructions": "Answer any 2 of the following questions (5 marks each):",
        "marksPerQuestion": 5,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the provisions of the Indian Partnership Act 1932 applicable in the absence of a Partnership Deed regarding: (i) Sharing of Profits & Losses, (ii) Interest on Capital, (iii) Interest on Drawings, (iv) Interest on Partner’s Loan, (v) Salary or Commission to Partners.",
            "marks": 5
          },
          {
            "qNumber": "Q.2",
            "questionText": "Distinguish clearly between Receipts & Payments Account and Income & Expenditure Account on the basis of: (i) Nature, (ii) Type of Account, (iii) Object, (iv) Capital vs Revenue items, (v) Balance representation.",
            "marks": 5
          },
          {
            "qNumber": "Q.3",
            "questionText": "What is Dissolution of a Partnership Firm? Explain the legal rules regarding treatment of firm losses and application of firm assets under Section 48 of the Indian Partnership Act.",
            "marks": 5
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Partnership Final Accounts & Adjustments [10 Marks Each]",
        "instructions": "Compulsory comprehensive practical ledger & balance sheet questions:",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.4",
            "questionText": "Amit and Sumit are partners sharing profits and losses in the ratio 3:2. From the given Trial Balance as on 31st March, prepare Trading and Profit & Loss Account for the year ended and Balance Sheet as on that date after taking into account the following adjustments:\n1. Closing stock valued at Cost Price Rs. 85,000, Market Price Rs. 92,000.\n2. Depreciate Plant & Machinery by 10% and Furniture by 5%.\n3. Create Reserve for Doubtful Debts (RDD) @ 5% on Sundry Debtors.\n4. Outstanding Wages Rs. 3,500 and Prepaid Insurance Rs. 1,200.\n5. Provide interest on partners’ capital @ 6% p.a.",
            "marks": 10
          },
          {
            "qNumber": "Q.5",
            "questionText": "Pooja, Swati and Aarti were partners sharing profits and losses in 2:2:1. Aarti died on 30th September. Under the partnership agreement, calculate:\n(a) Aarti’s share of goodwill based on 3 years purchase of average profits of last 4 years.\n(b) Her share of accrued profit up to the date of death calculated on the basis of average profits.\n(c) Prepare Aarti’s Capital Account showing the total balance due to her legal executor.",
            "marks": 10
          }
        ]
      }
    ]
  },
  {
    "id": "pyq-1990-political-science",
    "year": 1990,
    "standard": "Class 12 (HSC)",
    "stream": "Arts",
    "subject": "Political Science",
    "paperTitle": "Maharashtra State Board Class 12 (HSC) Political Science Examination Paper (1990)",
    "timeAllowed": "3 Hours",
    "maximumMarks": 80,
    "generalInstructions": [
      "1. All questions are compulsory. Internal options are provided in specific sections.",
      "2. Figures to the right indicate full marks assigned to the question.",
      "3. Use of non-programmable scientific calculator is NOT permitted unless specified.",
      "4. For science subjects, draw neat and labeled diagrams wherever necessary.",
      "5. Write answers in legible handwriting. Marks will be deducted for untidy work."
    ],
    "sections": [
      {
        "sectionTitle": "SECTION A: Short Answer Type [4 Marks Each]",
        "instructions": "Answer any 4 of the following theoretical questions (4 marks each):",
        "marksPerQuestion": 4,
        "questions": [
          {
            "qNumber": "Q.1",
            "questionText": "Explain the concept of \"Globalisation\". Discuss its economic, cultural, and technological dimensions on modern developing nations.",
            "marks": 4
          },
          {
            "qNumber": "Q.2",
            "questionText": "Discuss the composition and functions of the UN Security Council. Why has India made a strong diplomatic claim for permanent membership?",
            "marks": 4
          },
          {
            "qNumber": "Q.3",
            "questionText": "Explain the nature and constitutional significance of the Six Fundamental Rights guaranteed under the Constitution of India (Articles 14 to 32).",
            "marks": 4
          },
          {
            "qNumber": "Q.4",
            "questionText": "What is meant by \"Good Governance\"? Explain the core characteristics of good governance as formulated by the United Nations Development Programme (UNDP).",
            "marks": 4
          }
        ]
      },
      {
        "sectionTitle": "SECTION B: Essay Type Long Questions [10 Marks Each]",
        "instructions": "Answer any 2 of the following comprehensive essay questions (10 marks each):",
        "marksPerQuestion": 10,
        "questions": [
          {
            "qNumber": "Q.5",
            "questionText": "Examine the major shifts and developments in international world politics since the collapse of the Soviet Union (USSR) in 1991. How has the transition taken place from bipolarity towards a multipolar international order?",
            "marks": 10
          },
          {
            "qNumber": "Q.6",
            "questionText": "Analyze the role of the Judiciary as the guardian of the Constitution of India. Explain the concepts of Judicial Review and Judicial Activism with reference to landmark Supreme Court verdicts safeguarding public interest.",
            "marks": 10
          }
        ]
      }
    ]
  }
];
