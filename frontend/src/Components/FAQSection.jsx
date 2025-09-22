import { useState } from "react";
import steps from "../data/steps"; // import the structured steps array

const FAQSection = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const progressPercent =
    hoveredStep !== null ? ((hoveredStep + 1) / steps.length) * 100 : 0;

  return (
    <div className="w-full p-6">
      <h4 className="font-bold mb-4">Booking Process</h4>

      {/* Horizontal layout for large screens */}
      <div className="hidden lg:flex items-start justify-between relative gap-x-4">
        {/* Progress line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200">
          <div
            className="h-1 bg-main transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-start w-1/4 cursor-pointer"
            onMouseEnter={() => setHoveredStep(idx)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Content */}
            <div className="mt-6 text-start">
              <h5 className="font-bold mb-2">{step.title}</h5>
              {/* <p className="text-main font-semibold">{step.subtitle}</p> */}
              <p className="text-gray-600 pe-2">{step.text}</p>

              {step.list && (
                <ul className="list-disc pl-5 mt-2 text-sm">
                  {step.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {step.links && (
                <ul className="list-disc pl-5 mt-0 text-sm">
                  {step.links.map((link, i) => (
                    <li key={i}>
                      <a
                        className="hover:text-main text-blue-600"
                        href={link.href}
                        rel="nofollow"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {step.note && (
                <p className="mt-4 text-sm">
                  <span className="text-md font-bold">* </span>
                  {step.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Vertical layout for small/medium screens */}
      <div className="flex lg:hidden flex-col relative pl-8">
        {/* Vertical line */}
        <div className="absolute top-4 left-3 bottom-4 w-1 bg-gray-200">
          <div
            className="w-1 bg-main transition-all duration-300"
            style={{ height: `${progressPercent}%` }}
          />
        </div>

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative flex items-start mb-8 cursor-pointer"
            onMouseEnter={() => setHoveredStep(idx)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            {/* Content */}
            <div className="ml-4">
              <h5 className="font-bold">{step.title}</h5>
              {/* <p className="text-gray-500 mb-2 font-semibold">{step.subtitle}</p> */}
              <p className="text-gray-600 text-sm mt-1">{step.text}</p>

              {step.list && (
                <ul className="list-disc pl-5 mt-2 text-sm">
                  {step.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {step.links && (
                <ul className="list-disc pl-5 mt-0 text-sm">
                  {step.links.map((link, i) => (
                    <li key={i}>
                      <a
                        className="hover:text-main text-blue-600"
                        href={link.href}
                        rel="nofollow"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {step.note && (
                <p className="text-sm mt-4">
                  <span className="text-md font-bold">* </span>
                  {step.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
