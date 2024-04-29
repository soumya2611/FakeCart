import React, { useContext } from 'react'
import Breadcrumb from '../Components/BreadCrumbs/breadcrumb';
import Productdisplay from '../Components/productDisplay/productdisplay';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Desc from '../Components/DescBox/desc';
import RelatedProducts from '../Components/RelatedProducts/relatedProducts';

const Product = () => {
  const {all_product} =useContext(ShopContext);
  console.log(all_product)
  const {productId} = useParams();
   console.log(all_product)
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
<Breadcrumb product={product}/>
<Productdisplay props={product}/>
<Desc/>
<RelatedProducts/>
    </div>
  )
}

export default Product

