import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useParallax = (speed = 0.1) => {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      y: -(window.innerHeight * speed),
      scrollTrigger: {
        scrub: true
      }
    });
  }, [speed]);

  return { ref };
};