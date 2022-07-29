import React from "react";
import "./Cart.scss";
import colorSharp from '../../assets/img/color-sharp.png';


const Cart = ({ cartItems }) => {

    const totalPrice = cartItems.reduce((price, item) =>
        price + item.price, 0
    )

    return (
        <div className="body-container">
            <div className="card-container">
                {cartItems && cartItems.length ? cartItems.map((item, index) => {
                    return <div className='card' key={index}>
                        <img src={item.image} alt={item.name} />
                        <div className='card-content'>
                            <h4 className='card-title'>{item.name}</h4>
                            <div className='card-text'>
                                <h5 className='card-body'>{item.developer}</h5>
                            </div>
                            <div className='card-footer'>
                                <div className='genre'>
                                    <h6>Genre: {item.genre}</h6>
                                </div>
                                <div className='price'>
                                    <h6>€ {item.price}</h6>
                                </div>
                            </div>
                        </div>

                    </div>

                }) : <div className="cart-items-empty">
                    <h3>No items are added. </h3></div>}
            </div>
            {cartItems && cartItems.length ? <div className="cart-total-price">
                <h3>Total: €{totalPrice}</h3>
            </div> : ""}
            <img className="background-image-left" src={colorSharp} alt="img" />
        </div>
    )

}


export default Cart;