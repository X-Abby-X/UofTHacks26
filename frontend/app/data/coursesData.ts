// Multi-course data model for Skule Swap

import { type AIAnalysis, type UnitMastery, type Milestone } from './analysisData';

export interface Course {
  id: string;
  code: string;
  name: string;
  semester: string;
  currentGrade: number;
  gradeStatus: 'excellent' | 'good' | 'needs-attention';
  nextMilestone: {
    name: string;
    daysUntil: number;
    weight: number;
  };
  units: UnitMastery[];
  analyses: AIAnalysis[];
  milestones: Milestone[];
  color: string;
}

// Sample courses for U of T Engineering student
export const courses: Course[] = [
  {
    id: 'mat223',
    code: 'MAT223',
    name: 'Linear Algebra',
    semester: 'Fall 2024',
    currentGrade: 82,
    gradeStatus: 'good',
    nextMilestone: {
      name: 'Midterm 2',
      daysUntil: 3,
      weight: 25,
    },
    color: '#8B5CF6',
    units: [
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
    ],
    analyses: [
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
    ],
    milestones: [
      { id: 'a1', name: 'Assignment 1', achieved: 88, weight: 10, date: 'Sep 15' },
      { id: 'm1', name: 'Midterm 1', achieved: 75, weight: 20, date: 'Oct 12' },
      { id: 'a2', name: 'Assignment 2', achieved: 92, weight: 10, date: 'Nov 3' },
      { id: 'm2', name: 'Midterm 2', predicted: 78, weight: 25, date: 'Dec 1' },
      { id: 'final', name: 'Final Exam', predicted: 85, weight: 40, date: 'Dec 18' },
    ],
  },
  {
    id: 'ece259',
    code: 'ECE259',
    name: 'Electromagnetism',
    semester: 'Fall 2024',
    currentGrade: 91,
    gradeStatus: 'excellent',
    nextMilestone: {
      name: 'Lab Report 3',
      daysUntil: 7,
      weight: 10,
    },
    color: '#10B981',
    units: [],
    analyses: [],
    milestones: [
      { id: 'l1', name: 'Lab 1', achieved: 95, weight: 10, date: 'Sep 20' },
      { id: 'q1', name: 'Quiz 1', achieved: 88, weight: 15, date: 'Oct 5' },
      { id: 'l2', name: 'Lab 2', achieved: 92, weight: 10, date: 'Oct 25' },
      { id: 'l3', name: 'Lab 3', predicted: 90, weight: 10, date: 'Nov 10' },
      { id: 'final', name: 'Final Exam', predicted: 91, weight: 55, date: 'Dec 15' },
    ],
  },
  {
    id: 'csc209',
    code: 'CSC209',
    name: 'Software Tools',
    semester: 'Fall 2024',
    currentGrade: 68,
    gradeStatus: 'needs-attention',
    nextMilestone: {
      name: 'Quiz 2',
      daysUntil: 1,
      weight: 15,
    },
    color: '#F59E0B',
    units: [],
    analyses: [],
    milestones: [
      { id: 'a1', name: 'Assignment 1', achieved: 72, weight: 20, date: 'Sep 28' },
      { id: 'q1', name: 'Quiz 1', achieved: 65, weight: 15, date: 'Oct 18' },
      { id: 'a2', name: 'Assignment 2', achieved: 70, weight: 20, date: 'Nov 5' },
      { id: 'q2', name: 'Quiz 2', predicted: 75, weight: 15, date: 'Nov 22' },
      { id: 'final', name: 'Final Project', predicted: 80, weight: 30, date: 'Dec 12' },
    ],
  },
  {
    id: 'eng212',
    code: 'ENG212',
    name: 'Engineering Comm',
    semester: 'Fall 2024',
    currentGrade: 85,
    gradeStatus: 'good',
    nextMilestone: {
      name: 'Presentation',
      daysUntil: 12,
      weight: 20,
    },
    color: '#EC4899',
    units: [],
    analyses: [],
    milestones: [
      { id: 'r1', name: 'Report 1', achieved: 83, weight: 25, date: 'Sep 30' },
      { id: 'p1', name: 'Presentation 1', achieved: 88, weight: 20, date: 'Oct 20' },
      { id: 'r2', name: 'Report 2', achieved: 84, weight: 25, date: 'Nov 8' },
      { id: 'p2', name: 'Presentation 2', predicted: 85, weight: 20, date: 'Nov 28' },
      { id: 'final', name: 'Final Paper', predicted: 86, weight: 10, date: 'Dec 10' },
    ],
  },
];

// Calculate overall sessional GPA
export function calculateSessionalGPA(courses: Course[]): number {
  const totalGradePoints = courses.reduce((sum, course) => sum + course.currentGrade, 0);
  const avgPercentage = totalGradePoints / courses.length;
  
  // Convert percentage to 4.0 GPA scale (approximate)
  if (avgPercentage >= 90) return 4.0;
  if (avgPercentage >= 85) return 3.9;
  if (avgPercentage >= 80) return 3.7;
  if (avgPercentage >= 77) return 3.3;
  if (avgPercentage >= 73) return 3.0;
  if (avgPercentage >= 70) return 2.7;
  if (avgPercentage >= 67) return 2.3;
  if (avgPercentage >= 63) return 2.0;
  if (avgPercentage >= 60) return 1.7;
  return 1.0;
}

// Get recent intelligence items (latest AI reports across all courses)
export function getRecentIntelligence(courses: Course[]): Array<{
  courseCode: string;
  courseColor: string;
  errorCount: number;
  timestamp: string;
}> {
  return courses
    .filter((c) => c.analyses.length > 0)
    .map((c) => ({
      courseCode: c.code,
      courseColor: c.color,
      errorCount: c.analyses.length,
      timestamp: '2 hours ago', // Mock timestamp
    }));
}
