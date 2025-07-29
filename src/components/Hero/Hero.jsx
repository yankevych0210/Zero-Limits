import { useRef, useEffect, useState } from 'react';
import styles from './Hero.module.css';

export const Hero = ({ scrollLocked, unlockScroll }) => {
  const heroRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 50);
    setTimeout(() => window.scrollTo(0, 0), 200);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToAbout = () => {
    document.body.style.overflow = '';
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        unlockScroll();
      }, 800);
    }, 50);
  };

  return (
    <section ref={heroRef} className={styles.hero} style={scrollLocked ? { pointerEvents: 'auto' } : {}}>
      {}
      <div 
        className={styles.background}
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
        }}
      />
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <div className={styles.heroLogosRow}>
          <img src={require('../../assets/images/sprite.png')} alt="Sprite" className={styles.heroLogoImg} />
          <span className={styles.heroLogosCross}>
            <svg width="12" height="12" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.35453" y1="0.75631" x2="7.35453" y2="7.75631" stroke="white" strokeWidth="1.5" />
              <line x1="7.35526" y1="0.686073" x2="0.355262" y2="7.68607" stroke="white" strokeWidth="1.5" />
            </svg>
          </span>
          <img src={require('../../assets/images/marvel-theater.png')} alt="Marvel" className={styles.heroLogoImg} />
        </div>
        <div className={styles.heroLogoSvg}>
          <span className={styles.heroLogoThe}>THE</span>
          <span className={styles.heroLogoOf}>OF</span>
          {}
          <svg className="logo-big" enableBackground="new 0 0 713.6 191.1" viewBox="0 0 713.6 191.1" xmlns="http://www.w3.org/2000/svg" ><clipPath id="a"><path d="m0 0h713.6v91.7h-713.6z"></path></clipPath><clipPath id="b"><path d="m0 97h713.6v94.2h-713.6z"></path></clipPath><g><g className="green-text-drop-shadow"><g clipPath="url(#a)"><g fill="#fff"><path d="m374 85.1v-.8-.2-.5l-.4-.2c-4-2.2-5.4-4.8-8.7-12l-31-67-.7.3.7-.3-.3-.4h-.5-.4-.5l-.2.5-29 64.8c-3.3 7.3-6.1 11.9-10.2 14.1l.4.7-.4-.7-.4.2v.5.2.8h.8 18.3.8v-.8-.2-.5l-.5-.2c-3.1-1.4-5.1-4-5.1-7 0-2.4.7-4.8 1.7-7l4-9.5h30.9l5.4 11.9c1.1 2.6 1.7 4.5 1.7 6.3 0 2.2-1.4 3.9-4.6 5.3l.3.7-.3-.7-.5.2v.5.2.8h.8 27zm-46.5-60 13.7 30.2h-26.8z"></path><path d="m443.6 60.7h-.5l-.2.4c-3.3 6.3-6.5 11.2-10.5 14.5s-8.7 5-15.2 5h-15.7v-60.6c0-3.7.3-6.4 1.2-8.4s2.3-3.5 4.8-4.7l.4-.2v-.6-.2-.8h-.8-26.2-.8v.8.2.5l.4.2.3-.7-.3.7c2.5 1.2 3.9 2.7 4.8 4.7.9 2.1 1.2 4.8 1.2 8.4v50.2c0 3.7-.3 6.4-1.2 8.4s-2.3 3.5-4.8 4.7l.3.7-.3-.7-.4.2v.5.2.8h.8 59.2.7l.1-.7 3.7-22.8.1-.9h-.9-.2z"></path><path d="m230.6 85.1h.8v-.8-.2-.5l-.4-.2-.3.7.3-.7c-2.5-1.2-3.9-2.7-4.8-4.7-.9-2.1-1.2-4.8-1.2-8.4v-23.7h40v23.6c0 3.7-.3 6.4-1.2 8.4s-2.3 3.5-4.8 4.7l-.4.2v.5.2.8h.8 26.2.8v-.8-.2-.5l-.4-.2-.3.7.3-.7c-2.5-1.2-3.9-2.7-4.8-4.7-.9-2.1-1.2-4.8-1.2-8.4v-50.2c0-3.7.3-6.4 1.2-8.4s2.3-3.5 4.8-4.7l-.3-.7.3.7.4-.2v-.6-.2-.8h-.8-26.2-.8v.8.2.5l.4.2c2.5 1.2 3.9 2.7 4.8 4.7.9 2.1 1.2 4.8 1.2 8.4v21.8h-40v-21.7c0-3.7.3-6.4 1.2-8.4s2.3-3.5 4.8-4.7l-.3-.7.3.7.4-.2v-.6-.2-.8h-.8-26.2-.8v.8.2.5l.4.2c2.5 1.2 3.9 2.7 4.8 4.7.9 2.1 1.2 4.8 1.2 8.4v50.2c0 3.7-.3 6.4-1.2 8.4s-2.3 3.5-4.8 4.7l-.4.2v.5.2.8h.8 26.2z"></path><path d="m508.3 85.1h.7l.1-.7 3.7-22.8-.8-.1.8.1.1-.9h-.9-.2-.5l-.2.4c-3.3 6.3-6.5 11.2-10.5 14.5s-8.7 5-15.2 5h-15.7v-60.6c0-3.7.3-6.4 1.2-8.4s2.3-3.5 4.8-4.7l.4-.2v-.6-.2-.8h-.8-26.3-.8v.8.2.5l.4.2.3-.7-.3.7c2.5 1.2 3.9 2.7 4.8 4.7.9 2.1 1.2 4.8 1.2 8.4v50.2c0 3.7-.3 6.4-1.2 8.4s-2.3 3.5-4.8 4.7l.3.7-.3-.7-.4.2v.5.2.8h.8 59.3z"></path></g></g><g clipPath="url(#b)"><g fill="#fff"><path d="m83.5 103-48.1 70h48.3v12.5h-75.6l48-70h-45.1v-12.5zm65.7 0v12.5h-37.4v21.7h35.8v12.5h-35.8v23.3h38.2v12.5h-54.1v-82.5zm41.8 0c7.8 0 14.1 2.1 19 6.4s7.3 9.9 7.3 16.8c0 4.7-1.2 8.8-3.7 12.3-2.4 3.5-6 6.2-10.7 8.2 2.6 1.4 5 3.3 7 5.8 2 2.4 4.6 6.6 7.6 12.3 5 10 8.8 16.9 11.2 20.7h-17.7c-1.2-1.8-2.9-4.7-5-8.7-4.6-8.8-7.9-14.7-10-17.7-2.1-3.1-4.2-5.2-6.1-6.5-2-1.3-4.2-1.9-6.8-1.9h-5.8v34.8h-15.9v-82.5zm-3.6 35.2c4.2 0 7.4-1 9.8-3.1s3.6-4.9 3.6-8.6c0-3.8-1.2-6.6-3.5-8.4-2.4-1.9-5.7-2.8-10.1-2.8h-9.9v23h10.1zm85.7-36.2c8.5 0 16.2 1.8 23 5.3s12.3 8.6 16.4 15.2 6.1 13.9 6.1 21.8c0 7.7-2 14.9-6 21.5-3.9 6.6-9.4 11.7-16.3 15.4-6.9 3.6-14.7 5.4-23.3 5.4-8.5 0-16.3-1.8-23.3-5.6-7-3.7-12.4-8.8-16.3-15.2-3.9-6.5-5.8-13.7-5.8-21.5 0-7.6 1.9-14.7 5.8-21.3 3.9-6.7 9.3-11.8 16.1-15.5s14.7-5.5 23.6-5.5zm-29.1 42.3c0 5.5 1.2 10.4 3.7 14.8s5.9 7.8 10.3 10.2 9.5 3.6 15.1 3.6c8.5 0 15.4-2.7 20.8-8 5.5-5.3 8.2-12.2 8.2-20.5 0-5.5-1.2-10.4-3.7-14.8-2.4-4.4-5.9-7.8-10.4-10.2-4.4-2.4-9.5-3.6-15.1-3.6s-10.6 1.2-15.1 3.7c-4.4 2.4-7.9 5.8-10.3 10.2-2.3 4.2-3.5 9.1-3.5 14.6zm123.4-41.3v70h40v12.5h-56v-82.5zm67.3 0v82.5h-15.9v-82.5zm26.9 0 27.1 32.5 27.1-32.5h14.2v82.5h-15.9v-57.9h-.5l-23.9 29h-2.2l-23.9-29h-.5v57.9h-15.9v-82.5zm98.1 0v82.5h-15.9v-82.5zm84.5 0v12.5h-29.3v70h-15.9v-70h-29.3v-12.5zm34.8-1c8 0 15.8 2 23.2 6v14.2c-8.5-5.2-16.1-7.7-22.7-7.7-4 0-7.2.8-9.4 2.4-2.2 1.5-3.4 3.6-3.4 6.2 0 3.1 2.1 6 6.3 8.6 1.2.8 5.7 3 13.6 6.6 6.8 3.2 11.7 6.7 14.6 10.6 3 3.9 4.5 8.6 4.5 14.1 0 7.1-2.6 12.8-7.7 17.2-5.1 4.3-11.7 6.5-19.8 6.5-5.3 0-9.8-.6-13.6-1.7-3.8-1.2-8-3.2-12.8-6v-15.7c8.8 7.3 17.1 11 24.9 11 3.9 0 7-.8 9.4-2.5s3.6-3.9 3.6-6.7c0-3.8-2.1-6.9-6.3-9.3-3.5-1.9-7.9-4.2-13.4-6.8-6.5-3-11.4-6.4-14.6-10.3s-4.8-8.5-4.8-13.7c0-6.9 2.6-12.4 7.7-16.5 5.5-4.5 12.3-6.5 20.7-6.5z"></path><g><path d="m267.6 137.8h13v13h-13z"></path></g></g></g></g><defs><filter id="filter_ZR8JFX0IZ" x="-20" y="-20" width="753.6" height="231.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="13.3759"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0619048 0 0 0 0 0.433333 0 0 0 0 0 0 0 0 .7 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="fx1"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2.30619"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 1 0 0 0 0 0.533333 0 0 0 0.5 0"></feColorMatrix><feBlend mode="normal" in2="fx1" result="fx2"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="fx2" result="shape"></feBlend></filter></defs></g></svg>
          {}
        </div>
        <div className={styles.heroSubtitle}>
          EXPLORE NEW PATHS.<br />FIND YOUR GIFT.
        </div>
        <button className={styles.btn} onClick={handleScrollToAbout}>
          ENTER <span className={styles.ctaArrow}>&rarr;</span>
        </button>
      </div>
    </section>
  );
};