// style
import './App.scss';

// data
import data from './components/Data/Data';

// packages
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// components
import Navbar from './components/Navbar/Navbar';
import Routings from './components/Routings/Routings';
import { addGames } from './features/gameSlice';


const App = () => {

  const { gameDetails } = data;
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addGames(gameDetails));
  }, [dispatch, gameDetails])

  const handleAddGameCart = (product) => {
    const productExist = cartItems.find(item => item.id === product.id)
    if (productExist) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item))
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
    console.log(productExist)
  }

  const handleRemoveGameCart = (product) => {
    const productExist = cartItems.find(item => item.id === product.id)
    if (productExist.quantity === 1) {
      setCartItems(cartItems.map(item => item.id !== product.id))
    }
    else {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item))
    }
  }


  return (
    <div>
      
        <Navbar />
        <Routings
          gameData={gameDetails}
          cartItems={cartItems}
          handleAddGameCart={handleAddGameCart}
          handleRemoveGameCart={handleRemoveGameCart} />
      
    </div>
  );
}

export default App;
