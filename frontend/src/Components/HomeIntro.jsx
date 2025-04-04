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
      <h1 className="flex flex-col items-center font-title sm:text-5xl lg:text-7xl mb-10">
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
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-4">
        <p className="font-body lg:text-md pb-4 uppercase">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum"
        </p>

        <button className="bg-alt rounded-sm py-1 px-4 items-center text-white cursor-pointer hover:bg-alt/80" onClick={handleClick}>Inquire Now</button>
      </div>
    </div>
  );
};

export default HomeIntro;
