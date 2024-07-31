/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png}",
    "./tailwind.config.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        museo: ["MuseoModerno", "sans-serif"],
      },
      colors: {
        'blue': {
          100: '#71D5F4'
        },
        'gray': {
          100: '#616F74',
          50: '#3A4649'
        },
      },
      screens:{
        'iphone' : '375px'

      }
    },
  },
  plugins: [],
}

