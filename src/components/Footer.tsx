import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "../media/logo.png";

export default function Footer(): React.ReactElement {
  return (
    <footer>
      <Container className="footer-block">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="copyright">Copyright © 2023 QuizMaker. All rights reserved.</div>
      </Container>
    </footer>
  );
}
