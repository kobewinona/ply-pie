import sloganStyles from './Slogan.module.css';

const Slogan = () => {
  return (
    <section className={sloganStyles.container}>
      <p className={sloganStyles.text}>COOKED WITH<br/>
        <span className={sloganStyles.accent}>FUTURISM</span>
      </p>
    </section>
  );
};

export default Slogan;