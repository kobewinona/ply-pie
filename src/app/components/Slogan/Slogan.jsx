import styles from './Slogan.module.css';

const Slogan = () => {
  return (
    <section className={styles['layout']}>
      <p className={styles['text']}>COOKED WITH<br/>
        <span className={styles['accent']}>FUTURISM</span>
      </p>
    </section>
  );
};

export default Slogan;