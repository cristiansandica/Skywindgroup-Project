// Styles
import '../Cards/Cards.scss';
import colorSharp from '../../assets/img/color-sharp.png';

//Packages
import React, { useEffect, useState, ChangeEvent } from 'react';
// import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content';


// Components
import { IGameDetail } from '../Data/Data';
import CardContent from './CardContent/CardContent';


// import { GameListProps } from '../Data';

// interface IProps {
//     gameData: GameListProps 
// }

type InputEvent = ChangeEvent<HTMLInputElement>;


interface IProps {
    gameData: IGameDetail[];
    cartItems?: IGameDetail[];
    handleAddGameCart: (handleAddGameCart: IGameDetail) => void;
}

// const ReactSwal = withReactContent(Swal);

const Cards: React.FC<IProps> = ({ gameData, handleAddGameCart }) => {
    const [gamesData, setGamesData] = useState<IGameDetail[]>([]);
    const [gameGenres, setGameGenres] = useState<IGameDetail[]>([])

    const [searchField, setSearchField] = useState('');

    const [visibleGames, setVisibleGames] = useState<IGameDetail[]>(gameData);

    const [modalVisible, setModalVisible] = useState<boolean>(false);


    // taking the props from parent component
    useEffect(() => {
        setGamesData(gameData);
        setGameGenres(gameData);
    }, [gameData]);

    useEffect(() => {
        if (searchField.length > 0) {
            setVisibleGames(gamesData.filter((item: IGameDetail) => {
                return item && item.name ? item.name.toLowerCase().includes(searchField.toLowerCase()) : null
            }));
        }

    }, [searchField])


    // functionality for searching by name
    // const searchConcepts = 
    // });

    // functionality for sorting the cards by ascendent/descendent name
    const handleSortCharacters = (e: any) => {
        const charactersData = [...gamesData];
        const filteredElement = e.target.value;

        charactersData.sort((a: IGameDetail, b: IGameDetail) => {
            let compareA = a.name.toLowerCase();
            let compareB = b.name.toLowerCase();

            if (filteredElement === 'asc' && compareA < compareB) { return -1; }
            else if (filteredElement === 'desc' && compareA > compareB) { return -1; }
            return 0;
        })

        charactersData.sort((a: IGameDetail, b: IGameDetail) => {
            let compareA = a.rating;
            let compareB = b.rating;

            if (filteredElement === 'ratingAsc') { return Number(compareB) - Number(compareA); }
            else if (filteredElement === 'ratingDesc') { return Number(compareA) - Number(compareB); }
            return 0;
        })
        setGamesData(charactersData);

    }


    const handleCategories = (e: any) => {
        const currentGenres = [...gameGenres];
        const currentCategory = e.target.value;

        let filteredData = currentGenres.filter(item => item.genre === currentCategory);

        setGamesData(filteredData);

    }


    return (
        <div className="body-container">
            <div className='header-container'>
                <div className='form'>
                    <input onChange={(e: InputEvent) => setSearchField(e.target.value)} placeholder="Search..." type="search" className='search__input' />
                    <select onChange={handleSortCharacters} className='form__input__select' >
                        <option value="">Filter Games</option>
                        <option value="asc">A-z</option>
                        <option value="desc">z-A</option>
                        <option value="ratingAsc">Biggest Rating</option>
                        <option value="ratingDesc">Lowest Rating</option>
                    </select>
                    <select onChange={handleCategories} className='form__input__select' >
                        <option value="">Sort by genre</option>
                        {/* list of genres + removing the duplicates  */}
                        {Array.from(new Set(gameGenres.map(item => item.genre))).map((genre, index) => {
                            return <option key={index} value={genre}>{genre}</option>
                        })}
                    </select>
                </div>

            </div>

            <div className='card-container'>
                {/*@ts-ignore */}
                {visibleGames && visibleGames.length > 0 ? visibleGames.map((item) => {
                    <CardContent item={item} handleAddGameCart={handleAddGameCart} />
                }) : <div className='error__container'>
                    <h3>This game does not exist in our database !</h3>
                </div>}
            </div>

            <img className="background-image-left" src={colorSharp} alt="img" />
        </div>
    )
}

export default Cards;