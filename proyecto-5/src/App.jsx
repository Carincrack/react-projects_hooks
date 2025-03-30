import React from 'react';
import { useEvenCounter } from './hooks/useEvenCounter.js'; // Importamos desde .js
import './index.css';

function App() {
  const { count, incrementIfEven } = useEvenCounter();

  // Color dinámico basado en si el número es par o impar
  const getCountColor = () => (count % 2 === 0 ? '#10b981' : '#ef4444');

  return (
    <div className="counter-container">
      {/* Título con efecto destacado */}
      <h1>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Contador Par con useCallback
        </span>
      </h1>

      {/* Descripción */}
      <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-md mx-auto">
        Un ejemplo simple del Hook useCallback para optimizar funciones en React.
      </p>

      {/* Contador con efectos visuales */}
      <div
        className="contador"
        style={{
          color: getCountColor(),
          textShadow: `0 0 10px ${getCountColor()}40`,
          borderBottom: `3px solid ${getCountColor()}`,
        }}
      >
        {count}
      </div>

      {/* Botón para incrementar si es par */}
      <div className="button-group">
        <button
          onClick={incrementIfEven}
          className="px-5 py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all"
        >
          Incrementar si es Par
        </button>
      </div>

      {/* Información adicional */}
      <div className="mt-8 text-xs text-slate-400 dark:text-slate-500">
        <p>React useCallback Demo • v1.0.0</p>
      </div>
    </div>
  );
}

export default App;