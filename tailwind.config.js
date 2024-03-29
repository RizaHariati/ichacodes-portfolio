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
      DEFAULT: "1200ms",
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      animation: {
        newPulse: "newPulse 1s linear 1",
        mainImage: "mainImage 1s ease-in-out 1  ",
        mainImageX: "mainImageX 0.5s linear 1",
        mainImageYMin: "mainImageYMin 0.5s linear 1",
        popImage: "popImage 0.2s ease-in 1",
        projectEnter: "projectEnter 0.5s ease-in 1",
        projectExit: "projectExit 0.5s ease-in 1",
      },
      keyframes: {
        projectEnter: {
          "0%": {
            transform: "translateY(-30%)",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
            opacity: "0",
          },

          "100%": {
            transform: "translateY(0%)",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
            opacity: "1",
          },
        },
        projectExit: {
          "0%": {
            transform: "translateY(10%)",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
            opacity: "0",
          },

          "100%": {
            transform: "translateY(0%)",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
            opacity: "1",
          },
        },
        newPulse: {
          "0%": {
            opacity: "0.2",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            opacity: "1",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
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
        mainImageYMin: {
          "0%": {
            transform: "translateY(-30%)",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
            opacity: "0.2",
          },
          "100%": {
            transform: "translateY(0)",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
            opacity: "1",
          },
        },
        mainImage: {
          "0%": {
            transform: "translateY(10%)",
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
            opacity: "1",
          },
        },
        popImage: {
          "0%": {
            AnimationTimeline: "cubic-bezier(0.8, 0, 1, 1)",
            scale: "0.4",
          },
          "100%": {
            AnimationTimeline: "cubic-bezier(0, 0, 0.2, 1)",
            scale: "1",
          },
        },
      },
      boxShadow: {
        outer: "2px 2px 6px 1px #0f172abe",
      },
      colors: {
        textDrk: "#1e293b",
        textMed: "#484943",
        textLit: "#7C7D6D",
        fillDrkSolid: "#F3F4EF",
        fillDrk: "#BFBAB7",
        fillDrkhover: "#1e293b",
        fillMed: "#334155",
        fillLit: "#64748b",
        fillDrkactive: "#FDFCFB",
        darkBackgroundOpacity: "#c8cabc94",
        button: "#7C7D6D",
        buttonHover: "#96988A",
        buttonActive: "#545750",
        accent: "#d4a99c",
        accentHover: "#C99383",
        accentActive: "#dfbeb5",
        accentOpacity: "#dfbeb55e",
        shadow: "#1e293b",
      },
    },
  },

  plugins: [],
};
