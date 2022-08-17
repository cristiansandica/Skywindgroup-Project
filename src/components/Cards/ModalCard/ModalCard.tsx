import React, { FunctionComponent } from "react";
import { IGameDetail } from "../../Data/Data";


// stylings
import clsx from "clsx";
import styles from "./ModalCard.module.scss";


interface IProps {
    isOpen: boolean;
    cardDetail: IGameDetail;
    onClose: () => void;
    backgroundClass?:string;
    wrapperClass?: string;
}


 const ModalCard: FunctionComponent<IProps> = (props) => {
    const {isOpen, backgroundClass = "", wrapperClass, onClose, cardDetail} = props;


    return ( <div className={clsx(styles.background, backgroundClass, {[styles.open]: isOpen})}>
            <div className={styles.wrapper}>
                <img src={cardDetail.image} alt='/' />
                <div className='modalRight'>
                    <p className='closeBtn' onClick={() => onClose()}>
                        X
                    </p>
                    <div className={styles.content}>
                        <h2>{cardDetail.name}</h2>
                        <div className={styles.developer}>
                            <span>Developer: </span><h4>{cardDetail.developer}</h4>
                        </div>
                        <div className={styles.publisher}>
                            <span>Publisher:</span><h4>{cardDetail.publisher}</h4>
                        </div>
                        <div className={styles.rating}>
                            <span>Rating:</span><h4>{!cardDetail.rating ? "Not yet released" : `${cardDetail.rating}%`}</h4>
                        </div>
                        <div className={styles.genre}>
                            <span>Genre:</span><h4>{cardDetail.genre}</h4>
                        </div>
                        <div className={styles.release}>
                            <span>Release:</span><h4>{cardDetail.release}</h4>
                        </div>
                        <div className={styles.alltimepeak}>
                            <span>All-time-peak:</span>
                            <h4>{cardDetail.alltimepeak}</h4>
                            <span>in-game</span>
                        </div>

                    </div>
                    <div className='btnContainer'>
                        <button className='btnPrimary' onClick={() => onClose()}>
                            <span className='bold'>Close</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
   )

}

export default ModalCard;