import { Question } from "../../questions/types/questions.types";
import { User } from "../../users/types/users.types";
import { Quiz } from "./quizzes.types";

export type QuizDetails = Quiz & {
  user: User;
  questions: Question[];
};
