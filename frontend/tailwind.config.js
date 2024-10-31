const flowbite = require("flowbite-react/tailwind");

//** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    colors: {
      linen: "#FDF3EA",
      lightp: "#DDAEB5",
      liver: "#644032",
      blackish: "#1F151D",
      deepp: "#9F6278",
    },
    fontFamily: {
      title: ["Laisha", "serif"],
      body: ["Gilda Display", "sans-serif"], 
    },
    extend: {
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};

