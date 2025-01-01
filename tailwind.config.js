/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
          "ABeeZee": ["ABeeZee", "serif"]
      },
      boxShadow: {
        "yes": "0 3px 10px 0px rgba(0, 0, 0, .3)"
      },
  },
  },
  plugins: [],
};
