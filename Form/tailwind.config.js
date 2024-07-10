/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#fffae3',
        'labelColor-black' : '#000000',
        'labelColor-red' : '#ff1a17',
        'headings' : '#b5a970',

        
      }
    },
  },
  plugins: [],
}

