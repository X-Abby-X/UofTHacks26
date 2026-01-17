// Shared data model for AI-driven analysis

export interface UnitMastery {
  id: string;
  name: string;
  mastery: number; // 0-100
  errorCount: number;
  questionNumbers: number[];
}

export interface AIAnalysis {
  questionNumber: number;
  detectedMistake: string;
  aiTip: string;
  unitId: string;
  severity: 'high' | 'medium' | 'low';
}

export interface Milestone {
  id: string;
  name: string;
  achieved?: number;
  predicted?: number;
  weight: number;
  date?: string;
}

// AI Analysis Report - maps mistakes to syllabus units
export const analysisReport: AIAnalysis[] = [
  {
    questionNumber: 3,
    detectedMistake: 'Incorrectly applied the distributive property when solving for eigenvalues. You wrote λ(A - λI) instead of det(A - λI).',
    aiTip: 'Review the characteristic polynomial formula. Remember: det(A - λI) = 0 is the starting point for eigenvalue calculations.',
    unitId: 'eigenvalues',
    severity: 'high',
  },
  {
    questionNumber: 7,
    detectedMistake: 'Confused row space with column space when determining the basis. The vectors you listed are from the transpose matrix.',
    aiTip: 'Practice identifying the difference: Row space uses rows of A, column space uses columns of A. Try visualizing them as different subspaces.',
    unitId: 'vector',
    severity: 'high',
  },
  {
    questionNumber: 12,
    detectedMistake: 'Sign error in cross product calculation. Your j-component has the wrong sign due to incorrect cofactor expansion.',
    aiTip: 'Use the mnemonic "positive, negative, positive" for i, j, k components. Double-check the middle term of your cross product formula.',
    unitId: 'transforms',
    severity: 'medium',
  },
  {
    questionNumber: 5,
    detectedMistake: 'Failed to recognize linear independence. The set of vectors you claimed was a basis contains redundant vectors.',
    aiTip: 'Check for linear independence by row-reducing the matrix formed by your vectors. Each pivot position indicates an independent vector.',
    unitId: 'linear',
    severity: 'high',
  },
  {
    questionNumber: 9,
    detectedMistake: 'Dimension calculation error. You counted basis vectors incorrectly when finding dim(null(A)).',
    aiTip: 'Use the Rank-Nullity Theorem: dim(null(A)) = n - rank(A), where n is the number of columns.',
    unitId: 'linear',
    severity: 'high',
  },
];

// Unit Mastery - calculated from analysis
export const unitMastery: UnitMastery[] = [
  {
    id: 'linear',
    name: 'Linear Algebra',
    mastery: 45,
    errorCount: 2,
    questionNumbers: [5, 9],
  },
  {
    id: 'vector',
    name: 'Vector Spaces',
    mastery: 62,
    errorCount: 1,
    questionNumbers: [7],
  },
  {
    id: 'eigenvalues',
    name: 'Eigenvalue Theory',
    mastery: 38,
    errorCount: 1,
    questionNumbers: [3],
  },
  {
    id: 'transforms',
    name: 'Linear Transforms',
    mastery: 78,
    errorCount: 1,
    questionNumbers: [12],
  },
];

// Course Milestones
export const courseMilestones: Milestone[] = [
  { id: 'a1', name: 'Assignment 1', achieved: 88, weight: 10, date: 'Sep 15' },
  { id: 'm1', name: 'Midterm 1', achieved: 75, weight: 20, date: 'Oct 12' },
  { id: 'a2', name: 'Assignment 2', achieved: 92, weight: 10, date: 'Nov 3' },
  { id: 'm2', name: 'Midterm 2', predicted: 78, weight: 25, date: 'Dec 1' },
  { id: 'final', name: 'Final Exam', predicted: 85, weight: 40, date: 'Dec 18' },
];

// Calculate required grade for target
export function calculateRequiredGrade(
  milestones: Milestone[],
  targetFinal: number,
  remainingWeight: number
): number {
  const achieved = milestones
    .filter((m) => m.achieved)
    .reduce((sum, m) => sum + m.achieved! * (m.weight / 100), 0);
  
  const required = (targetFinal - achieved) / (remainingWeight / 100);
  return Math.max(0, Math.min(100, Math.round(required)));
}

// Calculate current grade
export function calculateCurrentGrade(milestones: Milestone[]): number {
  const completedWeight = milestones
    .filter((m) => m.achieved)
    .reduce((sum, m) => sum + m.weight, 0);
  
  const achievedPoints = milestones
    .filter((m) => m.achieved)
    .reduce((sum, m) => sum + m.achieved! * (m.weight / 100), 0);
  
  return Math.round((achievedPoints / completedWeight) * 100);
}
