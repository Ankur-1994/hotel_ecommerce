import React from "react";
import "./chefDetail.css";

const ChefDetail = () => {
  return (
    <div className="chef_container">
      <div className="chef_container_image"></div>
      <div className="chef_container_info">
        <div className="chef_container_txt">
          <h2 className="overview_container_heading">Bar and Lounge</h2>
          <span className="overview_txt">+ Vikas Khanna Stood Second Among Top Ten Chefs In India.</span>
          <span className="overview_txt">+ Ranveer Brar – As The Best Top 10 Chefs In India.</span>
          <span className="overview_txt">+ Madhur Jaffrey is known as the fourth popular one among top 10 chefs in India.</span>
          <span className="overview_txt">+ Anjum Anand Is Considered At Fifth Position among Top 10 Chefs In India.</span>
        </div>
      </div>
    </div>
  );
};

export default ChefDetail;
