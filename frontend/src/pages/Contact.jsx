import ContactIntro from "../Components/ContactIntro";
import ContactForm from "../Components/ContactForm";
import FAQSection from "../Components/FAQSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ContactIntro />

      <div className="max-w-7xl mx-auto flex flex-col items-center lg:gap-20 gap-15 py-20">
        <FAQSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
