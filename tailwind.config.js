/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      height: {
        'cusH': '800px',
        'cusH2': '1200px',
      },
    },
    
    fontFamily: {
      signature: ['Great Vibes'],
    },
  },
  plugins: [],
};
