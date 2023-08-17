import buttonStyles from './Button.module.css';


const Button = ({text, place}) => {
  return (
    <button
      className={`${buttonStyles.button} ${buttonStyles[`button_place_${place}`]}`}>{text}
    </button>
  );
};

export default Button;