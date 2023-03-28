/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        dashboard: "minmax(15vw,11.5em) 1fr",
      },
    },
  },
  plugins: [],
};
