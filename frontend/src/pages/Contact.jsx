import React from "react";
import ContactIntro from "../Components/ContactIntro";
import ContactForm from "../Components/ContactForm";
import FAQSection from "../Components/FAQSection";


const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactIntro/>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:gap-20 gap-15 py-20">
      <ContactForm  />
      <FAQSection/>
      </div>
    </div>
  );
};

export default Contact;
