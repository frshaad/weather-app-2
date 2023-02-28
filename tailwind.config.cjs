/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        gray: '#9b9fa2',
        black: '#1d1e22',
        weakBlue: '#edf3f8',
        normalBlue: '#c4e2fe',
        strongBlue: '#24609c',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
};
