import React from 'react';
import classNames from 'classnames';
import styles from '../styles/ServiceInfo.module.css';

import Service from './Service';
import ReverseService from './ReverseService';
import Bookkeeping from './Bookkeeping';

import taxes from '../images/tax-service-test.webp';
import insurance from '../images/insurance-service-test.webp';
import bookkeeping from '../images/bookkeeping-service-test.webp';
import registration from '../images/registration-service-test.webp';

const ServiceInfo = () => {
  return (
    <div className={classNames('container', styles.serviceInfo)}>
      <div id="taxes">
        <Service
          image={taxes}
          alt="open folder with tax documents and a calculator sitting on top of a desk"
          title="Taxes"
          text="At Golden Bridge Financial Services, we are dedicated to a high level of excellence in the preparation of your individual taxes. To deliver the best value, our team stays up to day with the ever-changing tax laws by taking education classes year-round. We are certified by the Internal Revenue Service (IRS) and the California Tax Education Council (CTEC)."
          subtext="Services we offer include but are not limited to:"
          service1="Tax Preparation"
          service1Text="- for individuals, families, and self-employed "
          service2="ITIN Services"
          service2Text="- application assistance or ITIN renewal service"
          service3="Tax Consulting"
          service3Text="- we take our time in asking the right questions and understanding your financial situation to give you the most tax breaks possible"
          service4="Electronic Tax Filing Services"
          service4Text=""
          service5="Tax Refund"
          service5Text="- Option for Check or Direct Deposit for quicker tax refund deposit
"
        />
      </div>
      <div id="insurance">
        <ReverseService
          image={insurance}
          alt="man in a suit holding a paper that says 'Are You Covered?'"
          title="Insurance"
          text="COMING SOON. IF YOU HAVE ANY QUESTIONS PLEASE CALL OR EMAIL."
          spanishText="VINIENDO MUY PRONTO, SI TIENE ALGUNA PREGUNTA POR FAVOR LLAME O ENVÍE UN CORREO ELECTRÓNICO."
        />
      </div>
      <div id="bookkeeping">
        <Bookkeeping
          image={bookkeeping}
          alt="man and a woman looking over financial documents at the kitchen table"
          title="Bookkeeping"
          text="COMING SOON. IF YOU HAVE ANY QUESTIONS PLEASE CALL OR EMAIL"
          spanishText="VINIENDO MUY PRONTO, SI TIENE ALGUNA PREGUNTA POR FAVOR LLAME O ENVÍE UN CORREO ELECTRÓNICO."
        />
      </div>
      <div id="auto">
        <ReverseService
          image={registration}
          alt="person filling out auto registration papers with car keys and a license plate on the desk"
          title="Auto Registration"
          text="COMING SOON. IF YOU HAVE ANY QUESTIONS PLEASE CALL OR EMAIL"
          spanishText="VINIENDO MUY PRONTO, SI TIENE ALGUNA PREGUNTA POR FAVOR LLAME O ENVÍE UN CORREO ELECTRÓNICO."
        />
      </div>
    </div>
  );
};

export default ServiceInfo;
