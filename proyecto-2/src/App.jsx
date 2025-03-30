import React from 'react';
import { useTimer } from './hooks/useTimer';
import './index.css';

function App() {
  const { time, isRunning, reset, toggleRunning } = useTimer();

  // Función para determinar el color del temporizador
  const getTimeColor = () => {
    if (time > 10) return '#10b981'; // Verde para tiempos mayores a 10
    if (time > 0) return '#6366f1'; // Indigo para tiempos positivos
    return '#ef4444'; // Rojo para cero
  };

  return (
    <div className="counter-container">
      {/* Título con efecto destacado */}
      <h1>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Temporizador con useEffect
        </span>
      </h1>

      {/* Descripción */}
      <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-md mx-auto">
        Un ejemplo simple del Hook useEffect para manejar un temporizador en React.
      </p>

      {/* Temporizador con efectos visuales */}
      <div
        className="contador"
        style={{
          color: getTimeColor(),
          textShadow: `0 0 10px ${getTimeColor()}40`, // Sombra sutil con opacidad
          borderBottom: `3px solid ${getTimeColor()}`,
        }}
      >
        {time}
      </div>

      {/* Controles */}
      <div className="button-group">
        <button
          onClick={toggleRunning}
          className={`px-5 py-2.5 text-white rounded-lg transition-all ${
            isRunning
              ? 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
              : 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
          }`}
        >
          {isRunning ? 'Pausar' : 'Reanudar'}
        </button>
        <button
          onClick={reset}
          className="px-5 py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all"
        >
          Reiniciar
        </button>
      </div>

      {/* Información adicional */}
      <div className="mt-8 text-xs text-slate-400 dark:text-slate-500">
        <p>React useEffect Demo • v1.0.0</p>
      </div>
    </div>
  );
}

export default App;