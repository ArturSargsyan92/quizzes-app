import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./Navbar.css";

export default function Navbar(): React.ReactElement {
  const { user } = useContext(AuthContext)!;

  return (
    <nav className="nav">
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
          user && (
          <>
            <li>
              <NavLink
                to="/psrofile"
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
