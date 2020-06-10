import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';
import logo from '../images/logo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={classNames('container', styles.footerContent)}>
        <img className={styles.logo} src={logo} alt="Golden Coast logo" />
        {/* <h2 className={styles.logo}>Golden Coast</h2> */}
        <div className={styles.footerContact}>
          <div className={styles.contactMethods}>
            <div className={styles.contact}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className={styles.contactIcon}
                id={styles.locationIcon}
              />
              <p className={styles.contactText}>
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
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
