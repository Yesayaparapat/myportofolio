/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#f9f4ef',
        'headline': '#020826',
        'paragraph': '#716040',
        'link': '#8c7851',
        'primary-btn': '#8c7851',
        'btn-text': '#fffffe',
        'ill-stroke': '#020826',
        'ill-secondary': '#eaddcf',
        'ill-main': '#fffffe',
        'ill-tertiary': '#f25042',
        'ill-highlight': '#8c7851',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}
