import React from 'react';
import './footer.css';
import ioc1 from './../../assets/ioc1.svg';
import ioc2 from './../../assets/ioc2.svg';
import ioc3 from './../../assets/ioc3.svg';
import ioc4 from './../../assets/ioc4.svg';
import wave1 from './../../assets/wave-1.svg';
import wave2 from './../../assets/wave-2.svg';
import wave3 from './../../assets/wave-3.svg';
import wave4 from './../../assets/wave-4.svg';

const Footer = () => {
  const FOOTER_LINKS = [
    {
      heading: 'Help',
      items: ['FAQ', 'Review', 'My Account', 'Corporate', 'Contact Us'],
    },
    {
      heading: 'Shop',
      items: ['PureV', 'Gifts', 'Travel set', 'Accesories'],
    },
    {
      heading: 'About',
      items: ['Magazine', 'Press', 'Our Story', 'Tech'],
    },
  ];
  const FOOTER_WAVES = [
    {
      wave: wave1,
      waveClass: 'wave1',
      position: '0px',
    },
    {
      wave: wave2,
      waveClass: 'wave2',
      position: '100px',
    },
    {
      wave: wave3,
      waveClass: 'wave1',
      position: '200px',
    },
    {
      wave: wave4,
      waveClass: 'wave2',
      position: '300px',
    },
  ];
  const FOOTER_ICONS = [ioc1, ioc2, ioc3, ioc4];
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {FOOTER_LINKS.map((item, index) => (
            <Footerlink key={index} {...item} />
          ))}
        </div>
        <div className="footer-top-right">
          <p>Sign up for the newsletter</p>
          <div className="sign-up-btn-container">
            <input
              className="sign-up-input"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="btn">SignUp</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>Copyright Arachnomesh 2022</p>
        </div>
        <div className="footer-bottom-center">
          {FOOTER_ICONS.map((item, index) => (
            <FooterIcon key={index} icon={item} />
          ))}
        </div>
        <div className="footer-bottom-right">
          <p>T&C</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      {FOOTER_WAVES.map((item, index) => (
        <FooterWave key={index} {...item} />
      ))}
    </footer>
  );
};

export default Footer;

const FooterWave = ({wave, positon, waveClass}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${wave})`,
        position: 'absolute',
        bottom: positon,
      }}
      className={"footer-wave "+waveClass}></div>
  );
};

const Footerlink = ({heading, items}) => {
  return (
    <table>
      <thead>
        <strong>{heading}</strong>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <a href="/">{item}</a>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const FooterIcon = ({icon}) => {
  return (
    <div className="footer-icon">
      <img src={icon} alt="icon" />
    </div>
  );
};
