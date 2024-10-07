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
      <Accordion>
        {/* first tab */}
        <AccordionPanel>
          <AccordionTitle>01. Request Form</AccordionTitle>
          <AccordionContent>
            <p className="text-black">
              Go to the&nbsp;
              <a
                href="/Contact"
                className="text-darkRose hover:underline"
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
          <AccordionTitle>02. Consultation</AccordionTitle>
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
                  className="text-darkRose hover:underline"
                >
                  Link for other shiz
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        {/* third tab */}
        <AccordionPanel>
          <AccordionTitle>03. Payment</AccordionTitle>
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
      </Accordion>
    </div>
  );
};

export default ServiceAccordion;
