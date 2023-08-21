import Image from 'next/image';

import styles from './Lead.module.css';


const Lead = () => {
  return (
    <section className={styles['layout']}>
      <div className={styles['image-container']}>
        <div className={styles['image']}>
          <Image
            src={`/cover/secretaire.jpeg`}
            alt=""
            fill
            sizes="100%"
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className={styles['image']}>
          <Image
            src={`/cover/table.jpeg`}
            alt=""
            fill
            sizes="100%"
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className={styles['image']}>
          <Image
            src={`/cover/shelf.jpeg`}
            alt=""
            fill
            sizes="100%"
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Lead;