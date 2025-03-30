import React from 'react';
import { ThemeProvider, useTheme } from './hooks/useTheme.jsx'; // Ajusta la importación
import './index.css';

function ThemeDisplay() {
  const { theme, toggleTheme } = useTheme();

  const getThemeColor = () => (theme === 'dark' ? '#6366f1' : '#10b981');

  return (
    <div className="counter-container">
      <h1>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Tema con useContext
        </span>
      </h1>
      <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-md mx-auto">
        Un ejemplo simple del Hook useContext para gestionar temas en React.
      </p>
      <div
        className="contador"
        style={{
          color: getThemeColor(),
          textShadow: `0 0 10px ${getThemeColor()}40`,
          borderBottom: `3px solid ${getThemeColor()}`,
        }}
      >
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </div>
      <div className="button-group">
        <button
          onClick={toggleTheme}
          className="px-5 py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all"
        >
          Cambiar a {theme === 'dark' ? 'Claro' : 'Oscuro'}
        </button>
      </div>
      <div className="mt-8 text-xs text-slate-400 dark:text-slate-500">
        <p>React useContext Demo • v1.0.0</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeDisplay />
    </ThemeProvider>
  );
}

export default App;