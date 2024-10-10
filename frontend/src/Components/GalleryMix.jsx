import React, { useState } from "react";

const GalleryMix = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Seniors");

  // Images for each category
  const images = {
    Seniors: [
      "https://images.unsplash.com/photo-1652278623788-1a876f493b31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1638147850050-b469cf6867bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1638148870137-6e970b24e166?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1649894223216-fbd82f3e6e1f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1652278858525-d7a2d95bf582?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630883665215-dc90914c334b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    Couples: [
      "https://plus.unsplash.com/premium_photo-1665454931252-178f33c56592?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1665083164581-06d86e7c44c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1708574376475-f82c326a1487?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1617376431454-8195cf1fd668?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543420502-52efc1a35184?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664529109537-609a387d77b8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    Family: [
      "https://images.unsplash.com/photo-1588979355313-6711a095465f?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1587336250994-07b8917e8e35?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1666819288704-76a127d61788?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542037179399-bbf09c7f9888?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1634845959192-17ca874f4c42?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1637878257903-7f08eab9a7f2?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  };

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      <div className="relative right-0">
        {/* Tab section */}
        <div className="w-full">
          <ul className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100">
            {["Seniors", "Couples", "Family"].map((tab) => (
              <li
                key={tab}
                className={`z-30 flex-auto text-center rounded-xl mx-1 cursor-pointer ${
                  activeTab === tab
                    ? "text-black font-bold bg-pink-200"
                    : "text-black bg-pink-100"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                <a
                  className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg"
                  role="tab"
                >
                  <span className="ml-1">{tab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab content */}
        <div className="p-5">
          {/* Dynamic content based on activeTab */}
          <div
            role="tabpanel"
            className={`grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed h-max ${
              activeTab === "Seniors" ? "block" : "hidden opacity-0"
            }`}
          >
            {images.Seniors.map((src, index) => (
              <div key={index}>
                <img className="w-full h-full max-w-full rounded-lg" src={src} alt="image-photo" />
              </div>
            ))}
          </div>

          <div
            role="tabpanel"
            className={`grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed h-max ${
              activeTab === "Couples" ? "block" : "hidden opacity-0"
            }`}
          >
            {images.Couples.map((src, index) => (
              <div key={index}>
                <img className="w-full h-full max-w-full rounded-lg" src={src} alt="image-photo" />
              </div>
            ))}
          </div>

          <div
            role="tabpanel"
            className={`grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed h-max ${
              activeTab === "Family" ? "block" : "hidden opacity-0"
            }`}
          >
            {images.Family.map((src, index) => (
              <div key={index}>
                <img className="w-full h-full max-w-full rounded-lg" src={src} alt="image-photo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryMix;
