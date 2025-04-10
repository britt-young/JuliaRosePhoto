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
          portfolio
        </h2>
        <p className="mt-0 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Check out my recent work
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
      </div>
      {/* Images with overlay */}
      <div className="max-w-7xl mx-auto bg-none grid grid-cols-1 lg:grid-cols-3 gap-6 m-10">
        {/* first image card */}
        <div className="relative ">
          <picture className="block">
            <img
              src="https://plus.unsplash.com/premium_photo-1664888532123-38c6b1ade362?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="portrait"
              className="object-cover w-full"
            />
          </picture>
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={handleClick}>
            <div className="bg-none text-white text-center uppercase">
              <h3>wellness brand</h3>
              <p>solo package</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-10 hover:bg-white hover:opacity-5 transition-bg duration-300 ease-in-out flex items-center justify-center"></div>
          </div>
        </div>
        {/* second image card */}
        <div className="relative ">
          <picture className="block">
            <img
              src="https://images.unsplash.com/photo-1526277015674-026cb84653ec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              className="object-cover w-full"
            />
          </picture>
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={handleClick}>
            <div className="bg-none text-white text-center uppercase">
              <h3>the rockwells</h3>
              <p>family package</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-10 hover:bg-white hover:opacity-5 transition-bg duration-300 ease-in-out flex items-center justify-center"></div>
          </div>
        </div>
        {/* third image card */}
        <div className="relative ">
          <picture className="block">
            <img
              src="https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              className="object-cover w-full"
            />
          </picture>
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={handleClick}>
            <div className="bg-none text-white text-center uppercase">
              <h3>smith wedding</h3>
              <p>event package</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-10 hover:bg-white hover:opacity-5 transition-bg duration-300 ease-in-out flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;
