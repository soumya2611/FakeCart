import React from 'react'
import new_collection from '../Assets/new_collections';
import './newCollection.css';
import Item from '../items/items';
const NewCollection = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="collections ">  
   {new_collection.map((item,i)=>{
    return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
   })}
      </div>    
    </div>
  )
}

export default NewCollection