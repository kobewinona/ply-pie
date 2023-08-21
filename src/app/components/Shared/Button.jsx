import styles from './Button.module.css';


const Button = ({text, theme, place, gridOrder, ...props}) => {
  const buttonGridOrder = {
    order: gridOrder,
  };
  
  return (
    <button
      className={`${styles['layout']} ${styles[`layout_theme_${theme}`]} ${styles[`layout_place_${place}`]}`}
      style={buttonGridOrder}
      {...props}
    >{text}</button>
  );
};

export default Button;