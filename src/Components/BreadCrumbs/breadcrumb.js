import React from 'react'
import './breadcrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrumb = (props) => {
    const{product}=props;
  return (
    <div className='breadCrumb'>
    HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrumb