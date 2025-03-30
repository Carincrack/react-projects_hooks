import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(0);
  const [savedCounts, setSavedCounts] = useState([]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);
  const saveCount = () => setSavedCounts(prev => [...prev, count]);

  return { count, savedCounts, increment, decrement, reset, saveCount };
}