import React, { Component } from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import firebaseConfig from "../../../firebaseConfig";
import "./registerPage.css";

class RegisterPage extends Component {
  componentDidMount() {
    const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "/user",
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "/user"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <>
        <div className="register_container">
          <div className="register_box">
            <h1 className="register_title">REGISTER</h1>
            <p className="register_desc">Before Proceeding, please enter your mobile number</p>
            <div id="firebaseui-auth-container"></div>
          </div>
        </div>
      </>
    );
  }
}

export default RegisterPage;
