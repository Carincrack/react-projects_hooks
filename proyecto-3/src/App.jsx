import React from 'react';
import { useInputFocus } from './hooks/useInputFocus';
import './index.css';

function App() {
  const { inputRef, focusInput } = useInputFocus();

  return (
    <div className="counter-container">
      {/* Título con efecto destacado */}
      <h1>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Enfocador con useRef
        </span>
      </h1>

      {/* Descripción */}
      <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-md mx-auto">
        Un ejemplo simple del Hook useRef para enfocar un campo de texto en React.
      </p>

      {/* Campo de texto con estilo similar a .contador */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe aquí..."
        className="contador"
        style={{
          color: '#fff',
          textShadow: '0 0 10px rgba(99, 102, 241, 0.3)',
          borderBottom: '3px solid #6366f1',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />

      {/* Botón para enfocar */}
      <div className="button-group">
        <button
          onClick={focusInput}
          className="px-5 py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all"
        >
          Enfocar Input
        </button>
      </div>

      {/* Información adicional */}
      <div className="mt-8 text-xs text-slate-400 dark:text-slate-500">
        <p>React useRef Demo • v1.0.0</p>
      </div>
    </div>
  );
}

export default App;