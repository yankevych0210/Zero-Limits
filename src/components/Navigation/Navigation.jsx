import { useScrollProgress } from '../../hooks/useScrollProgress';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const progress = useScrollProgress();
  const navRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <nav ref={navRef} className={styles.nav}>
      <div className={styles.logo}>ZERO LIMITS</div>
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </nav>
  );
};