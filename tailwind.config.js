// this file does not trigger rebuilds, must restart server!
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    fontFamily: {
      sans: [
        'Roboto',
        'sans-serif',
      ],
      mono: [
        'Roboto Slab',
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

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none"
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        },
        // fixes lazy loaded images flashing a broken image right before loading
        "img:not([src])": {
          "visibility": "hidden"
        }
      }
      addUtilities(newUtilities)
    })
  ]
}