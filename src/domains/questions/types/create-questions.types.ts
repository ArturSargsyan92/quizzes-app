import { Question } from "./questions.types";

export type CreateQuestion = Omit<Question, "_id">;
