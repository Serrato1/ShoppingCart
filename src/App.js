import React, { Component } from 'react';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter'
import CartItems from './CartItems';
import AddItem from './AddItem';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class ShoppingCart extends Component {
  state = {
    cartItemsList :
    [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
    ]
  }
  add = (product)=>{
    let new_state = this.state;
    new_state.cartItemsList.push(product);
    console.log(product);
    this.setState(new_state);
  }
  calculateTotal = () =>{
    let cartItemsList = this.state.cartItemsList;
    let total =  cartItemsList.reduce((acc, {id , product , quantity})=>{
      console.log(id , product , quantity);
      console.log(acc)
      return acc + (product.priceInCents    * parseInt( quantity ) )
    }, 0)
    return "$" + total/100;
  }
  render() {
    let copyrightYear = 2018;
    let products =  [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ];

    return (
      <div className="App">
        <CartHeader />
        <div className="container">
          <CartItems itemsList = {this.state.cartItemsList}/>
          <div>Total: {this.calculateTotal()}</div>
          <AddItem   products = {products} addItem={(product)=>{this.add(product) }}/>
        </div>
        <CartFooter theYear={copyrightYear}/>
      </div>
    );
  }
}

export default ShoppingCart;
