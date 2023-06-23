/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainNavColor: '#010001',
        mainAboutColor: '#18191B',
        mainTxtColor: '#ECEEF2',
        mainBlurColor: '#2B3037',
        mainApproachColor: '#D5D7D6',
        mainFooterColor: '#101110',
        secFooterColor: '#0B0B0B',
        getInTouch: '#7E7F7E',
        ourServicesSec: '#212324',
      },
      // for fixed bg we need to use this method
      backgroundImage: {
        contactUsBg: 'url(../../public/yannick.jpg)',
        ourAppBg: 'url(../../public/ourApBG.jpg)',
      },
      backgroundColor: {
        backFilter: 'rgba(0,0,0,0.9)',
      },
    },
  },
  plugins: [],
};
