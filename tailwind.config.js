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
      animation: {
        mainImage: "mainImage 1s ease-in-out 1  ",
        mainImageX: "mainImageX 0.5s linear 1",
      },
      keyframes: {
        mainImageX: {
          "0%": {
            transform: "translateX(-25%)",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateX(0)",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        mainImage: {
          "0%": {
            transform: "translateY(20%)",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
            opacity: "0",
            delay: "3s",
          },
          "100%": {
            transform: "translateY(0)",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
            opacity: "1",
          },
        },
      },
      boxShadow: {
        outer: "2px 2px 6px 1px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        textDrk: "#e7e5e4",
        textMed: "#d6d3d1",
        textLit: "#a8a29e",
        fillDrkSolid: "#3f3f46",
        fillDrk: "#27272a",

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
