import styles from './Contacts.module.css';

import Title from '../Shared/Title';


const Contacts = () => {
  return (
    <section id="contacts" className={styles['layout']}>
      <Title text="Контакты" place="contacts"/>
      <div className={styles['contacts-container']}>
        <div className={styles['contact-container']}>
          <div className={`${styles.pict} ${styles['pict_phone']}`}></div>
          <p className={styles.text}>+7 (111) 222-33-44</p>
        </div>
        <div className={styles['contact-container']}>
          <div className={`${styles.pict} ${styles['pict_email']}`}></div>
          <p className={styles.text}>info@plypie.ru</p>
        </div>
      </div>
      <div className={styles['circle-container']}>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
};

export default Contacts;