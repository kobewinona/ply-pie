import React from 'react';

import {items} from '../../utils/items';

import itemListStyles from './ItemList.module.css';

import Item from './Item';

const ItemList = () => {
  return (
    <section>
      <ul className={itemListStyles.container}>
        {
          items.map(item => {
            return (
              <li>
                <Item
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  image={item.image}
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