import React from 'react'
import ProductHeader from './ProductHeader/ProductHeader'
import Product from './Product/Product'
import Recommendation from './Recommendation/Recommendation'
import Footer from '../Footer/Footer'
const ProductPage = () => {
  return (
    <div className='flex flex-col'>
        <ProductHeader/>
        <Product/>
        <Recommendation/>
        <Footer/>
    </div>
  )
}

export default ProductPage