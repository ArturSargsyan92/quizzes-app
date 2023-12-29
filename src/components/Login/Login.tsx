/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../domains/auth/auth.service";
import "./Login.css";

function LoginForm(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loginResult = await AuthService.login({ username, password });

      localStorage.setItem("accessToken", loginResult.accessToken);
      localStorage.setItem("refreshToken", loginResult.refreshToken);

      navigate("/profile");
    } catch (error) {
      // TODO handle errors
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="login-inner-block">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate("/signup")}>SignUp</button>
        </form>
      </div>
    </div>

  );
}

export default LoginForm;
