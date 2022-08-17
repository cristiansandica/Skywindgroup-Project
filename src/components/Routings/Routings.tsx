// packages
import React from "react";
import { Routes, Route } from 'react-router';

// components
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";

// data, interface
import { IGameDetail } from "../Data/Data";

interface IProps {
    gameData: IGameDetail[];
    cartItems: IGameDetail[];
    handleAddGameCart: (handleAddGameCart: IGameDetail) => void;
}

const Routings: React.FC<IProps> = ({ gameData, cartItems, handleAddGameCart }) => {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<Cards gameData={gameData} handleAddGameCart={handleAddGameCart} />
                    } />

                <Route
                    path='/cart'
                    element={<Cart cartItems={cartItems} />} />
            </Routes>
        </div>
    )
}


export default Routings;

