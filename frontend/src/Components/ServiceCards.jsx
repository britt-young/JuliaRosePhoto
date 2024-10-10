import React from 'react'

import family from "../assets/img/black-fam.jpg";
import girl from "../assets/img/girl-senior.png";
import boy from "../assets/img/senior-boy.png";
import group from "../assets/img/osu-grad.png";



const ServiceCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
        {/* First service card */}
        <div className="p-5 flex justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img
              className="w-full"
              src={boy}
              alt="Sunset in the mountains"
            ></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Senior Portraits</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #RamsetPark
              </span>
              <span className="inline-block bg-pink-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #ALTgrads
              </span>
              <span className="inline-block bg-pink-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #CLASSOF2024
              </span>
            </div>
          </div>
        </div>

        {/* Second service card */}
        <div className="p-5 flex justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={family}
              alt="Sunset in the mountains"
            ></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Family Sessions</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #FallsCreekPark
              </span>
              <span className="inline-block bg-pink-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #MomentoMoments
              </span>
              <span className="inline-block bg-pink-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #AtlantaFamilySessions
              </span>
            </div>
          </div>
        </div>

        {/* Third service card */}
        <div className="p-5 flex justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={girl}
              alt="Sunset in the mountains"
            ></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Individual Sessions</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TallahasseeBotanicalGardens
              </span>
              <span className="inline-block bg-pink-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #SeniorSessions
              </span>
              <span className="inline-block bg-pink-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #SpringSessions
              </span>
            </div>
          </div>
        </div>

        {/* Fourth service card */}
        <div className="p-5 flex justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={group}
              alt="Sunset in the mountains"
            ></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Couples & Group Sessions</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TheOhioState
              </span>
              <span className="inline-block bg-pink-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TheShoe
              </span>
              <span className="inline-block bg-pink-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #graduationday
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ServiceCards