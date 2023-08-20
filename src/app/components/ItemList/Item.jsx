import React from 'react';
import Image from 'next/image';

import styles from './Item.module.css';
import Title from '../Shared/Title';
import Text from '../Shared/Text';
import Button from '../Shared/Button';


const Item = ({id, name, description}) => {
  return (
    <>
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
    </>
  );
};

export default Item;