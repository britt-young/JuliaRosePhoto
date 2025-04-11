import React, { useState } from "react";
import { Field, Label, Checkbox } from "@headlessui/react";
import { Link } from "react-router-dom";

//import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-full">
      <form action="#" method="POST" className="h-full p-5">
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
                autoComplete="given-name"
                className="block w-full bg-gray-50 px-3.5 py-3.5 text-base text-gray-900 outline-1 -outline-offset-1 dark:outline-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-alt"
              />
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
                autoComplete="email"
                className="block w-full bg-gray-50 px-3.5 py-3.5 text-base text-gray-900 outline-1 -outline-offset-1 dark:outline-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-alt"
              />
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
                className="block w-full bg-gray-50 px-3.5 py-3.5 text-base text-gray-900 outline-1 -outline-offset-1 dark:outline-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-alt"
              />
            </div>
          </div>

          {/* Pricing Selection */}
          <div className="col-span-2 mb-0">
            <label className="inline-block text-gray-900">
              What type of session are you interested in?
            </label>
            <div>
              <select
                name="selectedPackage"
                defaultValue="default"
                className="bg-none mt-1 px-3.5 py-1 bg-gray-50 text-base font-normal text-gray-400 outline-1 dark:outline-gray-900 outline-gray-300"
              >
                <option value="default" disabled>
                  Select a Session Type
                </option>
                <option value="senior">Senior Portraits</option>
                <option value="solo">Solo Session</option>
                <option value="group">Couples & Groups</option>
                <option value="family">Family Session</option>
                <option value="event">Special Events</option>
              </select>
            </div>
          </div>
          {/* Privacy Input */}
          <Field className="flex gap-x-4 col-span-2 mb-0">
            <div className="flex h-6 items-center">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group block size-4 border bg-white data-[checked]:bg-alt dark:bg-white/15 dark:border-white/15"
              >
                {/* Checkmark icon */}
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
            <Label className="text-sm/6 text-gray-600 dark:text-white">
              By selecting this, you agree to our
              <Link
                to="/privacy"
                className="text-blue-600 dark:text-alt underline ms-1"
              >
                privacy policy
              </Link>
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block min-w-fit bg-dark rounded-md px-3 py-1 text-center text-white cursor-pointer transition duration-200 ease-in-out hover:bg-dark/60"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
