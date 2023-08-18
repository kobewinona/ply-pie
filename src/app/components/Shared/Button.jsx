import buttonStyles from './Button.module.css';


const Button = ({text, place, ...props}) => {
  return (
    <button
      className={`${buttonStyles.button} ${buttonStyles[`button_place_${place}`]}`}
      {...props}
    >{text}</button>
  );
};

export default Button;