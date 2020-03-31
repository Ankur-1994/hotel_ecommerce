import React, { Component } from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import firebaseConfig from '../../firebaseConfig';

class RegisterPage extends Component {
  componentDidMount() {
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "https://netflix-clone-ankur.herokuapp.com/",
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID,],
      tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    
    return (
      <>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container">
            
        </div>
      </>
    );
  }
}

export default RegisterPage;
