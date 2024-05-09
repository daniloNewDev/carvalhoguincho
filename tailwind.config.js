/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#390A0996',
        black1: '#03030392',
        black2: '#03030396',

      }
    },
  },
  plugins: [],
}

