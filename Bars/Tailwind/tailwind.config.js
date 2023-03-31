/** @type {import('tailwindcss').Config} */

const colors = {
  bgc: "#0e0331",
};
const animation = {
  changeSize: "size 2s ease-in-out calc(var(--delay) * 100ms) infinite",
};
const keyframes = {
  size: {
    "0%, 100%": { height: "10rem" },
    "50%": { height: "3rem;" },
  },
};
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors,
      keyframes,
      animation,
    },
  },
  plugins: [],
};
