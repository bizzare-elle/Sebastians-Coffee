/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#27251F',
        'secondary': '#FAF9F6',
        'accent': '#6F4E37',
      },

      fontFamily: {
        'outfit': 'Outfit',
      }
      
    },
  },
  plugins: [],
}

