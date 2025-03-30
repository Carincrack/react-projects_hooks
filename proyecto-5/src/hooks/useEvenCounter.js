import { useState, useCallback } from 'react';

export function useEvenCounter() {
  const [count, setCount] = useState(1);

  // Memorizar la función de incremento usando useCallback
  const incrementIfEven = useCallback(() => {
    setCount(prev => (prev % 2 === 0 ? prev + 1 : prev));
  }, []); // Sin dependencias, la función se crea una sola vez

  return { count, incrementIfEven };
}