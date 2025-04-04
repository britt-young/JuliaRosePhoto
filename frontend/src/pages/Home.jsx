import React from "react";
import PortfolioCards from "../Components/PortfolioCards";
import HomeIntro from "../Components/HomeIntro";
import AboutMe from "../Components/AboutMe";

const Home = () => {
  return (
    <div className="">
          <HomeIntro />
        <AboutMe />
      <div className="">
        <h2 className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
           Session Galleries
        </h2>
        <PortfolioCards />
      </div>
    </div>
  );
};

export default Home;
