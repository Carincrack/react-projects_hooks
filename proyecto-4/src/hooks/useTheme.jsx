import { createContext, useContext, useState } from 'react';

// Crear el contexto de tema
const ThemeContext = createContext();

// Proveedor de tema como componente
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // Tema inicial: oscuro

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
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