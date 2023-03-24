/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        primary: "#e11931",
        secondary: "#50A584",
        lightGray: "#f8f9fa",
        gray: "#4a4b4f",
      },

      fontSize: {
        huge: 'clamp(2rem, 6vw, 3rem)',
      },

      fontFamily: {
        Dmserif : ['DM Serif Display','serif'],
        monument:['Monument Extended', 'Helvetica',' Arial',' sans-serif']
      }

    },

    container: {
      center: true,
      padding:'1rem',
      },

  },
  plugins: [],
}
