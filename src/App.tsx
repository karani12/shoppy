import React from 'react';
import logo from './logo.svg';
import Button from './components/common/Button';
import Card from './components/widgets/Card';
import NavBar from './components/sections/NavBar';
import Footer from './components/sections/Footer';
import Carousel from './components/common/Product';
import Hero from './components/sections/Hero';
// @ts-ignore
import {StateProvider } from './global'
import './App.css';

function App() {
// Initial state of the cart on client side

  const initialState = {
    cart: []
  }

  // Reducer function to update the state of the cart on client side

  const reducer = (state: any, action: any) => {
    switch(action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.item]
        };
      case 'REMOVE_FROM_CART':
        const index = state.cart.findIndex(
          (cartItem: any) => cartItem.id === action.id
        );
        let newCart = [...state.cart];
        if (index >= 0) {
          newCart.splice(index, 1);
        }
        return {
          ...state,
          cart: newCart
        };
      default:
        return state;
    }
  }
  return (
    <StateProvider initialState={initialState} reducer={reducer}>

    <div className="App bg-white ml-3 mr-3">
      <NavBar />
      <Hero />
      <Carousel />
      <Footer/>
    </div>
    </StateProvider>

  );
}

export default App;
