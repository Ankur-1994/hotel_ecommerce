import React from "react";
import "./storyDetail.css";

const StoryDetail = () => {
  return (
    <div className="story_container">
      <div className="story_box">
        <h1 className="story_title">Our Story</h1>
        <p className="story_desc">
          The menu is a collaboration between French classic recipes paired with
          a focus on organic and biodynamic wine. The décor can be described as
          luxurious, artistic, and iconic, and along with chandelier lighting
          and a warm interior it is meant to reminisce of a old-style,
          high-class establishment.
        </p>

        <p style={{color: 'rgb(233, 197, 94)'}} className="story_desc">
          In this sensual and intimate space our wine team has amassed a
          collection of the great wines of France and beyond that channeled
          their shared philosophy of environmental responsibility, where
          vignerons and domaines are showcased that prioritize traditional
          methods of viticulture as well as careful and thoughtful stewardship
          of the land.
        </p>
      </div>
    </div>
  );
};
export default StoryDetail;
