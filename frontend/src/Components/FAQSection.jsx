import { useState } from "react";

// const faqs = [
//   {
//     question: "1. Send Me a Request",
//     answer:
//       "Once you've decided which package you want, fill out the contact form. I will reach out to you within 24 hours to schedule your session!",
//   },
//   {
//     question: "2. Consultation",
//     answer: (
//       <>
//         Once we've scheduled our session, we'll have a consultation to discuss
//         the details such as
//         <ul className="list-disc pl-5 mt-2">
//           <li>Location</li>
//           <li>Photo Inspiration/ Mood Board</li>
//           <li>Styling Recommendations (if requested)</li>
//           <li>
//             <a
//               className="hover:text-main text-blue-600"
//               href="https://tailwindui.com/"
//               rel="nofollow"
//             >
//               Add link here
//             </a>
//           </li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     question: "3. Payment",
//     answer: (
//       <>
//         At the end of our scheduling/ consultation communications, I'll send you
//         an invoice for 50% of the session fee via text or e-mail. The remaining
//         balance is due immediately following our session. I take the following
//         forms of payments:
//         <ul className="list-disc pl-5 mt-2">
//           <li>Cash</li>
//           <li>Venmo</li>
//           <li>Zelle</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     question: "4. Sneak Peeks & Gallery Access",
//     answer: (
//       <>
//         Sneak peeks will be delivered within 48 hours of our session via text as
//         a Google Drive link. The full gallery will be delivered within 7 days of
//         our session via email with an updated link.
//         <p className="mt-4">
//           <span className="font-bold">Note: </span> You do{" "}
//           <span className="font-bold">NOT</span> need a Google account to view
//           your gallery.
//         </p>
//       </>
//     ),
//   },
// ];
const steps = [
  {
    title: "Step One",
    subtitle: "Send Request",
    description: "This is the first step of the process.",
  },
  {
    title: "Step Two",
    subtitle: "Consultation",
    description: "Some explanation for step two goes here.",
  },
  {
    title: "Step Three",
    subtitle: "Payment",
    description: "Details about what happens at step three.",
  },
  {
    title: "Step Four",
    subtitle: "Sneak Peeks & Gallery Access",
    description: "Sneak peeks will be delivered within 48 hours of our session via text as a Google Drive link. The full gallery will be delivered within 7 days of our session via email with an updated link. You do NOT need a Google account to view your gallery.",
  },
];

const FAQSection = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const progressPercent =
    hoveredStep !== null ? ((hoveredStep + 1) / steps.length) * 100 : 0;

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h4 className="font-bold mb-4">Booking Process</h4>

      {/* Horizontal (lg+) */}
      <div className="hidden lg:flex items-start justify-between relative gap-x-8">
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
              <h5 className="font-bold">{step.title}</h5>
              <p className="text-gray-500 mb-2 font-semibold">{step.subtitle}</p>
              <p className="text-gray-600 text-sm mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical (sm–md) */}
      <div className="flex lg:hidden flex-col relative pl-8">
        {/* Vertical line */}
        <div className="absolute top-4 left-3 bottom-4 w-1 bg-gray-200">
          <div
            className="w-1 bg-blue-500 transition-all duration-300"
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
              <p className="text-gray-500 mb-2 font-semibold">{step.subtitle}</p>
              <p className="text-gray-600 text-sm mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;