import React from "react";
import Cart from "../Cart/Cart";
import { Routes, Route } from 'react-router';
import Cards from "../Cards/Cards";

const Routings = ({ gameData, cartItems, handleAddGameCart }) => {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<Cards gameData={gameData} handleAddGameCart={handleAddGameCart} />
                    } />

                <Route
                    path='/cart'
                    element={<Cart cartItems={cartItems} handleAddGameCart={handleAddGameCart} />} />
            </Routes>
        </div>
    )
}


export default Routings;

