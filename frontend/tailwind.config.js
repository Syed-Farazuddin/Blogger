/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["'Roboto'", "sans - serif"],
    },
    extend: {
      colors: {
        primary: "#1565D8",
        darK: {
          hard: "#0D2436",
          soft: "#183B56",
          light: "#5A7184",
        },
      },
      screens: {
        md: "700px",
        lg: "1000px",
        sm: "300px",
      },
    },
  },
  plugins: [],
};
