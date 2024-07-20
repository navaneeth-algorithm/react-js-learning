/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        morning: '#FFFAE3',
        afternoon: '#FFD700',
        night: '#2C3E50',
        textMorning: '#333',
        textAfternoon: '#333',
        textNight: '#fff'
      },
      keyframes: {
        dayToAfternoon: {
          '0%': { backgroundColor: '#FFFAE3' },
          '100%': { backgroundColor: '#FFD700' },
        },
        afternoonToNight: {
          '0%': { backgroundColor: '#FFD700' },
          '100%': { backgroundColor: '#2C3E50' },
        },
      },
      animation: {
        dayToAfternoon: 'dayToAfternoon 1s ease-in-out',
        afternoonToNight: 'afternoonToNight 1s ease-in-out',
      }
    }
  },
  plugins: [],
}
