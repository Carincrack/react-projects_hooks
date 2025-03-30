import { useState, useMemo } from 'react';

// Función auxiliar para verificar si un número es primo (cálculo "costoso")
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export function usePrimeCounter() {
  const [count, setCount] = useState(0);

  // Memorizar el resultado de si el número es primo usando useMemo
  const isPrimeNumber = useMemo(() => {
    console.log('Calculando si es primo...'); // Para ver cuándo se ejecuta
    return isPrime(count);
  }, [count]); // Dependencia: se recalcula solo si count cambia

  // Funciones para incrementar y decrementar
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return { count, isPrimeNumber, increment, decrement };
}