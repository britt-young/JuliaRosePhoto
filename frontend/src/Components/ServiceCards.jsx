import React from "react";

import family from "../assets/img/fam.jpeg";
import girl from "../assets/img/girl-senior.png";
import boy from "../assets/img/senior-boy.png";
import group from "../assets/img/osu-grad.png";
import event from "../assets/img/elopement.jpeg";

const ServiceCards = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto m-5">
      {/* Senior Portraits */}
      <div className="group flex flex-col lg:flex-row lg:p-1 p-4 hover:cursor-pointer">
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4">
          <h4 className="uppercase font-semibold mb-2">Seniors</h4>
          <p className="text-gray-700">
            This is a single person session for students graduating from either
            high school, college, or any form of further education
          </p>
        </div>

        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={boy}
            alt="senior portrait"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
      </div>

      {/* Individual Portraits */}
      <div className="group flex flex-col lg:flex-row lg:p-1 p-4 hover:cursor-pointer">
        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={girl}
            alt="portrait"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4 w-4xl">
          <h4 className="uppercase font-semibold mb-2">solo</h4>
          <p className="text-gray-700">This is a single person session</p>
        </div>
      </div>

      {/* Couples & Group Portraits */}
      <div className="group flex flex-col lg:flex-row lg:p-1 p-4  hover:cursor-pointer">
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4">
          <h4 className="uppercase font-semibold mb-2">couples & groups</h4>
          <p className="text-gray-700">
            This is a session for 2 or more people with a maximum of 10
          </p>
        </div>
        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={group}
            alt="senior portrait"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
      </div>

      {/* Families Portraits */}
      <div className="group flex flex-col lg:flex-row lg:p-1 p-4 hover:cursor-pointer">
        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={family}
            alt="portrait"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4 w-4xl">
          <h4 className="uppercase font-semibold mb-2">families</h4>
          <p className="text-gray-700">
            This session is for families with children and/or pets. Minimum of 3
            people and a maximum of 10
          </p>
        </div>
        <div></div>
      </div>

      {/* Events Portraits */}
      <div className="group flex flex-col lg:flex-row lg:p-1 p-4 hover:cursor-pointer">
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4">
          <h4 className="uppercase font-semibold mb-2">events</h4>
          <p className="text-gray-700">
            This session is for special events, parties, or elopements under 50
            people
          </p>
        </div>
        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={event}
            alt="senior portrait"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
