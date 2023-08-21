import styles from './Text.module.css';


const Text = ({text, place, gridOrder}) => {
  const textGridOrder = {
    order: gridOrder,
  }
  return (
    <p
      className={`${styles['layout']} ${styles[`layout_place_${place}`]}`}
      style={textGridOrder}
    >{text}</p>
  );
};

export default Text;