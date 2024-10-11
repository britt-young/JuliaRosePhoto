import React from "react";
import { useNavigate } from "react-router-dom";

const HomeIntro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
    console.log("Button clicked");
  };

  return (
    <div className="mb-5 max-w mx-auto">
      <h1 className="font-title sm:text-4xl ">
        Riley Addison Photography
      </h1>
      <div className="flex flex-col items-center m-5">
        <p className="font-body text-md pb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum"</p>
        <button
          onClick={handleClick}
          type="button"
          className="font-body text-sm bg-pink-300 rounded-lg px-2 py-1 shadow-md m-2 text-black"
        >
          check out my recent work
        </button>
      </div>
    </div>
  );
};

export default HomeIntro;
