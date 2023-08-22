import React from 'react';

import {items} from '../../utils/items';

import styles from './ItemList.module.css';

import Item from './Item';
import Responsive from '@/app/components/Shared/Responsive';

const ItemList = () => {
  return (
    <section id="item-list" className={styles['layout']}>
      <ul className={styles['item-list-container']}>
        {
          items.map((item, i) => {
            let imagePosition;
            
            if (i % 2 === 0) {
              imagePosition = 'left';
            } else {
              imagePosition = 'right';
            }
            return (
              <li>
                <Item
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  imagePosition={imagePosition}
                  description={item.description}
                />
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};

export default ItemList;