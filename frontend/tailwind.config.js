const flowbite = require("flowbite-react/tailwind");

//** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    colors: {
      darkRose: "#664242",
      lightRose: "#AE8381",
      purp: "#74676F",
      nude: "#D0BCB1",
      pale: "#E8DCD6",
      black: "#000000",
    },
    fontFamily: {
      title: ["Laisha", "serif"],
      body: ["", "sans-serif"], 
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
};

