/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        'c-text':['Crimson Text','sans-serif']
      },
    },
  },
  plugins: [],
}
