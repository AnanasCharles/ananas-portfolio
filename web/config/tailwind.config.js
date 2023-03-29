/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        javascript: '#f0db4f',
        python: '#306998',
        redwoodjs: '#9A4945',
        react: '#61DBFB',
        graphql: '#e10098',
      },
      rotate: {
        360: '360deg',
      },
      scale: {
        112: '1.12',
        88: '0.88',
        87: '0.87',
        85: '0.85',
        80: '0.8',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
}
