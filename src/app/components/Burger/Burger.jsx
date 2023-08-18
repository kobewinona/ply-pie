'use client'

import {useState} from 'react';

import burgerStyles from './Burger.module.css';

const Burger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <div className={burgerStyles.container} onClick={toggleMenu}>
      <div className={`${burgerStyles.icon} ${isMenuOpen && burgerStyles.iconTurnedIntoCross}`}></div>
    </div>
  );
};

export default Burger;