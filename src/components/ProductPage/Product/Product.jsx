import React, {useState} from 'react';
import './Product.css';
import star from '../../../assets/star.png';
import standAloneBottle from '../../../assets/standalone-bottle.svg';
import standAloneAnimatedBottle from '../../../assets/animated-standalone.svg';
import PDP1 from '../../../assets/PDP1.svg';
import PDP2 from '../../../assets/PDP2.svg';
import PDP3 from '../../../assets/PDP3.svg';
import PDP4 from '../../../assets/PDP4.svg';
import PDP5 from '../../../assets/PDP5.svg';
import Facebook from '../../../assets/Facebook-PDP.svg';
import Twitter from '../../../assets/Twitter-PDP.svg';
import Pintrest from '../../../assets/Pinterest-PDP.svg';
const Product = () => {
  return (
    <div className="product-container">
      <ProductName />
      <ProductTabandRating />
      <ProductDetails />
    </div>
  );
};

export default Product;

// product Name
const ProductName = () => (
  <h1 className="product-name">
    Bottle Filtered <span className="blink">_</span>
  </h1>
);

// product tab and rating
const ProductTabandRating = () => {
  return (
    <>
      <div className="product-tab-and-rating flex justify-between">
        <ProductTab />
        <ProductRating />
      </div>
      <hr className="product-tab-and-rating"></hr>
    </>
  );
};

const TabButton = ({tabName, isSelected, hasTooltip, tootipData}) => {
  return (
    <button
      data-tootipData={tootipData}
      className={`tab-button ${isSelected ? 'isSelected' : ''}`}>
      {tabName}
    </button>
  );
};

const ProductTab = () => {
  const TAB_DATA = [
    {
      tabName: 'Genral Info',
      isSelected: true,
      hasTooltip: false,
      tootipData: '',
    },
    {
      tabName: 'Product Details',
      isSelected: false,
      hasTooltip: false,
      tootipData: '',
    },
    {
      tabName: 'Reviews',
      isSelected: false,
      hasTooltip: true,
      tootipData: '12',
    },
  ];
  return (
    <div className="product-tab flex justify-between">
      {TAB_DATA.map((tab, index) => (
        <TabButton
          key={index}
          tabName={tab.tabName}
          isSelected={tab.isSelected}
          hasTooltip={tab.hasTooltip}
          tootipData={tab.tootipData}
        />
      ))}
    </div>
  );
};

const ProductRating = () => {
  return (
    <div className="product-rating">
      <div className="star-container">
        <img
          style={{
            fill: 'gold',
          }}
          src={star}
          alt="star"
        />
        <img
          style={{
            fill: 'gold',
          }}
          src={star}
          alt="star"
        />
        <img
          style={{
            fill: 'gold',
          }}
          src={star}
          alt="star"
        />
        <img
          style={{
            fill: 'gold',
          }}
          src={star}
          alt="star"
        />
        <img src={star} alt="star" />
      </div>
      <p>12 reviews</p>
    </div>
  );
};
// product tab and rating----End

// Product Details
const ProductDetails = () => {
  return (
    <div className="product-details">
      <ProductDetailLeft />
      <ProductDetailRight />
    </div>
  );
};

const ProductDetailImageConatiner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="container-box"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* <img className="cap-img" src={productMainBottleCap} alt="" /> */}
      {/* <div id="light" /> */}
      {/* <img className="bottle-img" src={productMainBottle} alt="" />
      <i className="right-arrow" /> */}
      <img
        src={isHovered ? standAloneAnimatedBottle : standAloneBottle}
        alt="stand-alone"
      />
      <div className="left-arrow"></div>
      <div className="right-arrow"></div>
    </div>
  );
};

const ProductDetailImageBox = ({src}) => {
  return (
    <div className="product-detail-image-box">
      <img src={src} alt="product-detail-image" />
    </div>
  );
};

const ProductDetailImageSelector = () => {
  const PDP_SELECTION = [PDP1, PDP2, PDP3, PDP4, PDP5];
  return (
    <div className="product-detail-image-selector flex justify-between items-center">
      {PDP_SELECTION.map((image, index) => (
        <ProductDetailImageBox key={index} src={image} />
      ))}
    </div>
  );
};

const ProductDetailSocialButtons = () => {
  // create a component for social buttons
  return (
    <div className="share-social">
      <p>Share:</p>
      <div>
        <img src={Facebook} alt="facebook" />
        <img src={Twitter} alt="twitter" />
        <img src={Pintrest} alt="pintrest" />
      </div>
    </div>
  );
};

const ProductDetailLeft = () => {
  return (
    <div className="product-detail-left">
      <ProductDetailImageConatiner />
      <ProductDetailImageSelector />
      <ProductDetailSocialButtons />
    </div>
  );
};
// product detail right

const ProductDetailRightSection1 = () => {
  return (
    <>
      <div className="section1-top flex justify-start  items-center">
        <h4>$150.00</h4>
        <span className="p1">$300.00</span>
        <span className="p2">-50%</span>
      </div>
      <br />
      <p className="p3">Color</p>
      <div className="flex justify-between">
        <div className="radio-btn flex justify-start items-center">
          <input className="radio-button" type="radio" />
          <input className="radio-button" type="radio" />
          <input className="radio-button" type="radio" />
          <p className="color">Black</p>
        </div>
        <div className="bottle-type-insulted flex justify-between items-center">
          <button type="button" disabled={true}>
            Insulated
          </button>
          <button type="button" disabled={true} style={{color: '#42455191'}}>
            Non-Insulated
          </button>
        </div>
      </div>
    </>
  );
};

const ProductDetailRightSection2 = () => {
  return (
    <>
      <div className="size-placeholder">
        <p className="p4 right">Size</p>
        <select type="text" placeholder="17 oz" className="input-size">
          <option value="volvo">17 oz</option>
        </select>
      </div>
      <div className="add-to-cart">
        <select name="cars" id="cars">
          <option value="volvo">1</option>
        </select>
        <button className="button-btn1" type="button">
          Add to cart
        </button>
        <button className="button-btn2" type="button">
          Favourite
        </button>
      </div>
    </>
  );
};
const ProductDetailRightSection3 = () => {
  return (
    <div className="section-3">
      <p className="p5">Delivery</p>
      <p className="p6">
        Free standard shipping on orders over $35 before tax, plus free returns.
      </p>
    </div>
  );
};

const ProductDetailRightSection4 = () => {
  return (
    <div className="section-4">
      <table>
        <tbody>
          <tr>
            <th>TYPE</th>
            <th>HOW LONG</th>
            <th>HOW MUCH</th>
          </tr>
          <tr>
            <td>Standard Delivery</td>
            <td>1-4 business days</td>
            <td>$4.50</td>
          </tr>
          <tr>
            <td>Express Delivery</td>
            <td>1 business day</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td style={{paddingBottom: 27}}>Pick up in store</td>
            <td style={{paddingBottom: 27}}>1-3 business days</td>
            <td style={{paddingBottom: 27}}>Free</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const ProductDetailRightSection5 = () => {
  return (
    <div className='section-5'>
      <h5>Return</h5>
      <p className="p7">
        You have 15 days to return the item(s) using any of the following
        methods:
      </p>
      <ul>
        <li>Free store return</li>
        <li>Free returns via USPS Dropoff Service</li>
      </ul>
      <hr />
    </div>
  );
};
const ProductDetailRight = () => {
  return (
    <div className="product-detail-right">
      <ProductDetailRightSection1 />
      <ProductDetailRightSection2 />
      <ProductDetailRightSection3 />
      <ProductDetailRightSection4 />
      <ProductDetailRightSection5 />
    </div>
  );
};
// product detail right----End

// Product Details----End
