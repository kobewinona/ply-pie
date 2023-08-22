// noinspection JSCheckFunctionSignatures

'use client'

import {useState, useEffect} from 'react';
import {usePathname, useRouter} from 'next/navigation'

import styles from './NavBar.module.css';

import Burger from '../Burger/Burger';


const NavBar = ({isMobile}) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const [scrollOffset, setScrollOffset] = useState();
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [isBurgerVisible, setIsBurgerVisible] = useState(false);
  const [currScrollOffset, setCurrScrollOffset] = useState(0);
  
  const handleLogoVisibility = () => {
    if (currScrollOffset >= '160') {
      setIsLogoVisible(true);
    } else {
      setIsLogoVisible(false);
    }
  }
  
  const handleBurgerVisibility = () => {
    if (currScrollOffset >= '160') {
      setIsBurgerVisible(true);
    } else {
      setIsBurgerVisible(false);
    }
  }
  
  useEffect(() => {
    handleLogoVisibility();
    handleBurgerVisibility();
  }, [currScrollOffset]);
  
  useEffect(() => {
    if (isMobile) {
      setScrollOffset(70);
    } else {
      setScrollOffset(185);
    }
  
    setCurrScrollOffset(window.scrollY);
  
    const handleScroll = () => {
      setCurrScrollOffset(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  const handleTransition = target => {
    if (pathname === '/' || target === 'contacts') {
      const element = document.querySelector(`#${target}`);
  
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - scrollOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      router.push(`/${target}`);
    }
  }
  
  
  return (
    <nav className={styles['nav-bar']}>
      <ul className={`${isMobile ?? styles['menu-container_hidden']} ${styles['menu-container']}`}>
        <li className={`${styles['logo-container']} ${isLogoVisible && styles['logo-container_visible']}`}>
          <a href="#">
            <img
              className={styles['logo']}
              src="/logo_brown.svg"
              alt=""
            />
          </a>
        </li>
        {isMobile
          ? <>
              <li><button className={styles['catalogue-button']}>Каталог</button></li>
              <li><Burger isVisible={isBurgerVisible} /></li>
            </>
          : <>
              <li>
                <ul className={styles['menu']}>
                  <li
                    className={styles['link']} onClick={() => handleTransition('item-list')}
                  >
                    Каталог
                  </li>
                  <li
                    className={styles['link']} onClick={() => handleTransition('about')}
                  >
                    О нас
                  </li>
                  <li
                    className={styles['link']} onClick={() => handleTransition('contacts')}
                  >
                    Контакты
                  </li>
                </ul>
              </li>
              <li>
                <ul className={styles['socials-container']}>
                  <li>
                    <a href="#">
                      <img
                        className={styles['socials-logo']}
                        src="/pictograms/telegram_dark.png"
                        alt="Телеграм"/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className={styles['socials-logo']}
                        src="/pictograms/instagram_dark.png"
                        alt="Инстаграм"/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className={styles['socials-logo']}
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