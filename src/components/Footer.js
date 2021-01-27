import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';
import logo from '../images/golden-bridge-logo-2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// Get year for footer copyright
const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={classNames('container', styles.footerContent)}>
        <img
          className={styles.logo}
          src={logo}
          alt="Golden Coast Financial Services logo"
        />
        <div className={styles.footerContact}>
          <div className={styles.contactMethods}>
            <div className={styles.contact}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className={styles.contactIcon}
                id={styles.locationIcon}
              />
              <p className={styles.contactText}>
                1203 S. Western Ave Anaheim, CA 92804
              </p>
            </div>
            <div className={styles.contact}>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className={styles.contactIcon}
              />
              <p className={styles.contactText}>(714) 837-7489</p>
            </div>
            <div className={styles.contact}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={styles.contactIcon}
              />
              <p className={styles.contactText}>golcen@yahoo.com</p>
            </div>
          </div>

          <a
            className={classNames('button', styles.btn)}
            href="mailto:golcen@yahoo.com"
          >
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Email
            Us
          </a>
        </div>

        <p className={styles.copyright}>
          © {currentYear} Golden Bridge Financial Services. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
