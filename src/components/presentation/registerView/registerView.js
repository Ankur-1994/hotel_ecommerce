import React from "react";
import FullScreenOverlay from "../fullScreenOverlay/fullScreenOverlay";
import LogoView from "../logoView/logoView";
import RegisterPage from "../registerPage/registerPage";

const RegisterView = () => {
  return (
    <>
      <FullScreenOverlay />
      <LogoView />
      <RegisterPage />
    </>
  );
};

export default RegisterView;
