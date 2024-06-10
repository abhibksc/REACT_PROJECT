/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E65763', 
        secondary: '#080808', 
        // Add more custom colors as needed
      },
      fontFamily: {
        customFont: ['"Alex Brush"', "cursive"],
        // Add more custom font families as needed
      },
     
      
    },
  },
  plugins: [],
}

