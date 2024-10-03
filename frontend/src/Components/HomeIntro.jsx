import React from 'react'
import { useNavigate } from "react-router-dom";

const HomeIntro = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Gallery");
    console.log("Button clicked");
  };

  return (
    <div>
        <div className="my-auto mx-10">
        <h1 className="text-3xl sm:text-4xl pb-20">Riley Addison Photography</h1>
        <p className="md:text-2xl text-md">Capturing every special moment</p>
        <p className="text-md pb-4">I love photography</p>
        <button
          onClick={handleClick}
          type="button"
          className="text-sm bg-bblue rounded-lg px-2 py-1 shadow-md mt-4 text-black"
        >
          see my portfolio
        </button>
      </div>
    </div>
  )
}

export default HomeIntro