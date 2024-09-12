import React from "react";

const Home = () => {
  return (
    <div className=" bg-white gap-6 md:columns-2 sm:columns-1 flex">
      <div className="flex-col items-center py-20 px-10">
        {/* <img className="w-50 h-50" src="https://i.imgur.com/1zv3Z9I.jpg" alt="camera" /> */}
        <h1 className="font-display text-3xl pb-5">Riley Addison Photography</h1>
        <p className="inline-flex">Capturing every special moment</p>
        <p className="inline-flex pb-4">I love photography</p>
        <button type="button"className="block bg-bblue p-1 px-3 text-s font-medium text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0">
          see my portfolio
        </button>
      </div>
      {/* portfolio cards */}
      <div className="w-full sm:flex sm:justify-center p-4">
        {/* first card */}
        <div className="flex flex-col text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none">
          <a href="#!">
            <img
              className="p-1"
              src="https://cindyswansonphotography.com/wp-content/uploads/2019/01/10-8374-post/senior_portraits_in_dallas_for_guys_3.jpg"
              alt="senior photo"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="mb-4 text-base text-surface/75 dark:text-neutral-300">
            <button type="button"className="bg-bblue p-1 px-3 text-s font-medium text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0">
          see more
        </button>
            </p>
          </div>
        </div>
        {/* second card */}
        <div className="flex flex-col text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black sm:shrink-0 sm:grow sm:basis-0 sm:rounded-none">
          <a href="#!">
            <img
              className="p-1"
              src="https://i.pinimg.com/originals/af/9f/ca/af9fca1ddca00c48e2b2856d79d830f5.jpg"
              alt="Palm Springs Road"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="mb-4 text-base text-surface/75 dark:text-neutral-300">
            <button type="button"className="bg-bblue p-1 px-3 text-s font-medium text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0">
          see more
        </button>
            </p>
          </div>
        </div>
        {/* third card */}
        <div className="flex flex-col text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black sm:shrink-0 sm:grow sm:basis-0 sm:rounded-s-none">
          <a href="#!">
            <img
              className="p-1"
              src="https://www.tumblestonphotography.com/wp-content/uploads/2018/05/high-school-senior-picture-session.jpg"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="mb-4 text-base text-surface/75 dark:text-neutral-300">
            <button type="button"className="bg-bblue p-1 px-3 text-s font-medium text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0">
          see more
        </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* type="button"
          data-twe-ripple-init
          data-twe-ripple-color="light" */

// shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-white-600 active:shadow-black-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong
