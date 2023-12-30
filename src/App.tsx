import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";

/** Components */
import Navbar from "./components/Navbar/Navbar";

/** Pages */
import SignUp from "./pages/auth/Signup/Signup";
import LoginForm from "./pages/auth/Login/Login";
import Verify from "./pages/auth/Verify/Verify";
import Profile from "./pages/Profile/Profile";
import Quizzes from "./pages/Quizzes/Quizzes";
import About from "./pages/About/About";

import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/about" element={<About />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

      </AuthProvider>
    </Router>
  );
}

export default App;
