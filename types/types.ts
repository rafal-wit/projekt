export interface Question {
    id: string;
    type: 'slider' | 'switch';
    category: 'org' | 'infra' | 'training' | 'cost' | 'collab' | 'auto' | 'satisfaction';
    text: string;
    weight: number;
  }

  export interface Questions {
    readiness: Question[];
    effectiveness: Question[];
  }
  

  export interface Answers {
    [key: string]: number | boolean;
  }

export   type CalculateScore = (section: 'readiness' | 'effectiveness') => void;
