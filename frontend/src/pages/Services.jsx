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
      <div>
        <ServiceCards />
      </div>
      <div className="bg-white flex flex-row h-auto">
        <div className="basis-2/5 flex flex-col items-center justify-center">
          <h1 className="pt-10 font-bold">BOOK A SESSION WITH ME!</h1>
          <button
            onClick={handleClick}
            type="button"
            className="text-sm bg-pink-300 rounded-lg px-2 py-1 shadow-md text-black"
          >
            schedule now
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
