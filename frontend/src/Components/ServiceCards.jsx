import React from "react";
import { Link } from "react-router-dom";
import family from "../assets/img/fam.jpg";
import solo from "../assets/img/solo.jpg";
import senior from "../assets/img/senior.jpg";
import couple from "../assets/img/couple.jpg";
import wedding from "../assets/img/wedding.jpg";

const ServiceCards = () => {
  return (
    <div className="flex flex-col max-w-3xl mx-auto justify-center items-center m-5">
      {/* Senior Portraits */}
      <Link
        to={"/services/seniors"}
        className="group flex flex-col lg:flex-row lg:p-1 p-4 hover:cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 lg:px-6 py-4 max-w-sm">
          <h4 className="uppercase font-semibold mb-2">Seniors</h4>
          <p className="text-gray-700 px-10">
            This is a single person session for students graduating from either
            high school, college, or any form of further education
          </p>
        </div>

        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={senior}
            alt="senior portrait"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
      </Link>

      {/* Individual Portraits */}
      <Link
        to={"/services/solo"}
        className="group flex flex-col-reverse lg:flex-row lg:p-1 p-4 hover:cursor-pointer"
      >
        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={solo}
            alt="portrait"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 lg:px-6 py-4 max-w-sm">
          <h4 className="uppercase font-semibold mb-2">solo</h4>
          <p className="text-gray-700 px-15">This is a single person session</p>
        </div>
      </Link>

      {/* Couples & Group Portraits */}
      <Link
        to={"/services/couples&groups"}
        className="group flex flex-col lg:flex-row lg:p-1 p-4  hover:cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 lg:px-6 py-4 max-w-sm">
          <h4 className="uppercase font-semibold mb-2">couples & groups</h4>
          <p className="text-gray-700 px-10">
            This is a session for 2 or more people with a maximum of 10
          </p>
        </div>
        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={couple}
            alt="couples portrait"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
      </Link>

      {/* Families Portraits */}
      <Link
        to={"/services/families"}
        className="group flex flex-col-reverse lg:flex-row lg:p-1 p-4 hover:cursor-pointer"
      >
        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={family}
            alt="portrait"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4 lg:px-6 py-4 max-w-sm">
          <h4 className="uppercase font-semibold mb-2">families</h4>
          <p className="text-gray-700 px-10">
            This session is for families with children and/or pets. Minimum of 3
            people and a maximum of 10
          </p>
        </div>
      </Link>

      {/* Events Portraits */}
      <Link
        to={"/services/events"}
        className="group flex flex-col lg:flex-row lg:p-1 p-4 hover:cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 lg:px-6 py-4 max-w-sm">
          <h4 className="uppercase font-semibold mb-2">events</h4>
          <p className="text-gray-700 px-10">
            This session is for special events, parties, or elopements under 50
            people
          </p>
        </div>
        <div className="relative">
          <img
            className="max-w-sm transition-all duration-300"
            src={wedding}
            alt="elopement"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCards;
