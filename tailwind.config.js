/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1240px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1320px",
    },

    extend: {
      colors: {
        neutral0: "#FFFFFF",
        neutral10: "#FAFAFB",
        neutral20: "#F5F5F6",
        neutral30: "#EBECED",
        neutral40: "#DEE0E2",
        neutral50: "#C0C3C8",
        neutral60: "#B0B4BB",
        neutral70: "#A4A8B0",
        neutral80: "#9499A3",
        neutral90: "#858B95",
        neutral100: "#767C88",
        neutral200: "#676E7B",
        neutral300: "#575F6E",
        neutral400: "#4B5363",
        neutral500: "#3B4556",
        neutral600: "#2F394B",
        neutral700: "#1D283B",
        neutral800: "#0E192E",
        neutral900: "#010D23",
        //
        gradient: "#71D1E7", //to Primary300
        //
        primary50: "#E9F1F5",
        primary75: "#A3C6D6",
        primary100: "#7DAEC4",
        primary200: "#448BAB",
        primary300: "#1E739A",
        primary400: "#15516C",
        primary500: "#12465E",
      },

      fontSize: {
        display1: ["64px", { lineHeight: "77.45px" }],
        display2: ["56px", { lineHeight: "67.77px" }],
        "heading-xl": ["48px", { lineHeight: "58.09px" }],
        "heading-l": ["40px", { lineHeight: "48.41px" }],
        "heading-m": ["32px", { lineHeight: "38.73px" }],
        "heading-s": ["24px", { lineHeight: "29.05px" }],
        "type-l": ["20px", { lineHeight: "24.2px" }],
        "type-m": ["16px", { lineHeight: "19.36px" }],
        "type-s": ["12px", { lineHeight: "14.52px" }],
        "label-l": ["10px", { lineHeight: "12.1px" }],
        "label-m": ["8px", { lineHeight: "9.68px" }],
      },
    },
  },
  plugins: [],
};
