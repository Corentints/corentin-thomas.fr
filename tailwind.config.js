/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(-5px)' },
        }
      },
      animation: {
        wave: 'wave 2s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
