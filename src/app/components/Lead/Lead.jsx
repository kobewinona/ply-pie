import Image from 'next/image';

import styles from './Lead.module.css';


const Lead = () => {
  return (
    <section className={styles['layout']}>
      <Image
        src="/cover/secretaire.jpg"
        alt=""
        fill
        style={{objectFit: 'cover'}}
        priority
      />
    </section>
  );
};

export default Lead;