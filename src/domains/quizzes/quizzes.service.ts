import axiosInstance from "../../client/http.client";
import { SuccessResponse } from "../common/types/success.types";
import { QuizDetails } from "./types/detailed-quizzes.types";
import { CreateQuiz, Quiz, UpdateQuiz } from "./types/quizzes.types";

export default class QuizzesService {
  public static async listQuizzes(): Promise<Quiz[]> {
    const params = {};
    const result = await axiosInstance.get<Quiz[]>("/quizzes", { params });

    return result.data;
  }

  public static async createQuiz(payload: CreateQuiz): Promise<Quiz> {
    const result = await axiosInstance.post<Quiz>("/quizzes", payload);

    return result.data;
  }

  public static async updateQuiz(id: string, payload: UpdateQuiz): Promise<Quiz> {
    const result = await axiosInstance.patch<Quiz>(`/quizzes/${id}`, payload);

    return result.data;
  }

  public static async getQuizDetails(id: string): Promise<QuizDetails> {
    const result = await axiosInstance.get<QuizDetails>(`/quizzes/${id}`);

    return result.data;
  }

  public static async deleteQuiz(id: string): Promise<SuccessResponse> {
    const result = await axiosInstance.delete<SuccessResponse>(`/quizzes/${id}`);

    return result.data;
  }
}
