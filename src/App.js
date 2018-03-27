import React, { Component } from 'react';
import logo from './logo.svg';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems />
        <CartFooter />
      </div>
    );
  }
}

export default App;
