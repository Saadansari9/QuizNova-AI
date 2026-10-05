import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Comprehensive Maharashtra Board Curricula, PYQs, Formula Sheets & Textbooks...');

  let educator = await prisma.user.findFirst({
    where: { role: 'Educator' },
  });

  if (!educator) {
    educator = await prisma.user.create({
      data: {
        name: 'Maharashtra State Board Academic Council',
        email: 'msbshse.curriculum@gov.in',
        passwordHash: '$2a$12$eA80v63R0hR0l1m9F4/rbeY6QZ0xR5vGZ6n5y1M3W6u8q7l9o1P2q',
        role: 'Educator',
      },
    });
  }

  const educatorId = educator.id;

  // =========================================================================
  // 1. BOARD PYQS (PREVIOUS YEAR QUESTIONS PAPERS)
  // =========================================================================
  const pyqExams = [
    {
      title: 'Maharashtra SSC 2024: Science & Tech Part 1 Board Paper',
      description: 'Official March 2024 Maharashtra Board Exam Paper (Solved). Includes Physics & Chemistry textbook questions with marking scheme explanations.',
      topic: 'Science Part 1',
      standard: 'Class 10 (SSC)',
      stream: 'General',
      subject: 'Science Part 1',
      chapter: 'Board Exam March 2024',
      isPyq: true,
      pyqYear: 2024,
      difficulty: 'Medium',
      durationMinutes: 30,
      totalMarks: 20,
      passPercentage: 40,
      questions: [
        {
          questionText: '[March 2024 Board] The SI unit of gravitational potential energy is:',
          options: ['Newton', 'Joule', 'Watt', 'Newton/kg'],
          correctAnswer: 1,
          explanation: 'Energy in all physical forms has the SI unit Joule (J). Potential energy U = -G*M*m/(R+h) is measured in Joules.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: '[March 2024 Board] Which of the following halogen elements is liquid at standard room temperature?',
          options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
          correctAnswer: 2,
          explanation: 'Bromine (Br2) is the only liquid non-metallic halogen element at standard ambient room temperature.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: '[March 2024 Board] An electric bulb of 100 W is connected to a 220 V line. What is the current flowing through its filament?',
          options: ['0.45 A', '2.2 A', '22 A', '22000 A'],
          correctAnswer: 0,
          explanation: 'From electric power formula P = V * I, Current I = P / V = 100 W / 220 V = 0.454 Amperes.',
          bloomLevel: 'Applying',
          points: 5,
        },
        {
          questionText: '[March 2024 Board] The phenomenon of splitting of white light into its constituent component colors is called:',
          options: ['Refraction', 'Reflection', 'Dispersion', 'Total Internal Reflection'],
          correctAnswer: 2,
          explanation: 'Dispersion is the separation of composite white light into its seven component spectrum colors when passing through a prism due to differing refractive indices.',
          bloomLevel: 'Understanding',
          points: 5,
        },
      ],
    },
    {
      title: 'Maharashtra HSC 2024: Physics Board Exam Paper',
      description: 'Official March 2024 Maharashtra Board Exam Paper (Solved). Includes Rotational Dynamics, Wave Optics, and Semiconductor Devices questions.',
      topic: 'Physics',
      standard: 'Class 12 (HSC)',
      stream: 'Science',
      subject: 'Physics',
      chapter: 'Board Exam March 2024',
      isPyq: true,
      pyqYear: 2024,
      difficulty: 'Hard',
      durationMinutes: 30,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: '[March 2024 Board] What is the angular momentum (L) of a body rotating with moment of inertia I and angular velocity ω?',
          options: ['L = I * ω', 'L = I / ω', 'L = 1/2 I * ω²', 'L = I² * ω'],
          correctAnswer: 0,
          explanation: 'Angular momentum is the rotational analogue of linear momentum (p = m*v), defined as L = I * ω.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: '[March 2024 Board] In Young’s Double Slit Experiment, what happens to fringe width (β) if the distance (D) between the slits and the screen is doubled?',
          options: ['Halved', 'Doubled', 'Remains unchanged', 'Quadrupled'],
          correctAnswer: 1,
          explanation: 'Fringe width β = (λ * D) / d. Since β is directly proportional to screen distance D, doubling D will double the fringe width.',
          bloomLevel: 'Applying',
          points: 5,
        },
        {
          questionText: '[March 2024 Board] A Carnot engine operates between temperatures 600 K and 300 K. What is its maximum theoretical thermal efficiency (η)?',
          options: ['25%', '50%', '75%', '100%'],
          correctAnswer: 1,
          explanation: 'Carnot efficiency η = 1 - (T_cold / T_hot) = 1 - (300 / 600) = 0.50 or 50%.',
          bloomLevel: 'Applying',
          points: 5,
        },
        {
          questionText: '[March 2024 Board] What is the boolean output of an open two-input NAND gate when both input signals A and B are HIGH (1)?',
          options: ['0 (LOW)', '1 (HIGH)', 'Floating', 'Undefined'],
          correctAnswer: 0,
          explanation: 'NAND logic is NOT(A AND B). When A=1 and B=1, A AND B = 1, so NOT(1) = 0.',
          bloomLevel: 'Understanding',
          points: 5,
        },
      ],
    },
    {
      title: 'Maharashtra HSC 2024: Book-Keeping & Accountancy Board Paper',
      description: 'Official March 2024 HSC Commerce Exam Paper (Solved). Partnership adjustments, Bill of Exchange, and Balance Sheet format.',
      topic: 'Book-Keeping & Accountancy',
      standard: 'Class 12 (HSC)',
      stream: 'Commerce',
      subject: 'Book-Keeping & Accountancy',
      chapter: 'Board Exam March 2024',
      isPyq: true,
      pyqYear: 2024,
      difficulty: 'Hard',
      durationMinutes: 30,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: '[March 2024 Board] If the date of maturity of a Bill of Exchange falls on an unexpected public emergency holiday, the bill becomes payable on:',
          options: ['Preceding business day', 'Next succeeding business day', 'Two days later', 'At the drawer’s discretion'],
          correctAnswer: 1,
          explanation: 'Under Negotiable Instruments Act, if maturity falls on a sudden emergency holiday, the bill is payable on the immediately NEXT succeeding business day.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: '[March 2024 Board] On dissolution of a partnership firm, all tangible and intangible firm assets are transferred at book value to the Debit of which account?',
          options: ['Partners’ Capital Account', 'Realisation Account', 'Cash / Bank Account', 'Profit & Loss Suspense Account'],
          correctAnswer: 1,
          explanation: 'On dissolution, Realisation Account is prepared to close books and dispose of assets. All assets (except cash/bank) are transferred to Realisation A/c Debit.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: '[March 2024 Board] The balance of the "Share Forfeiture Account" after re-issuing all forfeited shares is transferred to:',
          options: ['General Reserve', 'Capital Reserve', 'Profit & Loss A/c', 'Dividend Equalisation Reserve'],
          correctAnswer: 1,
          explanation: 'Gain on forfeiture and re-issue of shares is a capital profit and is credited to the Capital Reserve Account.',
          bloomLevel: 'Applying',
          points: 5,
        },
        {
          questionText: '[March 2024 Board] In Not-for-Profit Concerns (NPO), excess of total Income over total Expenditure represents:',
          options: ['Net Profit', 'Surplus', 'Deficit', 'Capital Fund'],
          correctAnswer: 1,
          explanation: 'In NPO accounting, excess of income over expenditure is known as "Surplus" and is added to the Capital Fund in the Balance Sheet.',
          bloomLevel: 'Remembering',
          points: 5,
        },
      ],
    },
    {
      title: 'Maharashtra HSC 2023: Economics Board Exam Paper',
      description: 'Official March 2023 HSC Board Exam Paper (Solved). Law of Demand, Inflation, Types of Market, and Reserve Bank functions.',
      topic: 'Economics',
      standard: 'Class 12 (HSC)',
      stream: 'Commerce',
      subject: 'Economics',
      chapter: 'Board Exam March 2023',
      isPyq: true,
      pyqYear: 2023,
      difficulty: 'Medium',
      durationMinutes: 25,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: '[March 2023 Board] What is the slope of the typical normal Demand Curve under the Law of Demand?',
          options: ['Upward from left to right (Positive)', 'Downward from left to right (Negative)', 'Vertical parallel to Y-axis', 'Horizontal parallel to X-axis'],
          correctAnswer: 1,
          explanation: 'The demand curve slopes downward from left to right due to inverse relationship between price and quantity demanded.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: '[March 2023 Board] Which market structure is characterized by a single seller with no close substitutes for the product?',
          options: ['Perfect Competition', 'Monopoly', 'Monopolistic Competition', 'Oligopoly'],
          correctAnswer: 1,
          explanation: 'Monopoly (from Greek "Mono" = single, "Poly" = seller) is a market with a single producer controlling the entire market supply.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: '[March 2023 Board] The apex central monetary and banking authority of India responsible for currency issue is:',
          options: ['State Bank of India (SBI)', 'Reserve Bank of India (RBI)', 'Ministry of Finance', 'NITI Aayog'],
          correctAnswer: 1,
          explanation: 'The Reserve Bank of India (established 1935 under RBI Act 1934) is the apex central bank and sole authority to issue currency notes.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: '[March 2023 Board] When government expenditure exceeds total public tax revenue, the resulting budgetary situation is termed:',
          options: ['Surplus Budget', 'Balanced Budget', 'Deficit Budget', 'Monetary Inflation'],
          correctAnswer: 2,
          explanation: 'When estimated public expenditure > estimated public revenue, it is termed a Deficit Budget.',
          bloomLevel: 'Understanding',
          points: 5,
        },
      ],
    },
  ];

  for (const qData of pyqExams) {
    const { questions, ...quizInfo } = qData;
    const existing = await prisma.quiz.findFirst({ where: { title: quizInfo.title } });

    if (!existing) {
      await prisma.quiz.create({
        data: {
          ...quizInfo,
          educatorId,
          questions: {
            create: questions.map((q) => ({
              questionText: q.questionText,
              questionType: 'MCQ',
              options: JSON.stringify(q.options),
              correctAnswer: q.correctAnswer,
              explanation: q.explanation,
              bloomLevel: q.bloomLevel,
              points: q.points,
            })),
          },
        },
      });
      console.log(`✅ Seeded PYQ: ${quizInfo.title}`);
    }
  }

  // =========================================================================
  // 2. FORMULA & THEOREM CHEAT SHEETS (STUDY RESOURCES)
  // =========================================================================
  const formulaResources = [
    {
      title: 'HSC Physics: Complete Formula Revision Cheat Sheet',
      category: 'FORMULA',
      standard: 'Class 12 (HSC)',
      stream: 'Science',
      subject: 'Physics',
      chapter: 'All Chapters (Rotational Dynamics to Modern Physics)',
      description: 'Comprehensive formula handbook covering Mechanics, Gravitation, Oscillations, Optics, Thermodynamics, and Electrostatics.',
      content: JSON.stringify([
        { topic: 'Rotational Dynamics', formula: 'v_max = √(rg tan θ)', description: 'Maximum safe speed of vehicle on a banked road without friction' },
        { topic: 'Parallel Axes Theorem', formula: 'I_o = I_c + M * h²', description: 'Moment of inertia about parallel axis at distance h' },
        { topic: 'Fluid Mechanics (Bernoulli)', formula: 'P + 1/2 ρv² + ρgh = Constant', description: 'Conservation of mechanical energy for streamline fluid flow' },
        { topic: 'Surface Tension', formula: 'T = F / L = W / ΔA', description: 'Surface tension as force per unit length or work done per unit change in area' },
        { topic: 'Thermodynamics (Carnot)', formula: 'η = 1 - (T_c / T_h)', description: 'Thermal efficiency of ideal Carnot heat engine' },
        { topic: 'Wave Optics (Fringe Width)', formula: 'β = (λ * D) / d', description: 'Distance between two successive bright or dark interference fringes' },
        { topic: 'Electrostatics (Coulomb)', formula: 'F = (1 / 4πε₀) * (q₁ * q₂ / r²)', description: 'Electric force between two stationary point charges' },
        { topic: 'Photoelectric Effect (Einstein)', formula: 'hν = Φ + 1/2 m v_max²', description: 'Energy conservation in photon-electron collision' },
      ]),
    },
    {
      title: 'HSC Chemistry: Essential Formulas, Laws & Reagents Sheet',
      category: 'FORMULA',
      standard: 'Class 12 (HSC)',
      stream: 'Science',
      subject: 'Chemistry',
      chapter: 'Physical & Organic Chemistry Core',
      description: 'Key formulas for Solutions, Electrochemistry, Chemical Kinetics, and major named organic transformations.',
      content: JSON.stringify([
        { topic: 'Raoult’s Law (Solutions)', formula: 'ΔP / P₁° = x₂ = (w₂/M₂) / (w₁/M₁)', description: 'Relative lowering of vapour pressure is equal to mole fraction of non-volatile solute' },
        { topic: 'Osmotic Pressure', formula: 'π = CRT = (n / V) * RT', description: 'Van’t Hoff equation for osmotic pressure of dilute solutions' },
        { topic: 'Nernst Equation (Electrochemistry)', formula: 'E_cell = E°_cell - (0.0592 / n) * log(Q)', description: 'Cell electromotive force at 298 K under non-standard concentrations' },
        { topic: 'First Order Kinetics (Rate Constant)', formula: 'k = (2.303 / t) * log([A]₀ / [A]_t)', description: 'Integrated rate law for first-order radioactive or chemical decay' },
        { topic: 'Half Life of First Order', formula: 't_1/2 = 0.693 / k', description: 'Half-life is strictly independent of initial reactant concentration' },
        { topic: 'Arrhenius Equation', formula: 'k = A * e^(-Ea / RT)', description: 'Dependence of chemical reaction rate constant on absolute temperature and activation energy' },
      ]),
    },
    {
      title: 'HSC Mathematics: Master Calculus & Trigonometry Sheet',
      category: 'FORMULA',
      standard: 'Class 12 (HSC)',
      stream: 'Science',
      subject: 'Mathematics',
      chapter: 'Differentiation & Integration Toolkit',
      description: 'Standard derivative formulas, integration by parts, trigonometric identities, and vectors.',
      content: JSON.stringify([
        { topic: 'Derivative of Power', formula: 'd/dx (xⁿ) = n * xⁿ⁻¹', description: 'Power rule of differentiation' },
        { topic: 'Product Rule (Leibniz)', formula: 'd/dx (u * v) = u * (dv/dx) + v * (du/dx)', description: 'Differentiation of product of two functions' },
        { topic: 'Quotient Rule', formula: 'd/dx (u / v) = [v*(du/dx) - u*(dv/dx)] / v²', description: 'Differentiation of ratio of two functions' },
        { topic: 'Integration by Parts', formula: '∫ (u * v) dx = u * ∫ v dx - ∫ [ (du/dx) * ∫ v dx ] dx', description: 'Evaluation of integral of product using LIATE order' },
        { topic: 'Standard Integral of 1/x', formula: '∫ (1 / x) dx = log|x| + C', description: 'Logarithmic antiderivative' },
        { topic: 'Compound Angles', formula: 'sin(A + B) = sin A cos B + cos A sin B', description: 'Trigonometric addition formula' },
      ]),
    },
    {
      title: 'HSC Commerce: Accountancy Golden Rules, Ratios & Ledger Formats',
      category: 'FORMULA',
      standard: 'Class 12 (HSC)',
      stream: 'Commerce',
      subject: 'Book-Keeping & Accountancy',
      chapter: 'Financial Ratios & Partnership Computations',
      description: 'Golden rules of accounting, Partnership interest calculations, Goodwill methods, Depreciation, and Balance Sheet Financial Ratios.',
      content: JSON.stringify([
        { topic: 'Personal Account Rule', formula: 'Debit the Receiver, Credit the Giver', description: 'Rule governing accounts of persons, firms, and companies' },
        { topic: 'Real Account Rule', formula: 'Debit what comes in, Credit what goes out', description: 'Rule for tangible and intangible business assets' },
        { topic: 'Nominal Account Rule', formula: 'Debit all expenses & losses, Credit all incomes & gains', description: 'Rule for profit/loss, revenue, and expense items' },
        { topic: 'Accounting Equation', formula: 'Total Assets = External Liabilities + Capital (Owner’s Equity)', description: 'Fundamental Dual-Aspect balance sheet equation' },
        { topic: 'Current Ratio', formula: 'Current Assets / Current Liabilities (Ideal = 2:1)', description: 'Measures short-term liquidity and ability to meet immediate debts' },
        { topic: 'Quick (Acid-Test) Ratio', formula: '(Current Assets - Stock - Prepaid Exp) / Current Liabilities (Ideal = 1:1)', description: 'Strict instant liquid asset coverage' },
        { topic: 'Sacrificing Ratio (Admission)', formula: 'Sacrificing Ratio = Old Share - New Share', description: 'Ratio in which old partners surrender share in favour of new partner' },
        { topic: 'Gaining Ratio (Retirement)', formula: 'Gaining Ratio = New Share - Old Share', description: 'Ratio in which continuing partners acquire retiring partner’s share' },
      ]),
    },
    {
      title: 'HSC Economics: Elasticity & National Income Formulas',
      category: 'FORMULA',
      standard: 'Class 12 (HSC)',
      stream: 'Commerce',
      subject: 'Economics',
      chapter: 'Micro & Macro Formulations',
      description: 'Price elasticity of demand, income elasticity, National income computation methods, and money multiplier.',
      content: JSON.stringify([
        { topic: 'Price Elasticity of Demand (Ed)', formula: 'Ed = (%Δ in Quantity Demanded) / (%Δ in Price) = (ΔQ / ΔP) * (P / Q)', description: 'Responsiveness of demand to price change' },
        { topic: 'Total Outlay Method (Marshall)', formula: 'Ed > 1 (Outlay & Price inverse) | Ed = 1 (Outlay constant) | Ed < 1 (Outlay & Price same)', description: 'Determining elasticity based on total consumer spending' },
        { topic: 'National Income (Expenditure Method)', formula: 'NI = C + I + G + (X - M)', description: 'Gross domestic expenditure: Consumption + Investment + Govt Spending + Net Exports' },
        { topic: 'National Income (Income Method)', formula: 'NI = Rent + Wages + Interest + Profit + Mixed Income + Net Foreign Factor Income', description: 'Total factor payments earned by residents of the nation' },
      ]),
    },
    {
      title: 'HSC Arts: Political Science - Constitutional Articles & Rights Matrix',
      category: 'FORMULA',
      standard: 'Class 12 (HSC)',
      stream: 'Arts',
      subject: 'Political Science',
      chapter: 'Indian Constitution & International Order',
      description: 'Quick reference matrix for Fundamental Rights (Articles 14-32), Directive Principles, and Landmark Supreme Court cases.',
      content: JSON.stringify([
        { topic: 'Article 14', formula: 'Right to Equality', description: 'Equality before law and equal protection of the laws' },
        { topic: 'Article 19', formula: 'Six Democratic Freedoms', description: 'Speech & expression, assembly, association, movement, residence, and profession' },
        { topic: 'Article 21', formula: 'Protection of Life & Personal Liberty', description: 'No person shall be deprived of life or personal liberty except according to procedure established by law' },
        { topic: 'Article 32', formula: 'Constitutional Remedies (Heart & Soul of Constitution)', description: 'Right to approach the Supreme Court via Writs (Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto)' },
        { topic: 'Article 368', formula: 'Constitutional Amendment Power', description: 'Parliament’s legislative power to amend the Constitution by special majority' },
      ]),
    },
  ];

  for (const fData of formulaResources) {
    const existing = await prisma.studyResource.findFirst({
      where: { title: fData.title },
    });

    if (!existing) {
      await prisma.studyResource.create({ data: fData });
      console.log(`✅ Seeded Formula Sheet: ${fData.title}`);
    }
  }

  // =========================================================================
  // 3. BALBHARATI E-TEXTBOOK LIBRARY CATALOG
  // =========================================================================
  const textbookCatalog = [
    {
      title: 'Balbharati Class 10 Science & Technology Part 1',
      category: 'TEXTBOOK',
      standard: 'Class 10 (SSC)',
      stream: 'General',
      subject: 'Science Part 1',
      chapter: 'Complete Balbharati Textbook (10 Chapters)',
      description: 'Official Maharashtra State Board Textbook covering Gravitation, Elements, Chemical Reactions, Electric Current, Heat, Light, and Space Missions.',
      content: 'Official textbook published by Maharashtra State Bureau of Textbook Production and Curriculum Research, Balbharati, Pune.',
      downloadUrl: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
    },
    {
      title: 'Balbharati Class 10 Science & Technology Part 2',
      category: 'TEXTBOOK',
      standard: 'Class 10 (SSC)',
      stream: 'General',
      subject: 'Science Part 2',
      chapter: 'Complete Balbharati Textbook (10 Chapters)',
      description: 'Official SSC Textbook for Heredity & Evolution, Life Processes, Environmental Management, Towards Green Energy, Animal Classification, and Biotechnology.',
      content: 'Official textbook published by eBalbharati Pune for Maharashtra Secondary School Certificate.',
      downloadUrl: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
    },
    {
      title: 'Balbharati Class 10 Mathematics Part 1 (Algebra)',
      category: 'TEXTBOOK',
      standard: 'Class 10 (SSC)',
      stream: 'General',
      subject: 'Mathematics',
      chapter: 'Complete Balbharati Textbook (6 Chapters)',
      description: 'Linear Equations, Quadratic Equations, Arithmetic Progression, Financial Planning, Probability, and Statistics.',
      content: 'Official Balbharati Algebra textbook for Maharashtra Board Class 10 examination.',
      downloadUrl: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
    },
    {
      title: 'Balbharati Class 12 Physics Textbook (HSC)',
      category: 'TEXTBOOK',
      standard: 'Class 12 (HSC)',
      stream: 'Science',
      subject: 'Physics',
      chapter: 'Complete Balbharati Textbook (16 Chapters)',
      description: 'Rotational Dynamics, Mechanical Properties of Fluids, Kinetic Theory of Gases, Thermodynamics, Oscillations, Superposition of Waves, Wave Optics, Electrostatics.',
      content: 'Maharashtra State Higher Secondary Certificate Physics textbook by Balbharati.',
      downloadUrl: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
    },
    {
      title: 'Balbharati Class 12 Chemistry Textbook (HSC)',
      category: 'TEXTBOOK',
      standard: 'Class 12 (HSC)',
      stream: 'Science',
      subject: 'Chemistry',
      chapter: 'Complete Balbharati Textbook (16 Chapters)',
      description: 'Solid State, Solutions, Ionic Equilibria, Chemical Thermodynamics, Electrochemistry, Chemical Kinetics, p-Block & d-Block, Coordination Compounds, Organic Halides.',
      content: 'Official Balbharati Class 12 Chemistry textbook for HSC Board Examination.',
      downloadUrl: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
    },
    {
      title: 'Balbharati Class 12 Book-Keeping & Accountancy (HSC)',
      category: 'TEXTBOOK',
      standard: 'Class 12 (HSC)',
      stream: 'Commerce',
      subject: 'Book-Keeping & Accountancy',
      chapter: 'Complete Balbharati Textbook (10 Chapters)',
      description: 'Introduction to Partnership, NPO Concerns, Reconstitution of Partnership (Admission, Retirement, Death), Dissolution of Firm, Bills of Exchange, Company Accounts.',
      content: 'Official Maharashtra State Board Class 12 Commerce Book-Keeping Textbook.',
      downloadUrl: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
    },
    {
      title: 'Balbharati Class 12 Economics Textbook (HSC)',
      category: 'TEXTBOOK',
      standard: 'Class 12 (HSC)',
      stream: 'Commerce',
      subject: 'Economics',
      chapter: 'Complete Balbharati Textbook (10 Chapters)',
      description: 'Introduction to Micro and Macro Economics, Consumer Behaviour, Demand Analysis, Elasticity of Demand, Supply Analysis, National Income, Public Finance in India.',
      content: 'Official Balbharati Economics textbook for Class 12 HSC Board.',
      downloadUrl: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
    },
    {
      title: 'Balbharati Class 12 History Textbook (HSC)',
      category: 'TEXTBOOK',
      standard: 'Class 12 (HSC)',
      stream: 'Arts',
      subject: 'History',
      chapter: 'Complete Balbharati Textbook (12 Chapters)',
      description: 'Renaissance in Europe and Science, European Colonialism, India and European Colonialism, Maharashtra Before the Rise of Maratha Empire, Decolonisation.',
      content: 'Official Maharashtra Board Class 12 Arts History textbook by Balbharati.',
      downloadUrl: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
    },
    {
      title: 'Balbharati Class 12 Political Science Textbook (HSC)',
      category: 'TEXTBOOK',
      standard: 'Class 12 (HSC)',
      stream: 'Arts',
      subject: 'Political Science',
      chapter: 'Complete Balbharati Textbook (6 Chapters)',
      description: 'The World Since 1991, Key Concepts and Issues Since 1991 (Globalisation, Humanitarian Issues), India and the World, Constitutional Values.',
      content: 'Official Balbharati Political Science textbook for Class 12 Arts examination.',
      downloadUrl: 'https://cart.ebalbharati.in/BalBooks/ebook.aspx',
    },
  ];

  for (const tb of textbookCatalog) {
    const existing = await prisma.studyResource.findFirst({
      where: { title: tb.title },
    });

    if (!existing) {
      await prisma.studyResource.create({ data: tb });
      console.log(`✅ Seeded Textbook Catalog: ${tb.title}`);
    }
  }

  console.log('Curriculum Expansion, PYQs, Formula Sheets & Textbook Library Seeded Successfully!');
}

main()
  .catch((e) => {
    console.error('Curriculum Seeding Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });