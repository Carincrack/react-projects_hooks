import { useState, useEffect } from 'react';

export function useTimer() {
  const [time, setTime] = useState(0); // Tiempo en segundos
  const [isRunning, setIsRunning] = useState(true); // Estado de ejecución

  // useEffect para manejar el temporizador
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000); // Incrementa cada segundo

      // Función de limpieza
      return () => clearInterval(interval);
    }
  }, [isRunning]); // Dependencia: solo se ejecuta si isRunning cambia

  // Funciones para controlar el temporizador
  const reset = () => setTime(0);
  const toggleRunning = () => setIsRunning(prev => !prev);

  return { time, isRunning, reset, toggleRunning };
}