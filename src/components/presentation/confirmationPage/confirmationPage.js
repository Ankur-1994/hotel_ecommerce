import React from "react";
import FullScreenOverlay from "../fullScreenOverlay/fullScreenOverlay";
import LogoView from "../logoView/logoView";
import ConfirmationView from "../confirmationView/confirmationView";

const ConfirmationPage = () => {
  return (
    <>
      <FullScreenOverlay />
      <LogoView />
      <ConfirmationView />
    </>
  );
};

export default ConfirmationPage;
