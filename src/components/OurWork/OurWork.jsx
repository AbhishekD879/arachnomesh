import React from 'react';
import './ourwork.css';
import quote2 from './../../assets/quots2.svg';
import quote4 from './../../assets/quots4.svg';
import quote6 from './../../assets/quots6.svg';
const OurWork = () => {
  return (
    <section className="our-work-container flex flex-col justify-around">
      <OurWorkTop />
      <OurWorkBottom />
    </section>
  );
};

export default OurWork;

const OurWorkBullet = ({title, description, databg}) => {
  return (
    <div
      data-bg={databg}
      className="our-work-bullet flex flex-col justify-center items-start">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
const QuoteImage = ({source}) => {
  return (
    <div className="quote-image flex justify-center items-center">
      <img src={source} alt="quote" />
    </div>
  );
};
const QuoteText = ({letter, quote}) => {
  return (
    <div
      data-bg={letter}
      className="quote-text-block flex flex-col justify-center items-center ">
      <h3>{quote}</h3>
    </div>
  );
};

const OurWorkTop = () => {
  const MY_WORK_BULLET = [
    {
      title: 'Get\nInspired',
      description: 'Satisfy all of your inspiration needs in \n one place. .',
    },
    {
      title: 'Nano \n Zero Filtration',
      description:
        'Nano Zero Filtration is a completely \n reimagined plant-based filter.',
    },
    {
      title: 'PureV \n Technology',
      description:
        'Proprietary PureV™ technology improves the \n quality of your water by preventing water.',
    },
    {
      title: 'Self-Cleaning \n Worry-Free',
      description:
        'Neutralizes up to 99%* of bacteria such \n as E.coli using PureV technology.',
    },
  ];
  return (
    <div className="our-work-top flex flex-wrap">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          height: '100%',
        }}>
        <h1 className="our-work-top-text">
          Our Work <span className="blink">_</span>
        </h1>
      </div>
      <div className="our-work-top-bullet-container">
        {MY_WORK_BULLET.map((item, index) => (
          <OurWorkBullet
            key={index}
            databg={`0${index + 1}`}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

const OurWorkBottom = () => {
  const MyWorkQuotes = [
    {
      type: 'text',
      letter: 'A',
      quote:
        'One million single use \n plastic bottles are thrown \n out every minute!',
    },
    {
      type: 'image',
      source: quote2,
    },
    {
      type: 'text',
      letter: 'B',
      quote:
        'One million single use \n plastic bottles are thrown \n out every minute!',
    },
    {
      type: 'image',
      source: quote4,
    },
    {
      type: 'text',
      letter: 'C',
      quote:
        'One million single use \n plastic bottles are thrown \n out every minute!',
    },
    {
      type: 'image',
      source: quote6,
    },
  ];
  return (
    <div className="our-work-bottom">
      {MyWorkQuotes.map((item, index) => {
        return item.type === 'text' ? (
          <QuoteText key={index} letter={item.letter} quote={item.quote} />
        ) : (
          <QuoteImage key={index} source={item.source} />
        );
      })}
    </div>
  );
};
