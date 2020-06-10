import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Navbar.module.css';
import logo from '../images/logo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={classNames('container', styles.navbarContent)}>
        <img className={styles.logo} src={logo} alt="Golden Coast logo" />
        {/* <h3 className={styles.logo}>Golden Coast</h3> */}
        <a className={classNames('btn', styles.btn)} href="tel: +17148377489">
          Call 714-837-7489{' '}
          <FontAwesomeIcon className={styles.icon} icon={faPhone} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
