import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Gallery");
    console.log("Button clicked");
  };

  return (
    <div className=" bg-white gap-6 md:columns-2 sm:columns-1 flex">
      <div className="flex-col items-center py-20 px-10">
        {/* <img className="w-50 h-50" src="https://i.imgur.com/1zv3Z9I.jpg" alt="camera" /> */}
        <h1 className="font-display text-3xl pb-5">
          Riley Addison Photography
        </h1>
        <p className="inline-flex">Capturing every special moment</p>
        <p className="inline-flex pb-4">I love photography</p>
        <button
          onClick={handleClick}
          type="button"
          className="block bg-bblue p-1 px-3 text-s font-medium text-white "
        >
          see my portfolio
        </button>
      </div>

      {/* portfolio cards */}
      <div className="flex min-h-[140px] w-full p-4">
        {/* First card */}
        <figure className="relative w-1/3 h-full flex-shrink-0 p-1">
          <img
            className="object-cover object-center w-full h-full"
            src="https://th.bing.com/th/id/OIP.3PoJIO5ehp5U0gPz_HnWWwHaLG?rs=1&pid=ImgDetMain"
            alt="senior portrait"
          />
          <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex flex-col md:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div className="text-center md:text-left">
              <h5 className="font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                Senior Portrait
              </h5>
              <p className="mt-1 font-sans text-base font-normal leading-relaxed text-gray-700">
                Senior Portrait
              </p>
            </div>
            <button
              onClick={handleClick}
              type="button"
              className="bg-poppy p-2 px-4 text-base font-medium text-white rounded"
            >
              see more
            </button>
          </figcaption>
        </figure>

        {/* Second card */}
        <figure className="relative w-1/3 h-full flex-shrink-0 p-1">
          <img
            className="object-cover object-center w-full h-full"
            src="https://th.bing.com/th/id/OIP.3PoJIO5ehp5U0gPz_HnWWwHaLG?rs=1&pid=ImgDetMain"
            alt="senior portrait"
          />
          <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex flex-col md:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div className="text-center md:text-left">
              <h5 className="font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                Senior Portrait
              </h5>
              <p className="mt-1 font-sans text-base font-normal leading-relaxed text-gray-700">
                Senior Portrait
              </p>
            </div>
            <p className="flex items-center mt-2 md:mt-0">
              <button
                onClick={handleClick}
                type="button"
                className="bg-poppy p-2 px-4 text-base font-medium text-white rounded"
              >
                see more
              </button>
            </p>
          </figcaption>
        </figure>

        {/* Third card */}
        <figure className="relative w-1/3 h-full flex-shrink-0 p-1">
          <img
            className="object-cover object-center w-full h-full"
            src="https://th.bing.com/th/id/OIP.3PoJIO5ehp5U0gPz_HnWWwHaLG?rs=1&pid=ImgDetMain"
            alt="senior portrait"
          />
          <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex flex-col md:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
            <div className="text-center md:text-left">
              <h5 className="font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                Senior Portrait
              </h5>
              <p className="mt-1 font-sans text-base font-normal leading-relaxed text-gray-700">
                Senior Portrait
              </p>
            </div>
            <p className="flex items-center mt-2 md:mt-0">
              <button
                onClick={handleClick}
                type="button"
                className="bg-poppy p-2 px-4 text-base font-medium text-white rounded"
              >
                see more
              </button>
            </p>
          </figcaption>
        </figure>
      </div>

      {/*  <div className="w-full h-full flex flex-col text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black sm:shrink-0 sm:grow sm:basis-0 sm:rounded-s-none">
          <a href="#!">
            <img
              className="p-1"
              src="https://www.tumblestonphotography.com/wp-content/uploads/2018/05/high-school-senior-picture-session.jpg"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="pt-1 pl-4">
            <h5 className="mb-0 text-xl font-medium leading-tight">
              Kyya Smith
            </h5>
            <p className="mb-4 text-base">
              Senior Portraits
            </p>
            <p className="mb-4 text-base text-surface/75 dark:text-neutral-300">
              <button
                onClick={handleClick}
                type="button"
                className="bg-bblue p-1 px-3 text-s font-medium text-white"
              >
                see more
              </button>
            </p>
          </div>
        </div> */}
    </div>
  );
};

export default Home;
