/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFB606',
        secondary: '#2a4856',
        pseudo: '#ffffff',
        primaryDark: '#333333',
        primaryLight:'#f0f4fa',
        secondaryLight: '#8f908f',
        lightGreen: '#82d16f',
        lightBlue: '#4489f3',
        lightYellow: '#ffb606',
        lightRed: '#dd4b39',
        black: '#111111',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
      },
    },
    screens: {
      max: '400px',
      sm: '600px',
      mid: {'min': '780px', 'max': '959px'},
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },
  },
  plugins: [],
};
