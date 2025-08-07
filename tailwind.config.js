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
        h1: ["2.25rem", { lineHeight: "1.25", fontWeight: "700" }], // text-4xl + font-bold + leading-tight
        h2: ["1.875rem", { lineHeight: "1.375", fontWeight: "600" }], // text-3xl + font-semibold + leading-snug
        h3: ["1.5rem", { lineHeight: "1.375", fontWeight: "600" }], // text-2xl + font-semibold + leading-snug
        h4: ["1.25rem", { lineHeight: "1.5", fontWeight: "500" }], // text-xl + font-medium + leading-normal
        h5: ["1.125rem", { lineHeight: "1.5", fontWeight: "500" }], // text-lg + font-medium + leading-normal
        h6: ["1rem", { lineHeight: "1.625", fontWeight: "400" }], // text-base + font-normal + leading-relaxed
        body1: ["1rem", { lineHeight: "1.625", fontWeight: "400" }], // text-base + font-normal + leading-relaxed (with font-barlow)
        body2: ["0.875rem", { lineHeight: "1.625", fontWeight: "400" }], // text-sm + font-normal + leading-relaxed (with font-barlow)
        subtitle1: ["1rem", { lineHeight: "1.375", fontWeight: "600" }], // text-base + font-semibold + leading-snug (with font-barlow-bold)
        subtitle2: ["0.875rem", { lineHeight: "1.375", fontWeight: "600" }], // text-sm + font-semibold + leading-snug (with font-barlow-bold)
        caption: ["0.75rem", { lineHeight: "1.375", fontWeight: "400" }], // text-xs + font-normal + leading-snug (with font-barlow)
        overline: [
          "0.75rem",
          {
            lineHeight: "1.375",
            fontWeight: "600",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          },
        ], // text-xs + font-semibold + uppercase + tracking-wide + leading-snug (with font-barlow)
      },
      colors: {
        // primary: "#0B2D21",
        primary: "#178F9F",
        secondary: "#15132",
        accent: "#203912",
        neutral: {
          100: "#FFFFFF", // white
          300: "#F8FAFB", // background
          500: "#E5E5E5", // divider
          700: "#4A5568", // grey - secondary text
          900: "#000000", // black
        },
      },
    },
  },
  plugins: [],
};
