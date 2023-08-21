import styles from './Text.module.css';


const Text = ({text, place}) => {
  return (
    <p
      className={`${styles['layout']} ${styles[`layout_place_${place}`]}`}
    >{text}</p>
  );
};

export default Text;