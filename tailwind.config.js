const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green:colors.green,
      'mydarkcolor':'#201A1A',
      'yellow-color':'#DABA10',
    },
    fontFamily: {
      'postcolombo':['Palette Mosaic'],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
