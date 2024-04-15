const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero": "url('../../public/Group 528.png')",
        "card1": "url('../../public/Rectangle 93.png')",
        "card2": "url('../../public/Rectangle 94.png')",
        "card3": "url('../../public/Rectangle 96.png')",
        "card4": "url('../../public/Rectangle 98.png')",
      },
      fontFamily: {
        "helvetica" : ['HELVETICA', 'sans-serif'],
        "jet": ['JET', 'monospace'],
        "sf": ['SF', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'big-bounce': 'full-bounce 8s ease-in-out infinite',
      },
      keyframes: {
        'full-bounce': {
          '0%, 100%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(-135px)'},
        }
      }
    },
  },
  plugins: [],
};
