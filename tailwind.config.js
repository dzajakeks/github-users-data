/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        md: '992px',
        mobile: '500px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dracula'],
  },
};
