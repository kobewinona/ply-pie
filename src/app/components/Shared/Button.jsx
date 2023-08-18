import styles from './Button.module.css';


const Button = ({text, place, ...props}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button_place_${place}`]}`}
      {...props}
    >{text}</button>
  );
};

export default Button;