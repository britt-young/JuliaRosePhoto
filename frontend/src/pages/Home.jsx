import React from "react";
import PortfolioCards from "../Components/PortfolioCards";
import HomeIntro from "../Components/HomeIntro";
import About from "../Components/About";

const Home = () => {
  return (
    <div>
      <div className="flex items-center flex-row flex-wrap lg:flex-nowrap mx-5 my-20">
        <div className="flex basis-3/5">
          <HomeIntro />
        </div>
        <div className="flex justify-center">
          <PortfolioCards />
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;
