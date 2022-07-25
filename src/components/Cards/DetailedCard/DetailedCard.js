import React, { useState, useEffect } from "react";

import "../DetailedCard/DetailedCard.scss"


const DetailedCard = (props) => {
    const [gameLibrary, setGameLibrary] = useState({});

    // const [open, setOpen] =useState(!null);

    useEffect(() => {
        setGameLibrary(props.card);
    }, [props.card]) // to block the infinite chain of updates

    // if (!open) return null;

    return <>
        <div className='overlay'>
            <div
                className='modalContainer'
            >
                <img src={gameLibrary.image} alt='/' />
                <div className='modalRight'>
                    <p className='closeBtn' onClick={() => props.close()}>
                        X
                    </p>
                    <div className='content'>
                        <h2>{gameLibrary.name}</h2>
                        <div className="developer">
                            <span>Developer: </span><h4>{gameLibrary.developer}</h4>
                        </div>
                        <div className="publisher">
                            <span>Publisher:</span><h4>{gameLibrary.publisher}</h4>
                        </div>
                        <div className="rating">
                            <span>Rating:</span><h4>{!gameLibrary.rating ? "Not yet released" : `${gameLibrary.rating}%`}</h4>
                        </div>
                        <div className="genre">
                            <span>Genre:</span><h4>{gameLibrary.genre}</h4>
                        </div>
                        <div className="release">
                            <span>Release:</span><h4>{gameLibrary.release}</h4>
                        </div>
                        <div className="all-time-peak">
                            <span>All-time-peak:</span>
                            <h4>{gameLibrary.alltimepeak}</h4>
                            <span>in-game</span>
                        </div>

                    </div>
                    <div className='btnContainer'>
                        <button className='btnPrimary' onClick={() => props.close()}>
                            <span className='bold'>Close</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>

}



export default DetailedCard;