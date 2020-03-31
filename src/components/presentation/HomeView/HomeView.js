import React, { Component } from "react";
import LandingPage from "../landingPage/landingPage";
import LogoView from "../logoView/logoView";
import FullScreenOverlay from "../fullScreenOverlay/fullScreenOverlay";
import OverView from "../overview/overview";
import ChefDetail from "../chefDetail/chefDetail";
import ExperienceView from '../experienceView/experienceView';
import Footer from '../footer/footer';

class HomeView extends Component {
  render() {
    return (
      <>
        <FullScreenOverlay />
        <LandingPage />
        <LogoView />
        <OverView />
        <ChefDetail />
        <ExperienceView />
        <Footer />
      </>
    );
  }
}

export default HomeView;
