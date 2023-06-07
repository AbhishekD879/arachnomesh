import React from 'react';
import './promo.css';
import bottleCapSvg from './../../assets/promo-cap.svg';
import bottleBottom from './../../assets/promo-bottle.svg';
import Header from '../Header/Header';

const BottleCap = () => {
  return (
    <div className="bottle-cap flex justify-center items-center">
      <img src={bottleCapSvg} alt="bottle cap" />
    </div>
  );
};

const BottleBottom = () => {
  return (
    <>
      <div className="bottle-bottom flex justify-center items-center">
        <img src={bottleBottom} alt="bottle bottom" />
      </div>
      <button className="btn know-more">KNOW MORE</button>
    </>
  );
};

const Promo = () => {
  return (
    <section>
      <Header />
      <section className="promo-container">
        <BottleCap />
        <div className="elipse">
          <h1 className="elipse-text">
            Self Cleaning bottle
            <br />
            In 60 Seconds
            <br />
            <span>
              Hit refresh with the intelligently clean bottle built for
              adventure.
            </span>
          </h1>
        </div>
        <BottleBottom />
      </section>
    </section>
  );
};

export default Promo;
