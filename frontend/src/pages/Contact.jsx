import React from "react";
import ContactForm from "../Components/ContactForm";
import SocialMedia from "../Components/SocialMedia";
import ServiceAccordion from "../Components/ServiceAccordion";

const Contact = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col lg:flex-row">
      <ContactForm />
      <SocialMedia />
    </div>
  );
};

export default Contact;
