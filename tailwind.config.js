/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      ipad11: "1112px",
      macbook14: "1645px",
      mac24: "1942px",
    },
    extend: {
      colors: {
        potato: "#ce9a64",
        lightpotato: "#f4c381",
      },
    },
    fontFamily: {
      logo: ["Kanit", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      tradewinds: ["Trade Winds", "cursive"],
    },
  },
  plugins: [],
  darkMode: "class",
};
