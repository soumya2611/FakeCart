import React from 'react'
import Hero from '../Components/hero/hero';
import Popular from '../Components/Popular/popular';
import Offers from '../Components/offers/offers';
import NewCollection from '../Components/newCollection/newCollection';
import NewsLetter from '../Components/NewsLetter/newsLetter';


export const Shop = () => {
  return (
    <div>
       <Hero />
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}
export default Shop;