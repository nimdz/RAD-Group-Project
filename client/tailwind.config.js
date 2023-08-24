/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_50: "#e9ebf0",
        primary_100: "#bcc2d1",
        primary_200: "#9ba4ba",
        primary_300: "#6e7b9b",
        primary_400: "#516187",
        primary_500: "#263a69",
        primary_600: "#233560",
        primary_700: "#1b294b",

        secondary_50: "#eff9f6",
        secondary_100: "#ccede4",
        secondary_200: "#b3e4d7",
        secondary_300: "#90d7c5",
        secondary_400: "#7bd0ba",
        secondary_500: "#5ac4a9",
        secondary_600: "#52b29a",
      },
    },
  },
  plugins: [],
};
