import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={classNames('container', styles.footerContent)}>
        <div className={styles.text}>
          <h2 className={styles.logo}>Golden Coast</h2>
          <a
            className={classNames('btn', styles.btn)}
            href="mailto:golcen@yahoo.com"
          >
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Email
            Us
          </a>
        </div>

        <p className={styles.copyright}>
          © Golden Coast Financial Services. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
