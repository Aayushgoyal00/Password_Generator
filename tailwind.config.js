/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["*"], // Adjust paths as needed
  darkMode: false,   // or 'media' or 'class'
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'back': "url('beautiful-sunset.png')",
        
      }
    },
  },
  plugins: [],
}

