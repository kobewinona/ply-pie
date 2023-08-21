import styles from './Title.module.css';


const Title = ({text, place, gridOrder}) => {
  const titleGridOrder = {
    order: gridOrder ?? '',
  };
  
  return (
    <h2
      className={`${styles['layout']} ${styles[`layout_place_${place}`]}`}
      style={titleGridOrder}
    >{text}</h2>
  );
};

export default Title;