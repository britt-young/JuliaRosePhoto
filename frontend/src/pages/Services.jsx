import React from "react";
import ServiceCards from "../Components/ServiceCards";
import ServiceAccordion from "../Components/ServiceAccordion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
    console.log("Button clicked");
  };

  return (
    <div className="w-full">
      <h2>
        <span className="flex items-center flex-col text-black font-title sm:text-5xl mt-10">
          Signature Packages
        </span>
      </h2>
      <div>
        <ServiceCards />
      </div>
      <div className="bg-white flex flex-row h-auto">
        <div className="basis-2/5 flex flex-col items-center justify-center">
          <h1 className=""></h1>
          <button
            className="group relative inline-block focus:outline-none focus:ring"
            onClick={handleClick}
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-dblue transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-body font-semibold uppercase tracking-widest text-black group-active:text-opacity-75">
              Inquire Now
            </span>
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
