// style
import './App.scss';

// data, interface
import { data, IGameDetail } from './components/Data/Data';

// packages
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// components
import Navbar from './components/Navbar/Navbar';
import Routings from './components/Routings/Routings';
import { addGames } from './features/gameSlice';


function App() {

  const { gameDetails } = data;
  const [cartItems, setCartItems] = useState<IGameDetail[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addGames(gameDetails));
  }, [gameDetails])

  const handleAddGameCart = (product: IGameDetail) => {
    const productExist = cartItems.find((item: IGameDetail) => item.id === product.id)
    if (productExist) {
      setCartItems(cartItems.map((item: IGameDetail) => item.id === product.id ? { ...productExist } : item))
    }
    else {
      setCartItems([...cartItems, { ...product }])
    }
  }


  return (
    <div>

      <Navbar />
      <Routings
        gameData={gameDetails}
        cartItems={cartItems}
        handleAddGameCart={handleAddGameCart}
      />

    </div>
  );
}

export default App;
