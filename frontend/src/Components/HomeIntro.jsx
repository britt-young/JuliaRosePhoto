import React from "react";
import { useNavigate } from "react-router-dom";

const HomeIntro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
    console.log("Button clicked");
  };

  return (
    <div className="flex justify-center mb-10 max-w mx-auto">
      <div className="m-5">
        <h1 className="font-title text-3xl sm:text-4xl pb-20">
          Riley Addison Photography
        </h1>
        <p className="font-body md:text-2xl text-md">
          Specializing in senior portraits and family momentos.Specializing in
          senior portraits and family momentos.Specializing in senior portraits
          and family momentos.Specializing in senior portraits and family
          momentos.Specializing in senior portraits and family
          momentos.Specializing in senior portraits and family momentos.
        </p>
        <p className="font-body text-md pb-4">I love photography</p>
        <button
          onClick={handleClick}
          type="button"
          className="font-body text-sm bg-pink-300 rounded-lg px-2 py-1 shadow-md m-4 text-black"
        >
          book with me
        </button>
      </div>
    </div>
  );
};

export default HomeIntro;
