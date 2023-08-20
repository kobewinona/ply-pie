'use client'

import React from 'react';
import Image from 'next/image';

import styles from './Item.module.css';
import Title from '../Shared/Title';
import Text from '../Shared/Text';
import Button from '../Shared/Button';


const Item = ({isMobile, id, name, description}) => {
  return (
    isMobile
      ? <div className={styles['item-container']}>
          <Title text={name} place="item" />
          <div className={styles['image']}>
            <Image
              src={`/items/${id}.jpeg`}
              alt=""
              fill
              style={{objectFit: 'cover'}}
              priority
            />
          </div>
          <Text text={description} place="item" />
          <Button text="Подробнее" place="item" />
        </div>
      : <div className={styles['item-container']}>
          <div className={styles['image']}>
            <Image
              src={`/items/${id}.jpeg`}
              alt=""
              fill
              style={{objectFit: 'cover'}}
              priority
            />
          </div>
          <Title text={name} place="item" />
          <Text text={description} place="item" />
          <Button text="Подробнее" place="item" />
        </div>
  );
};

export default Item;