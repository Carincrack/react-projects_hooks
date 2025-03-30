import React from 'react';
import { useCounterReducer } from './hooks/useCounterReducer.js';
import './index.css';

function App() {
  const { count, increment, decrement, reset } = useCounterReducer();

  return (
    <div className="counter-container">
      <h1>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Contador con useReducer
        </span>
      </h1>

      <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-md mx-auto">
        Ejemplo de useReducer para manejar el estado de un contador.
      </p>

      <div className="contador">{count}</div>

      <div className="button-group">
        <button onClick={decrement} className="btn btn-decrement">
          Decrementar
        </button>
        <button onClick={reset} className="btn btn-reset">
          Resetear
        </button>
        <button onClick={increment} className="btn btn-increment">
          Incrementar
        </button>
      </div>

      <div className="mt-8 text-xs text-slate-400 dark:text-slate-500">
        <p>React useReducer Demo • v1.0.0</p>
      </div>
    </div>
  );
}

export default App;
