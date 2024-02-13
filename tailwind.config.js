/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./dist/*.html'],
  content: ["./client/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: ["tailwindcss ,autoprefixer"],
}

