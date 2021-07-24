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
  },

  variants: {},

  plugins: [],
}