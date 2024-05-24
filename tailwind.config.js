/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cyan':colors.cyan,
        'teal':colors.teal,
        'bs-purple':'#614391',
        'vs-purple':'#2d2736',
        'bg-1-nos':'#8ca0c9',
        'bg-2-nos':'#8ecbc5',
        'footer-bg':'#ffffff19',
        'bg-teste':'#111827',
        'bg-head-curr':'#b7fff0',
      }
    },
  },
  plugins: [],
}

