/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          blue: '#426780',
        },
        leaf: {
          green: '#39A84F',
        },
        brand: {
          blue: '#426780',
          green: '#39A84F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
