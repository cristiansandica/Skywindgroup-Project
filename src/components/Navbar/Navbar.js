// Style
import '../Navbar/NavbarStyle.scss';
import headerImg from '../../assets/img/header-img.svg';


const Navbar = () => {

    return <>
        <div className="container" id="home">
            <img src={headerImg} alt="Header img" />
            <h1 className='glitch'>
                <span aria-hidden="true">Gaming Universe</span>
                Gaming Universe
                <span aria-hidden="true">Gaming Universe</span>
            </h1>
        </div>
    </>
}


export default Navbar;
