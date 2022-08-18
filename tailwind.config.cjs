/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('./assets/bgHero.jpg')",
        'hero-mobile': "url('./assets/bgHeroMobile.png')",
        'about-us-desktop': "url('./assets/aboutUs.jpg')",
        'about-us-mobile': "url('./assets/aboutUsMobile.jpg')",
        'catalog-desktop': "url('./assets/catalogDesktop.png')",
        'catalog-mobile': "url('./assets/catalogMobile.jpg')",
      },
      boxShadow: {
        topShadow: "0px -1px 20px 0px rgb(223, 223, 223)"
      },
      fontFamily: {
        spaceGroteskRegular: ["SpaceGrotesk"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}