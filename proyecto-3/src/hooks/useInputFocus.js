import { useRef } from 'react';

export function useInputFocus() {
  // Crear una referencia para el input
  const inputRef = useRef(null);

  // Función para enfocar el input
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return { inputRef, focusInput };
}