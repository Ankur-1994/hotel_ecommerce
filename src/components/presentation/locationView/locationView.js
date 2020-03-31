import React from "react";
import FullScreenOverlay from '../fullScreenOverlay/fullScreenOverlay';
import LogoView from '../logoView/logoView';
import LocationDetail from '../locationDetail/locationDetail';

const LocationView = () => {
  return (
      <>
      <FullScreenOverlay />
      <LogoView />
      <LocationDetail />
      </>
  )
};

export default LocationView;
