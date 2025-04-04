import React from "react";
import ContactIntro from "../Components/ContactIntro";
import ContactForm from "../Components/ContactForm";
import SocialMedia from "../Components/SocialMedia";
import ServiceAccordion from "../Components/ServiceAccordion";


const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ContactIntro/>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-10 p-5 lg:p-20">
      <ContactForm />
      <SocialMedia />
      </div>
    </div>
  );
};

export default Contact;
