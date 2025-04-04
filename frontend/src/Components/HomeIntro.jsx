import React from "react";
import { useNavigate } from "react-router-dom";
// import peach from "../assets/icons/peach.png";

const HomeIntro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
    console.log("Button clicked");
  };

  return (
    <div className="h-screen bg-pink-50 mx-auto flex flex-col items-center justify-center text-center">
      <h1 className="flex flex-col items-center font-title sm:text-5xl lg:text-7xl mb-5">
        Riley Addison Photography
      </h1>
      {/* <h3 className="flex justify-center font-body text-black text-md uppercase">
            <div className="mb-2 content-center">
              <span>
                <img src={peach} alt="peach" className="h-4 w-4" />
              </span>
            </div>
            Atlanta based
          </h3> */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <p className="font-body lg:text-md pb-4 uppercase">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ratione.
        </p>
        <button className="bg-alt rounded-sm py-1 px-4 items-center text-white cursor-pointer hover:bg-alt/80" onClick={handleClick}>Inquire Now</button>
      </div>
    </div>
  );
};

export default HomeIntro;
