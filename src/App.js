import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero/Hero';
import { ScrollSection } from './components/ScrollSection/ScrollSection';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import { GalleryCards } from './components/ScrollSection/GalleryCards';
import { InspirationCards } from './components/ScrollSection/InspirationCards';
import styles from './components/ScrollSection/GalleryCards.module.css'; 
import stylesInspiration from './components/ScrollSection/InspirationCards.module.css';

const sections = [
  { id: 'about', bgImage: 'section1-bg.jpg', title: '', text: '' },
  { id: 'gallery', bgImage: 'section2-bg.jpg', title: 'ГАЛЕРЕЯ ВОЗМОЖНОСТЕЙ', text: 'Откройте для себя новые горизонты' },
  { id: 'inspiration', bgImage: 'section3-bg.jpg', title: 'САД ВДОХНОВЕНИЯ', text: 'Где идеи обретают форму' },
  {
    id: 'future',
    bgImage: 'section4-bg.jpg',
    title: 'A new path forged.',
    text: 'A most refreshing discovery.'
  },
  { 
    id: 'innovators', 
    bgImage: 'section5-bg.jpg', 
    title: 'ИННОВАТОРЫ', 
    text: 'Лидеры будущего' 
  }
];

const cards = [
  {
    name: 'HANNAH BEACHLER',
    role: 'Production Designer',
    desc: 'Bringing your whole self to every project',
    video: require('./assets/videos/hannah.mp4'),
  },
  {
    name: 'Jasmine Alexia',
    role: 'Storyboard Artist',
    desc: 'Create the world you want to see',
    video: require('./assets/videos/jasmine.mp4'),
  },
  {
    name: 'Alícia Díaz',
    role: 'Sculptor',
    desc: 'When one door closes, carve a new one',
    video: require('./assets/videos/diaz.mp4'),
  },
];

const newCards = [
  {
    name: 'Naya',
    role: 'Black Female Engineer',
    desc: 'Software engineer',
    video: require('./assets/videos/naya.mp4'), 
  },
  {
    name: 'Reyna',
    role: 'Noriega',
    desc: 'Visual artist & author',
    video: require('./assets/videos/reyna.mp4'),
  },
  {
    name: 'Joan',
    role: 'Marie',
    desc: 'Space engineer',
    video: require('./assets/videos/joan.mp4'),
  },
];

function App() {
  const [scrollLocked, setScrollLocked] = useState(true);
  const [modal, setModal] = useState(null);
  const [modalCard, setModalCard] = useState(null);

  if (typeof window !== 'undefined' && scrollLocked) {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 50);
  }, []);

  useEffect(() => {
    if (scrollLocked) {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [scrollLocked]);

  useEffect(() => {
    if (scrollLocked || modal !== null || modalCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [scrollLocked, modal, modalCard]);

  const scrollToSection = (idx) => {
    const section = document.getElementById(sections[idx].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {scrollLocked && (
        <Hero scrollLocked={scrollLocked} unlockScroll={() => setScrollLocked(false)} />
      )}
      {!scrollLocked && <Navigation />}
      {sections.map((section, idx) => (
        <ScrollSection
          key={section.id}
          id={section.id}
          bgImage={section.bgImage}
          showPrev={idx > 0}
          showNext={idx < sections.length - 1}
          onPrev={() => scrollToSection(idx - 1)}
          onNext={() => scrollToSection(idx + 1)}
          className={!scrollLocked ? '' : 'section-hidden'}
        >
          <div className="section-content">
            {section.id === 'gallery' ? (
              <GalleryCards cards={cards} onOpenModal={setModal} />
            ) : section.id === 'inspiration' ? (
              <InspirationCards onOpenModal={setModalCard} />
            ) : section.id === 'future' ? (
              <>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                <video
                  src={require('./assets/videos/tvc.mp4')}
                  controls
                  style={{
                    marginTop: '2em',
                    borderRadius: '1em',
                    maxWidth: '640px',
                    width: '100%',
                    boxShadow: '0 0 32px #00ffb044, 0 0 8px #00ffb0'
                  }}
                />
              </>
            ) 
            : section.id === 'innovators' ? ( 
        <GalleryCards cards={newCards} onOpenModal={setModal} />
      ) :
            (
              <>
                {section.title && <h2>{section.title}</h2>}
                {section.text && <p>{section.text}</p>}
              </>
            )}
          </div>
        </ScrollSection>
      ))}
      <Footer />
      {modal !== null && (
        <div className={styles.modalOverlay} onClick={() => setModal(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalVideoBg}></div>
            <button className={styles.closeBtn} onClick={() => setModal(null)} aria-label="Закрыть">
              <svg className={styles.closeIcon} viewBox="0 0 20 20"><line x1="4" y1="4" x2="16" y2="16" /><line x1="16" y1="4" x2="4" y2="16" /></svg>
            </button>
            <video src={cards[modal].video} controls autoPlay className={styles.modalVideo} />
          </div>
        </div>
      )}
      {modalCard && (
        <div className={stylesInspiration.modalOverlay} onClick={() => setModalCard(null)}>
          <div
            className={stylesInspiration.modalContent}
            onClick={e => e.stopPropagation()}
          >
            <button
              className={stylesInspiration.closeBtn}
              onClick={() => setModalCard(null)}
              aria-label="Закрыть"
            >
              ×
            </button>
            <div className={stylesInspiration.cardName}>{modalCard.name}</div>
            <div className={stylesInspiration.cardRole}>{modalCard.quote}</div>
            <div style={{marginTop: 16, fontSize: '1.05rem'}}>{modalCard.desc}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;