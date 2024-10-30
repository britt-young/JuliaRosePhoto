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
        <span className="flex items-center flex-col font-title sm:text-5xl mt-10">
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
            onClick={handleClick}
            type="button"
            className="font-body underline uppercase px-2 py-1 text-pink-300 hover:text-black"
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
