import Link from 'next/link';

import daysOne from '../../utils/fonts/daysOne';

import styles from './Header.module.css';


const Header = () => {
  return (
    <header className={styles['layout']}>
      <h1 className={`${styles['title']} ${daysOne.className}`}>
        <span className={styles['title-word']}>PLY</span>
        <span className={styles['title-word']}>PIE</span>
      </h1>
      <Link href={'/'}>
        <img
          className={styles['logo']}
          src="/logo_brown_big.svg"
          alt="Логотип."
        />
      </Link>
    </header>
  );
};

export default Header;