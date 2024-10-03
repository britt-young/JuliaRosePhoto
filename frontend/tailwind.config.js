const flowbite = require("flowbite-react/tailwind");

//** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    colors: {
      lilac: "#d9add1",
      poppy: "#f26728",
      flamingo: "#f69593",
      bblue: "#cbcadc",
      olive: "#aea434",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      title: ["Inter", "sans-serif"],
      subTitle: ["Roboto", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
};
