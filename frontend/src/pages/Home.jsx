import React from "react";

const Home = () => {
  return (
    <div className="bg-white gap-8 md:columns-2 sm:columns-1 flex">
      <div className="py-20 px-40">
        <img src="" alt="welcome_logo" />
        <p className="inline-flex">Capturing every special moment</p>
        <p className="inline-block">I love photography</p>
        <button className="inline-block rounded bg-poppy px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white">
          see my portfolio
        </button>
      </div>
{/* portfolio cards */}
      <div className="sm:flex sm:justify-center p-4">
        {/* first card */}
        <div className="flex flex-col text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none">
          <a href="#!">
            <img
              className="p-1"
              src="./assets/senior-girl.jpg"
              alt="Hollywood Sign on The Hill"
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
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
{/* second card */}
        <div className="flex flex-col text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-none">
          <a href="#!">
            <img
              className="p-1"
              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
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
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
{/* third card */}
        <div className="flex flex-col text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-s-none">
          <a href="#!">
            <img
              className="p-1"
              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
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
              <small>Last updated 3 mins ago</small>
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
