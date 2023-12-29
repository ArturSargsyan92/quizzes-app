export type TextFormat = "text" | "code" | "html";

export type BaseQuestion = {
  _id: string;
  sortIndex: number;
  timeout: number | null;
  hint: string | null;
  explanation: string | null;

  quizId: string;
};

export type TextTextQuestion = BaseQuestion & {
  type: "text:text";

  question: string;
  format: TextFormat;

  answer: string[];
};

export type TextMultiSelectQuestion = BaseQuestion & {
  type: "text:multiselect";

  question: string;
  format: TextFormat;

  answersList: string[];

  answer: number[];
};

export type TextSelectQuestion = BaseQuestion & {
  type: "text:select";

  question: string;
  format: TextFormat;

  answersList: string[];

  answer: number;
};

export type TextImageQuestion = BaseQuestion & {
  type: "text:image";

  question: string;
  format: TextFormat;

  answersList: string[];

  answer: number;
};

export type TextMultiImageQuestion = BaseQuestion & {
  type: "text:multi-image";

  question: string;
  format: TextFormat;

  answersList: string[];

  answer: number[];
};

export type Question = TextTextQuestion | TextMultiSelectQuestion |
TextSelectQuestion | TextImageQuestion | TextMultiImageQuestion;
