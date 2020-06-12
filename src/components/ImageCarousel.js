import React from 'react';
import styles from '../styles/Carousel.module.css';

import Carousel from 'react-bootstrap/Carousel';

import taxes from '../images/taxes.jpg';
import insurance from '../images/insurance.jpg';
import bookkeeping from '../images/bookkeeping.jpg';
import car from '../images/car.jpg';

const ImageCarousel = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
        <img className="d-block w-100" src={taxes} alt="taxes" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={insurance} alt="insurance" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bookkeeping} alt="bookkeeping" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={car} alt="car" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
