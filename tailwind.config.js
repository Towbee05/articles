/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dark-blue": "#6d7f97",
        "greyish-blue":"#9eafc2",
        "light-greyish-blue" :"#ecf2f8",
        "dark-greyish-blue":"#48556a"
      },
      fontSize:{
        "default":["13px", "20px"]
      },
      fontFamily:{
        "default-family": '"Manrope", sans-serif'
      },
      borderRadius:{
        "custom-border" : "10px"
      },
      screens:{
        "xs" : {
          "min" : "750px"
        }
      },
      gridTemplateColumns:{
        "custom-grid":'40% 1fr'
      }
    },
  },
  plugins: [],
}

