// Style
import '../Navbar/NavbarStyle.scss';
import headerImg from '../../assets/img/header-img.svg';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {

    return <>
        <div className="container">
            <div className='header-container'>
                <Link to="/">
                    <div className='header-title'>
                        <img src={headerImg} alt="Header img" />
                        <h1 className='glitch'>
                            <span aria-hidden="true">Gaming Universe</span>
                            Gaming Universe
                            <span aria-hidden="true">Gaming Universe</span>
                        </h1>

                    </div>
                </Link>
                <Link to="/cart">
                    <div className='cart'>
                        <FaShoppingCart />
                    </div>
                </Link>
            </div>
        </div>
    </>
}


export default Navbar;
