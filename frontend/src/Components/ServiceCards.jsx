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
      <div className="flex flex-col lg:flex-row lg:p-1 p-4">
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4">
          <h4 className="uppercase font-semibold mb-2">Seniors</h4>
          <p className="text-gray-700">
            This is a single person session for students graduating from either
            high school, college, or any form of further education
          </p>
        </div>
        <div>
          <img className="max-w-sm" src={boy} alt="senior portrait"></img>
        </div>
      </div>
      {/* Individual Portraits */}
      <div className="flex flex-col lg:flex-row lg:p-1 p-4">
        <img className="max-w-sm" src={girl} alt="portrait"></img>
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4 w-4xl">
          <h4 className="uppercase font-semibold mb-2">solo</h4>
          <p className="text-gray-700">This is a single person session</p>
        </div>
        <div></div>
      </div>
      {/* Group Portraits */}
      <div className="flex flex-col lg:flex-row lg:p-1 p-4">
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4">
          <h4 className="uppercase font-semibold mb-2">couples & groups</h4>
          <p className="text-gray-700">
            This is a session for 2 or more people with a maximum of 10
          </p>
        </div>
        <div>
          <img className="max-w-sm" src={group} alt="couples portrait"></img>
        </div>
      </div>
      {/* Individual Portraits */}
      <div className="flex flex-col lg:flex-row lg:p-1 p-4">
        <img className="max-w-sm" src={family} alt="family portrait"></img>
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
      <div className="flex flex-col lg:flex-row lg:p-1 p-4">
        <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4">
          <h4 className="uppercase font-semibold mb-2">events</h4>
          <p className="text-gray-700">
            This session is for special events, parties, or elopements under 50
            people
          </p>
        </div>
        <div>
          <img className="max-w-sm" src={event} alt="special events"></img>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
