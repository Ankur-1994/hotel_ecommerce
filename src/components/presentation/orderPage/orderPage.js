import React from "react";
import FullScreenOverlay from "../fullScreenOverlay/fullScreenOverlay";
import LogoView from "../logoView/logoView";
import OrderDetail from "../../container/orderDetail/orderDetail";

const orderPage = () => {
  return (
    <>
      <FullScreenOverlay />
      <LogoView />
      <OrderDetail />
    </>
  );
};

export default orderPage;
