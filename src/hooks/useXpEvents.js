import { useState, useCallback } from 'react';

export function useXpEvents() {
  const [events, setEvents] = useState([]);

  const emit = useCallback((amount, x, y) => {
    const id = Date.now() + Math.random();
    setEvents(prev => [...prev, { id, amount, x, y }]);
    setTimeout(() => {
      setEvents(prev => prev.filter(e => e.id !== id));
    }, 1400);
  }, []);

  return { events, emit };
}
