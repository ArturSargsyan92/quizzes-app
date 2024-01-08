import React, { useContext, KeyboardEvent } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Navbar(): React.ReactElement {
  const { user } = useContext(AuthContext)!;

  const logoutHandler = () => {
    console.log("logout");
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      logoutHandler();
    }
  };

  return (
    <nav className="header-nav">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        {
          !user ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Login
                </NavLink>
              </li>
              <li className="signup-item">
                <NavLink
                  to="/signup"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  SignUp
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <span onClick={logoutHandler} onKeyDown={handleKeyDown} tabIndex={0} role="button">Logout</span>
            </li>
          )
        }

        {
          user && (
          <>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/quizzes"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Quizzes
              </NavLink>
            </li>
          </>
          )
        }
      </ul>
    </nav>
  );
}
