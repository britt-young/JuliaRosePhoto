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
        <h2 className="lg:text-4xl sm:text-xl text-black font-title ml-10">
          Everything you need to know (FAQs):
        </h2>
      </div>
      <Accordion>
        {/* first tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-lilac font-body text-lg text-black hover:bg-dblue">
            01. Send Me a Request
          </AccordionTitle>
          <AccordionContent>
            <p className="text-black sm:text-sm lg:text-base font-body uppercase mb-4">
              One you've decided which package you want, go to the&nbsp;
              <a
                href="/Contact"
                className="text-lilac hover:text-dblue underline"
              >
                contact&nbsp;
              </a>
              page and fill out the request form
            </p>
            <p className="text-black font-body uppercase mt-2 sm:text-sm lg:text-base">
              I will reach out to you within 24 hours to schedule your session!
            </p>
          </AccordionContent>
        </AccordionPanel>

        {/* second tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-lilac/80 font-body text-lg text-black hover:bg-dblue/80">
            02. Consultation
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-4 text-black font-body uppercase pt-2 sm:text-sm lg:text-base">
              Once we've scheduled our session, we'll have a consultation to
              discuss the details such as
            </p>
            <ul className="list-disc pl-5 text-black font-body sm:text-sm lg:text-base">
              <li>Location </li>
              <li>Photo Inspiration/ Mood Board</li>
              <li>Styling Recommendations (if requested)</li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-lilac hover:text-dblue"
                >
                  Link for other shiz??
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        {/* third tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-lilac/70 font-body text-lg text-black hover:bg-dblue/70">
            03. Payment
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-4 text-black font-body uppercase sm:text-sm lg:text-base">
              At the end of our scheduling/ consultation communications, I'll
              send you an invoice for 50% of the session fee via text or e-mail.
              The remaining balance is due immediately following our session
            </p>
            <p className="text-black font-body sm:text-sm lg:text-base">
              I take the following forms of payments:
            </p>
            <ul className="list-disc pl-5 text-black font-body sm:text-sm lg:text-base">
              <li>Cash </li>
              <li>Venmo</li>
              <li>Zelle</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>

        {/* fourth tab */}
        <AccordionPanel>
          <AccordionTitle className="bg-lilac/60 font-body text-lg text-black hover:bg-dblue/60">
            04. Sneak Peeks & Gallery Access
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-4 text-black font-body uppercase sm:text-sm lg:text-base">
              Sneak peeks will be delivered within{" "}
              <span className="font-bold">48</span> hours of our session via
              text as a Google Drive link. The full gallery will be delivered
              within <span className="font-bold">7</span> days of our session
              via email with an updated link.
            </p>
            <p className="mb-2 text-black font-body sm:text-sm lg:text-base">
              <span className="font-bold">Note: </span> You do{" "}
              <span className="font-bold">NOT</span> need a Google account to
              view your gallery
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default ServiceAccordion;
