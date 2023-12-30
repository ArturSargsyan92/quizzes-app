import React, { createContext, useState, ReactNode, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import UsersService from "../domains/users/users.service";
import AuthService from "../domains/auth/auth.service";

export interface AuthContextProps {
  successAuth: boolean;
  user: string | null;
  accessToken: string | null;
  signUpUser: (payload: any) => Promise<void>;
  logInUser: (credentials: { username: string; password: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();

  const [successAuth, setSuccessAuth] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  /** Sign Up User */
  const signUpUser = async (payload: any) => {
    try {
      await UsersService.signUp(payload);
      setSuccessAuth(true);

      navigate("/");
    } catch (error: any) {
      console.error("ERROR: Error during sign up:", error.message);
    }
  };

  /** Log In User */
  const logInUser = async (credentials: { username: string; password: string }) => {
    try {
      const loginResult = await AuthService.login(credentials);

      localStorage.setItem("accessToken", loginResult.accessToken);
      localStorage.setItem("refreshToken", loginResult.refreshToken);

      setSuccessAuth(true);
      setAccessToken(loginResult.accessToken);
      setUser("Hello user");

      navigate("/profile");
    } catch (error: any) {
      console.error("ERROR: Error during login:", error.message);
    }
  };

  const contextData: AuthContextProps = useMemo(() => ({
    successAuth,
    user,
    accessToken,
    signUpUser,
    logInUser,
  }), [successAuth, user, accessToken]);

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}
