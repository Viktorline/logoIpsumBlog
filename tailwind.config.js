/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '800px',
      desktop: '1400px',
    },
    extend: {},
  },
  plugins: [],
}
