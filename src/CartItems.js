import React, {Component} from 'react'
import CartItem from './CartItem';
const CartItems = ({itemsList})=>{
  return(
    <div className="container">
      {
        itemsList.map((item)=>{
          return <CartItem item={item}/>
        })
      }
    </div>
  )
}
export default CartItems;
