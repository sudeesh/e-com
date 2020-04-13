import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firbase.utils";

import { ReactComponent as Logo } from "../../assets/original.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link to="/signin" className="option">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
