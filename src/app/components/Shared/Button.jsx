import styles from './Button.module.css';


const Button = ({text, place, gridOrder, ...props}) => {
  const buttonGridOrder = {
    order: gridOrder,
  };
  
  return (
    <button
      className={`${styles['button']} ${styles[`button_place_${place}`]}`}
      style={buttonGridOrder}
      {...props}
    >{text}</button>
  );
};

export default Button;