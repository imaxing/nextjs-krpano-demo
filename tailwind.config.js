/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media",
  plugins: [require("tailwindcss-safe-area")],
  theme: {
    extend: {
      boxShadow: { debug: "0 0 0 1px red" },
    },
  },
};
