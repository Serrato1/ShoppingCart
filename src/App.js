import React, { Component } from 'react';
import logo from './logo.svg';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter'
import CartItems from './CartItems';
import CartItem from './CartItem';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    let cartItemsList =
    [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ];
    let copyrightYear = 2018;
    return (
      <div className="App">
        <CartHeader />
        <CartItems itemsList = {cartItemsList}/>
        <CartFooter theYear={copyrightYear}/>
      </div>
    );
  }
}

export default App;
