import React from "react";
import FullScreenOverlay from "../fullScreenOverlay/fullScreenOverlay";
import LogoView from "../logoView/logoView";
import IntroductionDetail from "../introductionDetail/introductionDetail";

const IntroductionPage = () => {
  return (
    <>
      <FullScreenOverlay />
      <LogoView />
      <IntroductionDetail />
    </>
  );
};

export default IntroductionPage;
