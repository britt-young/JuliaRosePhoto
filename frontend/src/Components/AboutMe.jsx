import React from "react";
import { TypeAnimation } from "react-type-animation";
import rating from "../assets/icons/rating.png";
import sneak from "../assets/icons/sneak_peek.png";
import edit from "../assets/icons/edit.png";
import year from "../assets/icons/experience.png";


const AboutMe = () => {
  return (
    <div>
      {/* <img
        className="w-full h-screen object-cover "
        src="https://images.unsplash.com/photo-1541654056076-0a252e083078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img> */}
      <div className="m-5 h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1541654056076-0a252e083078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover absolute"
        />
        <div className="bg-white/20 backdrop-blur-md drop-shadow-md p-5 rounded-lg absolute right-10 top-1/3">
          <h1 className="font-title sm:text-4xl text-black">
            Hi there, I'm Riley
          </h1>
          <h2 className="font-body mb-10 uppercase text-white">
            {" "}
            -{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "photographer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "editor",
                1000,
                "stylist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>

          {/* facts display */}
          <div className="grid grid-cols-2 justify-evenly">
            <div className="relative mb-12 px-5 lg:mb-10">
              <div className="mb-2 flex justify-center">
                <span>
                  <img src={year} alt="star" className="h-10 w-10" />
                </span>
              </div>
              <h6 className="text-black font-body uppercase mb-0 dark:text-white text-center">
                3+ years of experience
              </h6>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
            </div>

            <div className="relative mb-12 px-5 lg:mb-10">
              <div className="mb-2 flex justify-center">
                <span>
                  <img src={sneak} alt="star" className="h-10 w-10" />
                </span>
              </div>

              <h6 className="text-black mb-0 font-body uppercase dark:text-white text-center">
                48 HR sneak peek turn-around
              </h6>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
            </div>
            <div className="relative mb-12 px-5 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span>
                  <img src={rating} alt="star" className="h-11 w-11" />
                </span>
              </div>
              {/* <h5 className="mb-2 font-bold font-body text-center"></h5> */}
              <h6 className="text-black mb-0 font-body uppercase dark:text-white text-center">
                50+ five star reviews
              </h6>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
            </div>
            <div className="relative mb-12 px-5 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span>
                  <img src={edit} alt="star" className="h-10 w-10" />
                </span>
              </div>
              <h6 className="text-black mb-0 font-body uppercase dark:text-white text-center">
                natural-soft edit style
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
