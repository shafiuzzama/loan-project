/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add all file extensions you use
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
  ],
};
