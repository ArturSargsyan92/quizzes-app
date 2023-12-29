import axiosInstance from "../../client/http.client";
import { SuccessResponse } from "../common/types/success.types";
import { CreateQuestion } from "./types/create-questions.types";
import { QuestionDetails } from "./types/detailed-questions.types";
import { Question } from "./types/questions.types";
import { UpdateQuestion } from "./types/update-questions.types";

export default class QuestionsService {
  public static async createQuestion(payload: CreateQuestion): Promise<Question> {
    const result = await axiosInstance.post<Question>("/questions", payload);

    return result.data;
  }

  public static async listQuizQuestions(quizId: string): Promise<Question[]> {
    const result = await axiosInstance.get<Question[]>(`/questions/quiz/${quizId}`);

    return result.data;
  }

  public static async updateQuestion(id: string, update: UpdateQuestion): Promise<Question> {
    const result = await axiosInstance.put<Question>(`/questions/${id}`, update);

    return result.data;
  }

  public static async getQuestionDetails(id: string): Promise<QuestionDetails> {
    const result = await axiosInstance.get<QuestionDetails>(`questions/${id}`);

    return result.data;
  }

  public static async deleteQuestion(id: string): Promise<SuccessResponse> {
    const result = await axiosInstance.delete<SuccessResponse>(`questions/${id}`);

    return result.data;
  }
}
