import styles from './Title.module.css';


const Title = ({text, place}) => {
  return (
    <h2
      className={`${styles['title']} ${styles[`title_place_${place}`]}`}
    >{text}</h2>
  );
};

export default Title;