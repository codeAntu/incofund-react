/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './html/**/*.{html}'],
  theme: {
    extend: {
      colors: {
        accent: '#FC5F0F',
      },
    },
  },
  plugins: [],
}
