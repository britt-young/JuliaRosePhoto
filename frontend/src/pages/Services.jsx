import React from "react";
import ServiceCards from "../Components/ServiceCards";
import ServiceIntro from "../Components/ServiceIntro";

const Services = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <ServiceIntro />
      <ServiceCards />
    </div>
  );
};

export default Services;
