import React from "react";
import ServiceCards from "../Components/ServiceCards";
import ServiceAccordion from "../Components/ServiceAccordion";

const Services = () => {

  return (
    <div className="w-full h-100">
      <div>
      <ServiceCards />
      </div>
      <div className="bg-bblue flex flex-row">
      <h1 className="basis-2/5"> WHAT'S NEXT? </h1>
      <div className="basis-3/5 p-10">
      <ServiceAccordion />
      </div>
      </div>
    </div>
  );
};

export default Services;
