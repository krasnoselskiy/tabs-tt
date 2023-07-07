/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xl: "19px",
        base: "17px",
        sm: "15px",
      },
      colors: {
        "primary-blue": "#00a1f1",
        "primary-black": "#000",
        "primary-grey": "#2C3F52",
        "secondary-grey": "#6B7886",
        "grey-light": "#abb2ba",
        "grey-lighter": "#e9ebed",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
