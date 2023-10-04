/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      purple: {
        100: "#EFEBFF",
        200: "#BEADFF",
        300: "#633CFF",
      },
      grey: {
        100: "#FAFAFA",
        200: "#D9D9D9",
        300: "#737373",
        400: "#333333",
      },
      red: "#FF3939",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      sans: ["Instrument Sans", "sans-serif"],
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;
