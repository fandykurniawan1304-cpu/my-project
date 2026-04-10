/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          lg: "1120px",
          xl: "1230px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#0A66C2",
          dark: "#084E96",
        },
      },
      boxShadow: {
        smooth: "0 10px 30px rgba(0,0,0,0.08)",
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};