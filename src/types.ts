export enum Difficulty {
  Beginner = '初级',
  Intermediate = '中级',
  Advanced = '高级',
}

export enum GrammarPoint {
  RelativeClause = '定语从句',
  AdverbialClause = '状语从句',
  NonFiniteVerb = '非谓语动词',
  Conjunction = '连词',
  AbsoluteConstruction = '独立主格',
  NounClause = '名词性从句',
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  sentence: string; // Use "____" as placeholder
  options: Option[];
  correctOptionId: string;
  explanation: {
    rule: string;
    example: string;
    commonMistake: string;
    reviewLink?: string;
  };
  difficulty: Difficulty;
  category: GrammarPoint;
}

export interface UserAnswer {
  questionId: number;
  selectedOptionId: string;
  isCorrect: boolean;
}
