import React, {Component} from 'react';

const CartItem = ({item})=>{
  return(
    <div className="collection-item">
      <div className="row">
        <div className="col-md-8">{item.product.name}</div>
        <div className="col-md-2">{item.product.priceInCents/100}</div>
        <div className="col-md-2">{item.product.quantity}</div>
      </div>
    </div>
  )
}
export default CartItem;
