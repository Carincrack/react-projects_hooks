import React from 'react';
import { usePrimeCounter } from './hooks/usePrimeCounter.js'; // Importamos desde .js
import './index.css';

function App() {
  const { count, isPrimeNumber, increment, decrement } = usePrimeCounter();

  // Color dinámico basado en si el número es primo
  const getCountColor = () => (isPrimeNumber ? '#10b981' : '#ef4444');

  return (
    <div className="counter-container">
      {/* Título con efecto destacado */}
      <h1>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Contador Primo con useMemo
        </span>
      </h1>

      {/* Descripción */}
      <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-md mx-auto">
        Un ejemplo simple del Hook useMemo para optimizar cálculos en React.
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

      {/* Texto indicando si es primo */}
      <p className="text-slate-300 mb-6">
        {isPrimeNumber ? 'Es Primo' : 'No es Primo'}
      </p>

      {/* Botones para incrementar y decrementar */}
      <div className="button-group">
        <button
          onClick={decrement}
          className="px-5 py-2.5 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all"
        >
          Decrementar
        </button>
        <button
          onClick={increment}
          className="px-5 py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all"
        >
          Incrementar
        </button>
      </div>

      {/* Información adicional */}
      <div className="mt-8 text-xs text-slate-400 dark:text-slate-500">
        <p>React useMemo Demo • v1.0.0</p>
      </div>
    </div>
  );
}

export default App;