const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      indigo: colors.indigo,
      'mydarkcolor': '#201A1A',
      'yellow-color': '#DABA10',
      'blue-color': '#101123',
      'gray-color': '#C4C4C4',
      'gray-color-50': '#C8BBBB',
      'gray-color-100': '#5E5555',
      'gray-color-150': '#353333',
      'gray-color-230': '#675F5F',
      'gray-color-250': '#837575',
      'blue-color-50': '#14066C',
      'blue-color-100': '#063557',
      'blue-color-150': '#130C3F',
      'blue-color-200': '#064EBA',
      'blue-color-250': '#084184',
      'white-color-100': '#F5EEEE'
    },
    extend: {
      width: {
        '600': '600px',
        '97': '34rem',
        '101': '85.99%',
        '103':'90%',
        '9.10': '75.82%',
        '6.5':'31%',
        '102': '79.5%'
      },
      fontFamily: {
        'postcolombo': ['Palette Mosaic'],
        'prompt': ['Extra-light 200']
      },
      height: {
        '275': '275px',
        '295':'360px',
      },
      maxHeight:{
        '111':'8.6rem'
      },
      margin: {
        '-16.5': '-4.5rem',
        '-16.3': '-4.4rem',
        '-95.5':'-21.5rem',
        '600': '71rem',
        '63': '17rem',
        '46': '11.55rem',
        '-46': '-11.55rem',
        '98': '32rem',
        '97': '41rem',
        '98.10':'28.30rem',
        '97.45': '39rem',
        '96.50': '27rem',
        '95.5':'23rem',
        '100': '58rem',
        '99.3':'52rem',
        '99': '48rem',
        '99.2':'49rem',
        '99.5':'53rem',
        '101': '65rem'

      },
      padding: {
        '100': '30rem'
      },
      fontSize: {
        'lord': '3.65rem'
      }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
