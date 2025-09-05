import ContactIntro from "../Components/ContactIntro";
import ContactForm from "../Components/ContactForm";
import FAQSection from "../Components/FAQSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ContactIntro />

      <div className="max-w-7xl mx-auto flex flex-col items-center py-15 ">
        <FAQSection />
        <h4 className="pt-10 mt-10 font-bold">Have questions or want to schedule a session?</h4>
        <p className="text-center mb-10 my-1">
          Fill out the form below and I'll get back to you as soon as possible!
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
