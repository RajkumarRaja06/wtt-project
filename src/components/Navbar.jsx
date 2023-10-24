import cmpLogo from '../../public/images/wtt-image.png';
import { navbarMenu } from '../constants';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import { BiGridAlt } from 'react-icons/bi';

const Navbar = () => {
  const [isMenuButton, setIsMenuButton] = useState(false);
  const [btnName, setBtnName] = useState('home');

  const changeMenuBtn = () => {
    setIsMenuButton((isMenuButton) => !isMenuButton);
  };

  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
          <img src={cmpLogo} alt='Mouse Icon' />
        </div>

        <div className='menu'>
          <ul
            className={`${
              isMenuButton ? 'navbar-list active-navbar-list' : 'navbar-list'
            }`}
          >
            {navbarMenu.map((data, index) => {
              const { name, href } = data;
              return (
                <li key={index} onClick={() => setBtnName(name)}>
                  <Link
                    to={href}
                    className={`${
                      btnName === name ? 'active-navbar-a' : 'nav-menu'
                    }`}
                  >
                    <span className='nav-icon-name'>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className='menuBtn'>
            <button type='button' className='menuIcon' onClick={changeMenuBtn}>
              {isMenuButton ? <BsXLg /> : <BiGridAlt />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
