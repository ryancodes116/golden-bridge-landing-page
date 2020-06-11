import React from 'react';
import styles from '../styles/Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLandmark,
  faHandHoldingUsd,
  faBook,
  faCar,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className={styles.services}>
      <a className={styles.service} href="#taxes">
        <FontAwesomeIcon className={styles.icon} icon={faLandmark} />
        <p className={styles.text}>Taxes</p>
      </a>

      <a className={styles.service} href="#insurance">
        <FontAwesomeIcon className={styles.icon} icon={faHandHoldingUsd} />
        <p className={styles.text}>Insurance</p>
      </a>

      <a className={styles.service} href="#bookkeeping">
        <FontAwesomeIcon className={styles.icon} icon={faBook} />
        <p className={styles.text}>Bookkeeping</p>
      </a>

      <a className={styles.service} href="#auto">
        <FontAwesomeIcon className={styles.icon} icon={faCar} />
        <p className={styles.text}>Auto Registration</p>
      </a>
    </div>
  );
};

export default Services;
