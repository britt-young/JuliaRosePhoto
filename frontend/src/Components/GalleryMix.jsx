import React from "react";

const GalleryMix = () => {
  return (
    <div className="w-full">
      <div className="relative right-0">
        {/* tab section */}
        <div className="w-full">
          <div className="relative right-0">
            <ul
              className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100"
              data-tabs="tabs"
              role="list"
            >
              <li className="z-30 flex-auto text-center">
                <a
                  className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                  data-tab-target=""
                  role="tab"
                  aria-selected="true"
                  aria-controls="Seniors"
                >
                  <span className="ml-1">Seniors</span>
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                  data-tab-target=""
                  role="tab"
                  aria-selected="false"
                  aria-controls="Couples"
                >
                  <span className="ml-1">Couples</span>
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
                  data-tab-target=""
                  role="tab"
                  aria-selected="false"
                  aria-controls="Family"
                >
                  Family
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* tab content */}
        {/* senior tab */}
        <div data-tab-content="" className="p-5">
          <div className="block opacity-100" id="Seniors" role="tabpanel">
            <div
              role="tabpanel"
              className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-red-700 h-max"
              data-value="html"
            >
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1652278623788-1a876f493b31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1638147850050-b469cf6867bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1638148870137-6e970b24e166?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1649894223216-fbd82f3e6e1f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1652278858525-d7a2d95bf582?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1630883665215-dc90914c334b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image-photo"
                />
              </div>
            </div>
          </div>

          {/* couples tab */}
          <div className="hidden opacity-0" id="Couples" role="tabpanel">
            <div
              role="tabpanel"
              className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
              data-value="html"
            >
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                  alt="image-photo"
                />
              </div>
            </div>
          </div>

          {/* family tab */}
          <div className="hidden opacity-0" id="Family" role="tabpanel">
            <div
              role="tabpanel"
              className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
              data-value="html"
            >
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg"
                  alt="image-photo"
                />
              </div>
              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
                  alt="image-photo"
                />
              </div>

              <div>
                <img
                  className="w-full h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
                  alt="image-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryMix;
