import React from "react";
import PortfolioCards from "../Components/PortfolioCards";
import HomeIntro from "../Components/HomeIntro";
import AboutMe from "../Components/AboutMe";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeIntro />
      <AboutMe />
      <PortfolioCards />
    </div>
  );
};

export default Home;
