/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/main/**/*.{js,jsx,ts,tsx}",
    "./src/modals/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    transitionDuration: {
      DEFAULT: "500ms",
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      boxShadow: {
        outer: "2px 2px 6px 1px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        textDrk: "#e7e5e4",
        textMed: "#d6d3d1",
        textLit: "#a8a29e",
        fillDrkSolid: "#27272a",
        fillDrk: "#3f3f46",
        fillDrkhover: "#52525b",
        fillDrkactive: "#a8a29e96",
        accent: "#d4a99c",
        accentHover: "#C99383",
        accentActive: "#dfbeb5",
        accentOpacity: "#dfbeb55e",
        shadow: "#44403c",
      },
    },
  },

  plugins: [],
};
