import React from "react";
import ContactIntro from "../Components/ContactIntro";
import ContactForm from "../Components/ContactForm";
import SocialMedia from "../Components/SocialMedia";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ContactIntro/>
      
      <div className="flex flex-col items-center justify-center lg:gap-10 p-5 lg:p-25">
     
      <ContactForm  />
      </div>
    </div>
  );
};

export default Contact;
