import React from "react";
import "./confirmationView.css";

const ConfirmationView = () => {
  const t_cost = localStorage.getItem("cost");
  localStorage.setItem('cost', 0)
  return (
    <div className="confirm_container">
      <div className="confirm_box">
        <h1 className="confirm_heading">It's Ordered</h1>
        <h3 className="confirm_desc">
          Hi - thanks for your order. we hope you enjoyed shopping with us.
        </h3>
        <h2>
          Your Bar and Lounge Order Confirmation{" "}
          <b style={{ color: "rgb(233, 197, 94)" }}>[#98765]</b>
        </h2>
        <p>
          Your Item will be deliver after 30 mintutes as chef's are ready for
          your order prepration.
        </p>
        <p>
          You just need to pay{" "}
          <b style={{ color: "rgb(233, 197, 94)" }}>₹{t_cost}</b> once your
          order will be at your door step.
        </p>
        <h3>Changed your mind?</h3>
        <p>
          Sorry we cannot chaange your order after confirmation. But yeah, you
          can cancel by call{" "}
          <b style={{ color: "rgb(233, 197, 94)" }}>+91-9599015901</b>
        </p>
        <span style={{ color: "rgb(233, 197, 94)" }}>
          * This confirmaion of receipt of order is subject to availability and
          does not constitute a binding contract. This receipt does not
          constitute or represent confirmaion of the purchase. This will be
          issued when your order has been proceed by our teams.
        </span>
      </div>
    </div>
  );
};

export default ConfirmationView;
