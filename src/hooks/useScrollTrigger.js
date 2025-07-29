import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useScrollTrigger = ({
  triggerOptions = {},
  animation = {}
} = {}) => {
  const ref = useRef();

  useEffect(() => {
    gsap.from(ref.current, {
      ...animation,
      scrollTrigger: {
        trigger: ref.current,
        ...triggerOptions
      }
    });
  }, []);

  return { ref };
};