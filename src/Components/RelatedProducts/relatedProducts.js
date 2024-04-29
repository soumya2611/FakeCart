import React from 'react'
import './relatedProducts.css'
import data_product from '../Assets/data'
import Item from '../items/items'
const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
 <h1>
    Realted Products
 </h1>
 <hr />
    <div className='relatedProducts-item'>
{data_product.map((item,i)=>{
     return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
                }
    )}
        </div>
    </div>
  )
}

export default RelatedProducts