import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/original.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link to="/" className="option">
        Shop
      </Link>
      <Link to="/" className="option">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
