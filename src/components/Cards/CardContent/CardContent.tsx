import React, { useState } from "react";
import { IGameDetail } from "../../Data/Data";
import ModalCard from "../ModalCard/ModalCard";


interface IProps {
    item: IGameDetail;
    handleAddGameCart: (handleAddGameCart: IGameDetail) => void;
}

const CardContent: React.FC<IProps> = (props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { item, handleAddGameCart } = props;

     
    let rating;
    // switch (true) {
    //     case item.rating < 70:
    //         rating = 'rating-red'
    //         break;
    //     case (item.rating > 70 && item.rating < 85):
    //         rating = 'rating-orange';
    //         break;
    //     default:
    //         rating = 'rating-green';
    // }
    if (item.rating < 70) { rating = 'rating-red'; }
    else if (item.rating > 70 && item.rating < 85) { rating = 'rating-orange' }
    else {
        rating = 'rating-green';
    }


    return <div className='card' key={item.id}>
        <img src={item.image} alt="..." />
        <div className='card-content'>
            <h4 className='card-title'>{item.name}</h4>
            <div className='card-text'>
                <h5 className='card-body'>{item.developer}</h5>
                {item.rating ? <h6 className={`rating ${rating}`}>Rating: {item.rating}%</h6> : <h6>Not released</h6>}
            </div>
            <div className='card-footer'>
                <div className='genre'>
                    <h6>Genre: {item.genre}</h6>
                </div>
                <div className='price'>
                    <h6>€ {item.price}</h6>
                </div>

            </div>
            <div className='buttons'>
                <button onClick={() => setModalVisible(true)} className='button'>Learn More</button>
                <ModalCard cardDetail={item} isOpen={modalVisible} onClose={() => setModalVisible(false)} />
                <button onClick={() => handleAddGameCart(item)} className='button'>Add to Cart</button>
            </div>
        </div>
    </div>
}


export default CardContent