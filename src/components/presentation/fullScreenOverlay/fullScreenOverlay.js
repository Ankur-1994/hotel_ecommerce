import React from "react";
import "./fullScreenOverlay.css";
import { Link } from "react-router-dom";

const FullScreenOverlay = () => {
  const closeSilder = () => {
    if (document.getElementById("myNav")) {
      document.getElementById("myNav").style.width = "0%";
    }
    if (document.querySelector(".landing_content")) {
      document.querySelector(".landing_content").style.display = "block";
    }
  };

  const openSlider = () => {
    if (document.getElementById("myNav")) {
      document.getElementById("myNav").style.width = "100%";
    }
    if (document.querySelector(".landing_content")) {
      document.querySelector(".landing_content").style.display = "none";
    }
  };
  return (
    <>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeSilder}>
          &times;
        </a>
        <div className="overlay-content">
          <Link style={{ textDecoration: "none" }} to="/intro">
            <span>Information</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/menu">
            <span>Menu</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/order">
            <span>Orders</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/story">
            <span>Our Story</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </div>
      <div className="overlay_container">
        <div id="menuToggle" onClick={openSlider}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default FullScreenOverlay;
