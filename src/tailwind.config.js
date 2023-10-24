/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontSize: {
        'sm': '0.750rem',
        'base': '1rem',
        'xl': '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },


      fontFamily: {
        'heading': ['Noto Sans Elbasan', 'sans'],
        'body': ['Noto Sans Elbasan', 'sans'],
      },

      fontWeight: {
        'normal': '400',
        'bold': '700',
      },

      colors: {
        'text': '#140701',
        'background': '#fff8f5',
        'primary': '#f20707',
        'secondary': '#fdd6c4',
        'accent': '#ed0606',
       },


    },
  },
  variants: {},
  plugins: [],
}

