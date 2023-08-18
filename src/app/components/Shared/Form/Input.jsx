'use client'

import {forwardRef, useState, useEffect} from 'react';

import styles from './Input.module.css';


const Input = forwardRef(({onUpdate, validate, place, fieldSize, ...props}, ref) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    setInputValue(props.defaultValue);
    setIsInputValid(true);
    setErrorMessage('');
  }, [props.defaultValue]);
  
  const handleInputsChange = event => {
    setInputValue(event.target.value);
    setIsInputValid(event.target.validity.valid);
    setErrorMessage(event.target.validationMessage);
    
    onUpdate(props.name, event.target.value);
  }
  
  return (
    <>
      <input
        ref={ref}
        className={`${styles.input} ${!isInputValid && styles['input_invalid']} ${styles[`input_size_${fieldSize}`]}`}
        onChange={handleInputsChange}
        value={inputValue || ''}
        {...props}
      />
      <span className={styles['input_error-message']}>{!isInputValid && errorMessage}</span>
    </>
  );
});

export default Input;