import headerStyles from './Header.module.css';
import daysOne from '@/app/utils/fonts/daysOne';


const Header = () => {
  return (
    <header>
      <h1 className={`${headerStyles.header__title} ${daysOne.className}`}>
        <span className={headerStyles.header__word}>PLY</span>
        <span className={headerStyles.header__word}>PIE</span>
      </h1>
      <img
        className={`${headerStyles.header__logo} ${headerStyles.header__logo_place_header}`}
        src="/logo_brown_big.svg"
        alt=""
      />
      <nav>
        <ul className={headerStyles.header__navigation}>
          <li>
            <img
              className={`${headerStyles.header__logo} ${headerStyles.header__logo_place_nav}`}
              src="/logo_brown_small.svg"
              alt=""
            />
          </li>
          <li><button className={headerStyles.header__button}>Каталог</button></li>
          <li><div className={headerStyles.header__burger}></div></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;