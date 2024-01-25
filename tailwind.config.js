/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#060417",
        first: "#a993fe",
        last: "#7e61e7",
        bordercolor: "#6751b9",
        background: "#130f2a",
      },
    },
  },
  plugins: [],
};
