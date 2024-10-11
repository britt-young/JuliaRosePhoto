import React from "react";
import { TypeAnimation } from 'react-type-animation';

const AboutMe = () => {
  return (
    <div>
      {/* <img
        className="w-full h-screen object-cover "
        src="https://images.unsplash.com/photo-1541654056076-0a252e083078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img> */}
      <div className='w-full h-screen relative flex flex-col justify-center items-center'>
        <img src="https://images.unsplash.com/photo-1541654056076-0a252e083078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover absolute"/>
        <div className="absolute right-96">
        <h1>Hi, I'm Riley</h1>
        <h2>
          You're go-to{" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "photographer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "editor",
              1000,
              "stylist",
              1000,
              "bestie",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
