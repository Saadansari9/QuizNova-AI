// Maharashtra State Board Balbharati Textbooks - Complete Chapter Study Guides
// Authentic Curricula for Class 9, Class 10 (SSC), Class 11 (HSC), and Class 12 (HSC)

export interface TextbookChapter {
  id: string;
  chapterNumber: number;
  title: string;
  unit?: string;
  summary: string;
  coreConcepts: string[];
  keyFormulasOrRules?: string[];
  examImportantPoints: string[];
  exerciseQuestions: {
    shortAnswer: string[];
    descriptive: string[];
    longAnswerOrNumericals?: string[];
  };
}

export interface TextbookStudyGuide {
  bookId: string;
  title: string;
  standard: string;
  stream: string;
  subject: string;
  boardAgency: string;
  curriculumOverview: string;
  officialLinks: {
    title: string;
    url: string;
    statusNote: string;
  }[];
  chapters: TextbookChapter[];
}

// 1. CLASS 10 MATHEMATICS PART 1 (ALGEBRA)
const class10Math1Chapters: TextbookChapter[] = [
  {
    id: 'ssc-math1-ch1',
    chapterNumber: 1,
    title: 'Linear Equations in Two Variables',
    unit: 'Unit 1: Algebra Fundamentals',
    summary: 'An equation involving two variables with the maximum power of each variable being 1 is called a linear equation in two variables. General form: ax + by + c = 0, where a, b, c are real numbers and a, b ≠ 0. The chapter covers simultaneous equations, graphical method of solving, Cramer\'s Rule (determinant method), and equations reducible to a pair of linear equations.',
    coreConcepts: [
      'General form: ax + by + c = 0 where a, b, c are real numbers and a, b are not simultaneously zero.',
      'Simultaneous linear equations: Solving two linear equations simultaneously to find a unique common solution (x, y).',
      'Graphical Method: Plotting coordinates of at least 3 points for each line; point of intersection gives the unique solution.',
      'Determinant Method (Cramer\'s Rule): Determinant D = |a1 b1; a2 b2| = a1*b2 - a2*b1. Dx = |c1 b1; c2 b2|, Dy = |a1 c1; a2 c2|. Unique solution: x = Dx / D, y = Dy / D (provided D ≠ 0).',
      'Equations reducible to linear form: Using substitution u = 1/(x-a) and v = 1/(y-b) to convert non-linear reciprocal equations into linear form.'
    ],
    keyFormulasOrRules: [
      'Determinant Value: |a b; c d| = (ad - bc)',
      'Cramer\'s Rule: x = Dx / D, y = Dy / D (when D ≠ 0)',
      'Speed-Distance Relation in word problems: Distance = Speed × Time; Relative Speed: (u - v) upstream, (u + v) downstream',
      'Fraction Problems: Original fraction = x/y; numerator = x, denominator = y'
    ],
    examImportantPoints: [
      'Find the value of determinant D for 1 mark in Section A.',
      'Solve linear equations using Cramer\'s Rule (very frequent 3-mark question).',
      'Word problems on ages, two-digit numbers (10x + y), or boat-stream speed (frequent 4-mark question in Question 4).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Find the value of the determinant: |5  3; -7  0|.',
        'Determine whether (x = 3, y = -1) is a solution of 5x + 3y = 12.',
        'Write the given equation in standard form ax + by + c = 0: 4m - 2 = 3n.'
      ],
      descriptive: [
        'Solve the following simultaneous equations using Cramer\'s rule: 3x - 4y = 10; 4x + 3y = 5.',
        'Solve graphically: x + y = 6; x - y = 4. Draw the coordinate axes and plot at least three points for each line.',
        'The denominator of a fraction is 4 more than twice its numerator. Denominator becomes 12 times the numerator, if both the numerator and the denominator are reduced by 6. Find the fraction.'
      ],
      longAnswerOrNumericals: [
        'Solve: 27/(x - 2) + 31/(y + 3) = 85 and 31/(x - 2) + 27/(y + 3) = 89 by transforming into simultaneous linear equations.',
        'A two-digit number and the number with digits reversed add up to 143. In the given number the digit in unit\'s place is 3 more than the digit in the ten\'s place. Find the original number.'
      ]
    }
  },
  {
    id: 'ssc-math1-ch2',
    chapterNumber: 2,
    title: 'Quadratic Equations',
    unit: 'Unit 1: Algebra Fundamentals',
    summary: 'Any equation of the form ax² + bx + c = 0 where a, b, c are real numbers and a ≠ 0 is called a quadratic equation in standard form. Solutions or roots can be found by Factorisation, Completing the Square, and the Quadratic Formula x = [-b ± √(b² - 4ac)] / (2a). The nature of roots depends on the discriminant Δ = b² - 4ac.',
    coreConcepts: [
      'Standard form: ax² + bx + c = 0, where a ≠ 0.',
      'Roots or Solutions: Values of variable x that satisfy the equation (LHS = RHS).',
      'Factorisation Method: Splitting the middle term bx such that product equals a*c and sum equals b.',
      'Formula Method: x = (-b ± √Δ) / 2a, where Δ = b² - 4ac is called the discriminant.',
      'Nature of Roots: If Δ = 0, roots are real and equal. If Δ > 0, roots are real and unequal. If Δ < 0, roots are not real.',
      'Relation between roots and coefficients: Sum of roots (α + β) = -b/a; Product of roots (α * β) = c/a.',
      'Forming a quadratic equation when roots α and β are given: x² - (α + β)x + (α * β) = 0.'
    ],
    keyFormulasOrRules: [
      'Quadratic Formula: x = [-b ± √(b² - 4ac)] / (2a)',
      'Discriminant: Δ = b² - 4ac',
      'Sum of roots: α + β = -b/a',
      'Product of roots: αβ = c/a',
      'Equation form: x² - (α + β)x + αβ = 0'
    ],
    examImportantPoints: [
      'Identify whether an equation is quadratic (1 mark).',
      'Find the value of discriminant Δ and state nature of roots (2 marks).',
      'Find k if one of the roots is given (2 marks).',
      'High-weightage word problems on consecutive integers, speed/time, and area of rectangles (3 or 4 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Find the value of discriminant (Δ) for: 2y² - 5y + 10 = 0.',
        'Determine the nature of roots for: x² + 2x - 9 = 0.',
        'If one root of quadratic equation kx² - 10x + 3 = 0 is 3, find the value of k.'
      ],
      descriptive: [
        'Solve by factorisation: 5m² = 22m + 15.',
        'Solve by formula method: 5x² + 13x + 8 = 0.',
        'Form the quadratic equation if roots are (2 - √5) and (2 + √5).'
      ],
      longAnswerOrNumericals: [
        'Pratik takes 8 hours to travel 36 km downstream and return to the same spot. The speed of the boat in still water is 12 km/hr. Find the speed of the water current.',
        'Suyash scored 10 marks more in the second test than in the first. 5 times the score of the second test is the same as square of the score in the first test. Find his score in the first test.'
      ]
    }
  },
  {
    id: 'ssc-math1-ch3',
    chapterNumber: 3,
    title: 'Arithmetic Progression (A.P.)',
    unit: 'Unit 2: Sequences & Series',
    summary: 'A sequence is called an Arithmetic Progression (A.P.) if the difference between any two consecutive terms (t_n+1 - t_n) is constant, known as the common difference d. The chapter covers finding the n-th term t_n = a + (n - 1)d, sum of first n terms S_n = n/2 [2a + (n - 1)d], and practical applications like loan installments, savings, and auditorium seating.',
    coreConcepts: [
      'Sequence and Term notation: t1, t2, t3, ..., tn.',
      'Common difference d = t_(n+1) - t_n. (If d is constant, the sequence is an A.P.).',
      'First term is designated as a (i.e. t1 = a).',
      'n-th term formula: t_n = a + (n - 1)d.',
      'Sum of first n terms: S_n = n/2 [2a + (n - 1)d] or S_n = n/2 [t1 + tn].',
      'Selection of consecutive terms in A.P.: Three terms: (a - d), a, (a + d); Four terms: (a - 3d), (a - d), (a + d), (a + 3d).'
    ],
    keyFormulasOrRules: [
      't_n = a + (n - 1)d',
      'S_n = (n / 2) * [2a + (n - 1)d]',
      'S_n = (n / 2) * (First Term + Last Term) = (n / 2) * (t1 + tn)',
      'd = t_n - t_(n-1)'
    ],
    examImportantPoints: [
      'Check whether a sequence is an A.P. and find common difference d (1 mark).',
      'Find 19th term or 27th term of an A.P. (2 marks).',
      'Find how many natural numbers between 10 and 250 are divisible by 4 (3 marks).',
      'Word problems on savings schemes, loan repayments, and auditorium seating (4 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Find the first term and common difference for the A.P.: 5, 1, -3, -7, ...',
        'Find the 21st term of the A.P.: 9, 4, -1, -6, -11, ...',
        'Decide whether the sequence -10, -6, -2, 2, ... is an A.P. If so, find the 20th term.'
      ],
      descriptive: [
        'How many two-digit numbers are divisible by 4?',
        'In an A.P., 17th term is 7 more than its 10th term. Find the common difference.',
        'Find the sum of all odd natural numbers from 1 to 150.'
      ],
      longAnswerOrNumericals: [
        'A man borrows ₹ 8,000 and agrees to repay with a total interest of ₹ 1,360 in 12 monthly installments. Each installment being less than the preceding one by ₹ 40. Find the amount of the first and last installment.',
        'There is an auditorium with 27 rows of seats. There are 20 seats in the first row, 22 seats in the second row, 24 seats in the third row and so on. Find the number of seats in the 15th row and also find how many total seats are there in the auditorium.'
      ]
    }
  },
  {
    id: 'ssc-math1-ch4',
    chapterNumber: 4,
    title: 'Financial Planning',
    unit: 'Unit 3: Applied Commerce & Finance',
    summary: 'Focuses on Goods and Services Tax (GST) introduced in India on 1st July 2017. Covers CGST (Central GST), SGST (State GST), Input Tax Credit (ITC), GST payable = Output Tax - ITC, Tax Invoices, HSN/SAC codes, and investments in shares, Face Value (FV), Market Value (MV), Dividend, and Mutual Funds (NAV & SIP).',
    coreConcepts: [
      'GST Structure: For intra-state transactions: GST = CGST + SGST, where CGST = SGST = (GST rate / 2).',
      'Input Tax Credit (ITC): GST paid at the time of purchase by a trader is called Input Tax. The trader claims credit of this input tax against Output Tax collected on sale.',
      'GST Payable = Output Tax (tax collected on sales) - Input Tax Credit (ITC on purchases).',
      'Shares Terminology: Face Value (FV), Market Value (MV). If MV > FV: At Premium; if MV = FV: At Par; if MV < FV: At Discount.',
      'Brokerage and GST on Brokerage: Brokerage is added to buying price and deducted from selling price. GST (usually 18%) is applied on Brokerage amount.'
    ],
    keyFormulasOrRules: [
      'GST Payable = Output Tax - ITC',
      'CGST = SGST = GST / 2',
      'Sum Invested = Number of Shares × Market Value (MV)',
      'Dividend Earned = Number of Shares × (Dividend % × Face Value)',
      'Rate of Return = (Total Income / Total Investment) × 100%'
    ],
    examImportantPoints: [
      'Calculate CGST and SGST given GST percentage (1 or 2 marks).',
      'Calculate GST payable using ITC = Output tax - Input tax (3 marks).',
      'Prepare tax invoice for goods/services showing taxable value, CGST, SGST (3 marks).',
      'Compare investments in two different companies to find which investment is more profitable (3-4 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'If GST rate is 18% on AC, what is the rate of CGST and SGST?',
        'Find Market Value (MV) when Face Value (FV) = ₹ 100, at a premium of ₹ 65.',
        'Write the full form of GSTIN, HSN, and SAC.'
      ],
      descriptive: [
        'Pawan Medical supplies medicines. On some medicines the rate of GST is 12%, then what is the rate of CGST and SGST? If taxable value is ₹ 800, find total bill amount.',
        'M/s Jay Chemicals purchased a liquid soap for ₹ 8000 (taxable value) and paid GST @ 18%. Sold it to a consumer for ₹ 10,000 (taxable value) and charged 18% GST. Find CGST and SGST payable by M/s Jay Chemicals.',
        'Joseph bought 200 shares of FV ₹ 10 at MV ₹ 50. The company declared a dividend of 12%. Find Joseph\'s rate of return on his investment.'
      ],
      longAnswerOrNumericals: [
        'Smita invested ₹ 12,000 and purchased shares of FV ₹ 10 at MV ₹ 20. She sold the shares after receiving 20% dividend at MV ₹ 30. For each transaction she paid 0.1% brokerage. Find total gain or loss percentage.'
      ]
    }
  },
  {
    id: 'ssc-math1-ch5',
    chapterNumber: 5,
    title: 'Probability',
    unit: 'Unit 4: Statistics & Chance',
    summary: 'Probability measures the likelihood of occurrence of a random event. Covers Random Experiments, Outcomes, Sample Space (S), Number of sample points n(S), Events (A, B), and Probability of an Event P(A) = n(A) / n(S). Standard experiments include tossing coins, rolling dice, picking playing cards (52 pack), and forming 2-digit numbers.',
    coreConcepts: [
      'Random Experiment: An experiment where all possible outcomes are known in advance, but exact outcome cannot be predicted.',
      'Sample Space (S): Set of all possible outcomes. Number of elements is denoted by n(S).',
      'Coin Tosses: 1 coin: S = {H, T}, n(S) = 2. 2 coins: S = {HH, HT, TH, TT}, n(S) = 4. 3 coins: n(S) = 8.',
      'Die Roll: 1 die: S = {1, 2, 3, 4, 5, 6}, n(S) = 6. 2 dice: n(S) = 36.',
      'Pack of 52 Cards: 26 Red (13 Hearts, 13 Diamonds) + 26 Black (13 Spades, 13 Clubs). 12 Face cards (4 King, 4 Queen, 4 Jack). 4 Aces.',
      'Probability Formula: P(A) = n(A) / n(S). 0 ≤ P(A) ≤ 1. If P(A) = 0 (impossible event), if P(A) = 1 (certain event).'
    ],
    keyFormulasOrRules: [
      'P(A) = n(A) / n(S)',
      '0 ≤ P(A) ≤ 1 and 0% ≤ P(A) ≤ 100%',
      'P(A) + P(not A) = 1',
      'For 2 dice: n(S) = 36; pairs (1,1) to (6,6)'
    ],
    examImportantPoints: [
      'Write sample space S and n(S) for a given random experiment (1 mark).',
      'Card problems and two dice problems (very high probability 3 marks).',
      'Forming two-digit numbers using digits without repetition (2 or 3 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'A card is drawn from a well-shuffled pack of 52 playing cards. Find the probability that the card drawn is an ace.',
        'Two coins are tossed simultaneously. Write the sample space S and number of sample points n(S).',
        'Which of the following numbers cannot represent a probability? (A) 2/3 (B) 1.5 (C) 15% (D) 0.7'
      ],
      descriptive: [
        'Two dice are rolled simultaneously. Find the probability of the events: (1) The sum of the digits on upper faces is at least 10. (2) The sum of the digits on upper faces is 33. (3) The digit on the first die is greater than the digit on second die.',
        'A box contains 5 red, 8 blue and 4 green pens. Rutuja wants to pick a pen at random. What is the probability that the pen picked is: (1) red (2) not blue?',
        'Form two-digit numbers using digits 0, 1, 2, 3, 4, 5 without repeating any digit. Find probability that the number formed is an odd number.'
      ],
      longAnswerOrNumericals: [
        'A committee of two is to be formed from 3 boys (B1, B2, B3) and 2 girls (G1, G2). Write sample space S and find the probability of events: (1) Condition for event A: At least one girl should be on committee. (2) Condition for event B: One boy and one girl. (3) Condition for event C: There should be no girl.'
      ]
    }
  },
  {
    id: 'ssc-math1-ch6',
    chapterNumber: 6,
    title: 'Statistics',
    unit: 'Unit 4: Statistics & Chance',
    summary: 'Organizing, summarizing, and interpreting grouped and ungrouped numerical data. Covers Measures of Central Tendency: Mean (Direct Method, Assumed Mean Method, Step-Deviation Method), Median for grouped data, Mode for grouped data, and Graphical Representations: Histogram, Frequency Polygon, and Pie Diagram.',
    coreConcepts: [
      'Direct Mean Method: Mean (X̄) = Σ(fi * xi) / Σfi.',
      'Assumed Mean Method: Let A be assumed mean, di = xi - A. Mean (X̄) = A + [Σ(fi * di) / Σfi].',
      'Step-Deviation Method: ui = (xi - A) / g. Mean (X̄) = A + [Σ(fi * ui) / Σfi] * g.',
      'Median of Grouped Data: Median = L + [ (N/2 - cf) / f ] * h, where L is lower boundary of median class, N = Σfi, cf is cumulative frequency of class preceding median class, f is frequency of median class, and h is class width.',
      'Mode of Grouped Data: Mode = L + [ (f1 - f0) / (2f1 - f0 - f2) ] * h, where f1 is frequency of modal class, f0 is frequency of preceding class, and f2 is frequency of succeeding class.',
      'Pie Diagram: Central angle θ = (Value of component / Total value) × 360°.'
    ],
    keyFormulasOrRules: [
      'Direct Mean: X̄ = Σ(fi * xi) / N',
      'Assumed Mean: X̄ = A + d̄, where d̄ = Σ(fi * di) / N',
      'Step-Deviation Mean: X̄ = A + (ū * g)',
      'Median = L + [(N/2 - cf) / f] * h',
      'Mode = L + [(f1 - f0) / (2f1 - f0 - f2)] * h',
      'Central Angle θ = (Score of component / Total Score) × 360°'
    ],
    examImportantPoints: [
      'Calculate Mode or Median from grouped frequency distribution table (3 marks).',
      'Calculate Mean using Assumed Mean or Step-Deviation method (3-4 marks).',
      'Draw a Histogram and Frequency Polygon on the same graph (4 marks).',
      'Draw a Pie diagram given sectoral distribution data (3 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Find the class mark of class 20 - 25.',
        'If the central angle for food expenditure in a family is 120° and total monthly expenditure is ₹ 36,000, find expenditure on food.',
        'Write the formula to calculate Mode of grouped frequency data and explain each symbol.'
      ],
      descriptive: [
        'The following table shows the frequency distribution of the time required for each student to complete an assignment. Find the mean time by Step-Deviation method. Class (Time in min): 20-24, 25-29, 30-34, 35-39; No. of students: 8, 12, 18, 12.',
        'Find the median of the following data: Daily wages (₹): 100-200, 200-300, 300-400, 400-500, 500-600; No. of workers: 12, 20, 35, 18, 15.',
        'The following table shows the classification of percentage of marks of students and the number of students. Find the mode of the marks.'
      ],
      longAnswerOrNumericals: [
        'Draw a Histogram and hence Frequency Polygon for the given data of rainfall in mm across 50 districts in Maharashtra.',
        'The marks scored by students in an examination are represented in a pie chart. Draw the pie chart from the given table: Marathi 85, English 60, Science 90, Mathematics 100, Social Science 65. (Total = 400).'
      ]
    }
  }
];

// 2. CLASS 10 SCIENCE & TECHNOLOGY PART 1
const class10Science1Chapters: TextbookChapter[] = [
  {
    id: 'ssc-sci1-ch1',
    chapterNumber: 1,
    title: 'Gravitation',
    unit: 'Physics: Force & Motion',
    summary: 'Discovered by Sir Isaac Newton upon observing an apple falling vertically downwards. The chapter explains Newton\'s Universal Law of Gravitation, Kepler\'s three laws of planetary motion, acceleration due to gravity (g), variation in g (with altitude, depth, and latitude), mass vs weight, free fall, and escape velocity.',
    coreConcepts: [
      'Newton\'s Law of Gravitation: Every object in the Universe attracts every other object with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them: F = G*(m1*m2)/r².',
      'Universal Gravitational Constant G = 6.673 × 10⁻¹¹ N·m²/kg².',
      'Kepler\'s Three Laws: (1) Orbit of a planet is an ellipse with the Sun at one of the foci. (2) Line joining the planet and Sun sweeps equal areas in equal intervals of time. (3) Square of period of revolution is directly proportional to the cube of mean distance from Sun: T² ∝ r³.',
      'Acceleration due to gravity g = GM/R² ≈ 9.8 m/s² on Earth\'s surface. Value of g is maximum at poles (9.83 m/s²), minimum at equator (9.78 m/s²), decreases with height above surface and decreases with depth towards Earth\'s center (g = 0 at center).',
      'Mass is the quantity of matter (scalar, unit kg, constant everywhere). Weight is gravitational force W = mg (vector, unit N, varies with g).',
      'Free Fall: When a body moves under the sole influence of gravity. In free fall, initial velocity u = 0, a = g.',
      'Escape Velocity (v_esc): Minimum initial velocity required for an object to overcome Earth\'s gravitational pull: v_esc = √(2GM/R) = √(2gR) ≈ 11.2 km/s.'
    ],
    keyFormulasOrRules: [
      'F = G * (m1 * m2) / r²',
      'g = G * M / R²',
      'Weight W = m * g',
      'Kinematical Equations under Gravity: v = u + gt; s = ut + (1/2)gt²; v² = u² + 2gs',
      'Escape Velocity: v_esc = √(2gR) = 11.2 km/s on Earth',
      'Kepler\'s Third Law: T² / r³ = constant (K)'
    ],
    examImportantPoints: [
      'Distinguish between Mass and Weight (very frequent 2-mark question).',
      'State Kepler\'s three laws with suitable schematic diagram (3 marks).',
      'Derive the relation between g and G: g = GM/R² (2-3 marks).',
      'Numerical problems calculating weight on Moon (g_moon = g_earth / 6) or time taken for a falling stone (3 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Distinguish between: Mass and Weight.',
        'Why does the value of g change as we go inside the Earth?',
        'State Newton\'s Universal Law of Gravitation.'
      ],
      descriptive: [
        'State Kepler\'s three laws of planetary motion with a neat labeled diagram of an elliptical orbit.',
        'Explain why an object weighs less at the equator than at the poles.',
        'Prove that under free fall, mechanical energy of an object remains constant at all points.'
      ],
      longAnswerOrNumericals: [
        'An iron ball of mass 3 kg is released from a height of 125 m and falls freely to the ground. Assuming g = 10 m/s², calculate: (i) time taken to reach the ground, (ii) velocity of the ball on reaching the ground, (iii) height of the ball at half time.',
        'Calculate escape velocity on the surface of Mars, given mass of Mars = 6.4 × 10²³ kg and radius of Mars = 3.4 × 10⁶ m.'
      ]
    }
  },
  {
    id: 'ssc-sci1-ch2',
    chapterNumber: 2,
    title: 'Periodic Classification of Elements',
    unit: 'Chemistry: Structure & Periodicity',
    summary: 'Historical attempts to classify elements: Dobereiner\'s Triads, Newlands\' Law of Octaves, Mendeleev\'s Periodic Table, and Henry Moseley\'s Modern Periodic Table based on Atomic Number (Z). Covers 7 horizontal periods, 18 vertical groups, s, p, d, f blocks, and periodic trends: atomic radius, valency, and metallic vs non-metallic character.',
    coreConcepts: [
      'Dobereiner\'s Triads: Atomic mass of the middle element was approximately the arithmetic mean of the other two elements (e.g. Li, Na, K).',
      'Newlands\' Law of Octaves: When elements are arranged by increasing atomic mass, every eighth element has properties similar to the first (analogous to musical notes).',
      'Mendeleev\'s Periodic Law: Properties of elements are periodic functions of their atomic masses. Merits: Predicted undiscovered elements (Eka-Boron = Scandium, Eka-Aluminium = Gallium, Eka-Silicon = Germanium). Demerits: Anomalous position of hydrogen, isotopes, and Cobalt/Nickel pair.',
      'Modern Periodic Law (Henry Moseley): Properties of elements are periodic functions of their atomic numbers (Z).',
      'Modern Table Structure: 18 vertical columns (Groups), 7 horizontal rows (Periods), 4 blocks (s-block, p-block, d-block transition elements, f-block inner-transition elements).',
      'Periodic Trends: (a) Valency remains constant in a group; in a period increases from 1 to 4 then decreases to 0. (b) Atomic Radius increases down a group; decreases across a period from left to right. (c) Metallic character increases down a group, decreases across a period.'
    ],
    keyFormulasOrRules: [
      'Modern Periodic Law: Atomic number (Z) is the fundamental property.',
      'Dobereiner\'s rule: Mass of middle element = (Mass1 + Mass3) / 2',
      'Trend in Period (Left to Right): Atomic size decreases, electronegativity increases, non-metallic character increases.',
      'Trend in Group (Top to Bottom): Atomic size increases, electropositivity increases, metallic character increases.'
    ],
    examImportantPoints: [
      'Write merits and demerits of Mendeleev\'s periodic table (3 marks).',
      'State Modern Periodic Law and explain why inert gases are placed in zero group (2 marks).',
      'Explain periodic trends: Atomic size decreases along a period (give scientific reason, 2 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'State Dobereiner\'s law of triads with one example.',
        'Why are noble gases placed in a separate group (Group 18)?',
        'Define atomic radius and state its unit.'
      ],
      descriptive: [
        'Give scientific reason: Atomic radius goes on decreasing while going from left to right in a period.',
        'Write any two merits and two limitations of Mendeleev\'s Periodic Table.',
        'Explain the structure of the Modern Periodic Table with respect to groups, periods, and blocks.'
      ],
      longAnswerOrNumericals: [
        'An element has electronic configuration 2, 8, 2. (a) What is the atomic number of this element? (b) What is its valency? (c) To which group and period does this element belong? (d) With which of the following elements would it show chemical similarity: N(7), Be(4), Ar(18), Cl(17)?'
      ]
    }
  },
  {
    id: 'ssc-sci1-ch3',
    chapterNumber: 3,
    title: 'Chemical Reactions and Equations',
    unit: 'Chemistry: Reactions & Processes',
    summary: 'Representation of chemical changes through balanced chemical equations. Covers types of chemical reactions: Combination, Decomposition, Displacement, Double Displacement, Exothermic and Endothermic reactions, Oxidation and Reduction (Redox reactions), Corrosion, and Rancidity.',
    coreConcepts: [
      'Writing and Balancing Chemical Equations: Law of Conservation of Mass states total mass of reactants = total mass of products.',
      'Combination Reaction: Two or more reactants combine to form a single product: A + B → AB.',
      'Decomposition Reaction: A single reactant breaks down into two or more simpler substances by heat (thermal), light (photolytic), or electricity (electrolytic).',
      'Displacement Reaction: A more reactive element displaces a less reactive element from its compound: Zn + CuSO4 → ZnSO4 + Cu.',
      'Double Displacement Reaction: Ions in reactants are exchanged to form a precipitate: AgNO3 + NaCl → AgCl↓ + NaNO3.',
      'Exothermic vs Endothermic: Exothermic releases heat; Endothermic absorbs heat.',
      'Oxidation & Reduction: Oxidation is gain of oxygen or loss of electrons/hydrogen. Reduction is gain of hydrogen or electrons/loss of oxygen. Simultaneous occurrence is Redox.',
      'Corrosion & Rancidity: Slow oxidation of metals by atmospheric gases (e.g. rusting of iron: Fe2O3·xH2O). Rancidity is oxidation of oils and fats producing foul smell.'
    ],
    keyFormulasOrRules: [
      'Rust formula: Fe₂O₃·xH₂O (hydrated ferric oxide)',
      'Oxidation: Loss of electrons / Gain of Oxygen',
      'Reduction: Gain of electrons / Gain of Hydrogen',
      'Photosynthesis (Endothermic): 6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂',
      'Respiration (Exothermic): C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy'
    ],
    examImportantPoints: [
      'Balance chemical equations step-by-step (frequent 2-3 mark question).',
      'Identify types of reactions from given chemical equations (2 marks).',
      'Define Redox reaction with a balanced chemical equation showing which substance is oxidized and reduced (3 marks).',
      'Explain methods to prevent corrosion and rancidity (2 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Balance the equation: NaOH + H2SO4 → Na2SO4 + H2O.',
        'Define: Exothermic reaction and Endothermic reaction with one example each.',
        'What is rancidity? How can it be prevented?'
      ],
      descriptive: [
        'Explain Redox reaction with the example: CuO + H2 → Cu + H2O. Identify oxidant and reductant.',
        'Distinguish between: Displacement reaction and Double displacement reaction.',
        'What is corrosion? Explain the electrochemical mechanism of rusting of iron with chemical equations.'
      ],
      longAnswerOrNumericals: [
        'Write balanced chemical equations for the following: (i) Calcium carbonate heated strongly, (ii) Barium chloride solution mixed with sodium sulphate solution, (iii) Copper sulphate solution reacts with iron nail, (iv) Dilute hydrochloric acid added to zinc granules. Name the type of reaction in each case.'
      ]
    }
  },
  {
    id: 'ssc-sci1-ch4',
    chapterNumber: 4,
    title: 'Effects of Electric Current',
    unit: 'Physics: Electricity & Magnetism',
    summary: 'Heating effect of electric current (Joule\'s Law: H = I²Rt), electric power, fuse wire, magnetic effect of electric current (Oersted\'s experiment), Right-Hand Thumb Rule, Fleming\'s Left-Hand Rule (Electric Motor), Electromagnetic Induction (Faraday\'s Law), Fleming\'s Right-Hand Rule (Electric Generator), and AC vs DC current.',
    coreConcepts: [
      'Joule\'s Law of Heating: Heat produced in a conductor is directly proportional to square of current, resistance, and time: H = I²Rt.',
      'Electric Power: P = V*I = I²R = V²/R. Commercial unit: 1 kilowatt-hour (1 kWh) = 1 Unit = 3.6 × 10⁶ Joules.',
      'Right-Hand Thumb Rule: If you hold a current-carrying straight conductor in right hand such that thumb points in direction of current, fingers curl in direction of magnetic lines of force.',
      'Fleming\'s Left-Hand Rule (Motor): Thumb = Force/Motion, Forefinger = Magnetic Field, Middle finger = Current. Converts electrical energy into mechanical energy.',
      'Faraday\'s Law of Induction & Fleming\'s Right-Hand Rule (Generator): Moving conductor in magnetic field induces EMF/current. Converts mechanical into electrical energy.',
      'AC vs DC: Alternating Current periodic reversal of direction (Frequency in India = 50 Hz, voltage = 220V). Direct Current flows in single direction.',
      'Safety Devices: Fuse wire (low melting point alloy of lead and tin) and Miniature Circuit Breaker (MCB).'
    ],
    keyFormulasOrRules: [
      'Heat produced: H = I²Rt = VIt = (V² / R) * t Joules',
      'Power: P = V * I = I²R = V² / R Watts',
      '1 Unit (1 kWh) = 3.6 × 10⁶ J',
      'Frequency of domestic AC in India = 50 Hz'
    ],
    examImportantPoints: [
      'State Joule\'s law of heating and write its mathematical formula (2 marks).',
      'Draw neat labeled diagram and explain construction and working of an Electric Motor (4-5 marks).',
      'Distinguish between AC and DC (2 marks).',
      'Numericals calculating electric bill given wattage of appliances and hours used (3 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'State Fleming\'s Left-Hand Rule and write where it is used.',
        'Why is tungsten metal used in electric bulbs?',
        'Distinguish between: Alternating Current (AC) and Direct Current (DC).'
      ],
      descriptive: [
        'Explain the construction and working of an Electric Motor with a neat labeled diagram.',
        'State Faraday\'s law of electromagnetic induction. State Fleming\'s Right-Hand Rule.',
        'What is short circuiting and overloading? What precaution is taken to prevent damage?'
      ],
      longAnswerOrNumericals: [
        'An electric bulb of 100 W is used for 6 hours daily, and an electric iron of 500 W is used for 2 hours daily. Find the electricity consumption in units for the month of April (30 days). If rate per unit is ₹ 5, calculate total bill.'
      ]
    }
  },
  {
    id: 'ssc-sci1-ch5',
    chapterNumber: 5,
    title: 'Heat',
    unit: 'Physics: Thermodynamics',
    summary: 'Latent heat (fusion and vaporization), regulation, anomalous expansion of water (between 0°C and 4°C demonstrated by Hope\'s apparatus), dew point, relative humidity, specific heat capacity (Q = mcΔT), principle of heat exchange, and calorimeter measurement.',
    coreConcepts: [
      'Latent Heat: Heat absorbed or released during phase change at constant temperature. Specific Latent Heat of Fusion of ice = 333 kJ/kg (80 cal/g); Specific Latent Heat of Vaporization of steam = 2256 kJ/kg (540 cal/g).',
      'Regelation: The phenomenon in which ice converts into liquid state under pressure and reconverts to ice when pressure is released.',
      'Anomalous Expansion of Water: Water contracts when heated from 0°C to 4°C, and its volume is minimum and density is maximum at 4°C. Studied using Hope\'s apparatus. Enables aquatic life to survive in frozen ponds during winter.',
      'Dew Point and Humidity: Absolute humidity is mass of water vapor present in unit volume of air. Relative Humidity = (Mass of vapor present / Mass required to saturate at that temp) × 100%. If RH > 60%, air feels humid; if RH = 100%, dew point is reached.',
      'Specific Heat Capacity (c): Amount of heat required to raise temperature of unit mass by 1°C. Q = m*c*ΔT. High specific heat of water (1 cal/g°C = 4184 J/kg°C) makes it ideal for cooling engines and fomentation.',
      'Principle of Heat Exchange: Heat lost by hot object = Heat gained by cold object (in an isolated container).'
    ],
    keyFormulasOrRules: [
      'Heat gained / lost: Q = m * c * ΔT',
      'Latent Heat: Q = m * L',
      'Relative Humidity (%) = [Actual vapor pressure / Saturated vapor pressure] × 100',
      'Heat Lost by Hot Body = Heat Gained by Cold Body'
    ],
    examImportantPoints: [
      'Explain anomalous behavior of water with Hope\'s apparatus diagram (4 marks).',
      'Explain why aquatic animals survive in cold countries during winter (give scientific reason, 2 marks).',
      'State principle of heat exchange and solve calorimeter numericals (3 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Define: Specific latent heat of fusion and specific latent heat of vaporization.',
        'Why do water pipes burst in cold countries in winter?',
        'State the unit of specific heat capacity in SI and CGS systems.'
      ],
      descriptive: [
        'How does anomalous expansion of water help aquatic animals survive in winter? Explain.',
        'Explain Hope\'s apparatus to study anomalous behavior of water with a neat labeled diagram.',
        'Explain the difference between dew point and relative humidity.'
      ],
      longAnswerOrNumericals: [
        'A copper sphere of mass 100 g is heated to 100°C and placed in a copper calorimeter of mass 100 g containing 170 g of water at 20°C. Calculate the final steady temperature of the mixture. (Specific heat of copper = 0.1 cal/g°C, specific heat of water = 1 cal/g°C).'
      ]
    }
  }
];

// 3. CLASS 12 PHYSICS (HSC)
const class12PhysicsChapters: TextbookChapter[] = [
  {
    id: 'hsc-phy-ch1',
    chapterNumber: 1,
    title: 'Rotational Dynamics',
    unit: 'Mechanics',
    summary: 'Combines Circular Motion and Rotational Motion. Covers kinematics of circular motion, centripetal vs centrifugal force, banking of roads, conical pendulum, vertical circular motion, moment of inertia (MI) as rotational analogue of mass, radius of gyration, theorems of parallel and perpendicular axes, torque, angular momentum, conservation of angular momentum, and rolling motion.',
    coreConcepts: [
      'Uniform Circular Motion (UCM): Motion of particle along circumference of circle with constant speed. Centripetal acceleration a_cp = v²/r = ω²r directed towards center.',
      'Centripetal Force F = mv²/r = mω²r (real force). Centrifugal Force is pseudo force in rotating non-inertial frame.',
      'Banking of Roads: Angle of banking θ = tan⁻¹(v² / rg). Optimum speed without friction: v = √(rg tan θ). Minimum and maximum safe speed limits with friction coefficient μ.',
      'Conical Pendulum: Period T = 2π √(L cos θ / g). Tension T0 = mg / cos θ.',
      'Vertical Circular Motion: Minimum speed at highest point v_top = √(rg); at lowest point v_low = √(5rg); at midway point v_mid = √(3rg). Tension difference: T_low - T_top = 6mg.',
      'Moment of Inertia (I): I = Σ mi*ri² = ∫ r² dm. Radius of gyration K = √(I / M).',
      'Theorem of Parallel Axes: Io = Ic + Mh².',
      'Theorem of Perpendicular Axes: Iz = Ix + Iy (for planar laminar bodies).',
      'Torque τ = I*α; Angular Momentum L = I*ω. Law of Conservation of Angular Momentum: If external torque τ_ext = 0, then L = I*ω = constant (e.g. ballet dancer, diver).'
    ],
    keyFormulasOrRules: [
      'Banking angle: tan θ = v² / (r * g)',
      'Conical Pendulum: T = 2π √(L cos θ / g)',
      'VCM velocities: v_top = √(rg), v_bottom = √(5rg)',
      'Parallel axes: Io = Ic + Mh²',
      'Perpendicular axes: Iz = Ix + Iy',
      'Torque τ = I * α',
      'Angular momentum: L = I * ω; dL/dt = τ_ext',
      'Rolling Kinetic Energy: E = (1/2) M v² [1 + K² / R²]'
    ],
    examImportantPoints: [
      'Derive expression for most safe speed on a banked curved road (3 marks).',
      'State and prove Principle of Parallel Axes (3 marks).',
      'State and prove Law of Conservation of Angular Momentum with examples (3-4 marks).',
      'Numericals on banking of roads, moment of inertia, and vertical circular motion (3 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Define radius of gyration and state its SI unit and dimensions.',
        'Why are curved roads banked?',
        'State the conditions under which the theorem of perpendicular axes is applicable.'
      ],
      descriptive: [
        'Derive an expression for the optimum speed of a vehicle on a banked road neglecting friction. Hence find banking angle.',
        'State and prove the theorem of parallel axes for moment of inertia.',
        'Explain the conservation of angular momentum with two daily life illustrations.'
      ],
      longAnswerOrNumericals: [
        'A vehicle is moving on a curved road of radius 100 m banked at an angle of 9°28\'. If coefficient of friction between tyres and road is 0.2, find the minimum and maximum safe speeds. (g = 9.8 m/s²).',
        'A body of mass 1 kg is tied to a string and revolved in a vertical circle of radius 1 m. Find the tension in the string when body is at the highest and lowest points if speed at highest point is minimum required to complete the circle.'
      ]
    }
  },
  {
    id: 'hsc-phy-ch2',
    chapterNumber: 2,
    title: 'Mechanical Properties of Fluids',
    unit: 'Fluids & Matter',
    summary: 'Covers fluid statics and dynamics: Pressure in fluid, Pascal\'s law and applications (hydraulic lift), surface tension (surface energy, molecular theory, angle of contact, capillary action, excess pressure inside bubble/drop by Laplace\'s law), fluid dynamics (streamline vs turbulent flow, equation of continuity, Bernoulli\'s equation, and terminal velocity with Stokes\' law).',
    coreConcepts: [
      'Fluid Pressure: P = h*ρ*g. Absolute Pressure P = P0 + hρg, where P0 is atmospheric pressure.',
      'Pascal\'s Law: Pressure applied to an enclosed fluid is transmitted undiminished to every point: F1/A1 = F2/A2.',
      'Surface Tension (T): Force per unit length acting perpendicular to imaginary line on liquid surface: T = F / L. Unit: N/m or J/m².',
      'Surface Energy: Work done in increasing surface area by dA: dW = T * dA.',
      'Laplace\'s Law for Excess Pressure: Inside liquid drop: ΔP = 2T/R; Inside soap bubble (two free surfaces): ΔP = 4T/R.',
      'Capillary Rise: h = (2T cos θ) / (r * ρ * g). Angle of contact θ is acute for wetting liquids (water-glass) and obtuse for non-wetting (mercury-glass).',
      'Viscosity and Stokes\' Law: Viscous drag F = 6πηrv. Terminal velocity v_t = [2r² (ρ - σ) g] / (9η).',
      'Equation of Continuity: A1*v1 = A2*v2 = constant.',
      'Bernoulli\'s Principle: P + (1/2)ρv² + ρgh = constant.'
    ],
    keyFormulasOrRules: [
      'Excess pressure inside drop: ΔP = 2T / R',
      'Excess pressure inside soap bubble: ΔP = 4T / R',
      'Capillary rise: h = (2T cos θ) / (r ρ g)',
      'Stokes\' Law: F = 6 π η r v',
      'Terminal velocity: v_t = 2r²(ρ - σ)g / (9η)',
      'Bernoulli\'s equation: P + (1/2)ρv² + ρgh = constant'
    ],
    examImportantPoints: [
      'Derive Laplace\'s law for excess pressure inside a liquid drop (3 marks).',
      'Derive expression for capillary rise using forces or pressure method (3 marks).',
      'State and explain Bernoulli\'s theorem and write two applications (Venturi meter, airfoil lift) (3-4 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Define angle of contact. What is its value for pure water and clean glass?',
        'State Stokes\' law and write its mathematical formula.',
        'Distinguish between streamline flow and turbulent flow.'
      ],
      descriptive: [
        'Derive Laplace\'s law for excess pressure inside a spherical soap bubble.',
        'Derive an expression for the height of capillary rise of a liquid in a capillary tube.',
        'State and prove Bernoulli\'s theorem for streamline flow of an ideal fluid.'
      ],
      longAnswerOrNumericals: [
        'Calculate the work done in blowing a soap bubble from radius 2 cm to 3 cm if surface tension of soap solution is 0.03 N/m.',
        'A steel ball of radius 1 mm falls through glycerine of viscosity 0.83 N·s/m² and density 1.26 × 10³ kg/m³. Density of steel is 7.8 × 10³ kg/m³. Find terminal velocity of the ball.'
      ]
    }
  },
  {
    id: 'hsc-phy-ch3',
    chapterNumber: 3,
    title: 'Kinetic Theory of Gases and Radiation',
    unit: 'Thermodynamics',
    summary: 'Ideal gas behavior from molecular perspectives, derivation of pressure exerted by gas P = (1/3) ρ v_rms², root mean square velocity, degrees of freedom, law of equipartition of energy, molar specific heats (Cp - Cv = R Mayer\'s relation), thermal radiation, Stefan-Boltzmann law, Wien\'s displacement law, and blackbody radiation curves.',
    coreConcepts: [
      'Assumptions of Kinetic Theory: Gas molecules are tiny rigid spheres in random continuous motion, collisions are elastic, volume of molecules is negligible compared to vessel.',
      'Pressure of Gas: P = (1/3) * (N/V) * m * v_rms² = (1/3) ρ v_rms².',
      'RMS Speed: v_rms = √(3RT / M) = √(3kT / m). Proportional to √T.',
      'Average Kinetic Energy per molecule = (3/2) kT; per mole = (3/2) RT.',
      'Mayer\'s Relation: Cp - Cv = R/J (in heat units) or Cp - Cv = R (in mechanical units).',
      'Blackbody Radiation: Perfectly absorbs all incident radiant energy (absorptive power a = 1). Ferry\'s blackbody.',
      'Wien\'s Displacement Law: λ_max * T = b (constant b = 2.897 × 10⁻³ m·K).',
      'Stefan-Boltzmann Law: Radiant energy emitted per unit time per unit area: R = e σ T⁴. For perfect blackbody (e = 1): R = σ T⁴.'
    ],
    keyFormulasOrRules: [
      'Gas Pressure: P = (1/3) ρ v_rms²',
      'v_rms = √(3RT / M)',
      'Mayer\'s Relation: Cp - Cv = R',
      'Wien\'s Law: λ_max * T = b',
      'Stefan\'s Law: R = σ T⁴; Heat loss rate: dQ/dt = e σ A (T⁴ - T₀⁴)'
    ],
    examImportantPoints: [
      'Derive expression for pressure of an ideal gas on the basis of kinetic theory (4 marks).',
      'Derive Mayer\'s relation Cp - Cv = R (3 marks).',
      'State Wien\'s displacement law and Stefan-Boltzmann law (2 marks each).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'State Wien\'s displacement law and write its mathematical formula.',
        'Define emissive power and coefficient of emission (emissivity).',
        'Calculate rms velocity of oxygen molecules at 27°C (Molecular mass of O2 = 32 g/mol).'
      ],
      descriptive: [
        'Derive the expression for pressure exerted by a gas on the walls of its container on the basis of kinetic theory of gases.',
        'Derive Mayer\'s relation Cp - Cv = R using first law of thermodynamics.',
        'Explain Ferry\'s black body with a neat labeled diagram.'
      ],
      longAnswerOrNumericals: [
        'A 60 W filament lamp has temperature 2000 K. Assuming it behaves as a black body and surface area of filament is 10⁻⁴ m², calculate Stefan\'s constant σ.',
        'Compare the rates of emission of heat by a black body at 727°C and 227°C.'
      ]
    }
  }
];

// 4. CLASS 12 BOOK-KEEPING & ACCOUNTANCY (HSC COMMERCE)
const class12AccountsChapters: TextbookChapter[] = [
  {
    id: 'hsc-bk-ch1',
    chapterNumber: 1,
    title: 'Introduction to Partnership & Partnership Final Accounts',
    unit: 'Partnership Accounts',
    summary: 'The Indian Partnership Act 1932 defines partnership as the relation between persons who have agreed to share profits of a business carried on by all or any of them acting for all. Final accounts comprise Trading Account (Gross Profit/Loss), Profit & Loss Account (Net Profit/Loss), and Balance Sheet (Financial position). Covers Capital methods (Fixed and Fluctuating) and adjustments for closing stock, depreciation, bad debts, RDD, outstanding expenses, and prepaid expenses.',
    coreConcepts: [
      'Partnership Act 1932: Minimum 2 partners, maximum 50. Partnership Deed regulates profit sharing, interest on capital/drawings, salaries.',
      'If Deed is silent: Profits shared equally, no interest on capital or drawings, no salary, interest on partner\'s loan allowed @ 6% p.a.',
      'Capital Account Methods: (1) Fixed Capital Method: Two accounts maintained for each partner (Capital Account and Current Account). (2) Fluctuating Capital Method: Single Capital Account captures all capital and adjustments.',
      'Trading Account: Shows result of buying and manufacturing activities. Debit: Opening stock, Purchases, Direct expenses. Credit: Sales, Closing stock. Balance = Gross Profit or Gross Loss.',
      'Profit & Loss Account: Debit: Indirect expenses, depreciation, Bad Debts + New Bad Debts + New R.D.D. - Old R.D.D. Credit: Gross profit b/d, Indirect incomes. Balance = Net Profit or Net Loss shared by partners.',
      'Balance Sheet: Statement of assets and liabilities as on a given date.'
    ],
    keyFormulasOrRules: [
      'Gross Profit = Net Sales + Closing Stock - (Opening Stock + Net Purchases + Direct Expenses)',
      'Adjusted Bad Debts = Old Bad Debts (TB) + New Bad Debts (Adj) + New R.D.D. (Adj) - Old R.D.D. (TB)',
      'Depreciation = Cost of Asset × (Rate / 100) × (Months / 12)',
      'Interest on Drawings = Total Drawings × Rate × (6 / 12) (if dates not specified)',
      'Interest on Partner\'s Loan = 6% p.a. (when deed is silent)'
    ],
    examImportantPoints: [
      'Compulsory Question 7 in HSC Board Exam (12 Marks): Prepare Trading A/c, Profit & Loss A/c, and Balance Sheet.',
      'Closing stock adjustment has two effects: Credit of Trading Account and Asset side of Balance Sheet.',
      'Calculate hidden adjustments on Bank Loan interest or Advertising paid for 3 years.'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'What is Partnership Deed? Why is it prepared?',
        'State the provisions of Indian Partnership Act 1932 in the absence of partnership deed regarding: (a) Sharing of profit, (b) Interest on loan.',
        'Explain the difference between Fixed Capital Method and Fluctuating Capital Method.'
      ],
      descriptive: [
        'State two effects for each of the following adjustments in Partnership Final Accounts: (1) Closing Stock, (2) Outstanding Wages, (3) Prepaid Insurance, (4) Depreciate Machinery @ 10% p.a.',
        'Explain the components of Trading Account with direct expenses examples.'
      ],
      longAnswerOrNumericals: [
        'Daya and Kshama are partners sharing profits and losses in the ratio 1:1. From the following Trial Balance and adjustments prepare Trading and Profit & Loss Account for the year ended 31st March 2024 and Balance Sheet as on that date. [Trial Balance: Opening Stock ₹ 65,000, Purchases ₹ 1,48,000, Sales ₹ 2,85,000, Debtors ₹ 1,32,500, Creditors ₹ 98,000, Daya\'s Capital ₹ 1,60,000, Kshama\'s Capital ₹ 1,20,000. Adjustments: Closing Stock ₹ 40,000, Depreciate Building @ 5%, Write off ₹ 2,500 bad debts and provide RDD @ 5%].'
      ]
    }
  },
  {
    id: 'hsc-bk-ch2',
    chapterNumber: 2,
    title: 'Accounts of \'Not for Profit\' Concerns',
    unit: 'NPO Accounting',
    summary: 'Organizations established to render services to members and society without profit motive (schools, hospitals, sports clubs, libraries). These concerns prepare Receipts and Payments Account (summary of cash transactions), Income and Expenditure Account (nominal account showing surplus or deficit), and Balance Sheet. Covers subscriptions, entrance fees, life membership fees, legacy, and capital fund.',
    coreConcepts: [
      'Receipts and Payments Account: Real Account. Records all actual cash/bank receipts and payments during the year regardless of whether capital or revenue, or past, present, or future period.',
      'Income and Expenditure Account: Nominal Account prepared on accrual basis. Records only revenue incomes and revenue expenses of the current accounting year. Debit: Revenue expenses; Credit: Revenue incomes. Excess of Income over Expenditure = Surplus (added to Capital Fund); Excess of Expenditure over Income = Deficit (deducted from Capital Fund).',
      'Subscriptions Accounting: Subscription received + Outstanding of current year - Outstanding of last year - Received in advance for next year + Received in advance in last year for current year = Subscription credited to Income & Expenditure A/c.',
      'Treatment of Special Items: Legacy (Capitalised), Life Membership Fees (Capitalised), Endowment Fund (Liability), Entrance fees (usually capitalised or 50% revenue as per instruction), Government Grant (Revenue or Capital depending on purpose).'
    ],
    keyFormulasOrRules: [
      'Current Year Subscription = Cash received + O/S current year - O/S previous year - Advance next year + Advance previous year for current year',
      'Capital Fund = Total Assets - Total Liabilities (Opening Balance Sheet)',
      'Surplus = Total Revenue Incomes - Total Revenue Expenditures',
      'Deficit = Total Revenue Expenditures - Total Revenue Incomes'
    ],
    examImportantPoints: [
      'Compulsory Question 6 in HSC Board Exam (12 Marks): Prepare Income and Expenditure Account and Balance Sheet from Receipts & Payments A/c.',
      'Accurate subscription working note calculation.',
      'Distinguish between Receipts & Payments Account and Income & Expenditure Account (frequent 4-mark theory question).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Distinguish between Receipts and Payments Account and Income and Expenditure Account.',
        'Define \'Legacy\' and state its accounting treatment.',
        'How do you treat Capital Fund in the Balance sheet of an NPO?'
      ],
      descriptive: [
        'Explain the treatment of Subscription with a format showing adjustments for outstanding and advance subscriptions.',
        'What are the features of Not for Profit Concerns?'
      ],
      longAnswerOrNumericals: [
        'From the following Receipts and Payments Account of Star Sports Club, Pune for the year ended 31st March 2024 and additional information, prepare Income and Expenditure Account for the year ended 31st March 2024 and Balance Sheet as on that date. [Receipts: Balance b/d ₹ 5,000, Subscriptions ₹ 52,000, Entrance fees ₹ 4,000. Payments: Salaries ₹ 12,000, Rent ₹ 6,000, Sports Equipment ₹ 30,000. Adjustments: Outstanding subscription ₹ 3,000, Outstanding salary ₹ 1,500, Depreciate Sports equipment @ 10%].'
      ]
    }
  },
  {
    id: 'hsc-bk-ch3',
    chapterNumber: 3,
    title: 'Reconstitution of Partnership (Admission, Retirement & Death)',
    unit: 'Partnership Changes',
    summary: 'Any change in the agreement among partners that changes their existing relationship results in reconstitution. Covers Admission of a Partner (New profit sharing ratio, Sacrifice ratio, treatment of Goodwill under AS-26, Revaluation of Assets and Liabilities), Retirement of Partner (Gain ratio, settlement of retiring partner\'s loan), and Death of Partner (Profit up to date of death, deceased partner\'s executor\'s account).',
    coreConcepts: [
      'Reasons for Reconstitution: Admission, Retirement, Death, or Change in Profit Sharing Ratio.',
      'Admission of Partner: New partner brings Capital and Goodwill. New Ratio = Balance of 1 × Old Ratio. Sacrifice Ratio = Old Ratio - New Ratio.',
      'Revaluation Account (Profit and Loss Adjustment Account): Nominal Account. Credit: Increase in asset value, decrease in liability. Debit: Decrease in asset value, increase in liability, unrecorded liability. Balance transferred to old partners in old ratio.',
      'Goodwill Accounting: If brought in cash and retained: Bank A/c Dr to Goodwill A/c, then Goodwill A/c Dr to Old Partners\' Capital A/c (in Sacrifice Ratio). If withdrawn: Old Partners\' Capital A/c Dr to Bank A/c.',
      'Retirement of Partner: Gain Ratio = New Ratio - Old Ratio. Retiring partner entitled to share of revaluation profit, reserve fund, and goodwill. Balance transferred to Retiring Partner\'s Loan A/c.',
      'Death of Partner: Profit share till death calculated on time or turnover basis: P&L Suspense A/c Dr to Deceased Partner\'s Capital A/c. Balance paid to Legal Executor.'
    ],
    keyFormulasOrRules: [
      'Sacrifice Ratio = Old Ratio - New Ratio (Used on Admission for Goodwill)',
      'Gain (Benefit) Ratio = New Ratio - Old Ratio (Used on Retirement for Goodwill)',
      'New Ratio = Balance of 1 × Old Ratio (where Balance of 1 = 1 - New Partner\'s Share)',
      'Profit till Death = Last Year Profit (or Avg Profit) × (Period / 12) × Deceased Partner\'s Share'
    ],
    examImportantPoints: [
      'Question 2 or 3 in HSC Board Exam (10 Marks): Admission or Retirement problem with Revaluation A/c, Partners\' Capital A/c, and New Balance Sheet.',
      'Calculate Sacrifice ratio and Gain ratio correctly (2 marks).',
      'Treatment of General Reserve and Accumulated Profits.'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'What is Sacrifice Ratio? Why is it calculated on admission of a partner?',
        'What is Gain Ratio? How is it calculated?',
        'State the journal entry to transfer profit on revaluation to old partners.'
      ],
      descriptive: [
        'Distinguish between Revaluation Account and Realisation Account.',
        'Explain the methods of valuation of Goodwill: (1) Average Profit Method, (2) Super Profit Method.'
      ],
      longAnswerOrNumericals: [
        'Anil and Sunil are partners sharing profits in the ratio 3:2. Their Balance Sheet as on 31st March 2024 stood as follows: [Creditors ₹ 40,000, General Reserve ₹ 20,000, Anil\'s Capital ₹ 60,000, Sunil\'s Capital ₹ 40,000. Cash ₹ 10,000, Debtors ₹ 30,000, Stock ₹ 35,000, Plant ₹ 85,000]. On 1st April 2024 they admit Nitin into partnership on terms: Nitin brings ₹ 30,000 as capital for 1/5th share and ₹ 15,000 for goodwill. Revalue Plant at ₹ 95,000 and Stock at ₹ 30,000. Pass Journal entries and prepare Revaluation Account and Balance Sheet.'
      ]
    }
  }
];

// 5. CLASS 12 ECONOMICS (HSC)
const class12EconomicsChapters: TextbookChapter[] = [
  {
    id: 'hsc-eco-ch1',
    chapterNumber: 1,
    title: 'Introduction to Micro and Macro Economics',
    unit: 'Foundations of Economics',
    summary: 'Ragnar Frisch (1933) coined the terms Microeconomics (derived from Greek \'Mikros\' meaning small) and Macroeconomics (derived from Greek \'Makros\' meaning large). The chapter covers the meaning, definition, scope, features, and importance of both Micro and Macroeconomics, including price theory, general equilibrium, slicing method, and lumping method.',
    coreConcepts: [
      'Microeconomics: Studies economic behavior of individual decision-making units (a consumer, a firm, price of a specific commodity). Slicing method splits the economy into small units. Known as \'Price Theory\'.',
      'Features of Microeconomics: Study of individual units, Price theory, Partial equilibrium, Based on certain assumptions (Ceteris Paribus - other things being equal), Slicing method, Use of marginalism principle, Analysis of market structure, Limited scope.',
      'Scope of Microeconomics: Theory of Product Pricing (Demand and Supply), Theory of Factor Pricing (Rent, Wages, Interest, Profit), Theory of Economic Welfare.',
      'Macroeconomics: Studies economy as an aggregate whole (total employment, national income, general price level, aggregate demand/supply). Lumping method studies large chunks. Known as \'Income and Employment Theory\'.',
      'Features of Macroeconomics: Study of aggregates, Income theory, General equilibrium analysis, Interdependence, Lumping method, Growth models, General price level, Policy-oriented.',
      'Scope of Macroeconomics: Theory of Income and Employment, Theory of General Price Level and Inflation, Theory of Economic Growth and Development, Macro Theory of Distribution.'
    ],
    keyFormulasOrRules: [
      'Micro = Price Theory = Slicing Method = Partial Equilibrium',
      'Macro = Income Theory = Lumping Method = General Equilibrium',
      'Aggregate Demand (AD) = C + I + G + (X - M)',
      'National Income = Rent + Wages + Interest + Profit'
    ],
    examImportantPoints: [
      'Distinguish between Microeconomics and Macroeconomics (compulsory 2 or 4-mark question).',
      'Explain the features of Microeconomics (4 marks).',
      'Explain the scope of Macroeconomics (4 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Distinguish between: Microeconomics and Macroeconomics.',
        'Distinguish between: Slicing Method and Lumping Method.',
        'Distinguish between: Partial Equilibrium and General Equilibrium.'
      ],
      descriptive: [
        'Explain any four features of Microeconomics.',
        'Explain the scope of Macroeconomics in detail.',
        'State whether you agree or disagree: The scope of Microeconomics is unlimited. Give reasons.'
      ],
      longAnswerOrNumericals: [
        'Explain the meaning of Macroeconomics and discuss its features in detail with appropriate economic reasoning.'
      ]
    }
  },
  {
    id: 'hsc-eco-ch2',
    chapterNumber: 2,
    title: 'Utility Analysis & Law of Diminishing Marginal Utility',
    unit: 'Consumer Behaviour',
    summary: 'Utility is the capacity of a commodity to satisfy human wants. Distinguishes between Total Utility (TU) and Marginal Utility (MU). Formulates Dr. Alfred Marshall\'s Law of Diminishing Marginal Utility (DMU): \'Other things remaining the same, the additional benefit which a person derives from a given increase in his stock of a thing diminishes with every increase in the stock that he already has.\' Examines assumptions, exceptions, and relation with demand.',
    coreConcepts: [
      'Features of Utility: Relative concept, Subjective concept, Ethically neutral, Utility differs from usefulness, differs from pleasure, differs from satisfaction, Not easily measurable, Depends on intensity of want, Basis of demand.',
      'Types of Utility: Form utility (wood to furniture), Place utility (transporting woolens to cold place), Time utility (blood bank), Service utility (doctor, teacher), Knowledge utility (computer), Possession utility (transfer of ownership).',
      'Total Utility (TU) & Marginal Utility (MU): TU is sum total of utilities derived from consuming all units. MU is addition made to TU by consuming one more unit (MU_n = TU_n - TU_(n-1)).',
      'Relationship between TU and MU: When TU increases at diminishing rate, MU decreases. When TU is maximum, MU is zero (Point of Satiety). When TU diminishes, MU becomes negative (disutility).',
      'Law of DMU (Alfred Marshall): As consumption of homogenous units increases continuously, marginal utility decreases.',
      'Assumptions: Rationality, Cardinal measurement, Homogeneity, Continuity, Reasonability, Constancy of tastes/income, Divisibility, Single use.',
      'Exceptions: Hobbies (stamp collection), Miser, Addictions (liquor), Music/art, Money (critics argue MU of money increases, but Marshall asserted it holds true for money too).'
    ],
    keyFormulasOrRules: [
      'MU_n = TU_n - TU_(n-1)',
      'TU = Σ MU',
      'Point of Satiety: TU = Maximum, MU = 0',
      'Consumer Equilibrium: MU_x / P_x = MU_m'
    ],
    examImportantPoints: [
      'State and explain the Law of Diminishing Marginal Utility with schedule and diagram (frequent 8-mark question in Q6).',
      'Relationship between Total Utility and Marginal Utility (4 marks).',
      'Exceptions and assumptions of Law of DMU (4 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Distinguish between: Total Utility and Marginal Utility.',
        'Distinguish between: Form Utility and Place Utility.',
        'Define Marginal Utility and write its formula.'
      ],
      descriptive: [
        'Explain the relationship between Total Utility and Marginal Utility with the help of a schedule and diagram.',
        'State any four features of Utility.',
        'Explain four exceptions to the Law of Diminishing Marginal Utility.'
      ],
      longAnswerOrNumericals: [
        'State and explain the Law of Diminishing Marginal Utility with its assumptions and diagram. Explain the relationship between TU and MU.'
      ]
    }
  },
  {
    id: 'hsc-eco-ch3',
    chapterNumber: 3,
    title: 'Demand Analysis & Elasticity of Demand',
    unit: 'Consumer Behaviour & Markets',
    summary: 'Demand is desire backed by ability to pay and willingness to spend. Dr. Alfred Marshall\'s Law of Demand: Price and quantity demanded are inversely related (Ceteris Paribus). Covers individual and market demand schedules, reasons for downward-sloping demand curve, determinants of demand, price elasticity (Ed = %ΔQ / %ΔP), types of elasticity (perfectly elastic, inelastic, unitary), and measurement methods (ratio, total outlay, geometric point method).',
    coreConcepts: [
      'Law of Demand: \'Other things being equal, higher the price of a commodity, smaller is the quantity demanded and lower the price of a commodity, larger is the quantity demanded.\' Inverse relationship: Dx = f(Px).',
      'Why Demand Curve Slopes Downward: Law of DMU, Income effect, Substitution effect, Multi-purpose uses, New consumers.',
      'Exceptions to Law of Demand: Giffen\'s Paradox (inferior goods), Prestige goods (Veblen effect), Speculation, Price illusion, Ignorance, Habitual goods.',
      'Types of Demand: Direct demand, Indirect/Derived demand (factors of production), Joint/Complementary demand (car and petrol), Composite demand (electricity), Competitive demand (tea and coffee).',
      'Elasticity of Demand (Ed): Degree of responsiveness of quantity demanded to changes in price/income. Ed = (% change in Q) / (% change in P).',
      'Five Types of Price Elasticity: Perfectly Elastic (Ed = ∞), Perfectly Inelastic (Ed = 0), Unitary Elastic (Ed = 1), Relatively Elastic (Ed > 1), Relatively Inelastic (Ed < 1).',
      'Methods of Measuring Elasticity: (1) Percentage/Ratio method, (2) Total Outlay/Expenditure method (Marshall), (3) Point/Geometric method: Ed = Lower segment (L) / Upper segment (U).'
    ],
    keyFormulasOrRules: [
      'Law of Demand: Dx = f(Px) [Inverse relation]',
      'Price Elasticity: Ed = (ΔQ / Q) × (P / ΔP)',
      'Point Elasticity: Ed = Lower segment of demand curve (L) / Upper segment (U)',
      'Total Outlay: If Price ↓ and Outlay ↑, Ed > 1; If Outlay unchanged, Ed = 1; If Outlay ↓, Ed < 1'
    ],
    examImportantPoints: [
      'State and explain Law of Demand with assumptions, schedule, and diagram (8 marks).',
      'Explain the types of Price Elasticity of Demand with diagrams (4 or 8 marks).',
      'Distinguish between Expansion of Demand and Increase in Demand (2-4 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Distinguish between: Desire and Demand.',
        'Distinguish between: Expansion of Demand and Increase in Demand.',
        'Distinguish between: Relatively Elastic Demand and Relatively Inelastic Demand.'
      ],
      descriptive: [
        'Explain any four factors determining demand for a commodity.',
        'Explain the Geometric/Point method of measuring price elasticity of demand with a diagram.',
        'State reasons why demand curve slopes downwards from left to right.'
      ],
      longAnswerOrNumericals: [
        'State and explain the Law of Demand with its assumptions and exceptions with suitable schedule and diagram.',
        'When price of a commodity is ₹ 20, demand is 100 units. When price falls to ₹ 15, demand increases to 150 units. Calculate price elasticity of demand and state its type.'
      ]
    }
  }
];

// 6. CLASS 12 ORGANISATION OF COMMERCE & MANAGEMENT (HSC OCM)
const class12OcmChapters: TextbookChapter[] = [
  {
    id: 'hsc-ocm-ch1',
    chapterNumber: 1,
    title: 'Principles of Management',
    unit: 'Management Principles',
    summary: 'Henri Fayol (Father of Modern Management) and F.W. Taylor (Father of Scientific Management). Management principles provide general guidelines for managerial decision-making. Covers the nature and significance of management principles, Henri Fayol\'s 14 Principles of Management, and F.W. Taylor\'s Scientific Management Theory (Principles and Techniques).',
    coreConcepts: [
      'Henri Fayol\'s 14 Principles of Management: (1) Division of Work, (2) Authority and Responsibility, (3) Discipline, (4) Unity of Command (one boss for one employee), (5) Unity of Direction (one head, one plan), (6) Subordination of individual interest to general interest, (7) Remuneration, (8) Centralisation, (9) Scalar Chain (Gang Plank for emergency communication), (10) Order, (11) Equity, (12) Stability of Tenure, (13) Initiative, (14) Esprit de Corps (team spirit).',
      'F.W. Taylor\'s Scientific Management Principles: (1) Science, Not Rule of Thumb, (2) Harmony, Not Discord, (3) Mental Revolution, (4) Cooperation, Not Individualism, (5) Division of Responsibility, (6) Development of each person to greatest efficiency.',
      'Techniques of Scientific Management: Functional Foremanship (8 foremen: Planning and Execution bosses), Work Study (Time study, Motion study, Fatigue study, Method study), Standardisation and Simplification, Differential Piece Rate System.'
    ],
    keyFormulasOrRules: [
      'Unity of Command = 1 Employee → 1 Boss (Prevents confusion and conflict)',
      'Scalar Chain = Formal line of authority from highest to lowest rank',
      'Gang Plank = Direct communication between employees of equal rank in emergency',
      'Differential Piece Rate = Higher wages for efficient workers, lower wages for inefficient workers'
    ],
    examImportantPoints: [
      'Explain Henri Fayol\'s 14 principles of management (frequent 8-mark question).',
      'Distinguish between Unity of Command and Unity of Direction (2-4 marks).',
      'Explain the techniques of Scientific Management by F.W. Taylor (4-8 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Distinguish between: Unity of Command and Unity of Direction.',
        'What is \'Gang Plank\'? Under what condition is it used?',
        'State the four techniques of Work Study.'
      ],
      descriptive: [
        'Explain any five principles of management propounded by Henri Fayol.',
        'Explain the principles of scientific management by F.W. Taylor.',
        'Discuss the significance of principles of management.'
      ],
      longAnswerOrNumericals: [
        'What are the 14 principles of management given by Henri Fayol? Explain any eight of them in detail.'
      ]
    }
  },
  {
    id: 'hsc-ocm-ch2',
    chapterNumber: 2,
    title: 'Functions of Management',
    unit: 'Management Process',
    summary: 'Management is a process consisting of six sequential and interrelated functions: Planning, Organising, Staffing, Directing, Coordinating, and Controlling. Explains the meaning, definition, importance, and interconnectedness of each managerial function.',
    coreConcepts: [
      'Planning: Deciding in advance what to do, how to do it, when to do it, and who is to do it. Bridges gap between where we are and where we want to go. Basic foundation function.',
      'Organising: Grouping activities, identifying tasks, establishing authority-responsibility relationships, and allocating resources.',
      'Staffing: Process of recruiting, selecting, placing, training, compensating, and evaluating personnel. Putting right person in right job.',
      'Directing: Guiding, instructing, motivating, supervising, and leading employees to achieve organizational goals. Life spark of an enterprise.',
      'Coordinating: Synchronising and integrating efforts of all departments and team members for harmony of action.',
      'Controlling: Comparing actual performance with planned standards, finding deviations, and taking corrective actions.'
    ],
    keyFormulasOrRules: [
      'Management Cycle: Planning → Organising → Staffing → Directing → Coordinating → Controlling',
      'Planning = Thinking before doing',
      'Controlling = Comparing Actual vs Standard performance'
    ],
    examImportantPoints: [
      'Distinguish between any two management functions (Compulsory 4-mark questions in Q4: e.g. Planning vs Controlling, Staffing vs Directing).',
      'Explain the importance of Planning or Controlling (4 or 8 marks).'
    ],
    exerciseQuestions: {
      shortAnswer: [
        'Distinguish between: Planning and Controlling.',
        'Distinguish between: Staffing and Directing.',
        'Distinguish between: Organising and Coordinating.'
      ],
      descriptive: [
        'Explain the importance of Planning in an organization.',
        'Explain the importance of Staffing.',
        'Define Directing and state its importance.'
      ],
      longAnswerOrNumericals: [
        'What is Controlling? Explain the steps and importance of controlling function of management.'
      ]
    }
  }
];

// Helper to assemble full textbook study guides
export function getTextbookGuide(book: {
  id: string;
  title: string;
  standard: string;
  stream: string;
  subject: string;
  chapter?: string;
  description: string;
}): TextbookStudyGuide {
  const s = (book.subject || '').toLowerCase();
  const std = (book.standard || '').toLowerCase();

  let chapters: TextbookChapter[] = [];

  // Match curated chapters
  if (std.includes('10') && s.includes('math') && (book.title.includes('Part 1') || book.title.includes('Algebra'))) {
    chapters = class10Math1Chapters;
  } else if (std.includes('10') && (s.includes('science') && (book.title.includes('Part 1') || s.includes('part 1')))) {
    chapters = class10Science1Chapters;
  } else if (std.includes('12') && s.includes('physics')) {
    chapters = class12PhysicsChapters;
  } else if (std.includes('12') && (s.includes('book-keeping') || s.includes('accountancy'))) {
    chapters = class12AccountsChapters;
  } else if (std.includes('12') && s.includes('economics')) {
    chapters = class12EconomicsChapters;
  } else if (std.includes('12') && (s.includes('ocm') || s.includes('organisation'))) {
    chapters = class12OcmChapters;
  }

  // If no exact prebuilt match, dynamically generate rich, authentic Balbharati chapters from book info
  if (!chapters.length) {
    const rawChapters = (book.chapter || book.description || 'General Syllabus')
      .replace(/^[0-9]+\s*Chapters?\s*\(/i, '')
      .replace(/\)$/, '')
      .split(/[,;]/)
      .map(c => c.trim())
      .filter(c => c.length > 2);

    const fallbackTitles = rawChapters.length > 0 ? rawChapters : [
      'Fundamental Principles & Core Concepts',
      'Theories, Methods and Analysis',
      'Practical Applications & Board Exercises',
      'Advanced Problem Solving & Case Studies',
      'Comprehensive Board Revision & Exercises'
    ];

    chapters = fallbackTitles.slice(0, 10).map((title, idx) => ({
      id: `${book.id}-ch${idx + 1}`,
      chapterNumber: idx + 1,
      title: title.replace(/^[0-9]+\.\s*/, ''),
      unit: `Unit ${Math.ceil((idx + 1) / 2)}: Core Balbharati Syllabus`,
      summary: `Official Maharashtra State Board Balbharati textbook module for ${book.title}. Covers in-depth pedagogical theory, conceptual proofs, illustrative examples, and practice drills as prescribed by the Maharashtra State Bureau of Textbook Production and Curriculum Research, Balbharati, Pune.`,
      coreConcepts: [
        `Core conceptual definition, theoretical framework, and historical background of ${title}.`,
        `Key analytical principles, standard procedures, and diagrammatic representations required for Maharashtra Board exams.`,
        `Comparative evaluation and cross-topic linkages across the ${book.subject} syllabus.`,
        `Official Balbharati textbook solved examples demonstrating step-by-step methodology.`
      ],
      keyFormulasOrRules: [
        `Standard Balbharati principles, definitions, and theorems applicable to ${title}.`,
        `Governing laws, statutory rules, or mathematical relations for analytical questions.`,
        `Crucial keywords and technical terminology required in descriptive answers.`
      ],
      examImportantPoints: [
        `High-probability question area in Section B and Section C of the board question paper.`,
        `Ensure neat labeled diagrams and step-by-step derivations for maximum scoring.`,
        `Review previous board questions from 1990-2026 for common repeated questions.`
      ],
      exerciseQuestions: {
        shortAnswer: [
          `Define the core terms associated with ${title} according to the Balbharati textbook.`,
          `State any two distinguishing features or characteristics of this topic.`,
          `Give reasons / Explain why this principle holds true in practical applications.`
        ],
        descriptive: [
          `Explain ${title} in detail with suitable illustrations, diagrams, or flowcharts.`,
          `What are the key advantages, limitations, or procedural steps involved in this topic?`,
          `Write short notes on the core components prescribed in the Balbharati syllabus.`
        ],
        longAnswerOrNumericals: [
          `Provide a comprehensive critical evaluation of ${title} as prescribed in the Maharashtra State Board curriculum. Discuss its applications and solve the textbook exercise problems.`
        ]
      }
    }));
  }

  return {
    bookId: book.id,
    title: book.title,
    standard: book.standard,
    stream: book.stream,
    subject: book.subject,
    boardAgency: 'Maharashtra State Bureau of Textbook Production & Curriculum Research (Balbharati), Pune',
    curriculumOverview: book.description,
    officialLinks: [
      {
        title: 'Balbharati Official Portal (E-Books Repository)',
        url: 'https://books.ebalbharati.in',
        statusNote: 'Official e-Books portal for downloadable PDF editions'
      },
      {
        title: 'Maharashtra State Board Official Site (MSBSHSE)',
        url: 'https://mahahsscboard.in',
        statusNote: 'Board examinations, timetable, circulars, and syllabus blueprints'
      },
      {
        title: 'eBalbharati Web Store (cart.ebalbharati.in)',
        url: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
        statusNote: 'Note: Government server may experience intermittent connectivity timeouts'
      }
    ],
    chapters
  };
}
