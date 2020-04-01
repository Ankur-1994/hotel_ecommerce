import React from "react";
import FullScreenOverlay from "../fullScreenOverlay/fullScreenOverlay";
import LogoView from "../logoView/logoView";
import UserView from "../userView/userView";

const UserDetail = () => {
  return (
    <>
      <FullScreenOverlay />
      <LogoView />
      <UserView />
    </>
  );
};

export default UserDetail;
