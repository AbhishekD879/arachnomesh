import React from 'react';
import './Recommendation.css';
import greenBottle from '../../../assets/green-bottle.svg';
import pinkBotle from '../../../assets/pink-bottle.svg';
import jug from '../../../assets/jug.svg';
const Recommendation = () => {
  const recommendationCards = [
    {
      img: greenBottle,
      color: 'Monaco Green',
      type: 'PureV',
    },
    {
      img: pinkBotle,
      color: 'Obsidian Pearl',
      type: 'FilterV',
    },
    {
      img: jug,
      color: 'Pure Snow',
      type: 'JugV',
    }
  ]
  return (
    <div className="recommendation-container">
      <Recommendation_heading />
      <div className="recommendation-cards-container">
        {recommendationCards.map((card, index) => (
          <Recommendation_card key={index} img={card.img} color={card.color} type={card.type} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;

const Recommendation_heading = () => (
  <h1 className="product-name">
    Recommendation<span className="blink">_</span>
  </h1>
);

const Recommendation_card = ({img, color, type}) => {
  return (
    <div className="recommendation-card">
      <div className="recommendation-card-image-container">
        <img className="recommendation-card-image" src={img} alt="logo" />
      </div>
      <div className="recommendation-card-details">
        <p className="recommendation-card-color">{color}</p>
        <p className="recommendation-card-type">{type}</p>
      </div>
    </div>
  );
};
