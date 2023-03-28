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
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
}
