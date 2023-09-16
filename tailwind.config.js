/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#1a202c', // Color de fondo del tema oscuro
        'light': '#ffffff', // Color de fondo del tema claro
      },
      textColor: {
        'dark': '#ffffff', // Color de texto del tema oscuro
        'light': '#000000', // Color de texto del tema claro
      },
    },
  },
  plugins: [],
}

