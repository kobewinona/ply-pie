import daysOne from '../../utils/fonts/daysOne';

import headerStyles from './Header.module.css';
import NavBar from './NavBar';


const Header = () => {
  return (
    <header>
      <h1 className={`${headerStyles.title} ${daysOne.className}`}>
        <span className={headerStyles.word}>PLY</span>
        <span className={headerStyles.word}>PIE</span>
      </h1>
      <img
        className={headerStyles.logo}
        src="/logo_brown_big.svg"
        alt=""
      />
      <NavBar />
    </header>
  );
};

export default Header;