import { Question } from "./questions.types";

export type UpdateQuestion = Omit<Question, "_id" | "quizId">;
