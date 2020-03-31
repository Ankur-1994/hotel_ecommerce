import React from "react";
import "./experienceView.css";
import { Link } from "react-router-dom";

const ExperienceView = () => {
  return (
    <div className="experience_container">
      <div className="experience_container_img"></div>
      <div className="experience_container_info">
        <h2 className="experience_container_heading">
          Experience Bar and Lounge
        </h2>
        <Link to="/location">
          <button role="button" className="locationButton">
            Location & Hours
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExperienceView;
