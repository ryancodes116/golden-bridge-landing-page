import React from 'react';
import classNames from 'classnames';
import styles from '../styles/ServiceInfo.module.css';
import Service from './Service';
import taxes from '../images/taxes.jpg';
import insurance from '../images/insurance.jpg';
import bookkeeping from '../images/bookkeeping.jpg';

const ServiceInfo = () => {
  return (
    <div className={classNames('container', styles.serviceInfo)}>
      <div id="taxes">
        <Service
          image={taxes}
          alt="open folder with tax documents sitting on top of desk"
          title="Taxes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend, nunc ac viverra molestie, sem est maximus urna, a lobortis est metus ut lacus."
        />
      </div>
      <div id="insurance">
        <Service
          image={insurance}
          alt="open folder with tax documents sitting on top of desk"
          title="Insurance"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend, nunc ac viverra molestie, sem est maximus urna, a lobortis est metus ut lacus."
        />
      </div>
      <div id="bookkeeping">
        <Service
          image={bookkeeping}
          alt="open folder with tax documents sitting on top of desk"
          title="Bookkeeping"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend, nunc ac viverra molestie, sem est maximus urna, a lobortis est metus ut lacus."
        />
      </div>
    </div>
  );
};

export default ServiceInfo;
