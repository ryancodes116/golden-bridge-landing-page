import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Header.module.css';
import ImageCarousel from './ImageCarousel';
import Services from './Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <ImageCarousel />

          <div className={classNames('container', styles.headerText)}>
            <h1 className={styles.title}>Next generation financial services</h1>
            <p className={styles.text}>
              Take control of your financial situation. Golden Coast Financial
              Services is your one-stop-shop for accounting, taxes,
              book-keeping, and much more.
            </p>
            <a
              className={classNames('button', styles.btn)}
              href="tel: +17148377489"
            >
              Call For Your Free Estimate{' '}
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            </a>
          </div>
        </div>

        <Services className={classNames('container', styles.services)} />
      </div>
    </div>
  );
};

export default Header;
