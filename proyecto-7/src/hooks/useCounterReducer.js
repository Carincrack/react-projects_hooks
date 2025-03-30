import { useReducer } from 'react';

// Definir acciones
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};

// Reducer: controla cómo cambia el estado
function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

// Hook personalizado
export function useCounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return {
    count: state.count,
    increment: () => dispatch({ type: ACTIONS.INCREMENT }),
    decrement: () => dispatch({ type: ACTIONS.DECREMENT }),
    reset: () => dispatch({ type: ACTIONS.RESET }),
  };
}
