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
          primary: '#f0f8ff',  // Azul fuerte para el tema claro
          secondary: '#f6feff',  // Gris oscuro para texto secundario
          background: '#f0ffff',  // Fondo claro
          surface: '#ffffff',  // Para tarjetas o modales
          text: '#1f2937',  // Texto principal (negro oscuro)
          'text-muted': '#6b7280',  // Texto secundario/deshabilitado
          border: '#80d4f0',  // Bordes y líneas
          success: '#16a34a',  // Verde para éxito
          warning: '#f59e0b',  // Amarillo para advertencias
          error: '#dc2626',  // Rojo para errores
        },
        dark: {
          primary: '#18181a',  // Azul claro para contraste en tema oscuro
          secondary: '#292929',  // Gris claro para texto secundario
          background: '#1e293b',  // Fondo oscuro
          surface: '#111827',  // Para tarjetas o modales
          text: '#f1f5f9',  // Texto principal (blanco claro)
          'text-muted': '#9ca3af',  // Texto secundario/deshabilitado
          border: '#374151',  // Bordes y líneas
          success: '#22c55e',  // Verde para éxito
          warning: '#facc15',  // Amarillo para advertencias
          error: '#ef4444',  // Rojo para errores
        },
      },
      scale: {
        90: "0.9", // Tamaño reducido para las imágenes en el fondo
      },
    },
  },
  plugins: [],
}

