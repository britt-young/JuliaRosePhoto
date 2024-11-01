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
      <h1 className="flex flex-col items-center font-title sm:text-7xl m-10">
        Riley Addison Photography
      </h1>
      <div className="flex flex-col items-center m-5">
        <p className="font-body text-md pb-4 uppercase">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum"
        </p>

        {/* <button
          onClick={handleClick}
          type="button"
          className="font-body underline uppercase px-2 py-1 m-2 text-dblue hover:text-black"
        >
          Inquire Now
        </button> */}

        <a
          class="group relative inline-block focus:outline-none focus:ring"
          href="/Contact"
        >
          <span class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-dblue transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span class="relative inline-block border-2 border-current px-8 py-3 text-sm font-body uppercase tracking-widest text-black group-active:text-opacity-75">
            Inquire Now
          </span>
        </a>
      </div>
    </div>
  );
};

export default HomeIntro;
