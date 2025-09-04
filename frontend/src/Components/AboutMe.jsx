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
      name: "5 years of experience:",
      description:
        "I began freelance photography in 2020 to reconnect with others during the pandemic. Photography gave me a way to express myself and connect with others. I love capturing the beauty of life and the world around us.",
      icon: CameraIcon,
    },
    {
      name: "50+ five star reviews:",
      description:
        "I love working with all my clients and I strive to make every session a fun and enjoyable experience.",
      icon: SparklesIcon,
    },
    {
      name: "Soft-natural editing style:",
      description:
        "I specialize in soft-natural editing style. I love to capture the beauty of life and the world around us by maintaining the natural colors and tones of the environment.",
      icon: AdjustmentsHorizontalIcon,
    },
    {
      name: "24 hour sneak peeks:",
      description:
        "I know how exciting it is to see your photos, so I offer 24 hour sneak peeks of limited photos from your session.",
      icon: BoltIcon,
    },
  ];
  return (
    <div className="pattern-background">
    <div className="flex lg:py-50 py-25 max-w-7xl mx-auto gap-10 flex-col lg:flex-row items-center justify-center p-4">
      <div className="items-start text-start lg:ml-2">
        <div className="lg:max-w-2xl">
          <h6>
            About me
          </h6>
          <h2 className="mt-0 text-gray-900">
            Hi, I'm Julia
          </h2>
          <p className="mt-6 text-gray-600">
            I'm a individual and group photographer based in the Bay Area. I
            love to capture the beauty of life and the world around us. I
            specialize in family, couple, and individual portraits, as well as
            intimate events and weddings. My goal is to create timeless images
            that you will cherish for a lifetime.
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-[1rem] text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-11">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute top-1 left-1 size-6 text-main2"
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
          className="w-150 object-cover shadow-xl border-4 border-white"
        />
      </picture>
    </div>
    </div>
  );
};

export default AboutMe;
