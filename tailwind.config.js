/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif']
      },
      fontWeight:{
        normal: '400',
        medium: '500',
        semiBold: '700',
        bold: '900'
      },
      colors: {
        darkCyan: '#0E8784',
        darkCyanHover: '#66D2CF',
        darkGreyBlue: '#333D4B',
        paleOrange: '#FDD6BA',
        lightCream: '#FEFCF7',
        grey: '#83888F',
      },
      backgroundImage: {
        heroMobile: "url(images/home/mobile/image-hero-coffeepress.jpg)"
      }
    },
  },
  plugins: [],
}

