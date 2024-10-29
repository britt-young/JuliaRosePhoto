import React from "react";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  return (
    <div>
      {/* <img
        className="w-full h-screen object-cover "
        src="https://images.unsplash.com/photo-1541654056076-0a252e083078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img> */}
      <div className="m-5 h-screen relative flex flex-col justify-center">
        <img
          src="https://images.unsplash.com/photo-1541654056076-0a252e083078?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover absolute"
        />
        <div className="bg-white/50 pt-40 pb-40 p-10 rounded-lg absolute right-96">
          <h1 className="font-title sm:text-2xl">Hi there, I'm Riley</h1>
          <h2 className="font-body mb-20 uppercase">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                  </svg>
                </span>
              </div>
              <h5 className="font-body mb-2 font-bold text-center">3+</h5>
              <h6 className="font-body uppercase mb-0 font-normal dark:text-neutral-50 text-center">
                years of experience
              </h6>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
            </div>

            <div className="relative mb-12 px-5 lg:mb-10">
              <div className="mb-2 flex justify-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                    <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                    <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                  </svg>
                </span>
              </div>
              <h5 className="mb-2 font-bold font-body text-center">48 HR</h5>
              <h6 className="mb-0 font-body uppercase dark:text-neutral-50 text-center">
                sneak peek turn-around
              </h6>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
            </div>
            <div className="relative mb-12 px-5 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span>
                  <img src="" alt="star" className="h-7 w-7" />
                </span>
              </div>
              <h5 className="mb-2 font-bold font-body text-center">50+</h5>
              <h6 className="mb-0 font-body uppercase dark:text-neutral-50 text-center">
                five star reviews
              </h6>
              <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
            </div>
            <div className="relative mb-12 px-5 lg:mb-0">
              <div className="mb-2 flex justify-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <h5 className="mb-2 font-bold font-body text-center">
                editing style
              </h5>
              <h6 className="mb-0 font-body uppercase dark:text-neutral-50 text-center">
                natural-soft
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
