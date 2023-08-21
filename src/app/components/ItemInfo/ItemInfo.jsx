import Image from 'next/image';

import styles from './ItemInfo.module.css';

import {items} from '../../utils/items';

import Title from '../Shared/Title';
import Text from '../Shared/Text';


const ItemInfo = ({itemId}) => {
  const item = items.filter(item => item._id === itemId);
  
  const itemTitle = item[0].name;
  const itemDescription = item[0].description;
  const galleryImages = item[0].gallery_images;
  
  return (
    <section>
      <div className={styles['item-container']}>
        <div className={styles['image-container']}>
          <div className={styles['image']}>
            <Image
              src={`/items/${itemId}.jpeg`}
              alt=""
              fill
              sizes="100%"
              style={{objectFit: 'cover'}}
              priority
            />
          </div>
          <div className={styles['image-gallery']}>
            {
              galleryImages.map(image => {
                return (
                  <div className={styles['image-gallery-item']}>
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="100%"
                      style={{objectFit: 'cover'}}
                      priority
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles['description-container']}>
          <Title text={itemTitle} place="item-info" />
          <Text text={itemDescription} place="item-info" />
          <ul className={styles['feature-container']}>
            <li className={styles['feature']}>
              <img className={styles['feature-pict']} src="/pictograms/brush.png" alt="" />
              <div>
                <h3 className={styles['feature-title']}>Цвет</h3>
                <p className={styles['feature-description']}>Lorem ipsum dolor sit amet.</p>
              </div>
            </li>
            <li className={styles['feature']}>
              <img className={styles['feature-pict']} src="/pictograms/size.png" alt="" />
              <div>
                <h3 className={styles['feature-title']}>Габариты</h3>
                <p className={styles['feature-description']}>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              </div>
            </li>
            <li className={styles['feature']}>
              <img className={styles['feature-pict']} src="/pictograms/individ.png" alt="" />
              <div>
                <h3 className={styles['feature-title']}>Индивидуальность</h3>
                <p className={styles['feature-description']}>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </li>
            <li className={styles['feature']}>
              <img className={styles['feature-pict']} src="/pictograms/time.png" alt="" />
              <div>
                <h3 className={styles['feature-title']}>Время изготовления</h3>
                <p className={styles['feature-description']}>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ItemInfo;