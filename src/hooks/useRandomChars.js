import { useEffect, useRef } from 'react';

export const useRandomChars = (elements) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const intervals = useRef([]);

  useEffect(() => {
    elements.forEach((el, index) => {
      if (!el) return;
      
      const originalChar = el.textContent;
      let count = 0;
      const totalCycles = 10;
      
      intervals.current[index] = setInterval(() => {
        if (count >= totalCycles) {
          clearInterval(intervals.current[index]);
          el.textContent = originalChar;
          return;
        }
        
        el.textContent = chars[Math.floor(Math.random() * chars.length)];
        count++;
      }, 50);
    });

    return () => {
      intervals.current.forEach(interval => clearInterval(interval));
    };
  }, [elements]);
};