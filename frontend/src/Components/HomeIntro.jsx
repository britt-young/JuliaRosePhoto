import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/img/1.png";
// import vid from "../assets/vid/alt-video.mp4";

const HomeIntro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
    console.log("Button clicked");
  };

  return (
    <div className="relative h-screen mx-auto flex flex-col items-center justify-center text-center bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Video background */}
      {/* <video
        src={vid}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      /> */}
      
      <h1 className="flex flex-col items-center font-title sm:text-5xl lg:text-7xl mb-5 z-10">
        Julia Rose Photography
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center z-10">
        <p className="font-body lg:text-md pb-4 uppercase">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ratione."
        </p>
        <button
          onClick={handleClick}
        >
          Book with me
        </button>
      </div>
    </div>
  );
};

export default HomeIntro;
