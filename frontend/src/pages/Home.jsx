import React from "react";
import PortfolioCards from "../Components/PortfolioCards";
import HomeIntro from "../Components/HomeIntro";
import AboutMe from "../Components/AboutMe";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeIntro />
      <Testimonials />
      <AboutMe />
      <PortfolioCards />
    </div>
  );
};

export default Home;
