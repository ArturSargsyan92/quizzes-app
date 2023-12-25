import { ChangeEvent, useState } from "react";
import { SignUpPayload } from "../domains/users/types/signup.types";
import UsersService from "../domains/users/users.service";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    const [payload, setPayload] = useState<SignUpPayload>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setPayload({
          ...payload,
          [name]: value,
        });
      };

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const user = await UsersService.signUp(payload);
            navigate("/")
        } catch (error) {
          console.error(error);
          // TODO handle errors
        }
      };

    return (<div>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
}

export default SignUp;