// Pomofocus.js
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../../js/Store/index";
import Navbar from "../navBar/Navbar";
import Timer from "../timerManager/timerManager";
import TodoWrapper from "../TaskManager/TodoWrapper";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/signup";
import './PromoPro.css';
import Speech from "../speech/speech";
const Pomofocus = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    navigate("/login");
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    navigate("/signup");
  };

  return (
    <Provider store={store}>
      <div>
        <Navbar
          onLoginClick={handleLoginClick}
          onSignupClick={handleSignupClick}
        />
        <Routes>
          <Route path="/login" element={showLogin && <Login />} />
          <Route path="/signup" element={showSignup && <Signup />} />
          <Route
            path="/"
            element={
              <div>
                <div className="tabs">{/* ... */}</div>
                <Timer />
                <TodoWrapper />
                <div className="speech">
                <Speech />
                </div>
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
           
    </Provider>
  );
};

export default Pomofocus;
