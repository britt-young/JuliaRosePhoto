const PortfolioCards = () => {
  return (
    <div className="bg-white py-10 lg:px-0 px-5">
      <div className="text-center mx-auto max-w-7xl">
        <h6>portfolio</h6>
        <h2 className="mt-0 text-gray-900">Browse my favorite sessions</h2>
        <p className="mt-3 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
          ratione.
        </p>
      </div>

      {/* Images with overlay */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 m-10">
        
        {/* first image card */}
        <div className="relative">
          <picture className="block">
            <img
              src="https://plus.unsplash.com/premium_photo-1664888532123-38c6b1ade362?q=80&w=1974&auto=format&fit=crop"
              alt="portrait"
              className="object-cover w-full"
            />
          </picture>
          <a
            href="https://pixies.et/UIht7YNX"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-none text-center uppercase">
              <h4 className="text-white">wellness brand</h4>
              <p className="text-white">solo package</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-10 hover:bg-white hover:opacity-5 transition-bg duration-300 ease-in-out flex items-center justify-center"></div>
          </a>
        </div>

        {/* second image card */}
        <div className="relative">
          <picture className="block">
            <img
              src="https://images.unsplash.com/photo-1526277015674-026cb84653ec?q=80&w=1974&auto=format&fit=crop"
              alt="family"
              className="object-cover w-full"
            />
          </picture>
          <a
            href="https://pixies.et/UIht7YNX"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-none text-white text-center uppercase">
              <h4 className="text-white">the rockwells</h4>
              <p className="text-white">family package</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-10 hover:bg-white hover:opacity-5 transition-bg duration-300 ease-in-out flex items-center justify-center"></div>
          </a>
        </div>

        {/* third image card */}
        <div className="relative">
          <picture className="block">
            <img
              src="https://images.unsplash.com/photo-1606216794079-73f85bbd57d5?q=80&w=1974&auto=format&fit=crop"
              alt="wedding"
              className="object-cover w-full"
            />
          </picture>
          <a
            href="https://pixies.et/UIht7YNX"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-none text-white text-center uppercase">
              <h4 className="text-white">smith wedding</h4>
              <p className="text-white">event package</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-10 hover:bg-white hover:opacity-5 transition-bg duration-300 ease-in-out flex items-center justify-center"></div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default PortfolioCards;
