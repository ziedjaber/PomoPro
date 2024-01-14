// src/components/Navbar.js

import React from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = ({ onLoginClick, onSignupClick }) => {
  return (
    <div className="header">
      <h1><a href="/">PromoPro</a></h1>
      <div className="icons">
        <i className="fas fa-chart-pie"></i>
        <i className="fas fa-cog"></i>
        <button className="login" onClick={onLoginClick}>
          Login
        </button>
        <button className="signup" onClick={onSignupClick}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
