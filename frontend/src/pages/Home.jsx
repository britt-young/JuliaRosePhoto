import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Gallery");
    console.log("Button clicked");
  };

  return (
    <div className=" bg-white gap-6 flex lg:flex-row flex-col">
      <div className="flex-col items-center py-20 px-10">
        {/* <img className="w-50 h-50" src="https://i.imgur.com/1zv3Z9I.jpg" alt="camera" /> */}
        <h1 className="font-display md:text-6xl text-4xl pb-5">
          Riley Addison Photography
        </h1>
        <p className="md:text-3xl text-2xl inline-flex">
          Capturing every special moment
        </p>
        <p className="text-1xl flex pb-4">I love photography</p>
        <button
          onClick={handleClick}
          type="button"
          className="text-1xl block bg-bblue rounded-lg px-2 py-1 shadow-md mt-4 text-black"
        >
          see my portfolio
        </button>
      </div>

      {/* portfolio cards */}
      <div className="flex min-h-[140px] w-full p-4">
        {/* First card */}
        <figure className="relative w-1/3 h-full flex p-1">
          <img
            className="object-cover object-center .max-w-full .h-auto flex-shrink"
            src="https://cindyswansonphotography.com/wp-content/uploads/2019/01/10-8374-post/senior_portraits_in_dallas_for_guys_3.jpg"
            alt="senior portrait"
          />
          <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
            <div className="text-center md:text-left">
              <h5 className="font-sans lg:text-xl text-base font-semibold leading-snug tracking-normal text-blue-gray-900 hidden sm:flex">
                Senior Portrait
              </h5>
              <p className="mt-0 font-sans md:text-base text-sm font-normal leading-relaxed text-gray-700 hidden sm:flex">
                James Craig
              </p>
              <button
                onClick={handleClick}
                type="button"
                className="bg-white mt-1 py-1 px-3 md:text-base text-sm font-medium text-black rounded"
              >
                see more
              </button>
            </div>
          </figcaption>
        </figure>

        {/* Second card */}
        <figure className="relative w-1/3 h-full flex p-1">
          <img
            className="object-cover object-center .max-w-full .h-auto flex-shrink"
            src="https://www.mintarrow.com/wp-content/uploads/2021/12/RESIZED-Family-04278-1097x1536.jpg"
            alt="family portrait"
          />
          <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
            <div className="text-center md:text-left">
              <h5 className="font-sans lg:text-xl text-base font-semibold leading-snug tracking-normal text-blue-gray-900 hidden sm:flex">
                Family Portrait
              </h5>
              <p className="mt-0 font-sans md:text-base text-sm font-normal leading-relaxed text-gray-700 hidden sm:flex">
                Johnson Family
              </p>
              <button
                onClick={handleClick}
                type="button"
                className="bg-white mt-1 py-1 px-3 md:text-base text-sm font-medium text-black rounded"
              >
                see more
              </button>
            </div>
          </figcaption>
        </figure>

        {/* Third card */}
        <figure className="relative w-1/3 h-full flex p-1">
          <img
            className="object-cover object-center .max-w-full .h-auto flex-shrink"
            src="https://th.bing.com/th/id/R.b3a33c7d7b01415e22e1ac1a010009eb?rik=dRK0X0qJaNfiBQ&pid=ImgRaw&r=0"
            alt="senior portrait"
          />
          <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
            <div className="text-center md:text-left">
              <h5 className="font-sans lg:text-xl text-base font-semibold leading-snug tracking-normal text-blue-gray-900 hidden sm:flex">
                Senior Portrait
              </h5>
              <p className="mt-0 font-sans md:text-base text-sm font-normal leading-relaxed text-gray-700 hidden sm:flex">
                Alex Bush
              </p>
              <button
                onClick={handleClick}
                type="button"
                className="bg-white mt-1 py-1 px-3 md:text-base text-sm font-medium text-black rounded"
              >
                see more
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Home;
