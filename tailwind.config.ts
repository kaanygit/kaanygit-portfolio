/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-color-1':'#022b63',
        'text-color-2':'#fff',
        'text-color-3':'#3d535f',
        'text-color-4':'#DCDDE0',
        'dark-color-1':'#222831',
        'dark-color-2':'#0F1624',
        'dark-color-3':'#101C35',
        'twitter-color':' #00acee',
        'linkedin-color':'#0a66c2',
        'html5-color':'#e34c26',
        'css3-color':'#2962ff',
        'javascript-color':'#FFD600',
        'react-color':'#61DBFB',
        'redux-color':'#7E57C2',
        'php-color':'#777BB3',
        'python-color':'#306998',
        'tailwind-color':'#087ea4',
        'firebase-color':'#FFA611',
        'mongodb-color':'#589636',
        'nodejs-color':'#215732',
        'typescript-color':'#007acc',
        'button-color':'#3d535f'
      },
      boxShadow:{
        'buttonxl':'0 15px 10px rgba(0, 0, 0, 0.4)',
        'deneme': '0px 0px 6px 1px rgba(255, 255, 255, 0.301)',
      },
    },
    screens: {
      'sm': '350px', // Ekran boyutu 550 piksel ve daha küçükse (mobil)
      'smd':'550px',
      'md': '768px', // Ekran boyutu 768 piksel ve daha küçükse (tablet)
      'lg': '1024px', // Ekran boyutu 1024 piksel ve daha küçükse (küçük ekranlı bilgisayar)
      'xl': '1280px', // Ekran boyutu 1280 piksel ve daha küçükse (orta ekranlı bilgisayar)
      '2xl': '1536px', // Ekran boyutu 1536 piksel ve daha küçükse (büyük ekranlı bilgisayar)
    },
  },
  plugins: [],
})