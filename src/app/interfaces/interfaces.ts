export interface RootObject {
    response_code: number;
    results: pregunta[];
  }
  
  export interface pregunta {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }