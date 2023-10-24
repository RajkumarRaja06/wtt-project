// import '../styles/index.css';
// import '../styles/navbar.css';

import { navbarMenu } from '../constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Demo = () => {
  const [isMenuButton, setIsMenuButton] = useState(false);

  const changeMenuBtn = () => {
    setIsMenuButton((isMenuButton) => !isMenuButton);
  };

  return (
    <nav>
      <div className='navbar'>
        <div className='logo'>
          {/* <img src={mouse} alt='Mouse Icon' /> */}
          <div className='logoBorder'></div>
          <div className='name1'>RAJKUMAR</div>
          <div className='name2'>RAJA</div>
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
                <li key={index}>
                  <Link
                    className='nav-menu'
                    activeClass='active'
                    to={href}
                    onClick={changeMenuBtn}
                  >
                    <span className='nav-icon-name'>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Demo;
