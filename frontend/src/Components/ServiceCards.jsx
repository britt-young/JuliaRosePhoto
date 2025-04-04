import React from "react";

import family from "../assets/img/fam.jpeg";
import girl from "../assets/img/girl-senior.png";
import boy from "../assets/img/senior-boy.png";
import group from "../assets/img/osu-grad.png";
import event from "../assets/img/elopement.jpeg";

const ServiceCards = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto m-5">
      {/* First service card */}
        <div className="flex lg:p-1 p-4">
          <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-4">
            <h4 className="uppercase font-semibold mb-2">Senior Portraits</h4>
            <p className="text-gray-700">
              This is a single person session for students graduating from
              either high school, college, or any form of further education
            </p>
          </div>
          <div>
          <img className="max-w-sm overflow-hidden" src={boy} alt="senior portrait"></img>
          </div>
      </div>

      {/* Second service card */}
      <div className="relative w-full h-full flex p-1 justify-around">
        <div className="max-w-sm overflow-hidden shadow-lg">
          <img className="w-full" src={girl} alt="portrait"></img>
          <div className="px-6 py-4">
            <h4 className="uppercase font-semibold mb-2">
              Individual Sessions
            </h4>
            <p className="text-gray-700">This is a single person session</p>
          </div>
        </div>
      </div>

      {/* Third service card */}
      <div className="relative w-full h-full flex p-1 justify-around">
        <div className="max-w-sm overflow-hidden shadow-lg">
          <img className="w-full" src={group} alt="group portrait"></img>
          <div className="px-6 py-4">
            <h4 className="uppercase font-semibold mb-2">
              Couples & Group Sessions
            </h4>
            <p className="text-gray-700">
              This is a session for 2 or more people with a maximum of 10
            </p>
          </div>
        </div>
      </div>

      {/* Fourth service card */}
      <div className="relative w-full h-full flex p-1 justify-around">
        <div className="max-w-sm overflow-hidden shadow-lg">
          <img className="w-full" src={family} alt="family portrait"></img>
          <div className="flex flex-wrap px-6 py-4">
            <h4 className="uppercase font-semibold mb-2">Family Sessions</h4>
            <p className="text-gray-700">
              This session is for families with children and/or pets. Minimum of
              3 people and a maximum of 10
            </p>
          </div>
        </div>
      </div>
      {/* Fifth service card */}
      <div className="relative w-full h-full flex p-1 justify-around">
        <div className="max-w-sm overflow-hidden shadow-lg">
          <img className="w-full" src={event} alt="event"></img>
          <div className="flex flex-wrap px-6 py-4">
            <h4 className="uppercase font-semibold mb-2">Special Events</h4>
            <p className="text-gray-700">
              This session is for special events, parties, or elopements under
              50 people
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
