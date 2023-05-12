/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1240px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        gradient: "#71D1E7",
        primary50: "#e9f1f5",
        primary75: "#a3c6d6",
        primary100: "#7daec4",
        primary200: "#448bab",
        primary300: "#1e739a",
        primary400: "#15516c",
        primary500: "#12465e",
        neutral800: "#0E192E",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
