import React from 'react';
import { useCounter } from './hooks/useCounter';

function App() {
  const { count, savedCounts, increment, decrement, reset, saveCount } = useCounter();

  // Función para determinar el color del contador basado en su valor
  const getCountColor = () => {
    if (count > 0) return '#10b981'; // verde para positivos
    if (count < 0) return '#ef4444'; // rojo para negativos
    return '#6366f1'; // indigo para cero
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center p-6">
      <div className="counter-container">
        {/* Título con efecto de destaque */}
        <h1 className="text-3xl font-bold text-indigo-400 mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Control de Estado
          </span>
        </h1>
        
        {/* Descripción */}
        <p className="text-slate-300 dark:text-slate-400 mb-8 max-w-md mx-auto">
          Una demostración profesional del Hook useState en React para gestionar y visualizar estados.
        </p>

        {/* Contador con efectos visuales */}
        <div 
          className="contador" 
          style={{ 
            color: getCountColor(),
            textShadow: '0 0 10px rgba(99, 102, 241, 0.3)',
            borderBottom: `3px solid ${getCountColor()}`,
          }}
        >
          {count}
        </div>

        {/* Controles principales */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <button
            onClick={decrement}
            className="px-5 py-2.5 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all"
          >
            Disminuir
          </button>
          <button
            onClick={increment}
            className="px-5 py-2.5 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all"
          >
            Aumentar
          </button>
        </div>

        {/* Controles secundarios */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={reset}
            className="px-5 py-2.5 bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all"
          >
            Restablecer
          </button>
          <button
            onClick={saveCount}
            className="px-5 py-2.5 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all"
          >
            Guardar Valor
          </button>
        </div>

        {/* Sección de valores guardados con animación */}
        {savedCounts.length > 0 && (
          <div className="saved-counts">
            <h2 className="text-lg font-semibold text-slate-200 dark:text-slate-300 mb-3">
              Historial de Valores
            </h2>
            <div className="saved-counts-list">
              {savedCounts.map((savedCount, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 dark:text-indigo-200 rounded-full text-sm font-medium"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animation: 'fadeIn 0.3s ease-in-out forwards'
                  }}
                >
                  {savedCount}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Información adicional */}
        <div className="mt-8 text-xs text-slate-400 dark:text-slate-500">
          <p>React useState Demo • v1.0.0</p>
        </div>
      </div>
      
      {/* Estilos adicionales para animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;