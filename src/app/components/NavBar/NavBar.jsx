'use client'

import {useState, useEffect} from 'react';

import styles from './NavBar.module.css';

import Burger from '../Burger/Burger';


const NavBar = ({isMobile}) => {
  return (
    <nav className={styles['nav-bar']}>
      <ul className={styles['menu-container']}>
        <li className={styles['logo-container']}>
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
              <li><Burger /></li>
            </>
          : <>
              <li>
                <ul className={styles['menu']}>
                  <li>Каталог</li>
                  <li>О нас</li>
                  <li>Контакты</li>
                </ul>
              </li>
              <li>
                <ul className={styles['socials-container']}>
                  <li>
                    <a>
                      <img
                        className={styles['socials-logo']}
                        src="/pictograms/telegram_dark.png"
                        alt="Телеграм"/>
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        className={styles['socials-logo']}
                        src="/pictograms/instagram_dark.png"
                        alt="Инстаграм"/>
                    </a>
                  </li>
                  <li>
                    <a>
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