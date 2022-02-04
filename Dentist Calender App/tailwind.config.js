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
      gridTemplateColumns:{
        layout:'75px repeat(7,minmax(0,1fr))'
      }
      
    },
  },
  plugins: [],
}
