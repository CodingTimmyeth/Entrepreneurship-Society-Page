/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'IPad': '481px',
      'Tablet': '768px',
      'MiniPC': '900px',
      'Desktop': '1024px',
      'BigScreens': '1440px',
    },
    extend: {
      colors: {
        'PrimaryColor': '#002e5a',
      },
      fontFamily: {
        'spaceGrotesk': ['Space Grotesk', 'sans-serif']
      },
    },
  },
  plugins: [],
}

