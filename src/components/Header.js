import React from "react";

import "../assets/styles/header.css";
import logo from "../assets/imgs/logo.gif";
import leftArrow from "../assets/imgs/leftArrow.png";

import { useNavigate } from "react-router-dom";

const Header = ({ whichPage }) => {
  const navigate = useNavigate();
  let show = false;
  if (whichPage !== "home") {
    show = true;
  }
  return (
    <div className="headerContainer">
      <div className="headerWrapper">
        {show === true && (
          <div onClick={() => navigate("/")} className="headerIconWrapper">
            <img src={leftArrow} alt="" />
          </div>
        )}
        <div className="logoWrapper">
          <img src={logo} alt="" />
        </div>
        <h1>Big Expenses Overview</h1>
      </div>
    </div>
  );
};

export default Header;
