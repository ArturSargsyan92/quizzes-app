import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "../Signup/Signup";
import Login from "../Login/Login";
import Verify from "../Verify/Verify";
import Profile from "../Profile/Profile";
import Quizzes from "../Quizzes/Quizzes";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
