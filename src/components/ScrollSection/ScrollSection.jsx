import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollSection.module.css';
import { PaginationButtons } from './PaginationButtons';

gsap.registerPlugin(ScrollTrigger);

export const ScrollSection = ({ id, bgImage, children, showPrev, showNext, onPrev, onNext, className }) => {
  const sectionRef = useRef();
  const contentRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      duration: 1
    });

    gsap.to(sectionRef.current, {
      backgroundPosition: "50% 30%",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
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

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`${styles.section} ${className || ''}`}
      style={{
        backgroundImage: `url(${require(`../../assets/images/${bgImage}`)})`,
        backgroundPosition: `calc(50% + ${mousePos.x * 30}px) calc(30% + ${mousePos.y * 30}px)`
      }}
    >
      <div className={styles.overlay} />
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
      {(showPrev || showNext) && (
        <PaginationButtons
          showPrev={showPrev}
          showNext={showNext}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </section>
  );
};