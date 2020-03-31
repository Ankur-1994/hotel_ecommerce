import React from "react";
import FullScreenOverlay from "../fullScreenOverlay/fullScreenOverlay";
import LogoView from "../logoView/logoView";
import MenuDetail from "../menuDetail/menuDetail";

const MenuList = () => {
  return (
    <>
      <FullScreenOverlay />
      <LogoView />
      <MenuDetail />
    </>
  );
};

export default MenuList;
