/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "dark-gray": "var(--dark-gray)",
        "p-pink": "var(--ppink)",
      },
    },
  },
  plugins: [],
};
