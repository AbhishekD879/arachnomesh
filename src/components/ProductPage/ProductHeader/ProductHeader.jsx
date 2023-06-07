import React from 'react';
import './productHeader.css';
import searchIoc from '../../../assets/searchIoc.svg';
import hpr1 from '../../../assets/hpr1.svg';
import hpr2 from '../../../assets/hpr2.svg';
import hpr3 from '../../../assets/hpr3.svg';
import {Link} from 'wouter'
const ProductHeader = () => {
  return (
    <div className="product-header flex justify-between items-center">
      <ProductHeaderLeft />
      <ProductHeaderRight />
    </div>
  );
};

const ProductHeaderLeft = () => {
  return (
    <div className="product-header-left flex justify-between">
      <Link className="header-right" href="/">
        ARACHNOMESH
      </Link>
      <img src={searchIoc} alt="logo" />
    </div>
  );
};

const ProductHeaderRight = () => {
  const headerRightItems = [
    {
      type: 'text',
      element: 'Product',
    },
    {
      type: 'text',
      element: 'Technology',
    },
    {
      type: 'image',
      element: hpr1,
    },
    {
      type: 'image',
      element: hpr2,
    },
    {
      type: 'image',
      element: hpr3,
    },
  ];
  return (
    <div className="product-header-right flex justify-center items-center">
      {headerRightItems.map((item, index) => {
        return item.type === 'text' ? (
          <p key={index} className="product-header-text">
            {item.element}
          </p>
        ) : (
          <img key={index} src={item.element} alt="logo" />
        );
      })}
    </div>
  );
};

export default ProductHeader;
