import textStyles from './Text.module.css';


const Text = ({text, place}) => {
  return (
    <p
      className={`${textStyles.text} ${textStyles[`text_place_${place}`]}`}>{text}
    </p>
  );
};

export default Text;