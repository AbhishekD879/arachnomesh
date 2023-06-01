import React from 'react'
import './promo.css'
import bottleCapSvg from './../../assets/promo-cap.svg'
import bottleBottom from "./../../assets/promo-bottle.svg"
const dynamicSvgAspectRatio={
    width:'100%',
    height:'100%'
}
const BottleCap =()=>{
    return(
        <div className='bottle-cap flex justify-center items-center'>
            <img style={{width:dynamicSvgAspectRatio.width,height:dynamicSvgAspectRatio.height}} src={bottleCapSvg} alt='bottle cap'/>
        </div>
    )
}

const BottleBottom =()=>{
    return(
        <div className='bottle-bottom flex justify-center items-center'>
            <img style={{width:dynamicSvgAspectRatio.width,height:dynamicSvgAspectRatio.height}} src={bottleBottom} alt='bottle bottom'/>
        </div>
    )
}

const Promo = () => {
  return (
    <div className='promo-container'>
        <BottleCap/>
        <div className='elipse'></div>
        <BottleBottom/>
    </div>
  )
}

export default Promo