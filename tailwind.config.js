/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  screens: {
    xs: { min: "320px", max: "639px" },
    sm: { min: "640px", max: "767px" },
    md: { min: "768px", max: "1023px" },
    lg: { min: "1024px", max: "1279px" },
    xl: { min: "1280px", max: "1535px" },
  },
  // plugins: [require('tailwindcss-font-inter')]
};
