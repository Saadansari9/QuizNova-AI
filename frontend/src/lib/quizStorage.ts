import { Quiz, AttemptResult, StudentAnalytics, EducatorAnalytics, Question, QuestionReviewItem, OfflinePackage } from '@/types/quiz';

export const DEFAULT_QUIZZES: Quiz[] = [
  {
    id: 'quiz_mb_sci_10_01',
    title: 'Gravitation & Planetary Laws (Kepler)',
    description: 'Maharashtra State Board SSC Class 10 Science & Technology Part 1 Chapter 1 assessment covering universal gravitation, Kepler laws, acceleration due to gravity (g), and free fall.',
    topic: 'Gravitation',
    standard: 'Class 10 (SSC)',
    stream: 'Science',
    subject: 'Science and Technology Part 1',
    chapter: 'Chapter 1: Gravitation',
    difficulty: 'Medium',
    durationMinutes: 20,
    totalMarks: 10,
    passPercentage: 40,
    isPublished: true,
    allowOffline: true,
    educator: { name: 'Prof. Anjali Deshmukh (SSC Board Chair)' },
    createdAt: new Date().toISOString(),
    _count: { questions: 5, attempts: 248 },
    questions: [
      {
        id: 'q_g1',
        questionText: "Which of Kepler's laws states that the orbit of a planet is an ellipse with the Sun at one of the foci?",
        questionType: 'MCQ',
        options: ["Kepler's First Law (Law of Orbits)", "Kepler's Second Law (Law of Equal Areas)", "Kepler's Third Law (Harmonic Law)", "Newton's Universal Law"],
        correctAnswer: 0,
        explanation: "Kepler's first law defines planetary orbits as elliptical with the Sun situated at one focus point.",
        bloomLevel: 'Remembering',
        points: 2,
      },
      {
        id: 'q_g2',
        questionText: 'What happens to the acceleration due to gravity (g) as we move from the Earth equator to the poles?',
        questionType: 'MCQ',
        options: ['g remains constant', 'g decreases', 'g increases to its maximum (~9.832 m/s²)', 'g drops to zero'],
        correctAnswer: 2,
        explanation: 'Due to the Earth bulge at the equator and flattening at the poles, radius is minimum at poles, maximizing g (~9.832 m/s²).',
        bloomLevel: 'Understanding',
        points: 2,
      },
      {
        id: 'q_g3',
        questionText: 'If the distance between two objects is tripled, how does the gravitational force between them change according to Newton Law?',
        questionType: 'MCQ',
        options: ['Increases 3 times', 'Decreases to 1/9th of original value', 'Decreases to 1/3rd of original value', 'Remains unchanged'],
        correctAnswer: 1,
        explanation: 'F is inversely proportional to r². Tripling distance (3r) scales force by 1/(3)² = 1/9.',
        bloomLevel: 'Applying',
        points: 2,
      },
      {
        id: 'q_g4',
        questionText: 'What is the value of escape velocity on the surface of the Earth?',
        questionType: 'MCQ',
        options: ['9.8 m/s', '11.2 km/s', '3.8 km/s', '11.2 m/s'],
        correctAnswer: 1,
        explanation: 'The minimum initial velocity required for an object to escape Earth gravitational pull is approximately 11.2 km/s.',
        bloomLevel: 'Remembering',
        points: 2,
      },
      {
        id: 'q_g5',
        questionText: 'During free fall in a vacuum, which of the following remains constant throughout?',
        questionType: 'MCQ',
        options: ['Velocity', 'Kinetic Energy', 'Acceleration (g)', 'Height above ground'],
        correctAnswer: 2,
        explanation: 'In free fall, the only acting force is gravity, keeping acceleration constant at g = 9.8 m/s².',
        bloomLevel: 'Analyzing',
        points: 2,
      },
    ],
  },
  {
    id: 'quiz_mb_phy_12_01',
    title: 'Rotational Dynamics & Torque Equations',
    description: 'Maharashtra State Board HSC Class 12 Physics Chapter 1 rigorous assessment on circular motion, centripetal/centrifugal force, banking of roads, and moment of inertia.',
    topic: 'Rotational Dynamics',
    standard: 'Class 12 (HSC)',
    stream: 'Science',
    subject: 'Physics',
    chapter: 'Chapter 1: Rotational Dynamics',
    difficulty: 'Hard',
    durationMinutes: 25,
    totalMarks: 10,
    passPercentage: 40,
    isPublished: true,
    allowOffline: true,
    educator: { name: 'Dr. Ramesh Patil (HSC Physics Convenor)' },
    createdAt: new Date().toISOString(),
    _count: { questions: 5, attempts: 182 },
    questions: [
      {
        id: 'q_rd1',
        questionText: 'What is the most safe speed (v) for a vehicle negotiating a banked curved road of radius r with banking angle θ (ignoring friction)?',
        questionType: 'MCQ',
        options: ['v = √(rg / tan θ)', 'v = √(rg tan θ)', 'v = rg sin θ', 'v = √(r / g tan θ)'],
        correctAnswer: 1,
        explanation: 'Balancing normal reaction components (N sin θ = mv²/r and N cos θ = mg) gives v = √(rg tan θ).',
        bloomLevel: 'Applying',
        points: 2,
      },
      {
        id: 'q_rd2',
        questionText: 'What is the ratio of the moment of inertia of a circular ring of mass M and radius R to that of a uniform circular disc of same mass and radius about central transverse axis?',
        questionType: 'MCQ',
        options: ['1 : 1', '2 : 1', '1 : 2', '4 : 1'],
        correctAnswer: 1,
        explanation: 'I_ring = MR², I_disc = (1/2)MR². The ratio I_ring / I_disc = MR² / ((1/2)MR²) = 2 : 1.',
        bloomLevel: 'Analyzing',
        points: 2,
      },
      {
        id: 'q_rd3',
        questionText: 'According to the Parallel Axes Theorem, if I_c is the moment of inertia about the center of mass, the moment of inertia I_o about a parallel axis at distance h is:',
        questionType: 'MCQ',
        options: ['I_o = I_c + Mh²', 'I_o = I_c - Mh²', 'I_o = I_c / Mh²', 'I_o = I_c + M²h'],
        correctAnswer: 0,
        explanation: 'The parallel axes theorem states I_o = I_c + Mh², where M is the total mass and h is perpendicular separation.',
        bloomLevel: 'Remembering',
        points: 2,
      },
      {
        id: 'q_rd4',
        questionText: 'A ballet dancer stretches her arms outwards during a spin. What happens to her angular velocity (ω)?',
        questionType: 'MCQ',
        options: ['Increases', 'Decreases', 'Remains unchanged', 'Becomes zero immediately'],
        correctAnswer: 1,
        explanation: 'By conservation of angular momentum (L = Iω = constant), stretching arms increases moment of inertia I, thereby decreasing angular speed ω.',
        bloomLevel: 'Understanding',
        points: 2,
      },
      {
        id: 'q_rd5',
        questionText: 'What is the kinetic energy of a body of mass M and radius of gyration K undergoing pure rolling motion with linear speed v?',
        questionType: 'MCQ',
        options: ['(1/2)Mv² (1 + K²/R²)', '(1/2)Mv²', '(1/2)Iω²', '(1/2)Mv² (1 - K²/R²)'],
        correctAnswer: 0,
        explanation: 'Total rolling kinetic energy equals translational KE ((1/2)Mv²) plus rotational KE ((1/2)Iω²), summing to (1/2)Mv²(1 + K²/R²).',
        bloomLevel: 'Evaluating',
        points: 2,
      },
    ],
  },
  {
    id: 'quiz_os_deadlocks_01',
    title: 'Operating Systems - Deadlocks & Resource Allocation',
    description: 'Comprehensive computer science examination covering deadlock conditions, Banker algorithm, Resource Allocation Graphs, and avoidance strategies.',
    topic: 'Operating Systems - Deadlocks',
    standard: 'Class 12 (HSC)',
    stream: 'Science',
    subject: 'Computer Science',
    chapter: 'OS Concurrency & Process Synchronization',
    difficulty: 'Medium',
    durationMinutes: 20,
    totalMarks: 10,
    passPercentage: 40,
    isPublished: true,
    allowOffline: true,
    educator: { name: 'Prof. Saima Ansari (Educator Console)' },
    createdAt: new Date().toISOString(),
    _count: { questions: 5, attempts: 94 },
    questions: [
      {
        id: 'q_os1',
        questionText: 'Which of the following conditions is NOT one of Coffman four necessary conditions for a deadlock?',
        questionType: 'MCQ',
        options: ['Mutual Exclusion', 'Hold and Wait', 'Preemption Allowed', 'Circular Wait'],
        correctAnswer: 2,
        explanation: 'Coffman four necessary conditions require "No Preemption". If preemption is allowed, deadlocks cannot persist.',
        bloomLevel: 'Remembering',
        points: 2,
      },
      {
        id: 'q_os2',
        questionText: "In Dijkstra's Banker's Algorithm, which matrix represents the remaining maximum resource requirements of each process?",
        questionType: 'MCQ',
        options: ['Need Matrix [Need = Max - Allocation]', 'Available Vector', 'Allocation Matrix', 'Wait-For Queue'],
        correctAnswer: 0,
        explanation: 'Need Matrix indicates the maximum remaining resources each process can request before releasing its held allocations.',
        bloomLevel: 'Understanding',
        points: 2,
      },
      {
        id: 'q_os3',
        questionText: 'In a Resource Allocation Graph (RAG) where each resource type has ONLY A SINGLE instance, a deadlock occurs if and only if:',
        questionType: 'MCQ',
        options: ['The graph contains a directed cycle', 'The graph is acyclic', 'There are more processes than resources', 'All resources are shared'],
        correctAnswer: 0,
        explanation: 'For single-instance resource systems, the existence of a cycle in the RAG is both necessary and sufficient for a deadlock.',
        bloomLevel: 'Applying',
        points: 2,
      },
      {
        id: 'q_os4',
        questionText: 'What is the primary trade-off of the "Hold and Wait" prevention strategy where a process must request all resources upfront?',
        questionType: 'MCQ',
        options: ['Low resource utilization and possible process starvation', 'Higher context-switching frequency', 'Hardware bus contention', 'Kernel stack overflow'],
        correctAnswer: 0,
        explanation: 'Allocating all resources upfront severely reduces overall system resource utilization and leads to starvation of large processes.',
        bloomLevel: 'Analyzing',
        points: 2,
      },
      {
        id: 'q_os5',
        questionText: 'How does Deadlock Avoidance differ fundamentally from Deadlock Prevention?',
        questionType: 'MCQ',
        options: [
          'Avoidance dynamically inspects resource allocation state to ensure safe state; Prevention invalidates at least one of Coffman 4 conditions statically',
          'Avoidance terminates processes; Prevention ignores deadlocks',
          'Avoidance is an offline protocol; Prevention is an operating system hardware mechanism',
          'Avoidance only works with virtual memory',
        ],
        correctAnswer: 0,
        explanation: 'Deadlock avoidance dynamically evaluates every resource request to ensure the system remains in a safe state, while prevention statically negates deadlock conditions.',
        bloomLevel: 'Evaluating',
        points: 2,
      },
    ],
  },
];

// Helper to retrieve all available quizzes (Default + Custom from localStorage)
export function getAllQuizzes(): Quiz[] {
  let customQuizzes: Quiz[] = [];
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('quiznova_custom_quizzes');
      if (stored) {
        customQuizzes = JSON.parse(stored);
      }
    } catch {
      // ignore parse error
    }
  }

  // Combine default with custom, avoiding duplicates by id
  const map = new Map<string, Quiz>();
  DEFAULT_QUIZZES.forEach((q) => map.set(q.id, q));
  customQuizzes.forEach((q) => map.set(q.id, q));

  return Array.from(map.values());
}

// Helper to save a newly created custom quiz
export function saveCustomQuizLocally(quiz: Partial<Quiz>): Quiz {
  const allQuizzes = getAllQuizzes();
  const id = quiz.id || 'quiz_custom_' + Date.now();
  const questions: Question[] = quiz.questions || [];
  const totalMarks = questions.reduce((sum, q) => sum + (q.points || 2), 0);

  const fullQuiz: Quiz = {
    id,
    title: quiz.title || 'Untitled Assessment',
    description: quiz.description || 'AI-generated assessment set.',
    topic: quiz.topic || 'General Science',
    standard: quiz.standard || 'Class 12 (HSC)',
    stream: quiz.stream || 'Science',
    subject: quiz.subject || 'Computer Science',
    chapter: quiz.chapter || 'Unit Assessment',
    difficulty: quiz.difficulty || 'Medium',
    durationMinutes: quiz.durationMinutes || 30,
    totalMarks: totalMarks > 0 ? totalMarks : 10,
    passPercentage: quiz.passPercentage || 40,
    isPublished: true,
    allowOffline: quiz.allowOffline !== undefined ? quiz.allowOffline : true,
    educator: { name: 'Educator Console' },
    createdAt: new Date().toISOString(),
    _count: { questions: questions.length, attempts: 0 },
    questions,
  };

  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('quiznova_custom_quizzes');
      const list: Quiz[] = stored ? JSON.parse(stored) : [];
      const filtered = list.filter((q) => q.id !== id);
      filtered.unshift(fullQuiz);
      localStorage.setItem('quiznova_custom_quizzes', JSON.stringify(filtered));
    } catch {
      // ignore
    }
  }

  return fullQuiz;
}

// Find a quiz by ID
export function findQuizById(id: string): Quiz | null {
  const all = getAllQuizzes();
  return all.find((q) => q.id === id) || null;
}

// Save student attempt and evaluate Bloom analytics
export function evaluateAndSaveAttempt(
  quizId: string,
  answers: Record<string, number>,
  timeTakenSeconds: number,
  tabSwitchCount: number
): AttemptResult {
  const quiz = findQuizById(quizId) || DEFAULT_QUIZZES[0];
  const questions = quiz.questions || [];

  let totalScore = 0;
  let maxScore = 0;
  const questionReview: QuestionReviewItem[] = [];

  questions.forEach((q, index) => {
    const qId = q.id || 'q_' + index;
    const points = q.points || 2;
    maxScore += points;

    const selectedOption = answers[qId] !== undefined ? answers[qId] : null;
    const isCorrect = selectedOption === q.correctAnswer;
    if (isCorrect) {
      totalScore += points;
    }

    questionReview.push({
      questionId: qId,
      questionText: q.questionText,
      options: q.options,
      selectedOption,
      correctAnswer: q.correctAnswer,
      isCorrect,
      points,
      bloomLevel: q.bloomLevel || 'Understanding',
      explanation: q.explanation || 'Refer to the textbook syllabus rationale.',
    });
  });

  const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  const isPassed = percentage >= quiz.passPercentage;

  let feedback = '';
  if (percentage >= 80) {
    feedback = "Exceptional mastery! High cognitive retention across Bloom's higher-order thinking dimensions (Analyzing & Evaluating).";
  } else if (percentage >= 50) {
    feedback = "Solid foundation demonstrated. Review conceptual rationales for missed questions to strengthen deeper synthesis.";
  } else {
    feedback = 'Needs reinforcement. Review Balbharati textbook chapters and re-attempt to solidify foundational principles.';
  }

  const attemptId = 'att_' + Date.now();
  const attemptResult: AttemptResult = {
    id: attemptId,
    score: totalScore,
    maxScore,
    percentage,
    isPassed,
    timeTakenSeconds,
    tabSwitchCount,
    aiFeedbackSummary: feedback,
    isOfflineSynced: false,
    completedAt: new Date().toISOString(),
    quiz: {
      id: quiz.id,
      title: quiz.title,
      topic: quiz.topic,
      difficulty: quiz.difficulty,
      durationMinutes: quiz.durationMinutes,
      passPercentage: quiz.passPercentage,
      educatorName: quiz.educator?.name || 'Academic Console',
    },
    questionReview,
  };

  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('quiznova_quiz_attempts');
      const list: AttemptResult[] = stored ? JSON.parse(stored) : [];
      list.unshift(attemptResult);
      localStorage.setItem('quiznova_quiz_attempts', JSON.stringify(list));
    } catch {
      // ignore
    }
  }

  return attemptResult;
}

// Retrieve an attempt by ID
export function getAttemptById(attemptId: string): AttemptResult | null {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('quiznova_quiz_attempts');
      if (stored) {
        const list: AttemptResult[] = JSON.parse(stored);
        const match = list.find((a) => a.id === attemptId);
        if (match) return match;
      }
    } catch {
      // ignore
    }
  }
  return null;
}

// Get student analytics
export function getStudentAnalytics(): StudentAnalytics {
  let attempts: AttemptResult[] = [];
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('quiznova_quiz_attempts');
      if (stored) attempts = JSON.parse(stored);
    } catch {
      // ignore
    }
  }

  const totalAttempted = attempts.length;
  const passedAttempts = attempts.filter((a) => a.isPassed).length;
  const totalPct = attempts.reduce((sum, a) => sum + a.percentage, 0);
  const averageScore = totalAttempted > 0 ? Math.round(totalPct / totalAttempted) : 0;

  return {
    stats: {
      totalAttempted,
      passedAttempts,
      averageScore,
    },
    recentHistory: attempts.slice(0, 5).map((a) => ({
      id: a.id,
      score: a.score,
      maxScore: a.maxScore,
      percentage: a.percentage,
      isPassed: a.isPassed,
      timeTakenSeconds: a.timeTakenSeconds,
      completedAt: a.completedAt,
      quiz: {
        title: a.quiz.title,
        topic: a.quiz.topic,
        difficulty: a.quiz.difficulty,
      },
    })),
  };
}

// Get educator analytics
export function getEducatorAnalytics(): EducatorAnalytics {
  const quizzes = getAllQuizzes();
  return {
    stats: {
      totalQuizzes: quizzes.length,
      totalAttempts: 342,
      averagePercentage: 74,
      passRate: 82,
    },
    recentSubmissions: [
      {
        attemptId: 'att_demo_1',
        quizTitle: 'Operating Systems - Deadlocks',
        studentName: 'Saad Siddique (Scholar)',
        score: 10,
        maxScore: 10,
        percentage: 100,
        isPassed: true,
        completedAt: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        attemptId: 'att_demo_2',
        quizTitle: 'Rotational Dynamics & Torque',
        studentName: 'Priya Sharma (Class 12 HSC)',
        score: 8,
        maxScore: 10,
        percentage: 80,
        isPassed: true,
        completedAt: new Date(Date.now() - 7200000).toISOString(),
      },
    ],
  };
}
