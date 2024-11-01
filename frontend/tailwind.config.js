const flowbite = require("flowbite-react/tailwind");

//** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    colors: {
      purp: "#D9ADD1",
      burnt:"#E36729",
      pp: "#F89493",
      bblue: "#CBCADC",
      lgreen: "#AEA332",
      white: "#FFFFFF",
      black: "#000000",

      lightp: "#DDAEB5",
      lilac:"#B59DBB",
      lgrey:"#8E8CC0",
      dblue:"#667BC6",
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

