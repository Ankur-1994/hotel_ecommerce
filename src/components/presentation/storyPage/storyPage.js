import React from "react";
import FullScreenOverlay from "../fullScreenOverlay/fullScreenOverlay";
import LogoView from "../logoView/logoView";
import StoryDetail from "../storyDetail/storyDetail";

const StoryPage = () => {
  return (
    <>
      <FullScreenOverlay />
      <LogoView />
      <StoryDetail />
    </>
  );
};

export default StoryPage;
