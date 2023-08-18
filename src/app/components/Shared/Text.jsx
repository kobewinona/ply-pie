import styles from './Text.module.css';


const Text = ({text, place}) => {
  return (
    <p
      className={`${styles.text} ${styles[`text_place_${place}`]}`}>{text}
    </p>
  );
};

export default Text;