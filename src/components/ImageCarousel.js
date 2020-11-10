import React from 'react';
import styles from '../styles/Carousel.module.css';
import Carousel from 'react-bootstrap/Carousel';

import taxes from '../images/tax-image-test.webp';
import insurance from '../images/insurance-image-test.webp';
import bookkeeping from '../images/bookkeeping-image-test.webp';
import registration from '../images/registration-image-test.webp';

const ImageCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={taxes}
          alt="tax papers sitting on a desk"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={insurance}
          alt="smiling family driving in a car"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={registration}
          alt="hand holding a new license plate sticker in front of license plate"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bookkeeping}
          alt="business woman using a calculator at a desk"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
