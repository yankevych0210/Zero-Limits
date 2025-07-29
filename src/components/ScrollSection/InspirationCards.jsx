import React from 'react';
import styles from './InspirationCards.module.css';

const cards = [
  {
    quote: '“WITNESS THE STRENGTH OF THE JABARI… FIRST-HAND!”',
    name: "M'BAKU",
    desc: `Behold the gifts of a great leader: determination, courage, and passion. M’Baku’s superhuman physical agility and strength are particularly impressive when combined with his superior mental agility—strategic, analytical, patient, and tenacious when met with obstacles. Do you think these characteristics would serve you well?`
  },
  {
    quote: '“JUST BECAUSE SOMETHING WORKS DOESN’T MEAN IT CAN’T BE IMPROVED.”',
    name: "SHURI",
    desc: `Both a problem solver and maker by nature, Shuri is a visionary, illuminator, decoder, explorer and avant-garde. She’s unapologetically bold in her role as a leader across the board—as a master engineer, designer, tech inventor, mathematician, and scientist. Her innovations are of incredible importance to her community. Perhaps when you look at Shuri, you see glimpses of yourself there as well.`
  },
  {
    quote: '“I AM LOYAL TO THAT THRONE, NO MATTER WHO SITS ON IT.”',
    name: "DORA MILAJE",
    desc: `Much can be gleaned from these elite warriors who provide protection and intel to protect the crown and country. Though known for being physically skilled in battle, their minds are also among their greatest weapons—overcoming and embracing adversity and solving problems as quickly as they arise. Do the Dora's gifts reflect yours?`
  }
];

export const InspirationCards = ({ onOpenModal }) => (
  <div className={styles.galleryWrap}>
    <div className={styles.cardsRow}>
      {cards.map((card, i) => (
        <div className={styles.card} key={card.name}>
          <div className={styles.cardName}>{card.name}</div>
          <div className={styles.cardRole}>{card.quote}</div>
          <div className={styles.cardDesc}>{card.desc}</div>
          <button
            className={styles.readMoreBtn}
            onClick={() => onOpenModal(card)}
          >
            Read more
          </button>
        </div>
      ))}
    </div>
  </div>
);