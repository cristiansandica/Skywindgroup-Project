// Styles
import '../Cards/Cards.scss';
import colorSharp from '../../assets/img/color-sharp.png';

//Packages
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

// Components
import DetailedCard from './DetailedCard/DetailedCard';


// import { GameListProps } from '../Data';

// interface IProps {
//     gameData: GameListProps
// }

const ReactSwal = withReactContent(Swal);

const Cards = (props) => {
    const [gamesData, setGamesData] = useState([]);


    const [searchField, setSearchField] = useState('');



    // taking the props from parent component
    useEffect(() => {
        setGamesData(props.gameData);
    }, [props.gameData]);


    // functionality for searching by name
    const searchConcepts = gamesData.filter((item) => {
        return item && item.name ? item.name.toLowerCase().includes(searchField.toLowerCase()) : null;
    });

    // functionality for sorting the cards by ascendent/descendent name
    const handleSortCharacters = (e) => {
        const charactersData = [...gamesData];
        const filteredElement = e.target.value;

        charactersData.sort((a, b) => { // for typescript a:string, b:string
            let compareA = a.name.toLowerCase();
            let compareB = b.name.toLowerCase();

            if (filteredElement === 'asc' && compareA < compareB) { return -1; }
            else if (filteredElement === 'desc' && compareA > compareB) { return -1; }
            return 0;
        })

        charactersData.sort((a, b) => {  // for typescript a:number, b:number
            let compareA = a.rating;
            let compareB = b.rating;

            if (filteredElement === 'ratingAsc') { return compareB - compareA; }
            else if (filteredElement === 'ratingDesc') { return compareA - compareB; }
            return 0;
        })
        setGamesData(charactersData);

    }

    const handleCategories = (e) => {
        const currentCategory = e.target.value;

        let filteredData = props.gameData.filter(item => item.genre === currentCategory);

        setGamesData(filteredData);

    }


    const detailedCard = (card) => {
        return ReactSwal.fire({
            showCloseButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            showClass: {
                popup: "zoomIn-animation"
            },
            html: <DetailedCard card={card} gameData={gamesData} close={ReactSwal.close} />
        });
    }



    return (
        <div className="body-container">
            <div className='form'>
                <input onChange={(e) => setSearchField(e.target.value)} placeholder="Search..." type="search" className='search__input' />
                <select onChange={handleSortCharacters} type="select" className='form__input__select' >
                    <option value="">Filter Games</option>
                    <option value="asc">A-z</option>
                    <option value="desc">z-A</option>
                    <option value="ratingAsc">Biggest Rating</option>
                    <option value="ratingDesc">Lowest Rating</option>
                </select>
                <select onChange={handleCategories} type="select" className='form__input__select' >
                    <option value="">Sort by genre</option>
                    {/* list of genres + removing the duplicates  */}
                    {Array.from(new Set(props.gameData.map(item => item.genre))).map((genre, index) => {
                        return <option key={index} value={genre}>{genre}</option>
                    })}
                </select>
            </div>

            <div className='card-container'>
                {searchConcepts && searchConcepts.length ? searchConcepts.map((item, index) => {
                    let rating;
                    switch (true) {
                        case item.rating < 70:
                            rating = 'rating-red'
                            break;
                        case (item.rating > 70 && item.rating < 85):
                            rating = 'rating-orange';
                            break;
                        default:
                            rating = 'rating-green';

                    }
                    return <div className='card' key={index}>
                        <img src={item.image} alt="..." />
                        <div className='card-content'>
                            <h4 className='card-title'>{item.name}</h4>
                            <div className='card-text'>
                                <h5 className='card-body'>{item.developer}</h5>
                                {item.rating ? <h6 className={`rating ${rating}`}>Rating: {item.rating}%</h6> : <h6>Not released</h6>}
                            </div>
                            <div className='card-footer'>
                                <h6>Genre: {item.genre}</h6>
                                <button onClick={() => detailedCard(item)} className='button'>Learn More</button>
                            </div>
                        </div>
                    </div>
                }) : <div className='error__container'>
                    <h3>This game does not exist in our database !</h3>
                </div>}
            </div>

            <img className="background-image-left" src={colorSharp} alt="img" />
        </div>
    )
}

export default Cards;