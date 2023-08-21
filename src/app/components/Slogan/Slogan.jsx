import styles from './Slogan.module.css';

const Slogan = ({place}) => {
  return (
    <section className={`${styles['layout']} ${styles[`layout_place_${place}`]}`}>
      <p className={styles['text']}>COOKED WITH</p>
      <p className={styles['accent']}>FUTURISM</p>
      <div className={styles['lines-container']}>
        <div className={styles['lines']}></div>
      </div>
    </section>
  );
};

export default Slogan;