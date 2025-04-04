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
    </div>
  );
};

export default Services;
