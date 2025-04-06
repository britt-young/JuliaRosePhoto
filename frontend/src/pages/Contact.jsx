import React from "react";
import ContactIntro from "../Components/ContactIntro";
import ContactForm from "../Components/ContactForm";


const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ContactIntro/>
      <ContactForm  />
    </div>
  );
};

export default Contact;
