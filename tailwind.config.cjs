/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('./assets/bgHero.webp')",
        'hero-mobile': "url('./assets/bgHeroMobile.webp')",
        'about-us-desktop': "url('./assets/aboutUs.webp')",
        'about-us-mobile': "url('./assets/aboutUsMobile.webp')",
        'catalog-desktop': "url('./assets/catalogDesktop.webp')",
        'catalog-mobile': "url('./assets/catalogMobile.webp')",
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