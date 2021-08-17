// this file does not trigger rebuilds, must restart server!
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },

  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        'sans-serif',
      ],
    },

    colors: {
      secondary: '#1c1c1cff',
      primary: '#fafafaff',
      black: '#111111ff',
      red: colors.red,
      gray: colors.trueGray
    },

    boxShadow: {
      DEFAULT: '0 -5px 25px -5px rgba(0, 0, 0, .85), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },

  variants: {},

  plugins: [],
}