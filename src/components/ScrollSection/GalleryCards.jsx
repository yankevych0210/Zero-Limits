import { useState, useEffect } from 'react';
import styles from './GalleryCards.module.css';



export const GalleryCards = ({ cards, onOpenModal }) => (
  <div className={styles.galleryWrap}>
    <div className={styles.cardsRow}>
      {cards.map((card, i) => (
        <div className={styles.card} key={card.name}>
          <div className={styles.cardName}>{card.name}</div>
          <div className={styles.cardRole}>{card.role}</div>
          <div className={styles.cardDesc}>{card.desc}</div>
          <button className={styles.cardBtn} onClick={() => onOpenModal(i)}>
            Watch video
          </button>
        </div>
      ))}
    </div>
  </div>
);