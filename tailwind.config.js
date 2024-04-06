/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'black-fade': 'rgba(0, 0, 0, 0)'
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: theme => ({
        "hero-pattern": "url('/src/assets/herobg.png')",
        'fade-black': `linear-gradient(to bottom, ${theme('colors.black')} 0%, ${theme('colors.black-fade')} 100%)`,
      }),
    },
  },
  plugins: [],
};