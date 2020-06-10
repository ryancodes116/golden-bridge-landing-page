import React from 'react';
import styles from '../styles/Detail.module.css';

const Detail = ({ image, alt, title, text, marginRight }) => {
  return (
    <div className={styles.detail}>
      <img className={styles.image} src={image} alt={alt} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Detail;
