import React from "react";
import PortfolioCards from "../Components/PortfolioCards";

import HomeIntro from "../Components/HomeIntro";

const Home = () => {
  return (
    <div className="flex items-center flex-row m-5">
      <div className="flex basis-3/5">
        <HomeIntro />
      </div>
      <div>
        <PortfolioCards />
      </div>
    </div>
  );
};

export default Home;
