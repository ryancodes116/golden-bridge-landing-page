import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Navbar.module.css';
import logo from '../images/golden-bridge-logo-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={classNames('container', styles.navbarContent)}>
        <img
          className={styles.logo}
          src={logo}
          alt="Golden Bridge Financial Services logo"
        />
        <a
          className={classNames('button', styles.btn)}
          href="tel: +17148377489"
        >
          Call 714-837-7489{' '}
          <FontAwesomeIcon className={styles.icon} icon={faPhone} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
