import React from "react";
import ServiceCards from "../Components/ServiceCards";

import { useNavigate } from "react-router-dom";
import ServiceIntro from "../Components/ServiceIntro";

const Services = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
    console.log("Button clicked");
  };

  return (
    <div className="min-h-screen">
      <ServiceIntro />
      <ServiceCards />
    </div>
  );
};

export default Services;
