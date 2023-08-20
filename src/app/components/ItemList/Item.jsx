import React from 'react';
import Image from 'next/image';

import styles from './Item.module.css';
import Title from '../Shared/Title';
import Text from '../Shared/Text';
import Button from '../Shared/Button';


const Item = ({id, name, imagePosition, description}) => {
  return (
    <div className={`${styles['item-container']} ${styles[`item-container_image_${imagePosition}`]}`}>
      <Title text={name} place="item" />
      <div className={`${styles['image']} ${styles[`image_${imagePosition}`]}`}>
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
  );
};

export default Item;