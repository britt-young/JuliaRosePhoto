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
    <div className="mb-5 max-w mx-auto">
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
      <div className="flex flex-col items-center m-5">
        <p className="font-body lg:text-md pb-4 uppercase">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum"
        </p>

        <button
          className="group relative inline-block focus:outline-none focus:ring"
          onClick={handleClick}
        >
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-dblue transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="relative inline-block border-2 border-grey px-8 py-3 text-sm font-body font-semibold uppercase tracking-widest text-black group-active:text-opacity-75">
            Inquire Now
          </span>
        </button>

      </div>
    </div>
  );
};

export default HomeIntro;
