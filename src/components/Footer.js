import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={classNames('container', styles.footerContent)}>
        <h2 className={styles.logo}>Golden Coast</h2>
        <button className={classNames('btn', styles.btn)}>
          Schedule Appointment
        </button>
        <p className={styles.copyright}>
          © Golden Coast Financial Services. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
