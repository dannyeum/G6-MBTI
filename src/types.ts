export type MBTIType = string; // e.g., "ENFP"

export interface Question {
  id: number;
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  options: {
    text: string;
    value: string; // 'E', 'I', etc.
  }[];
}

export interface TestResult {
  type: MBTIType;
  name: string;
  report?: {
    schoolLife: string;
    studyTips: string;
    friendships: string;
    encouragement: string;
  };
}

export interface TeacherInsight {
  strategy: string;
  seating: string;
  grouping: string;
  rules: string;
}
