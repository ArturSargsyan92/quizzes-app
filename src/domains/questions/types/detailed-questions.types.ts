import { Quiz } from "../../quizzes/types/quizzes.types";
import { Question } from "./questions.types";

export type QuestionDetails = Question & {
  quiz: Quiz;
};
