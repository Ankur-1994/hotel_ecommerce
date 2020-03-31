import React from "react";
import FullScreenOverlay from "../fullScreenOverlay/fullScreenOverlay";
import LogoView from "../logoView/logoView";
import ContactForm from "../../container/contactForm/contactForm";

const ContactPage = () => {
  return (
    <>
      <FullScreenOverlay />
      <LogoView />
      <ContactForm />
    </>
  );
};

export default ContactPage;
