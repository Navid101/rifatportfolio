/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        fadeOrange:'#eea302',
        paleWhite:'#FFFFFF',
        darkBlack:'#000000',
        lightGray:'#f3f3f3'
      }
    },
  },
  plugins: [],
}
