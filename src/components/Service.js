import React from 'react';
import styles from '../styles/Service.module.css';

const Service = ({ image, alt, title, text }) => {
  return (
    <div className={styles.service}>
      <img className={styles.image} src={image} alt={alt} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Service;
