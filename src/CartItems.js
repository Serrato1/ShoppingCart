import React, {Component} from 'react'
import CartItem from './CartItem';
const CartItems = ({itemsList})=>{
  return(
    <div className="container ">
      <div className="row ">
        <div className="col-md-8">Product Name</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quanity</div>
      </div>
      {
        itemsList.map((item)=>{
          return <CartItem item={item} />
        })
      }
    </div>
  )
}
export default CartItems;
