import styles from './Slogan.module.css';

const Slogan = () => {
  return (
    <section className={styles['layout']}>
      <p className={styles['text']}>COOKED WITH</p>
      <p className={styles['accent']}>FUTURISM</p>
      <div className={styles['lines-container']}>
        <div className={styles['lines']}></div>
      </div>
    </section>
  );
};

export default Slogan;