'use client'

import {useRef, useState, useEffect} from 'react';

import styles from './Form.module.css';

import Spinner from '../Spinner';
import Button from '../Button';


const Form = ({onSubmit, isOpen, ...props}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputsValidity, setInputsValidity] = useState({});
  
  const handleChange = event => {
    const inputs = Array.from(event.currentTarget.elements);
    
    const currentInputsValidity = inputs.reduce((validity, input) => {
      validity[input.name] = input.validity.valid;
      return validity;
    }, {});
    
    setInputsValidity(currentInputsValidity);
  };
  
  const validateForm = () => {
    const inputValues = Object.values(inputsValidity);
    
    if (inputValues.length === 0) {
      setIsFormValid(false);
      return;
    }
    
    setIsFormValid(inputValues.every((i) => i === true));
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    
    if (event.target.checkValidity()) {
      onSubmit();
    } else {
      onSubmit();
    }
    
    setIsFormValid(false);
  };
  
  useEffect(() => {
    validateForm();
    
    // eslint-disable-next-line
  }, [inputsValidity]);
  
  useEffect(() => {
    setInputsValidity({});
  }, [isOpen]);
  
  return (
    <form
      className={styles['layout']}
      onChange={handleChange}
      onSubmit={handleSubmit}
      name={props.name}
      noValidate
    >
      {props.children}
      {props.isUpdating
        ? <Spinner theme={props.theme} size={props.size}/>
        : <Button
          text="Отправить"
          theme="dark"
          place="order"
          type="submit"
          name="submit"
          disabled={!isFormValid}
        >Отправить</Button>}
    </form>
  )
};

export default Form;