import React from "react";
import { useNavigate } from "react-router-dom";

const PortfolioCards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Gallery");
    console.log("Button clicked");
  };

  return (
    <div className="bg-white h-auto w-full gap-2 grid grid-cols-1 lg:grid-cols-3">
      {/* portfolio cards */}

      {/* First card */}
      <figure className="relative w-full h-full flex p-1 ">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink rounded-xl"
          src="https://cindyswansonphotography.com/wp-content/uploads/2019/01/10-8374-post/senior_portraits_in_dallas_for_guys_3.jpg"
          alt="senior portrait"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <h5 className="font-body lg:text-xl text-base font-semibold leading-snug tracking-normal text-blue-gray-900 hidden sm:flex">
              Senior Portrait
            </h5>
            <p className="mt-0 font-body md:text-base text-sm font-normal leading-relaxed text-gray-700 hidden sm:flex">
              Jordan Ryan
            </p>
            <button
              onClick={handleClick}
              type="button"
              className="bg-white mt-1 py-1 px-3 font-body md:text-base text-sm shadow-md text-black rounded-lg"
            >
              see more
            </button>
          </div>
        </figcaption>
      </figure>

      {/* Second card */}
      <figure className="relative w-full h-full flex p-1">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink rounded-xl"
          src="https://www.mintarrow.com/wp-content/uploads/2021/12/RESIZED-Family-04278-1097x1536.jpg"
          alt="family portrait"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <h5 className="font-body lg:text-xl text-base font-semibold leading-snug tracking-normal text-blue-gray-900 hidden sm:flex">
              Family Portrait
            </h5>
            <p className="mt-0 font-body md:text-base text-sm font-normal leading-relaxed text-gray-700 hidden sm:flex">
              Johnson Family
            </p>
            <button
              onClick={handleClick}
              type="button"
              className="bg-white mt-1 py-1 px-3 font-body md:text-base text-sm shadow-md text-black rounded-lg"
            >
              see more
            </button>
          </div>
        </figcaption>
      </figure>

      {/* Third card */}
      <figure className="relative w-full h-full flex p-1">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink rounded-xl"
          src="https://th.bing.com/th/id/R.b3a33c7d7b01415e22e1ac1a010009eb?rik=dRK0X0qJaNfiBQ&pid=ImgRaw&r=0"
          alt="senior portrait"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <h5 className="font-body lg:text-xl text-base font-semibold leading-snug tracking-normal text-blue-gray-900 hidden sm:flex">
              Senior Portrait
            </h5>
            <p className="mt-0 font-body md:text-base text-sm font-normal leading-relaxed text-gray-700 hidden sm:flex">
              Alex Bush
            </p>
            <button
              onClick={handleClick}
              type="button"
              className="bg-white mt-1 py-1 px-3 font-body md:text-base text-sm shadow-md text-black rounded-lg"
            >
              see more
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default PortfolioCards;
