import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import HomeView from "./components/presentation/HomeView/HomeView";
import LocationView from "./components/presentation/locationView/locationView";
import MenuList from "./components/presentation/menuList/menuList";
import IntroductionPage from "./components/presentation/introductionPage/introductionPage";
import ContactPage from "./components/presentation/contactPage/contactPage";
import StoryPage from "./components/presentation/storyPage/storyPage";
import orderPage from "./components/presentation/orderPage/orderPage";
import RegisterView from "./components/presentation/registerView/registerView";
import UserDetail from "./components/presentation/userDetail/userDetail";
import ConfirmationPage from "./components/presentation/confirmationPage/confirmationPage";
import "./styles/index.css";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={HomeView} />
    <Route path="/location" component={LocationView} />
    <Route path="/menu" component={MenuList} />
    <Route path="/intro" component={IntroductionPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/story" component={StoryPage} />
    <Route path="/order" component={orderPage} />
    <Route path="/register" component={RegisterView} />
    <Route path="/user" component={UserDetail} />
    <Route path="/confirm" component={ConfirmationPage} />
  </Router>,
  document.getElementById("root")
);
