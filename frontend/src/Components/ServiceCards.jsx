import React from "react";

import family from "../assets/img/fam.jpeg";
import girl from "../assets/img/girl-senior.png";
import boy from "../assets/img/senior-boy.png";
import group from "../assets/img/osu-grad.png";
import event from "../assets/img/elopement.jpeg";

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 m-5">
      {/* First service card */}
      <div className="relative w-full h-full flex p-1 justify-around">
        <div className="max-w-sm overflow-hidden shadow-lg ">
          <img className="w-full" src={boy} alt="senior portrait"></img>
          <div className="px-6 py-4">
            <div className="font-body font-bold text-xl mb-2">
              Senior Portraits
            </div>
            <p className="text-gray-700 font-body uppercase">
              This is a single person session for students graduating from
              either high school, college, or any form of further education
            </p>
          </div>
          <div className="flex flex-wrap px-6 pt-4 pb-2">
            <span className="inline-block p-1 text-sm font-semibold text-lilac mr-2 mb-2">
              #RamsetPark
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lgrey mr-2 mb-2">
              #ALTgrads
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lightp mr-2 mb-2">
              #CLASSOF2024
            </span>
          </div>
        </div>
      </div>

      {/* Second service card */}
      <div className="relative w-full h-full flex p-1 justify-around">
        <div className="max-w-sm overflow-hidden shadow-lg">
          <img className="w-full" src={girl} alt="portrait"></img>
          <div className="px-6 py-4">
            <div className="font-body font-bold text-xl mb-2">
              Individual Sessions
            </div>
            <p className="text-gray-700 font-body uppercase">
              This is a single person session
            </p>
          </div>
          <div className="flex flex-wrap px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lgrey mr-2 mb-2">
              #BotanicalGardens
            </span>
            <span className="inline-block p-1 text-sm font-semibold text-lilac mr-2 mb-2">
              #SeniorSessions
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lightp mr-2 mb-2">
              #SpringSessions
            </span>
          </div>
        </div>
      </div>

      {/* Third service card */}
      <div className="relative w-full h-full flex p-1 justify-around">
        <div className="max-w-sm overflow-hidden shadow-lg">
          <img className="w-full" src={group} alt="group portrait"></img>
          <div className="px-6 py-4">
            <div className="font-body font-bold text-xl mb-2">
              Couples & Group Sessions
            </div>
            <p className="text-gray-700 font-body uppercase">
              This is a session for 2 or more people with a maximum of 10
            </p>
          </div>
          <div className="flex flex-wrap px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lightp mr-2 mb-2">
              #TheOhioState
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lgrey mr-2 mb-2">
              #TheShoe
            </span>
            <span className="inline-block p-1 text-sm font-semibold text-lilac mr-2 mb-2">
              #graduationday
            </span>
          </div>
        </div>
      </div>

      {/* Fourth service card */}
      <div className="relative w-full h-full flex p-1 justify-around">
        <div className="max-w-sm overflow-hidden shadow-lg">
          <img className="w-full" src={family} alt="family portrait"></img>
          <div className="flex flex-wrap px-6 py-4">
            <div className="font-body font-bold text-xl mb-2">
              Family Sessions
            </div>
            <p className="text-gray-700 font-body uppercase">
              This session is for families with children and/or pets. Minimum of
              3 people and a maximum of 10
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block p-1 text-sm font-semibold text-lilac mr-2 mb-2">
              #FallsCreekPark
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lightp mr-2 mb-2">
              #MomentoMoments
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lgrey mr-2 mb-2">
              #AtlantaFamilySessions
            </span>
          </div>
        </div>
      </div>
      {/* Fifth service card */}
      <div className="relative w-full h-full flex p-1 justify-around">
        <div className="max-w-sm overflow-hidden shadow-lg">
          <img className="w-full" src={event} alt="event"></img>
          <div className="flex flex-wrap px-6 py-4">
            <div className="font-body font-bold text-xl mb-2">
              Special Events
            </div>
            <p className="text-gray-700 font-body uppercase">
              This session is for special events, parties, or elopements under 50 people
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block p-1 text-sm font-semibold text-lilac mr-2 mb-2">
              #FallsCreekPark
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lightp mr-2 mb-2">
              #MomentoMoments
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-lgrey mr-2 mb-2">
              #AtlantaFamilySessions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
