'use client'

import Image from 'next/image';

import styles from './Lead.module.css';


const Lead = ({isMobile}) => {
  return (
    <section className={styles['layout']}>
      {isMobile
        ? <div className={styles['image']}>
            <Image
              src={`/cover/secretaire.jpeg`}
              alt=""
              fill
              style={{objectFit: 'cover'}}
              priority
            />
          </div>
        : <div className={styles['image-container']}>
            <div className={styles['image']}>
              <Image
                src={`/cover/secretaire.jpeg`}
                alt=""
                fill
                style={{objectFit: 'cover'}}
                priority
              />
            </div>
            <div className={styles['image']}>
              <Image
                src={`/cover/table.jpeg`}
                alt=""
                fill
                style={{objectFit: 'cover'}}
                priority
              />
            </div>
            <div className={styles['image']}>
              <Image
                src={`/cover/shelf.jpeg`}
                alt=""
                fill
                style={{objectFit: 'cover'}}
                priority
              />
            </div>
            {/*<img className={styles['image']} src="/cover/secretaire.jpeg" alt="" />*/}
            {/*<img className={styles['image']} src="/cover/table.jpeg" alt="" />*/}
            {/*<img className={styles['image']} src="/cover/shelf.jpeg" alt="" />*/}
          </div>
      }
    </section>
  );
};

export default Lead;