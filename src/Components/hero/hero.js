import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
  <div className="hero-left">
    <h2>GO WITH TRENDS</h2>
    <div className="hand-hand-icon">
        <p>new</p> 
        <img src={hand_icon} alt="" />
    </div>
    <div>
    <p>Collections</p>
    <p>for everyone</p>
    </div>
  <div className="hero-latest-btn">
    
   <Link to='/' style={{textDecoration:'none'}}> <h3> 
      latestCollections 
      </h3>
    </Link>
    <img src={arrow_icon} alt="" />
  </div>
  </div>
  <div className='hero-right'>
    <img src={hero_image} alt="" />
  </div>
    </div>
  )
}

export default Hero