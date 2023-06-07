import React, {forwardRef, useEffect} from 'react';
import './smart-sip.css';
import sipBottle1 from './../../assets/sip-bottle-1.svg';
import sipBottle2 from './../../assets/sip-bottle-2.svg';
import sipBottle3 from './../../assets/sip-bottle-3.svg';
import sipBottle4 from './../../assets/sip-bottle-4.svg';

const SipBottle = forwardRef(
  ({sipImage, additionalStyles, bottleClass},ref) => {
    return (
      <img
        ref={ref}
        style={additionalStyles}
        className={'sip-bottle ' + bottleClass}
        src={sipImage}
        alt="sip bottle"
      />
    );
  },
);

const SmartSip = () => {
  const bottleContainer = React.useRef(null);
  const bottle1 = React.useRef(null);
  const bottle2 = React.useRef(null);
  const bottle3 = React.useRef(null);
  const bottle4 = React.useRef(null);
  useEffect(() => {
    const container = bottleContainer.current;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          console.log(entry);
          if (
            entry.isIntersecting &&
            entry.target.classList.contains('smart-sip-container')
          ) {
            bottle1.current.classList.add('bottle-1-animate');
            bottle2.current.classList.add('bottle-2-animate');
            bottle3.current.classList.add('bottle-3-animate');
            bottle4.current.classList.add('bottle-4-animate');
          }else{
            bottle1.current.classList.remove('bottle-1-animate');
            bottle2.current.classList.remove('bottle-2-animate');
            bottle3.current.classList.remove('bottle-3-animate');
            bottle4.current.classList.remove('bottle-4-animate');
          }
        });
      },
      {threshold: 0.5}, // Adjust the threshold as needed
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);
  return (
    <section
      ref={bottleContainer}
      className="smart-sip-container flex flex-col justify-center items-center">
      <div className="smart-sip-container-inner">
        <h1 className="smart-sip-title">
          A smart
          <br />
          way to sip
        </h1>
        <SipBottle
          ref={bottle1}
          sipImage={sipBottle1}
          bottleClass={'bottle-1'}
        />
        <SipBottle
          ref={bottle2}
          sipImage={sipBottle2}
          bottleClass={'bottle-2'}
        />
        <SipBottle
          ref={bottle3}
          sipImage={sipBottle3}
          bottleClass={'bottle-3'}
        />
        <SipBottle
          ref={bottle4}
          sipImage={sipBottle4}
          bottleClass={'bottle-4'}
        />
      </div>
    </section>
  );
};

export default SmartSip;
