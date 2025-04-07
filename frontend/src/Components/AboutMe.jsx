import React from "react";
import owner from "../assets/img/owner.png";

import {
  CameraIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  BoltIcon,
} from "@heroicons/react/20/solid";


const AboutMe = () => {
  const features = [
    {
      name: "4 years of experience.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: CameraIcon,
    },
    {
      name: "50+ five star reviews.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: SparklesIcon,
    },
    {
      name: "Soft-natural editing style",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: AdjustmentsHorizontalIcon,
    },
    {
      name: "24 hour sneak peeks",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: BoltIcon,
    },
  ];
  return (
    <div className="flex my-10 min-h-screen max-w-7xl mx-auto gap-10 flex-col lg:flex-row items-center justify-center p-4">
      <div className="items-start text-start lg:ml-2">
          <div className="lg:max-w-2xl">
            <h2 className="text-base/7 font-semibold text-pink-500 uppercase tracking-tighter">
              About me
            </h2>
            <p className="mt-0 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Hi, I'm Riley
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-11">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-6 text-pink-500"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
      </div>

      <picture className="lg:mr-2 flex justify-center items-center">
        <img
          src={owner}
          className="w-150 object-cover shadow-xl border-4 border-pink-100"
        />
      </picture>
    </div>
  );
};

export default AboutMe;
