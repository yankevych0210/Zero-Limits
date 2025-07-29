import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import styles from './Footer.module.css';

export const Footer = () => {
  const { ref } = useScrollTrigger({
    triggerOptions: {
      start: "top 80%",
      toggleActions: "play none none none"
    },
    animation: {
      opacity: 1,
      y: 0,
      duration: 1
    }
  });

  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>ZERO LIMITS</div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#about">Home</a></li>
            <li><a href="#gallery">Team</a></li>
            <li><a href="#inspiration">Inspiration</a></li>
            <li><a href="#future">Future</a></li>
          </ul>
        </nav>
        {}
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Zero Limits Experience. All rights reserved.
        </div>
      </div>
    </footer>
  );
};