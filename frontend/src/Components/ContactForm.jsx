import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // state to track which checkbox is selected
  // default selected session (could be "seniors", "couples", or "family")
  const [selectedSession, setSelectedSession] = useState("seniors");

  // update the selected session when a checkbox is clicked
  const handleChange = (session) => {
    setSelectedSession(session);
  };

  const form = useRef();
  const [formStatus, setFormStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    // basic validation
    const formData = new FormData(form.current);
    if (
      !formData.get("user_name") ||
      !formData.get("user_email") ||
      !formData.get("message")
    ) {
      setFormStatus("All fields are required.");
      return;
    }

    // replace with owner emailjs.js infomation
    try {
      const response = await emailjs.sendForm(
        "service_53ecpnp",
        "template_lkmqk12",
        form.current,
        { publicKey: "G_2EUKwm4DuLTm0pd" }
      );
      console.log("Message sent successfully", response);
      setFormStatus("Message Sent!");
      // reset the form after a successful submission
      form.current.reset();
    } catch (error) {
      console.error("Message sending failed", error.text);
      setFormStatus("Message sending failed. Please try again.");
    }
  };

  return (
    <div className="w-1/2 m-5 p-5">
      <h1 className="font-title text-5xl flex justify-center">Send me a request!</h1>
      <div className="mx-5 p-5 shadow-lg">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full gap-4 font-body"
        >
          {/* <label htmlFor="user_name">Name</label> */}
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            id="user_name"
            className="border p-2"
          />

          {/* <label htmlFor="user_email">Email</label> */}
          <input
            type="email"
            placeholder="E-mail"
            name="user_email"
            id="user_email"
            className="border p-2"
          />

          {/* <label htmlFor="message">Message</label> */}
          <textarea
            placeholder="Type your message here"
            name="message"
            id="message"
            className="border py-2"
            rows="10"
          />

          {/* session type selctor */}
          <div className="flex flex-col gap-4 px-10">
            {/* Seniors */}
            <div className="inline-flex items-start">
              <label
                className="flex items-start cursor-pointer relative"
                htmlFor="check-seniors"
              >
                {/* Only checked if "seniors" is selected & set to "seniors" when clicked*/}
                <input
                  type="checkbox"
                  checked={selectedSession === "seniors"}
                  onChange={() => handleChange("seniors")}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-pink-600 checked:border-pink-600"
                  id="check-seniors"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="cursor-pointer ml-2 text-slate-600 text-sm"
                htmlFor="check-seniors"
              >
                <div>
                  <p className="font-bold uppercase">Seniors/ Individual</p>
                  <p className="text-slate-500">1 person session</p>
                </div>
              </label>
            </div>

            {/* Couples */}
            <div className="inline-flex items-start">
              <label
                className="flex items-start cursor-pointer relative"
                htmlFor="check-couples"
              >
                {/* Only checked if "couples" is selected & set to "couples" when clicked*/}
                <input
                  type="checkbox"
                  checked={selectedSession === "couples"}
                  onChange={() => handleChange("couples")}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-pink-600 checked:border-pink-600"
                  id="check-couples"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="cursor-pointer ml-2 text-slate-600 text-sm"
                htmlFor="check-couples"
              >
                <div>
                  <p className="font-bold uppercase">Couples/ Group</p>
                  <p className="text-slate-500">2-10 person session</p>
                </div>
              </label>
            </div>

            {/* Family */}
            <div className="inline-flex items-start">
              <label
                className="flex items-start cursor-pointer relative"
                htmlFor="check-family"
              >
                {/* Only checked if "family" is selected & set to "family" when clicked*/}
                <input
                  type="checkbox"
                  checked={selectedSession === "family"}
                  onChange={() => handleChange("family")}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-pink-600 checked:border-pink-600"
                  id="check-family"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="cursor-pointer ml-2 text-slate-600 text-sm"
                htmlFor="check-family"
              >
                <div>
                  <p className="font-bold uppercase">Family/ Pets</p>
                  <p className="text-slate-500">
                    3-10 person session
                  </p>
                </div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-pink-200 text-white p-2 rounded hover:bg-pink-300"
          >
            Send
          </button>

          {formStatus && (
            <div
              className={`mt-4 ${
                formStatus.includes("failed") ||
                formStatus === "All fields are required."
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {formStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
