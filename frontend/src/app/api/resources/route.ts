import { NextResponse } from 'next/server';

export interface FormulaEntry {
  topic: string;
  formula: string;
  description: string;
}

export interface ResourceData {
  id: string;
  title: string;
  description: string;
  category: 'FORMULA' | 'TEXTBOOK' | 'PYQ';
  standard: string;
  stream: string;
  subject: string;
  fileUrl: string; // JSON stringified array of FormulaEntry
  createdAt: string;
}

const DEFAULT_FORMULA_RESOURCES: ResourceData[] = [
  {
    id: 'form_sci_12_phy',
    title: 'HSC Class 12 Physics Complete Formula Sheet',
    description: 'Rotational Dynamics, Thermodynamics, Wave Optics, Electrostatics, and Modern Physics.',
    category: 'FORMULA',
    standard: 'Class 12 (HSC)',
    stream: 'Science',
    subject: 'Physics',
    fileUrl: JSON.stringify([
      {
        topic: 'Rotational Dynamics (Centripetal Acceleration)',
        formula: 'a_c = v^2 / r = \\omega^2 r = v \\omega',
        description: 'Centripetal acceleration for circular motion of a body with speed v at radius r.',
      },
      {
        topic: 'Banking of Roads (Maximum Safe Velocity)',
        formula: 'v_{max} = \\sqrt{r g \\left( \\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s \\tan\\theta} \\right)}',
        description: 'Maximum velocity on a curved banked road with friction coefficient \\mu_s and banking angle \\theta.',
      },
      {
        topic: 'Kinetic Energy of Rolling Motion',
        formula: 'E = \\frac{1}{2} M v^2 \\left( 1 + \\frac{k^2}{R^2} \\right)',
        description: 'Total kinetic energy combining translational and rotational components, where k is radius of gyration.',
      },
      {
        topic: "Kepler's Harmonic Third Law",
        formula: 'T^2 = \\left( \\frac{4\\pi^2}{G M} \\right) r^3',
        description: 'Square of orbital period is proportional to cube of semi-major axis distance r from Sun.',
      },
      {
        topic: 'Escape Velocity from Earth Surface',
        formula: 'v_e = \\sqrt{2 g R} = \\sqrt{\\frac{2 G M}{R}} \\approx 11.2\\text{ km/s}',
        description: 'Minimum velocity required for an object to overcome Earth gravitational attraction.',
      },
    ]),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'form_sci_12_chem',
    title: 'HSC Class 12 Chemistry Physical & Inorganic Formula Bank',
    description: 'Solid State, Solutions, Chemical Thermodynamics, and Electrochemistry.',
    category: 'FORMULA',
    standard: 'Class 12 (HSC)',
    stream: 'Science',
    subject: 'Chemistry',
    fileUrl: JSON.stringify([
      {
        topic: 'Molarity & Molality',
        formula: 'M = \\frac{n_{solute}}{V_{solution}\\text{ (in L)}}, \\quad m = \\frac{n_{solute}}{W_{solvent}\\text{ (in kg)}}',
        description: 'Concentration of solution expressed in moles per litre and moles per kilogram.',
      },
      {
        topic: "Raoult's Law (Relative Lowering of Vapor Pressure)",
        formula: '\\frac{P_1^0 - P_1}{P_1^0} = x_2 = \\frac{n_2}{n_1 + n_2}',
        description: 'Relative lowering of solvent vapor pressure is equal to the mole fraction of non-volatile solute.',
      },
      {
        topic: "Nernst Equation (Electrode Potential)",
        formula: 'E_{cell} = E^0_{cell} - \\frac{0.0592}{n} \\log_{10} Q',
        description: 'Cell potential at non-standard conditions at 298 K, where n is transferred electrons.',
      },
      {
        topic: "First Order Reaction Rate & Half-Life",
        formula: 'k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{[A]_0}{[A]_t}\\right), \\quad t_{1/2} = \\frac{0.693}{k}',
        description: 'Kinetic integrated rate equation and half-life period for first order chemical reactions.',
      },
    ]),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'form_sci_12_math',
    title: 'HSC Class 12 Mathematics Derivatives & Integrals',
    description: 'Differentiation rules, standard integrals, trigonometric substitutions, and matrices.',
    category: 'FORMULA',
    standard: 'Class 12 (HSC)',
    stream: 'Science',
    subject: 'Mathematics',
    fileUrl: JSON.stringify([
      {
        topic: 'Integration by Parts (LIATE Rule)',
        formula: '\\int u v \\, dx = u \\int v \\, dx - \\int \\left( \\frac{du}{dx} \\int v \\, dx \\right) dx',
        description: 'Product rule of integral calculus prioritized using Logarithmic, Inverse, Algebraic, Trigonometric, Exponential.',
      },
      {
        topic: 'Standard Gaussian Normal Integral',
        formula: '\\int \\frac{1}{x^2 + a^2} \\, dx = \\frac{1}{a} \\tan^{-1}\\left(\\frac{x}{a}\\right) + C',
        description: 'Standard inverse tangent integration form.',
      },
      {
        topic: 'Determinant of 2x2 Matrix & Inverse',
        formula: 'A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A) = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}',
        description: 'Matrix inverse formulation where determinant is non-zero.',
      },
    ]),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'form_com_12_acc',
    title: 'HSC Class 12 Commerce Accounts & Financial Analysis',
    description: 'Financial ratios, partnership goodwill, and depreciation accounting formulas.',
    category: 'FORMULA',
    standard: 'Class 12 (HSC)',
    stream: 'Commerce',
    subject: 'Book Keeping & Accountancy',
    fileUrl: JSON.stringify([
      {
        topic: 'Current Ratio & Quick (Acid Test) Ratio',
        formula: '\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}, \\quad \\text{Quick Ratio} = \\frac{\\text{Quick Assets}}{\\text{Current Liabilities}}',
        description: 'Standard solvency benchmark: Current ratio ideal 2:1, Quick ratio ideal 1:1.',
      },
      {
        topic: 'Sacrificing Ratio in Admission of Partner',
        formula: '\\text{Sacrifice Ratio} = \\text{Old Profit Share} - \\text{New Profit Share}',
        description: 'Used to distribute goodwill brought in cash by an incoming partner among old sacrificing partners.',
      },
      {
        topic: 'Gross Profit & Net Profit Margins',
        formula: '\\text{GP Ratio} = \\frac{\\text{Gross Profit}}{\\text{Net Revenue from Operations}} \\times 100',
        description: 'Operating profitability indicator on merchandise turnover.',
      },
    ]),
    createdAt: new Date().toISOString(),
  },
  {
    id: 'form_ssc_10_sci',
    title: 'SSC Class 10 Science & Technology 1 Core Formulas',
    description: "Gravitation, Ohm's law, Joules heating, and lens formula for SSC State Board.",
    category: 'FORMULA',
    standard: 'Class 10 (SSC)',
    stream: 'Science',
    subject: 'Science & Technology 1',
    fileUrl: JSON.stringify([
      {
        topic: "Newton's Universal Law of Gravitation",
        formula: 'F = G \\frac{m_1 m_2}{r^2}, \\quad G = 6.673 \\times 10^{-11} \\text{ N m}^2/\\text{kg}^2',
        description: 'Force of gravitational attraction between any two point masses separated by distance r.',
      },
      {
        topic: "Acceleration due to Gravity on Earth Surface",
        formula: 'g = \\frac{G M}{R^2} \\approx 9.8\\text{ m/s}^2',
        description: 'Free-fall gravitational acceleration governed by planetary mass M and radius R.',
      },
      {
        topic: "Ohm's Law & Electric Power",
        formula: 'V = I R, \\quad P = V I = I^2 R = \\frac{V^2}{R}',
        description: 'Electrical potential difference, resistance, and electrical energy dissipation rate.',
      },
      {
        topic: "Mirror & Thin Lens Formula",
        formula: '\\text{Lens: } \\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}, \\quad \\text{Mirror: } \\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}',
        description: 'Relationship between focal length f, image distance v, and object distance u using cartesian sign convention.',
      },
    ]),
    createdAt: new Date().toISOString(),
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const standard = searchParams.get('standard');
  const stream = searchParams.get('stream');
  const subject = searchParams.get('subject');

  let filtered = DEFAULT_FORMULA_RESOURCES;

  if (category && category !== 'all') {
    filtered = filtered.filter((r) => r.category.toLowerCase() === category.toLowerCase());
  }
  if (standard && standard !== 'all') {
    filtered = filtered.filter((r) => r.standard.toLowerCase().includes(standard.toLowerCase()));
  }
  if (stream && stream !== 'all') {
    filtered = filtered.filter((r) => r.stream.toLowerCase() === stream.toLowerCase());
  }
  if (subject && subject !== 'all') {
    filtered = filtered.filter((r) => r.subject.toLowerCase().includes(subject.toLowerCase()));
  }

  return NextResponse.json({
    success: true,
    resources: filtered,
    totalCount: filtered.length,
  });
}
