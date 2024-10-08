import React from "react";
import PortfolioCards from "../Components/PortfolioCards";
import HomeIntro from "../Components/HomeIntro";
import About from "../Components/About";

const Home = () => {
  return (
    <div>
      <div className="flex items-center flex-col flex-wrap lg:flex-nowrap mx-5 my-10">
        <div className="w-full">
          <HomeIntro />
        </div>
        <div className="">
          <PortfolioCards />
        </div>
      </div>
      <div className="m-10 shadow-lg">
        <About />
      </div>
    </div>
  );
};

export default Home;
