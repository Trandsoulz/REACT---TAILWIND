/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          500: "#d4d7dc",
          400: "#e3e5e8",
          300: "#ebedef",
          200: "#f2f3f5",
        },
      },
    },
  },
  plugins: [],
};
