import React from "react";

const About = () => {
  return (
    <div className="flex col-2">
      <div className="flex-col w-1/2 p-20">
        <h1>ABOUT ME</h1>
        <h2>Hi, I'm Riley</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="w-1/2 p-20">
        <avatar className="w-1/2" src="https://via.placeholder.com/150" />
      </div>
    </div>
  );
};

export default About;
