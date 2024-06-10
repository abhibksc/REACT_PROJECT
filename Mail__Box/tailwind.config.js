
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
      })
    },
  ]

}


