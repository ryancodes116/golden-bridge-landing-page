import React from 'react';
import styles from '../styles/Bookkeeping.module.css';

const Bookkeeping = ({ image, alt, title, text, spanishText }) => {
  return (
    <div className={styles.service}>
      <div className={styles.serviceContent}>
        <img className={styles.image} src={image} alt={alt} />
        <div className={styles.serviceText}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <p className={styles.spanishText}>{spanishText}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookkeeping;
