import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={classNames('container', styles.navbarContent)}>
        <h3 className={styles.logo}>Golden Coast</h3>
        <button className={classNames('btn', styles.btn)}>
          Schedule Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
