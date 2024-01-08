import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./Container";
import Logo from "../media/logo.png";

export default function Header(): React.ReactElement {
  return (
    <header>
      <Container className="header-block">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <Navbar />
      </Container>
    </header>
  );
}
