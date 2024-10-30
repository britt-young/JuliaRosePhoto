import React from "react";
import PortfolioCards from "../Components/PortfolioCards";
import HomeIntro from "../Components/HomeIntro";
import AboutMe from "../Components/AboutMe";

const Home = () => {
  return (
    <div>
      <div className="flex items-center flex-col flex-wrap lg:flex-nowrap mx-5 my-10">
        <div className="w-full">
          <HomeIntro />
        </div>
      </div>
      <div className="">
        <AboutMe />
      </div>
      <div className="">
        <h2>
          <span className="flex items-center flex-col font-title sm:text-5xl mt-10">Session Galleries</span>
        </h2>
        <PortfolioCards />
      </div>
    </div>
  );
};

export default Home;
