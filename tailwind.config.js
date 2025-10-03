/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nasa: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0b3d91',  // NASA Blue
          600: '#082f70',
          700: '#06244f',
          800: '#04182e',
          900: '#020c1d',
        },
      },
    },
  },
  plugins: [],
}
