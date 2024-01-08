import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LoginForm(): JSX.Element {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const { logInUser } = useContext(AuthContext)!;

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logInUser(credentials);
  };

  return (
    <main className="login">
      <div className="login-inner-block">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate("/signup")}>
            SignUp
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginForm;
