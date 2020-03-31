import React from "react";
import "./logoView.css";
import Logo from "../../../assets/winelogo.png";
import { Link } from "react-router-dom";

const LogoView = () => {
  return (
    <div className="logo_container">
      <Link to="/">
        <img className="logo_container_img" src={Logo} alt="logo" />
        <h5 className="logo_container_heading">Bar&Lounge</h5>
      </Link>
    </div>
  );
};

export default LogoView;
