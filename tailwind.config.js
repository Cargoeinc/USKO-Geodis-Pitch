/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'usko-blue': '#ce1126',
        'geodis-blue': '#0036b1',
        'geodis-dark-blue': '#002a85',
      },
    },
  },
  plugins: [],
} 