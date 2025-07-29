/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["barlow", "sans-serif"],
        "barlow-bold": ["barlow-bold", "sans-serif"],
      },
      colors: {
        primary: "#030014",
        secondary: "#15132",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
        },
        dark: {
          100: "#221F3D",
        },
        accent: "#203912",
      },
    },
  },
  plugins: [],
};
