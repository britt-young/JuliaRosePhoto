import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const ServiceAccordion = () => {
  return (
    <div>
      <div>
        <h2 className="text-md text-black font-bold ml-10">
          HOW IT WORKS:
        </h2>
      </div>
      <Accordion>
        {/* first tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-pink-100 text-black">01. Request Form</AccordionTitle>
          <AccordionContent>
            <p className="text-black">
              Go to the&nbsp;
              <a
                href="/Contact"
                className="text-pink-300 hover:text-pink-600"
              >
                contact&nbsp;
              </a>
              page and fill out the form with your request. I will get back to
              you within 24 hours to schedule your session!
            </p>
          </AccordionContent>
        </AccordionPanel>

        {/* second tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-pink-200 text-black">02. Consultation</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-black">
              I'll reach out to you to discuss your vision for the session and
              different location options
            </p>
            <p className="mb-2 text-black">
            Common questions to think about are:
            </p>
            <ul className="list-disc pl-5 text-black">
              <li>Location </li>
              <li>Session Theme</li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-pink-300 hover:text-pink-600"
                >
                  Link for other shiz
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        {/* third tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-pink-300 text-black">03. Payment</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-black">
              Once we reserve your session date & time, I'll send you an invoice for 50% of the session fee. The remaining balance is due the day of the session.
            </p>
            <p className="mb-2 text-black">
              I take the following forms of payments:
            </p>
            <ul className="list-disc pl-5 text-black">
              <li>Cash</li>
              <li>Venmo</li>
              <li>Zelle</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>

{/* fourth tab */}
<AccordionPanel>
          <AccordionTitle className="bg-pink-400 text-black">04. Sneak Peeks & Gallery Access</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-black">
              Sneak peeks will be delivered within 48 hours of our session via text as a Google Drive link and the full gallery will be delivered within 7 days via email with an updated link.
            </p>
            <p className="mb-2 text-black font-semibold">
              Note: You DO NOT need a Google account to view the gallery.
            </p>
            
          </AccordionContent>
        </AccordionPanel>

      </Accordion>
    </div>
  );
};

export default ServiceAccordion;
