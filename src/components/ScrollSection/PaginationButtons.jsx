import React from 'react';
import styles from './PaginationButtons.module.css';

export const PaginationButtons = ({ onPrev, onNext, showPrev, showNext }) => (
  <div className={styles.paginationContainer}>
    {showPrev && (
      <button className={`${styles.hexButton} ${styles.prev}`} onClick={onPrev} aria-label="Назад">
        <span className={styles.arrowLeft} />
      </button>
    )}
    {showNext && (
      <button className={`${styles.hexButton} ${styles.next}`} onClick={onNext} aria-label="Вперёд">
        <span className={styles.arrowRight} />
      </button>
    )}
  </div>
); 