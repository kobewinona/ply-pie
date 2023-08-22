'use client'

import {useState} from 'react';

import styles from './Burger.module.css';

const Burger = ({isVisible}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <div className={`${styles['layout']} ${isVisible && styles['layout_visible']}`} onClick={toggleMenu}>
      <div className={`${styles['icon']} ${isMenuOpen && styles['iconTurnedIntoCross']}`}></div>
    </div>
  );
};

export default Burger;