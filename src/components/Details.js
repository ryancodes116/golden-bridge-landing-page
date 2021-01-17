import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';
import Detail from './Detail';
import online from '../images/icon-online.svg';
import budgeting from '../images/icon-budgeting.svg';
import onboarding from '../images/icon-onboarding.svg';
import api from '../images/icon-api.svg';

const Details = () => {
  return (
    <div className={styles.details}>
      <div className={classNames('container', styles.detailsContent)}>
        <div className={styles.description}>
          <h2 className={styles.title}>Why choose Golden Bridge?</h2>
          <p className={styles.subtitle}>
            We leverage decades of professional experience to turn any financial
            situation into a favorable one. Control your finances like never
            before. Our office is located in Orange County. You can find us in
            the city of Anaheim, CA.
          </p>
        </div>
        <div className={styles.services}>
          <Detail
            image={online}
            alt="credit card icon"
            title="Affordable Pricing"
            // text="Receive professional service from proven experts at an affordable price. Great service doesn't need to break the bank."
          />
          <Detail
            image={budgeting}
            alt="phone icon"
            title="Convenient Scheduling"
            // text="Have a busy schedule? No problem. We work around your schedule to make sure you're taken care of as efficiently as possible."
          />
          <Detail
            image={onboarding}
            alt="referral icon"
            title="Frequently Referred"
            // text="Our expertise and attention-to-detail is second to none, just ask our clients. Most of our business comes from good ol' fashioned referrals."
          />
          <Detail
            image={api}
            alt="technology icon"
            title="Modern Technology"
            // text="We enjoy working with the latest and greatest technology. Our modern software makes sure you get the greatest return on investment."
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
