import React from "react";
import "./introductionDetail.css";

const IntroductionDetail = () => {
  return (
    <div className="intro_container">
      <div className="intro_box">
        <h1 className="intro_title">Background & History</h1>
        <p className="intro_para">
          Bar and Lounge began on March 26th, 2020 in the city of Gurgaon.
          Focusing on the goals of “Quality, Healthy, and Tradition” the company
          is family operation making each dish in our own kitchens from scratch.
          Four Sea Restaurant has three generations of family member working
          together to fulfill the idea “Honor the Customer, Quality Comes
          First”. Through hard work and dedication, Four Sea Restaurant began
          building its brand around the idea of delicious and authentic
          traditional Chinese food.
        </p>

        <p style={{ color: "rgb(233, 197, 94)" }} className="intro_para">
          Every day, before dawn, without fail, each store begins to grind up
          soybeans, roll out the dough for the oven baked bun and light the
          stoves to begin frying the deep fried crullers. Over the years the
          weary individuals working the grave yard shifts, the foreigners
          visiting LA, and those getting ready to go to work stop by our
          restaurants to enjoy hot, freshly ground soy milk, made to order
          dishes such as fried daikon cake and egg crepes or our many styles of
          rice rolls, filling up their stomachs and their hearts. We take pride
          in the faces of our satisfied customers leaving the restaurant after
          having taken respite from their busy lives to truly enjoy a
          traditional meal reminding them of our cultural heritage.
        </p>

        <p className="intro_para">
          To remain true to our customers, we have forgone the use of a
          centralized kitchen like many restaurants we see that prepares
          semi-ready foods only to be heated up and served to their customers.
          We honor the customers by providing them with the freshest, most
          delicious, and authentic meal experience possible.
        </p>
      </div>
    </div>
  );
};

export default IntroductionDetail;
