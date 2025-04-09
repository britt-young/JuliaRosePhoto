import React from "react";
import { useNavigate } from "react-router-dom";

const PortfolioCards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Gallery");
    console.log("Button clicked");
  };

  return (
    <div className="bg-pink-50 py-10">
      <div className="text-center">
      <h2 className="text-base/7 font-semibold text-alt uppercase tracking-tighter">
             my portfolio
            </h2>
            <p className="mt-0 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Put title here
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
      </div>
      <div className="max-w-7xl mx-auto bg-none grid grid-cols-1 lg:grid-cols-4 gap-1 m-10">
        
      </div>
    </div>
  );
};

export default PortfolioCards;
