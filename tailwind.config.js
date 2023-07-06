/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "17px",
        sm: "15px",
      },
      colors: {
        "primary-blue": "#00a1f1",
        "primary-black": "#000",
        "primary-grey": "#2C3F52",
        "secondary-grey": "#6B7886",
        "primary-grey-light": "#abb2ba",
        "primary-grey-lighter": "#e9ebed",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "85v": "85vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
