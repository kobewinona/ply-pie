import titleStyles from './Title.module.css';


const Title = ({text, place}) => {
  return (
    <h2
      className={`${titleStyles.title} ${titleStyles[`title_place_${place}`]}`}
    >{text}</h2>
  );
};

export default Title;