/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heycomic: ['heycomic', 'sans-serif'],
        'heroes-legend': ['heroes-legend', 'sans-serif'],
        'heroes-legend-hollow': ['heroes-legend-hollow', 'sans-serif'],
        mainstay: ['mainstay', 'sans-serif'],
        'woliu-maners': ['woliu-maners', 'sans-serif'],
        nunito: ['nunito', 'sans-serif'],
      },
      colors: {
        light: {
          primary: '#f0f8ff',  
          secondary: '#f6feff',  
          background: '#f0ffff',  
          border: '#80d4f0',  
        },
        dark: {
          primary: '#18181a',  
          secondary: '#292929',  
          background: '#1e293b',  
          surface: '#111827',  
          border: '#374151',  
        },
        primary: '#cdffd8',
        secondary: '#94b9ff'
      },
      scale: {
        90: "0.9", // Tamaño reducido para las imágenes en el fondo
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      zIndex: {
        full: '99999'
      }
    },
  },
  plugins: [],
}

