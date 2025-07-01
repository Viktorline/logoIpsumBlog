/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '360px',
      tablet: '720px',
      desktop: '1280px',
    },
    extend: {},
  },
  plugins: [],
}
