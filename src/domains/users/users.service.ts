import axiosInstance from "../../client/http.client";
import { SignUpPayload, SignupResponse, User } from "./types/signup.types";

export default class UsersService {
    public static async signUp(payload: SignUpPayload): Promise<SignupResponse> {
        const result = await axiosInstance.post<SignupResponse>("/users", payload);

        return result.data
    }

    public static async me(): Promise<User> {
        const result = await axiosInstance.get<User>("/users/me");

        return result.data;
    }
}