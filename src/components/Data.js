import Cards from "./Cards/Cards";
import Navbar from "./Navbar/Navbar";

// export interface GameListProps {
//     gameData: GameDataType
// }

// type GameDataType = {
//     games: DataType[];
// }

// type DataType = {
//     id?: number,
//     name?: string,
//     image?: string,
//     developer?: string,
//     publisher?: string,
//     alltimepeak?: number | string,
//     rating?: number | string,
//     genre?: string,
//     release?: string | number,
// }

const Data = () => {

    const data = [
        {
            id: 1,
            name: "Counter Strike: Global Offensive",
            image: require("../assets/img/counterstrike.jpg"),
            developer: "Valve",
            publisher: "Valve",
            alltimepeak: 1300000,
            rating: 88,
            genre: "action",
            release: "21 August 2012"
        },
        {
            id: 2,
            name: "Call of Duty: Modern Warfare II",
            image: require("../assets/img/codmw2.jpg"),
            developer: "Infinity Ward",
            publisher: "Activision",
            alltimepeak: "",
            rating: "",
            genre: "action",
            release: "28 October 2022"
        },
        {
            id: 3,
            name: "FIFA 22",
            image: require("../assets/img/fifa22.jpg"),
            developer: "EA Canada, EA Romania",
            publisher: "Electronic Arts",
            alltimepeak: 108000,
            rating: 79,
            genre: "sports",
            release: "1 October 2021"
        },
        {
            id: 4,
            name: "Grand Theft Auto V",
            image: require("../assets/img/gtav.jpg"),
            developer: "Rockstar North",
            publisher: "Rockstar Games",
            alltimepeak: 364000,
            rating: 85,
            genre: "action",
            release: "13 April 2015"
        },
        {
            id: 5,
            name: "Destiny 2",
            image: require("../assets/img/destiny2.jpg"),
            developer: "Bungie",
            publisher: "Bungie",
            alltimepeak: 293000,
            rating: 83,
            genre: "action",
            release: "1 October 2019"
        },
        {
            id: 6,
            name: "ELDEN RING",
            image: require("../assets/img/eldenring.jpg"),
            developer: "FromSoftware Inc.",
            publisher: "FromSoftware Inc.",
            alltimepeak: 953426,
            rating: 89,
            genre: "adventure",
            release: "24 February 2022"
        },
        {
            id: 7,
            name: "The Elder Scrolls V: Skyrim",
            image: require("../assets/img/skyrim.jpg"),
            developer: "Bethesda Game Studios",
            publisher: "Bethesda Softworks",
            alltimepeak: 288000,
            rating: 93,
            genre: "adventure",
            release: "10 November 2011"
        },
        {
            id: 8,
            name: "Age of Empires IV",
            image: require("../assets/img/aoe4.jpg"),
            developer: "Relic Entertainment",
            publisher: "Xbox Game Studios",
            alltimepeak: 74000,
            rating: 85,
            genre: "strategy",
            release: "28 October 2021"
        },
        {
            id: 9,
            name: "Forza Horizon 5",
            image: require("../assets/img/forza.jpg"),
            developer: "Playground Games",
            publisher: "Xbox Game Studios",
            alltimepeak: 81000,
            rating: 86,
            genre: "sports",
            release: "9 November 2021"
        },
        {
            id: 10,
            name: "Stray",
            image: require("../assets/img/stray.jpg"),
            developer: "BlueTwelve Studio",
            publisher: "Annapurna Interactive",
            alltimepeak: 85000,
            rating: 92,
            genre: "adventure",
            release: "19 July 2022"
        },
        {
            id: 11,
            name: "Fall Guys",
            image: require("../assets/img/fallguys.jpg"),
            developer: "Mediatonic",
            publisher: "Mediatonic",
            alltimepeak: 172000,
            rating: 80,
            genre: "sports",
            release: "4 August 2020"
        },
        {
            id: 12,
            name: "NBA 2k22",
            image: require("../assets/img/nba2k.jpg"),
            developer: "Visual Concepts",
            publisher: "2K",
            alltimepeak: 47000,
            rating: 56,
            genre: "sports",
            release: "10 September 2021"
        },
        {
            id: 13,
            name: "Red Dead Redemption 2",
            image: require("../assets/img/rdr2.jpg"),
            developer: "Rockstar Games",
            publisher: "Rockstar Games",
            alltimepeak: 55000,
            rating: 88,
            genre: "adventure",
            release: "5 December 2019"
        },
        {
            id: 14,
            name: "Sea of Thieves",
            image: require("../assets/img/seaofthieves.jpg"),
            developer: "Rare Ltd",
            publisher: "Xbox Game Studios",
            alltimepeak: 66000,
            rating: 89,
            genre: "adventure",
            release: "3 June 2020"
        },
        {
            id: 15,
            name: "No Man's Sky",
            image: require("../assets/img/nomansky.jpg"),
            developer: "Hello Games",
            publisher: "Hello Games",
            alltimepeak: 212000,
            rating: 73,
            genre: "adventure",
            release: "12 August 2016"
        },
        {
            id: 16,
            name: "BeamNG.drive",
            image: require("../assets/img/beamng.jpg"),
            developer: "BeamNG",
            publisher: "BeamNG",
            alltimepeak: 16000,
            rating: 96,
            genre: "simulator",
            release: "29 May 2015"
        },
        {
            id: 17,
            name: "Euro Truck Simulator 2",
            image: require("../assets/img/truksimulator.jpg"),
            developer: "SCS Software",
            publisher: "SCS Software",
            alltimepeak: 61000,
            rating: 96,
            genre: "simulator",
            release: "18 October 2012"
        },
        {
            id: 18,
            name: "Cities: Skylines",
            image: require("../assets/img/skyline.jpg"),
            developer: "Colossal Order Ltd.",
            publisher: "Paradox Interactive",
            alltimepeak: 60000,
            rating: 92,
            genre: "simulator",
            release: "10 March 2015"
        },
        {
            id: 19,
            name: "F1® 22",
            image: require("../assets/img/f122.jpg"),
            developer: "Codemasters",
            publisher: "Electronic Arts",
            alltimepeak: 25000,
            rating: 64,
            genre: "simulator",
            release: "1 July 2022"
        },
        {
            id: 20,
            name: "Sid Meier's Civilization VI",
            image: require("../assets/img/smc6.jpg"),
            developer: "Firaxis Games",
            publisher: "2K",
            alltimepeak: 162000,
            rating: 82,
            genre: "strategy",
            release: "21 October 2016"
        }
    ]


    return <>
        <Navbar />
        <Cards gameData={data} />
    </>
}


export default Data;
