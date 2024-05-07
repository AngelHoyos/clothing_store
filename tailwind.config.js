/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "backOfBeige_1": "#EADBC8",
      },
      fontFamily:{
        "Yellowtail": ["Yellowtail", "cursive"],
        "OpenSans": ["Open Sans", "sans-serif"]
      },
      colors:{
        "textBeigeC": ["#EADBC8"],
        "ColorOfText_2": ["#FAF6F0"],
      },
      borderColor: {
        "borderColorNew_1": "#EADBC8",
      }
    }

  },
  plugins: [],
}