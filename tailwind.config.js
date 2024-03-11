/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        brown: '#8B4513',
        foot: '#673ab7',
        contact: '#c9bde0',
        mainContent: '#dfdee2',
      },
      fontSize:{
        '15': '15px',
        '1': '1px',
      },
      fontFamily: {
        bb: ['Ballo Bhai 2','sans-serif'],
      },
      border: {
        '1': '1px',
      },
      height: {
        '19': '19rem',
      },
      width: {
        '40': '40rem',
      },
    },
  },
  plugins: [],
}
