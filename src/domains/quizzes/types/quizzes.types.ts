export type Quiz = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  defaultTimeout: number | null;
  sortIndex: number;
  userId: string;
};

export type CreateQuiz = {
  description: string;
  name: string; // non empty
  slug: string; // non empty
  defaultTimeout: number | null; // min 0, integer number
  sortIndex: number; // min 0 integer number
};

export type UpdateQuiz = {
  description: string;
  name: string; // non empty
  slug: string; // non empty
  defaultTimeout: number | null; // min 0, integer number
  sortIndex: number; // min 0 integer number
};
