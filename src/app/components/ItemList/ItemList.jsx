import React from 'react';

import {items} from '../../utils/items';

import styles from './ItemList.module.css';

import Item from './Item';
import Responsive from '@/app/components/Shared/Responsive';

const ItemList = () => {
  return (
    <section className={styles['layout']}>
      <ul className={styles['item-list-container']}>
        {
          items.map(item => {
            return (
              <li>
                <Responsive
                  element={Item}
                  breakpoint={768}
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                />
                {/*<Item*/}
                {/*  key={item._id}*/}
                {/*  id={item._id}*/}
                {/*  name={item.name}*/}
                {/*  image={item.image}*/}
                {/*  description={item.description}*/}
                {/*/>*/}
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};

export default ItemList;