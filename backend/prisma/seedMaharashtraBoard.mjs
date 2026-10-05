import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Maharashtra State Board textbook curriculum quizzes...');

  // Find or create a verified Educator for authoring
  let educator = await prisma.user.findFirst({
    where: { role: 'Educator' },
  });

  if (!educator) {
    educator = await prisma.user.create({
      data: {
        name: 'Maharashtra State Board Faculty',
        email: 'msbshse.faculty@gov.in',
        passwordHash: '$2a$12$eA80v63R0hR0l1m9F4/rbeY6QZ0xR5vGZ6n5y1M3W6u8q7l9o1P2q',
        role: 'Educator',
      },
    });
  }

  const educatorId = educator.id;

  const maharashtraQuizzes = [
    // ==========================================
    // CLASS 9 (GENERAL CORE)
    // ==========================================
    {
      title: 'Class 9 Science: Laws of Motion & Work-Energy',
      description: 'Balbharati Textbook Chapters 1 & 2: Speed, Velocity, Acceleration, Newton’s 3 Laws, and Positive/Negative Work.',
      topic: 'Science & Technology',
      standard: 'Class 9',
      stream: 'General',
      subject: 'Science & Technology',
      difficulty: 'Medium',
      durationMinutes: 20,
      totalMarks: 20,
      passPercentage: 40,
      questions: [
        {
          questionText: 'According to Newton’s First Law of Motion, what property of an object resists a change in its state of rest or uniform motion?',
          options: ['Momentum', 'Inertia', 'Friction', 'Velocity'],
          correctAnswer: 1,
          explanation: 'Inertia is the inherent natural tendency of an object to resist a change in its state of rest or uniform motion along a straight line.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'What is the work done when the displacement of an object is perpendicular to the direction of the applied force?',
          options: ['Maximum positive work', 'Negative work', 'Zero work', 'Infinite work'],
          correctAnswer: 2,
          explanation: 'Work W = F * s * cos(theta). When theta = 90° (perpendicular), cos(90°) = 0, so work done is strictly zero (e.g. satellite orbiting Earth).',
          bloomLevel: 'Applying',
          points: 5,
        },
        {
          questionText: 'What is the SI unit of power in physics according to Maharashtra State Board syllabus?',
          options: ['Joule', 'Newton-metre', 'Watt (J/s)', 'Erg'],
          correctAnswer: 2,
          explanation: 'Power is the rate at which work is done. Its SI unit is Joule per second, known as the Watt (W).',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'If a body of mass 5 kg moves with an acceleration of 3 m/s², what net unbalanced force acts upon it?',
          options: ['1.67 N', '8 N', '15 N', '45 N'],
          correctAnswer: 2,
          explanation: 'Force F = m * a = 5 kg * 3 m/s² = 15 Newtons.',
          bloomLevel: 'Applying',
          points: 5,
        },
      ],
    },

    // ==========================================
    // CLASS 10 (SSC BOARD)
    // ==========================================
    {
      title: 'Class 10 SSC Science 1: Gravitation & Periodic Table',
      description: 'Official Maharashtra SSC Board Science Part 1 Chapters 1 & 2 covering Kepler’s Laws, Universal Gravitation, and Mendeleev vs Modern Periodic Table.',
      topic: 'Science Part 1',
      standard: 'Class 10 (SSC)',
      stream: 'General',
      subject: 'Science Part 1',
      difficulty: 'Medium',
      durationMinutes: 25,
      totalMarks: 20,
      passPercentage: 40,
      questions: [
        {
          questionText: 'According to Kepler’s Third Law of Planetary Motion, what is the relationship between orbital period (T) and mean radius (r)?',
          options: ['T² ∝ r²', 'T² ∝ r³', 'T³ ∝ r²', 'T ∝ r³'],
          correctAnswer: 1,
          explanation: 'Kepler’s third law states that the square of the orbital period of revolution of a planet is directly proportional to the cube of the mean distance of the planet from the Sun (T² / r³ = constant).',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'In the Modern Periodic Table devised by Henry Moseley, elements are strictly arranged in increasing order of their:',
          options: ['Atomic Masses', 'Atomic Numbers (Z)', 'Valency numbers', 'Number of neutrons'],
          correctAnswer: 1,
          explanation: 'The Modern Periodic Law states that properties of elements are a periodic function of their atomic numbers, not atomic masses.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'What is the acceleration due to gravity (g) at the exact centre of the Earth?',
          options: ['9.8 m/s²', '9.832 m/s²', '0 m/s²', 'Infinity'],
          correctAnswer: 2,
          explanation: 'At the centre of the Earth, the gravitational pull from the mass of the surrounding earth cancels out symmetrically in all directions, making g = 0.',
          bloomLevel: 'Analyzing',
          points: 5,
        },
        {
          questionText: 'Which group in the Modern Periodic Table contains the chemically unreactive Noble/Inert Gases?',
          options: ['Group 1', 'Group 16', 'Group 17', 'Group 18 (Zero Group)'],
          correctAnswer: 3,
          explanation: 'Group 18 consists of noble gases (Helium, Neon, Argon, etc.) with completely filled valence electron shells.',
          bloomLevel: 'Understanding',
          points: 5,
        },
      ],
    },
    {
      title: 'Class 10 SSC Science 2: Heredity, Evolution & Life Processes',
      description: 'Balbharati Science Part 2: Transcription, Translation, Lamarckism, Darwin’s Natural Selection, and Aerobic Respiration cycles.',
      topic: 'Science Part 2',
      standard: 'Class 10 (SSC)',
      stream: 'General',
      subject: 'Science Part 2',
      difficulty: 'Medium',
      durationMinutes: 20,
      totalMarks: 20,
      passPercentage: 40,
      questions: [
        {
          questionText: 'The process of RNA synthesis from DNA with the help of RNA polymerase is scientifically called:',
          options: ['Translation', 'Transcription', 'Translocation', 'Mutation'],
          correctAnswer: 1,
          explanation: 'Transcription is the synthesis of mRNA from a DNA sequence template inside the nucleus.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'In cellular cellular respiration, how many net ATP molecules are yielded from complete aerobic oxidation of one glucose molecule?',
          options: ['2 ATP', '8 ATP', '38 ATP', '100 ATP'],
          correctAnswer: 2,
          explanation: 'Complete aerobic respiration of one molecule of glucose through Glycolysis, Krebs Cycle, and ETS yields 38 ATP molecules in total.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'Which vestigial organ in human beings provides evidence of biological evolution from herbivorous ancestors?',
          options: ['Heart', 'Appendix (Caecum)', 'Liver', 'Gallbladder'],
          correctAnswer: 1,
          explanation: 'The vermiform appendix is vestigial and non-functional in humans but was active in cellulose digestion in ancestral herbivores.',
          bloomLevel: 'Analyzing',
          points: 5,
        },
        {
          questionText: 'What type of cell division is essential for gamete formation (sperm and ovum) in sexually reproducing organisms?',
          options: ['Mitosis', 'Meiosis', 'Amitosis', 'Binary Fission'],
          correctAnswer: 1,
          explanation: 'Meiosis is reduction division that halves the chromosome number (2n to n) to produce haploid gametes.',
          bloomLevel: 'Understanding',
          points: 5,
        },
      ],
    },

    // ==========================================
    // CLASS 11 (HSC BOARD) - SCIENCE COMPARTMENT
    // ==========================================
    {
      title: 'Class 11 Science: Physics - Units, Dimensions & Vectors',
      description: 'Maharashtra HSC Board Class 11 Physics Chapter 1 & 2 covering fundamental SI units, dimensional formula analysis, and scalar/vector products.',
      topic: 'Physics',
      standard: 'Class 11 (HSC)',
      stream: 'Science',
      subject: 'Physics',
      difficulty: 'Medium',
      durationMinutes: 20,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: 'What is the dimensional formula for Universal Gravitational Constant (G)?',
          options: ['[L¹ M¹ T⁻²]', '[L³ M⁻¹ T⁻²]', '[L² M⁻² T⁻¹]', '[L⁻¹ M¹ T⁻²]'],
          correctAnswer: 1,
          explanation: 'From F = G*m1*m2/r², G = F*r²/(m1*m2). Substituting dimensions gives [M¹ L¹ T⁻²][L²] / [M²] = [L³ M⁻¹ T⁻²].',
          bloomLevel: 'Analyzing',
          points: 5,
        },
        {
          questionText: 'If two vectors A and B are perpendicular to each other, what is the value of their scalar (dot) product A • B?',
          options: ['AB', 'AB sin(theta)', 'Zero', 'Unity (1)'],
          correctAnswer: 2,
          explanation: 'The scalar product is A • B = |A||B|cos(90°) = 0, because cos(90°) = 0.',
          bloomLevel: 'Applying',
          points: 5,
        },
        {
          questionText: 'Which of the following is NOT a fundamental base quantity in the International System of Units (SI)?',
          options: ['Luminous intensity', 'Electric current', 'Velocity', 'Thermodynamic temperature'],
          correctAnswer: 2,
          explanation: 'Velocity is a derived physical quantity (displacement/time), whereas the others are fundamental SI base units.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'What is the angle between the vector cross product (A × B) and the plane containing vectors A and B?',
          options: ['0° (Parallel)', '45°', '90° (Perpendicular)', '180°'],
          correctAnswer: 2,
          explanation: 'By right-hand thumb rule, the vector product A × B is always perpendicular (normal, 90°) to the plane containing both vectors A and B.',
          bloomLevel: 'Evaluating',
          points: 5,
        },
      ],
    },

    // ==========================================
    // CLASS 11 (HSC BOARD) - COMMERCE COMPARTMENT
    // ==========================================
    {
      title: 'Class 11 Commerce: Book-Keeping & Double Entry Principles',
      description: 'HSC Commerce Book-Keeping & Accountancy Chapters 1 & 2: Accounting concepts, Dual Aspect, Journalizing rules, and Real/Personal/Nominal accounts.',
      topic: 'Book-Keeping & Accountancy',
      standard: 'Class 11 (HSC)',
      stream: 'Commerce',
      subject: 'Book-Keeping & Accountancy',
      difficulty: 'Medium',
      durationMinutes: 20,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: 'Under the Golden Rules of Accounting, what is the rule for Nominal Accounts?',
          options: [
            'Debit what comes in, Credit what goes out',
            'Debit the receiver, Credit the giver',
            'Debit all expenses and losses, Credit all incomes and gains',
            'Debit liabilities, Credit assets'
          ],
          correctAnswer: 2,
          explanation: 'The fundamental golden rule for Nominal accounts is: "Debit all expenses and losses, Credit all incomes and gains."',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'Which accounting concept states that a business enterprise will continue its operations for an indefinitely foreseeable future?',
          options: ['Money Measurement Concept', 'Going Concern Concept', 'Conservatism Concept', 'Cost Concept'],
          correctAnswer: 1,
          explanation: 'The Going Concern concept assumes that the enterprise will continue in operational existence for the foreseeable future and has no intention of liquidation.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'What is the primary book of original entry where financial transactions are first chronologically recorded?',
          options: ['Ledger', 'Journal', 'Trial Balance', 'Balance Sheet'],
          correctAnswer: 1,
          explanation: 'The Journal is the book of prime/original entry where all business transactions are recorded in chronological date-wise order.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'According to the Dual Aspect accounting equation, Total Assets are always mathematically equal to:',
          options: ['Liabilities - Capital', 'Liabilities + Capital (Owner’s Equity)', 'Capital - Revenue', 'Gross Profit + Cash'],
          correctAnswer: 1,
          explanation: 'The fundamental accounting equation is: Assets = Liabilities + Capital (Internal equity + External liabilities).',
          bloomLevel: 'Applying',
          points: 5,
        },
      ],
    },

    // ==========================================
    // CLASS 11 (HSC BOARD) - ARTS COMPARTMENT
    // ==========================================
    {
      title: 'Class 11 Arts: Political Science - State, Nation & Liberty',
      description: 'HSC Arts Political Science: Key components of the State, Sovereignty, Negative vs Positive Liberty, and Equality in the Indian Constitution.',
      topic: 'Political Science',
      standard: 'Class 11 (HSC)',
      stream: 'Arts',
      subject: 'Political Science',
      difficulty: 'Medium',
      durationMinutes: 20,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: 'Which of the following is NOT an indispensable constituent element of a Sovereign State?',
          options: ['Defined Territory', 'Permanent Population', 'Uniform Common Religion', 'Sovereignty'],
          correctAnswer: 2,
          explanation: 'The four essential elements of a state are Population, Territory, Government, and Sovereignty. Common religion is not required.',
          bloomLevel: 'Analyzing',
          points: 5,
        },
        {
          questionText: 'Who authoritatively authored the landmark political treatise "On Liberty" (1859) advocating individual freedom of expression?',
          options: ['Karl Marx', 'John Stuart Mill', 'Aristotle', 'Jean-Jacques Rousseau'],
          correctAnswer: 1,
          explanation: 'J.S. Mill wrote "On Liberty", presenting the harm principle and staunch defence of free speech and individual autonomy.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'Which Article of the Constitution of India guarantees the Right to Equality before Law and Equal Protection of the Laws?',
          options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
          correctAnswer: 0,
          explanation: 'Article 14 of the Indian Constitution ensures equality before law and equal protection of laws to all persons within the territory of India.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'What term defines supreme, ultimate, and unrestricted legal authority of a State over its own territory free from external control?',
          options: ['Hegemony', 'Sovereignty', 'Federalism', 'Pluralism'],
          correctAnswer: 1,
          explanation: 'Sovereignty is the supreme power of the state by virtue of which it makes laws and exercises supreme authority over its citizens.',
          bloomLevel: 'Understanding',
          points: 5,
        },
      ],
    },

    // ==========================================
    // CLASS 12 (HSC BOARD) - SCIENCE COMPARTMENT
    // ==========================================
    {
      title: 'Class 12 HSC Science: Physics - Rotational Dynamics & Fluids',
      description: 'Maharashtra Class 12 Board Physics Chapters 1 & 2: Centripetal vs Centrifugal force, Banking of roads, Moment of Inertia, and Bernoulli’s Principle.',
      topic: 'Physics',
      standard: 'Class 12 (HSC)',
      stream: 'Science',
      subject: 'Physics',
      difficulty: 'Hard',
      durationMinutes: 25,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: 'What is the maximum safe speed (v_max) of a vehicle on a curved banked road without taking friction into account?',
          options: ['√(rg / tan θ)', '√(rg tan θ)', 'rg sin θ', '√(r / g tan θ)'],
          correctAnswer: 1,
          explanation: 'On a frictionless banked road, the horizontal component of normal reaction provides centripetal force: N sin θ = mv²/r, and N cos θ = mg, which gives v = √(rg tan θ).',
          bloomLevel: 'Applying',
          points: 5,
        },
        {
          questionText: 'According to the Theorem of Parallel Axes, what is the moment of inertia I_o about an axis parallel to a central axis passing through CM?',
          options: ['I_o = I_c + M * h²', 'I_o = I_c - M * h²', 'I_o = I_c * h²', 'I_o = I_c / (M * h)'],
          correctAnswer: 0,
          explanation: 'Parallel Axes Theorem states I_o = I_c + Mh², where I_c is moment of inertia about parallel axis through centre of mass, M is total mass, and h is distance between axes.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'Bernoulli’s theorem for an incompressible, non-viscous fluid in streamline flow is a direct mathematical consequence of the law of conservation of:',
          options: ['Mass', 'Linear Momentum', 'Energy', 'Angular Momentum'],
          correctAnswer: 2,
          explanation: 'Bernoulli’s equation (P + 1/2 ρv² + ρgh = constant) is based on the principle of conservation of mechanical energy for flowing fluids.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'What happens to the surface tension of a liquid when its temperature is increased?',
          options: ['Increases steadily', 'Decreases', 'Remains unchanged', 'Becomes infinite'],
          correctAnswer: 1,
          explanation: 'As temperature increases, kinetic energy of liquid molecules increases and intermolecular cohesive forces decrease, causing surface tension to decrease.',
          bloomLevel: 'Analyzing',
          points: 5,
        },
      ],
    },

    // ==========================================
    // CLASS 12 (HSC BOARD) - COMMERCE COMPARTMENT
    // ==========================================
    {
      title: 'Class 12 HSC Commerce: Accounts - Partnership Final Accounts',
      description: 'HSC Commerce Book-Keeping & Accountancy: Partnership Deed rules, Trading & P/L Account adjustments, Balance Sheet, and Capital Accounts.',
      topic: 'Book-Keeping & Accountancy',
      standard: 'Class 12 (HSC)',
      stream: 'Commerce',
      subject: 'Book-Keeping & Accountancy',
      difficulty: 'Hard',
      durationMinutes: 25,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: 'In the absence of any Partnership Deed, at what annual percentage interest on a partner’s loan to the firm is allowable under the Indian Partnership Act 1932?',
          options: ['No interest is allowed', '6% per annum', '10% per annum', '12% per annum'],
          correctAnswer: 1,
          explanation: 'Under Section 13(d) of the Indian Partnership Act 1932, if the partnership agreement is silent, interest on loan advanced by a partner is payable at 6% p.a.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'Where is Prepaid Insurance appearing in the Trial Balance recorded in Partnership Final Accounts?',
          options: [
            'Only on the Asset side of Balance Sheet',
            'Debit side of Trading Account only',
            'Credit side of Profit & Loss Account only',
            'Deducted from Insurance in P/L and shown on Asset side'
          ],
          correctAnswer: 0,
          explanation: 'If an item appears INSIDE the Trial Balance, it has only ONE posting. Prepaid Insurance inside Trial Balance goes directly to the Asset side of Balance Sheet.',
          bloomLevel: 'Applying',
          points: 5,
        },
        {
          questionText: 'Under the Fixed Capital Method, which separate account is maintained to record drawings, interest on capital, and share of profit of partners?',
          options: ['Capital Account', 'Current Account', 'Trading Account', 'Suspense Account'],
          correctAnswer: 1,
          explanation: 'In the Fixed Capital Method, partner’s original capital remains fixed in the Capital A/c, and all ongoing adjustments are passed through the Partner’s Current Account.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'Closing Stock given in the adjustments outside the Trial Balance is posted in:',
          options: [
            'Trading A/c Debit and Balance Sheet Asset',
            'Trading A/c Credit and Balance Sheet Asset',
            'P/L A/c Credit and Balance Sheet Liability',
            'P/L A/c Debit and Balance Sheet Asset'
          ],
          correctAnswer: 1,
          explanation: 'Closing Stock given in adjustments has two effects: (1) Credit side of Trading Account, and (2) Asset side of Balance Sheet.',
          bloomLevel: 'Analyzing',
          points: 5,
        },
      ],
    },
    {
      title: 'Class 12 HSC Commerce: Economics - Micro & Macro Foundations',
      description: 'HSC Commerce Economics: Law of Diminishing Marginal Utility (DMU), Elasticity of Demand, National Income measurement, and Public Finance.',
      topic: 'Economics',
      standard: 'Class 12 (HSC)',
      stream: 'Commerce',
      subject: 'Economics',
      difficulty: 'Medium',
      durationMinutes: 20,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: 'According to Prof. Alfred Marshall, what happens to Marginal Utility (MU) as a consumer consumes additional units of a commodity?',
          options: ['It increases continuously', 'It diminishes / decreases', 'It becomes infinite', 'It stays completely constant'],
          correctAnswer: 1,
          explanation: 'The Law of Diminishing Marginal Utility states that the additional benefit a person derives from a given increase in stock of a thing diminishes with every increase in the stock that he already has.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'When the percentage change in quantity demanded is exactly equal to the percentage change in price, elasticity of demand (Ed) is:',
          options: ['PerfectlynElastic (Ed = ∞)', 'Unitary Elastic (Ed = 1)', 'Inelastic (Ed < 1)', 'Zero (Ed = 0)'],
          correctAnswer: 1,
          explanation: 'When proportionate change in demand equals proportionate change in price (%ΔQ / %ΔP = 1), demand is Unitary Elastic (Ed = 1).',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'Which method of calculating National Income measures the total flow of factor payments (rent + wages + interest + profit)?',
          options: ['Output / Product Method', 'Income Method', 'Expenditure Method', 'Input-Output Method'],
          correctAnswer: 1,
          explanation: 'The Income Method aggregates all factor payments generated in the economy: Rent + Wages + Interest + Profit + Mixed Income + Net factor income from abroad.',
          bloomLevel: 'Analyzing',
          points: 5,
        },
        {
          questionText: 'Macroeconomics differs fundamentally from Microeconomics because Macroeconomics studies:',
          options: ['Individual firm equilibrium', 'Aggregate economic units and whole national economy', 'Price of a single good', 'Household utility budget'],
          correctAnswer: 1,
          explanation: 'Macroeconomics studies the economic system as a whole, dealing with aggregates like National Income, Total Employment, General Price Level, and Inflation.',
          bloomLevel: 'Remembering',
          points: 5,
        },
      ],
    },

    // ==========================================
    // CLASS 12 (HSC BOARD) - ARTS COMPARTMENT
    // ==========================================
    {
      title: 'Class 12 HSC Arts: History - Renaissance, Science & India',
      description: 'Balbharati Class 12 History: Renaissance in Europe, Development of Science, European Colonialism, and Freedom Struggle in Maharashtra.',
      topic: 'History',
      standard: 'Class 12 (HSC)',
      stream: 'Arts',
      subject: 'History',
      difficulty: 'Medium',
      durationMinutes: 20,
      totalMarks: 20,
      passPercentage: 50,
      questions: [
        {
          questionText: 'Who revolutionized modern astronomy during the European Renaissance by proving the Heliocentric model (Sun at the centre of the solar system)?',
          options: ['Claudius Ptolemy', 'Nicolaus Copernicus', 'Leonardo da Vinci', 'Marco Polo'],
          correctAnswer: 1,
          explanation: 'Nicolaus Copernicus published "De revolutionibus orbium coelestium", establishing the Heliocentric model that the Earth and other planets revolve around the Sun.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'In 1853, the first railway train in India ran between which two historic stations in Maharashtra?',
          options: ['Mumbai (Bori Bunder) to Thane', 'Pune to Lonavala', 'Nagpur to Wardha', 'Chhatrapati Shivaji Maharaj Terminus to Kalyan'],
          correctAnswer: 0,
          explanation: 'The first commercial passenger train in India ran on 16 April 1853 between Bori Bunder (Mumbai) and Thane, covering a distance of 34 km.',
          bloomLevel: 'Remembering',
          points: 5,
        },
        {
          questionText: 'Which social reformer founded the Satyashodhak Samaj in Pune in 1873 to promote education and equality for oppressed classes and women?',
          options: ['Mahatma Jyotirao Phule', 'Dr. B.R. Ambedkar', 'Chhatrapati Shahu Maharaj', 'Gopal Krishna Gokhale'],
          correctAnswer: 0,
          explanation: 'Mahatma Jyotirao Phule founded the Satyashodhak Samaj on 24 September 1873 to fight for social justice, anti-caste reform, and education for girls and lower castes.',
          bloomLevel: 'Understanding',
          points: 5,
        },
        {
          questionText: 'What was the immediate catalyst for the Industrial Revolution initially emerging in Great Britain in the 18th century?',
          options: ['Invention of steam engine and spinning jenny', 'Fall of Constantinople', 'Discovery of America', 'French Revolution'],
          correctAnswer: 0,
          explanation: 'Mechanical inventions like James Watt’s steam engine and James Hargreaves’ spinning jenny spurred mass factory textile manufacturing.',
          bloomLevel: 'Analyzing',
          points: 5,
        },
      ],
    },
  ];

  for (const qData of maharashtraQuizzes) {
    const { questions, ...quizInfo } = qData;

    // Check if already seeded
    const existing = await prisma.quiz.findFirst({
      where: { title: quizInfo.title },
    });

    if (existing) {
      console.log(`Quiz already exists: ${quizInfo.title} (Updating details...)`);
      await prisma.quiz.update({
        where: { id: existing.id },
        data: {
          standard: quizInfo.standard,
          stream: quizInfo.stream,
          subject: quizInfo.subject,
        },
      });
      continue;
    }

    const createdQuiz = await prisma.quiz.create({
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

    console.log(`✅ Seeded: [${quizInfo.standard} | ${quizInfo.stream}] ${quizInfo.title} (${questions.length} Questions)`);
  }

  console.log('Maharashtra State Board seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });