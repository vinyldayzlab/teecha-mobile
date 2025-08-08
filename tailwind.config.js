/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  safelist: [
    "text-h1",
    "text-h2",
    "text-h3",
    "text-h4",
    "text-h5",
    "text-h6",
    "text-body1",
    "text-body2",
    "text-subtitle1",
    "text-subtitle2",
    "text-caption",
    "text-overline",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["barlow", "sans-serif"],
        "barlow-bold": ["barlow-bold", "sans-serif"],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.25", fontWeight: "700" }],
        h2: ["1.875rem", { lineHeight: "1.375", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.375", fontWeight: "600" }],
        h4: ["1.25rem", { lineHeight: "1.5", fontWeight: "500" }],
        h5: ["1.125rem", { lineHeight: "1.5", fontWeight: "500" }],
        h6: ["1rem", { lineHeight: "1.625", fontWeight: "400" }],
        body1: ["1.125rem", { lineHeight: "1.625", fontWeight: "400" }],
        body2: ["1rem", { lineHeight: "1.625", fontWeight: "400" }],
        subtitle1: ["1rem", { lineHeight: "1.375", fontWeight: "600" }],
        subtitle2: ["0.875rem", { lineHeight: "1.375", fontWeight: "600" }],
        caption: ["0.75rem", { lineHeight: "1.375", fontWeight: "400" }],
        overline: [
          "0.75rem",
          {
            lineHeight: "1.375",
            fontWeight: "600",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          },
        ],
      },
      colors: {
        primary: "#144552",
        secondary: "#15132",
        accent: "#203912",
        neutral: {
          100: "#FFFFFF", // white
          300: "#F8FAFB", // background
          500: "#E5E5E5", // divider
          700: "#4A5568", // grey - secondary text
          800: "#202020", // dark background
          900: "#000000", // black
        },
      },
    },
  },
  plugins: [],
};
