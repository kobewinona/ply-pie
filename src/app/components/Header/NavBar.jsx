'use client'

import {useState, useEffect} from 'react';

import styles from './NavBar.module.css';

import Burger from '../Burger/Burger';


const NavBar = () => {
  const higherRes = 768;
  const [isMobile, setIsMobile] = useState(false);
  
  const handleResize = () => {
    if (window.innerWidth < higherRes) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  
  useEffect(() => {
    setIsMobile(window.innerWidth <= higherRes);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  console.log('isMobile', isMobile);
  
  return (
    <nav>
      <ul className={styles.navBarContainer}>
        <li className={styles.logoContainer}>
          <img
            className={`${styles.logo} ${styles.logo}`}
            src="/logo_brown.svg"
            alt=""
          />
        </li>
        {isMobile
          ? <>
              <li><button className={styles.catalogueButton}>Каталог</button></li>
              <li><Burger /></li>
            </>
          : <>
              <li>
                <ul className={styles.menu}>
                  <li>Каталог</li>
                  <li>О нас</li>
                  <li>Контакты</li>
                </ul>
              </li>
              <li>
                <ul className={styles.socialsContainer}>
                  <li>
                    <a>
                      <img
                        className={styles.socialsLogo}
                        src="/pictograms/telegram_dark.png"
                        alt="Телеграм"/>
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className={styles.socialsLogo}
                        src="/pictograms/instagram_dark.png"
                        alt="Инстаграм"/>
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className={styles.socialsLogo}
                        src="/pictograms/pinterest_dark.png"
                        alt="Пинтерест"/>
                    </a>
                  </li>
                </ul>
              </li>
            </>
        }
      </ul>
    </nav>
  );
};

export default NavBar;