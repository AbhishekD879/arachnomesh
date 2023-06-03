import React, { useRef, useEffect, useState } from 'react';
import './promo.css';
import bottleCapSvg from './../../assets/promo-cap.svg';
import bottleBottom from './../../assets/promo-bottle.svg';

const BottleCap = ({ imageSize }) => {
  return (
    <div className="bottle-cap">
      <img
        style={{ width: `${imageSize * 2}%` }}
        src={bottleCapSvg}
        alt="bottle cap"
        className="img-responsive"
      />
    </div>
  );
};

const BottleBottom = ({ imageSize }) => {
  return (
    <>
      <div className="bottle-bottom">
        <img
          src={bottleBottom}
          alt="bottle bottom"
          className="img-responsive"
          style={{ width: `${imageSize}%` }}
        />
      </div>
      <button className="btn know-more">KNOW MORE</button>
    </>
  );
};

const Promo = () => {
  const promoContainerRef = useRef(null);
  const elipseRef = useRef(null);
  const elipseSpanRef = useRef(null);
  const [elipseRadius, setElipseRadius] = useState(0);
  const [imageSize, setImageSize] = useState(100); // Initial image size

  useEffect(() => {
    const promoContainer = promoContainerRef.current;
    const promoContainerWidth = promoContainer.offsetWidth;
    const newImageSize = promoContainerWidth * 0.005; // Adjust the percentage as needed
    setImageSize(newImageSize);

    const resizeObserver = new ResizeObserver((entries) => {
      const newWidth = entries[0].contentRect.width;
      const newImageSize = newWidth * 0.06; // Adjust the percentage as needed
      setImageSize(newImageSize);
    });

    resizeObserver.observe(promoContainer);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const elipse = elipseRef.current;
    const elipseSpan = elipseSpanRef.current;
    const elipseWidth = elipse.offsetWidth;
    const fontSize = elipseWidth / 14; // Adjust the division factor as needed
    setElipseRadius(elipseWidth / 2);
    elipse.style.fontSize = `${fontSize}px`;
    elipseSpan.style.fontSize = `${fontSize / 1.5}px`;
  }, [imageSize]);

  return (
    <div className="promo-container" ref={promoContainerRef}>
      <BottleCap imageSize={imageSize} />
      <div className="elipse" ref={elipseRef}>
        <h1 className="elipse-text">
          Self Cleaning bottle
          <br />
          In 60 Seconds
          <br />
          <span ref={elipseSpanRef}>
            Hit refresh with the intelligently clean bottle built for adventure.
          </span>
        </h1>
      </div>
      <BottleBottom imageSize={imageSize} />
    </div>
  );
};

export default Promo;
