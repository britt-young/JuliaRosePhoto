import React from "react";

const GalleryBanner = () => {
  return (
    <div className="sticky inset-x-0 bottom-5 flex justify-end">
    <div className="bg-dblue/90 px-4 py-3 text-white shadow-xl rounded-full">
      <p className="text-center font-body text-md">
        Ready to book?
        <a href="/Contact" className="inline-block pl-1 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </p>
    </div>
  </div>
  );
};

export default GalleryBanner;
