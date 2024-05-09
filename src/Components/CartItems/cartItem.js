import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './cartItem.css'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () =>{
    const{all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext);
  return (
    <div className='cartItems'>
        
     <div className="cartitems-format-main">
        <p>Products</p>
        <p>Titles</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return  <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image}className='carticon-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>₹ {e.new_price}</p>
                    <button className='classitems-quantity'>{cartItems[e.id]}</button>
                    <p>₹ {e.new_price*cartItems[e.id]}</p>
                    <img  className='classitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    <hr />
                </div>
             </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>SubTotal</p>
                        <p>$ { getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shiiping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>$ {getTotalCartAmount()}</p>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <div className="cartitems-promocode">
                <p>If you have a promo code ,Enter now</p>
                <div className='cartitems-promobox'>
                    <input type="text" placeholder='promocode' />
                    <button>SUBMIT</button>

                </div>
            </div>
        </div>
     </div>
     </div>
  )}


export default CartItem

