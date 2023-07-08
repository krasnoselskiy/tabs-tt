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
        grey: {
          primary: "#2C3F52",
          secondary: "#6B7886",
          light: "#abb2ba",
          lighter: "#e9ebed",
        },
        "primary-blue": "#00a1f1",
        "primary-black": "#000",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
