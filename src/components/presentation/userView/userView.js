import React, { useState, useEffect } from "react";
import "./userView.css";
import { Link } from "react-router-dom";

const UserView = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isCheckoutbtnVisible, setIsCheckoutBtnVisible] = useState(false);

  const checkAllFieldDone = () => {
    return fname.length > 0 && lname.length > 0 && address.length > 0;
  };

  useEffect(() => {
    if (checkAllFieldDone()) {
      setIsCheckoutBtnVisible(true);
    } else {
      setIsCheckoutBtnVisible(false);
    }
  }, [checkAllFieldDone]);

  return (
    <div className="user_container">
      <div className="user_box">
        <h1 className="user_heading">Delivery Detail</h1>
        <p className="user_desc">Some more detail needed before proceeding further</p>

        <div className="form_ui">
          <label htmlFor="fname">
            <input
              id="fname"
              className="form_input"
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={e => setFname(e.target.value)}
              required
            />
          </label>

          <label htmlFor="lname">
            <input
              id="lname"
              className="form_input"
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={e => setLname(e.target.value)}
              required
            />
          </label>

          <label htmlFor="address">
            <textarea
              id="address"
              className="form_input"
              type="text"
              placeholder="Delivery Address"
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
            />
          </label>

          <label htmlFor="suggestion">
            <textarea
              id="suggestion"
              className="form_input"
              type="text"
              placeholder="Suggestions...."
              value={suggestion}
              onChange={e => setSuggestion(e.target.value)}
              required
            />
          </label>
        </div>

        {isCheckoutbtnVisible ? (
          <div className="form_action">
            <Link to="/confirm">
            <button type="submit" className="btn_send">
              Proceed to checkout
            </button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserView;
