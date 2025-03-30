import React, { createContext, useContext, useState } from 'react';

// Crear el contexto de tema
const ThemeContext = createContext();

// Proveedor de tema como componente, sin JS
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // Tema inicial: oscuro

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Usar React.createElement en lugar de JS
  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, toggleTheme } },
    children
  );
}

// Hook personalizado para usar el contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
}