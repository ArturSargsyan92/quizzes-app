import React, { ChangeEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpPayload } from "../../domains/users/types/users-requests";
import AuthContext from "../../context/AuthContext";

function SignUp(): React.ReactElement {
  const navigate = useNavigate();

  const { signUpUser } = useContext(AuthContext)!;

  const [payload, setPayload] = useState<SignUpPayload>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    signUpUser(payload);
  };

  return (
    <div className="signup">
      <div className="signup-inner-block">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={payload.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={payload.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={payload
                .email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={payload.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Register</button>
          <button type="button" onClick={() => navigate("/")}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
