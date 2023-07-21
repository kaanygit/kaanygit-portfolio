/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-color-1':'#022b63',
        'text-color-2':'#fff',
        'text-color-3':'#3d535f',
        'dark-color-1':'#222831',
        'twitter-color':' #00acee',
        'linkedin-color':'#0a66c2',
        'html5-color':'#e34c26',
        'css3-color':'#2962ff',
        'javascript-color':'#FFD600',
        'react-color':' #087ea4',
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
        'buttonxl':'0 15px 10px rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [],
})