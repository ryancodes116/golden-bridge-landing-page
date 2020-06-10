import React from 'react';
import styles from '../styles/ReverseService.module.css';

const ReverseService = ({ image, alt, title, text }) => {
  return (
    <div>
      <div className={styles.service}>
        <div className={styles.serviceContent}>
          <img className={styles.image} src={image} alt={alt} />
          <div className={styles.serviceText}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReverseService;
