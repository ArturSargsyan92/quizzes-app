import axiosInstance from "../../client/http.client";
import { LoginPayload, LoginResponse } from "./types/auth.types";

export default class AuthService {
    public static async login(credentials: LoginPayload): Promise<LoginResponse> {
        const result = await axiosInstance.post<LoginResponse>("/auth/login", credentials);
        
        return result.data;
    }
}