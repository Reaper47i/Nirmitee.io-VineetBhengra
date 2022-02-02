module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        popins: ['Poppins', 'sans-serif'],
      },
      gridTemplateRows:{
        layout:'60px repeat(7, minmax(65px,1fr)) 60px'
      }
    },
  },
  plugins: [],
}
