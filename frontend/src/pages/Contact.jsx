import React from "react";
import ContactIntro from "../Components/ContactIntro";
import ContactForm from "../Components/ContactForm";
import FAQSection from "../Components/FAQSection";


const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactIntro/>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-5">
      <ContactForm  />
      <FAQSection/>
      </div>
    </div>
  );
};

export default Contact;
