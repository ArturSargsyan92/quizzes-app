import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";

/** Components */
import Header from "./components/Header";
import Footer from "./components/Footer";

/** Pages */
import Home from "./pages/Home";
import SignUp from "./pages/auth/Signup";
import LoginForm from "./pages/auth/Login";
import Verify from "./pages/auth/Verify";
import Profile from "./pages/Profile";
import Quizzes from "./pages/Quizzes";
import About from "./pages/About";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/about" element={<About />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
