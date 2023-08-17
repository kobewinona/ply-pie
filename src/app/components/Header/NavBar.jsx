import {NavLink} from 'react-router-dom';

import navBarStyles from './NavBar.module.css';

import Burger from '../Burger/Burger';


const NavBar = () => {
  return (
    <nav>
      <ul className={navBarStyles.navigation}>
        <li>
          <img
            className={`${navBarStyles.logo} ${navBarStyles.logo}`}
            src="/logo_brown_small.svg"
            alt=""
          />
        </li>
        <li><button className={navBarStyles.button}>Каталог</button></li>
        <li><Burger /></li>
      </ul>
    </nav>
  );
};

export default NavBar;