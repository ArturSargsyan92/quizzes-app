import React from "react";
import "./Navbar.css";

export default function Navbar(): React.ReactElement {
  return (
    <nav className="nav">
      <a href="/profile" className="profile-title">Profile</a>
      <ul>
        <li>
          <a href="/quizzes">Quizzes</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
