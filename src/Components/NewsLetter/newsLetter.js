import React from 'react'
import './newsLetter.css';
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
             <input type="email" placeholder='Enter Your Email id' />
             <button>Subscribe</button>
        </div>
    </div>

  )
}

export default NewsLetter