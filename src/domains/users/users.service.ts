import axiosInstance from "../../client/http.client";
import { SignUpPayload, UpdateUser } from "./types/users-requests";
import { User } from "./types/users.types";

export default class UsersService {
  public static async signUp(payload: SignUpPayload): Promise<User> {
    const result = await axiosInstance.post<User>("/users", payload);

    return result.data;
  }

  public static async updateUser(update: UpdateUser): Promise<User> {
    const result = await axiosInstance.patch<User>("/users/", update);

    return result.data;
  }

  public static async me(): Promise<User> {
    const result = await axiosInstance.get<User>("/users/me");

    return result.data;
  }

  public static async verify(email: string, key: string, expiresIn: number) {
    const payload = { email, key, expiresIn };

    const result = await axiosInstance.post("/users/verify", payload);

    return result.data;
  }

  public static async forgotPassword(email: string) {
    const payload = { email };

    const result = await axiosInstance.post("/users/forgot-password", payload);

    return result.data;
  }

  public static async resetPassword(email: string, key: string, expiresIn: number, newPassword: string) {
    const payload = { email, key, expiresIn, newPassword };

    const result = await axiosInstance.post("/users/reset-password", payload);

    return result.data;
  }

  public static async updatePassword(oldPassword: string, newPassword: string) {
    const payload = { oldPassword, newPassword };

    const result = await axiosInstance.patch("/users/update-password", payload);

    return result.data;
  }
}
