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
        <h2 className="sm:text-5xl text-black font-title ml-10">
          What's Next?
        </h2>
      </div>
      <Accordion>
        {/* first tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-pink-100 font-title text-lg">
            01. Send Me a Request
          </AccordionTitle>
          <AccordionContent>
            <p className="text-black font-body uppercase">
              One you've decided which package you want, go to the&nbsp;
              <a href="/Contact" className="text-pink-300 hover:text-pink-600">
                contact&nbsp;
              </a>
              page and fill out the request form
            </p>
            <p className="text-black font-body uppercase mt-2">
              I will reach out to you within 24 hours to schedule your session!
            </p>
          </AccordionContent>
        </AccordionPanel>

        {/* second tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-pink-100 font-title text-lg">
            02. Consultation
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-black font-body uppercase pt-2">
              Once we've scheduled our session, we'll have a consultation to
              discuss the details such as
            </p>
            <ul className="list-disc pl-5 text-black font-body">
              <li>Location </li>
              <li>Photo Inspiration/ Mood Board</li>
              <li>Styling Recommendations (if requested)</li>
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
          <AccordionTitle className="bg-pink-100 font-title text-lg">
            03. Payment
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-black font-body uppercase">
              At the end of our scheduling/ consultation communications, I'll
              send you an invoice for 50% of the session fee via text or e-mail.
              The remaining balance is due immediately following our session
            </p>
            <p className="mb-2 text-black font-body uppercase">
              I take the following forms of payments:
            </p>
            <ul className="list-disc pl-5 text-black font-body">
              <li>Cash </li>
              <li>Venmo</li>
              <li>Zelle</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        {/* fourth tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-pink-100 font-title text-lg">
            04. Sneak Peeks & Gallery Access
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-black font-body uppercase">
              Sneak peeks will be delivered within 48 hours of our session via
              text as a Google Drive link. The full gallery will be delivered
              within 7 days of our session via email with an updated link.
            </p>
            <p className="mb-2 text-black font-body">
            <span className="font-bold">Note: </span> You do <span className="font-bold">NOT</span> need a Google account to view your gallery
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default ServiceAccordion;
