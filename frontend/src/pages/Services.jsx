import React from "react";

import ServiceCards from "../Components/ServiceCards";
import ServiceAccordion from "../Components/ServiceAccordion";
import { useNavigate } from "react-router-dom";
import ServiceIntro from "../Components/ServiceIntro";

const Services = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
    console.log("Button clicked");
  };

  return (
    <div>
      <ServiceIntro />
      <ServiceCards />
      <div className="bg-white flex flex-row h-auto">
        <div className="basis-2/5 flex flex-col items-center justify-center">
          <h1 className=""></h1>
          <button
            className="group relative inline-block focus:outline-none focus:ring"
            onClick={handleClick}
          >
            Inquire Now
          </button>
        </div>
        <div className="basis-3/5 p-10">
          <ServiceAccordion />
        </div>
      </div>
    </div>
  );
};

export default Services;
