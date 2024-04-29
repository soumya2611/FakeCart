import React from 'react'
import './popular.css';
import Item from '../items/items';
import data_product from '../Assets/data';
const Popular = (i) => {
  return (
    <div className='popular'>
 <h1>POPULAR IN WOMEN</h1>
 <hr />
 <div className="popular-item">
    {data_product.map((item)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
    })}
 </div>
    </div>
  )
}

export default Popular