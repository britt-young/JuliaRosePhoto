import React from "react";
import ContactForm from "../Components/ContactForm";
import SocialMedia from "../Components/SocialMedia";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <ContactForm />
      <SocialMedia />
    </div>
  );
};
    

export default Contact;
