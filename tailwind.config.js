/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./dist/*.html'],
  content: ["./dist/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: ["tailwindcss ,autoprefixer"],
}

