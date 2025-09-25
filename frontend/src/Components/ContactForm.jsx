import { useState } from "react";
import { Field, Label, Checkbox } from "@headlessui/react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};

    // Name
    if (!formData.get("name")?.trim()) newErrors.name = "Name is required.";

    // Email
    if (!formData.get("email")?.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      newErrors.email = "Enter a valid email address.";
    }

    // Phone (must match allowed formats)
    const phone = formData.get("phone-number")?.trim();
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (
      !/^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/.test(phone)
    ) {
      newErrors.phone = "Enter a valid phone number.";
    }

    // Session type
    if (formData.get("selectedPackage") === "default")
      newErrors.session = "Please select a session type.";

    // Privacy policy
    if (!enabled) newErrors.privacy = "You must agree to the privacy policy.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors and try again.");
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await fetch("/", {
        method: "POST",
        body: new URLSearchParams(data).toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      toast.success("Message sent successfully! I'll be in touch soon.");
      form.reset();
      setEnabled(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:grid-cols-2 grid grid-cols-1 justify-center items-center gap-6 w-full">
      <Toaster position="top-right" />

      <div>
        <img
          src="../images/contact.jpg"
          alt="owner"
          className="object-cover w-full h-full aspect-auto lg:p-0 p-5 rounded-lg shadow-md"
        />
      </div>

      <div className="w-full h-fit bg-white shadow-md rounded-md">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="h-full p-5"
        >
          {/* Netlify hidden inputs */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <div className="flex flex-col gap-y-6 grid grid-cols-2 gap-x-8 gap-y-0 lg:gap-y-6">
            {/* Name Input */}
            <div className="col-span-2 mb-0">
              <label htmlFor="name" className="block text-gray-900">
                Your Name:
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Julia Rose"
                  className={`block w-full bg-gray-50 px-3.5 py-3.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-main ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>
            </div>

            {/* Email Input */}
            <div className="col-span-2 mb-0">
              <label htmlFor="email" className="block text-gray-900">
                Email Address:
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="JuliaRose@email.com"
                  className={`block w-full bg-gray-50 px-3.5 py-3.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-main ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="col-span-2 mb-0">
              <label htmlFor="phone-number" className="block text-gray-900">
                Phone Number:
              </label>
              <div className="mt-1">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className={`block w-full bg-gray-50 px-3.5 py-3.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-main ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Session Selection */}
            <div className="col-span-2 mb-0">
              <label className="inline-block text-gray-900">
                What type of session are you interested in?
              </label>
              <div>
                <select
                  name="selectedPackage"
                  defaultValue="default"
                  className={`mt-1 px-3.5 py-1 bg-gray-50 text-base font-normal text-gray-600 outline-1 outline-gray-300 ${
                    errors.session ? "border-red-500" : ""
                  }`}
                >
                  <option value="default" disabled>
                    Select a Session Type
                  </option>
                  <option value="senior">Senior Portraits</option>
                  <option value="solo">Solo Session</option>
                  <option value="group">Couples & Groups</option>
                  <option value="family">Family Session</option>
                  <option value="event">Special Events</option>
                  <option value="pet">Pet Portrait</option>
                </select>
                {errors.session && (
                  <p className="text-red-600 text-sm mt-1">{errors.session}</p>
                )}
              </div>
            </div>

            {/* Privacy Checkbox */}
            <Field className="flex gap-x-4 col-span-2 mb-0">
              <div className="flex h-6 items-center">
                <Checkbox
                  checked={enabled}
                  onChange={setEnabled}
                  className="group block size-4 border bg-white data-[checked]:bg-main"
                >
                  <svg
                    className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Checkbox>
              </div>
              <Label className="text-sm/6 text-gray-600">
                By selecting this, you agree to our
                <Link to="/privacy" className="text-blue-600 underline ms-1">
                  privacy policy
                </Link>
              </Label>
            </Field>
            {errors.privacy && (
              <p className="text-red-600 text-sm mt-1 col-span-2">
                {errors.privacy}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              disabled={loading}
              className={`btn-grad flex items-center justify-center gap-2 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
