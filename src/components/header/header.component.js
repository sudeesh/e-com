import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firbase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cartIcon.component";

import { ReactComponent as Logo } from "../../assets/original.svg";

import "./header.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
