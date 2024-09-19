import React from "react";
import { Collapse, initTWE } from "tw-elements";
import ServiceCards from "../Components/ServiceCards";
import ServiceAccordion from "../Components/ServiceAccordion";

const Services = () => {
  initTWE({ Collapse });

  return (
    <div className="w-full h-100">
      <div>
      <ServiceCards />
      </div>
      <div className="bg-bblue grid grid-cols-2">
      <h1 className="mx-auto my-auto"> WHAT'S NEXT? </h1>
      <ServiceAccordion />
      </div>
    </div>
  );
};

export default Services;
