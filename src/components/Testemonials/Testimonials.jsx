import React from 'react'
import './Testimonials.css'
import profile1 from './../../assets/profile1.svg'
import profile2 from './../../assets/profile2.svg'
import profile3 from './../../assets/profile3.svg'
import Footer from '../Footer/Footer'
const Testimonials = () => {
  const TESTIMONIALS=[
    {
      comment:"Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.They did a great job!!",
      name:'Austin Wade',
      designation:'Athelete',
      company:"ADIDAS",
      profile:profile1,
      scale:false
    },
    {
      comment:"Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.They did a great job!!",
      name:'Jaydon Bator',
      designation:'Sr. Editor',
      company:"OPRAH MAGAZINE",
      profile:profile2,
      scale:true
    },
    {
      comment:"Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.They did a great job!!",
      name:'Sarah',
      designation:'Photographer',
      company:"BBC",
      profile:profile3,
      scale:false
    }
  ]
  return (
    <div className='section-bottom'>
    <section className='testemonials-container'>
        <div className='testemonials-title'>TESTIMONIALS<span className='blink'>_</span></div>
        <div className='testemonials-cards-container'>
          {TESTIMONIALS.map((item,index)=><TestimonialsCard key={item.name+index} {...item}/>)}
        </div>
        <div style={{
          top:"12%",
          left:"1%",
          width:"85px",
          height:"85px"
        }} className='ball1'></div>
        <div style={{
          top:"8%",
          left:"58%",
          width:"130px",
          height:"130px"
        }} className='ball1'></div>
        <div style={{
          top:"45%",
          left:"40%",
          width:"120px",
          height:"120px"
        }} className='ball2'></div>
        <div style={{
          top:"45%",
          left:"90%",
          width:"100px",
          height:"100px"
        }} className='ball2'></div>
    </section>
    <Footer/>
    </div>
  )
}

export default Testimonials


const TestimonialsCard =({comment,name,designation,company,profile,scale})=>{
  return(
    <div className={`testemonials-card ${scale&&"scale"}`}>
      <div className='testemonials-card-top'>
        <img src={profile} alt='profile' className='testemonials-card-top-profile'/>
      </div>
      <div className='testemonials-card-comment'>{comment}</div>
      <div className='testemonials-card-bottom'>
        <div className='testimonials-card-bottom-name-designation'>
          {name}
          <br/>
          <p>{designation}</p>
        </div>
        <div className='testimonials-card-bottom-company'>
          {company}
        </div>
      </div>
    </div>
  )
}