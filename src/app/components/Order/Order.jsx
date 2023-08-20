'use client'

import {useState} from 'react';

import styles from './Order.module.css';

import Title from '../Shared/Title';
import Form from '../Shared/Form/Form';
import Input from '../Shared/Form/Input';


const Order = () => {
  const [inputValues, setInputValues] = useState({});
  
  const handleValuesUpdate = (name, value) => {
    setInputValues(prevValues => ({
      ...prevValues, [name]: value
    }));
  };
  
  const handleSubmit = event => {
    console.log('submited');
    
    event.preventDefault();
  }
  return (
    <section className={styles['layout']}>
      <Title text="Заказ" place="order"/>
      <Form
        onSubmit={handleSubmit}
        validate={true}
        theme="light"
        size="small"
      >
        <Input
          defaultValue={''}
          onUpdate={handleValuesUpdate}
          name="userName"
          type="text"
          placeholder="Имя"
          aria-label="Имя."
          minLength="2"
          maxLength="40"
          autoComplete="off"
          required
        />
        <Input
          defaultValue={''}
          onUpdate={handleValuesUpdate}
          name="userName"
          type="email"
          placeholder="E-mail"
          aria-label="E-mail."
          autoComplete="off"
          required
        />
        <textarea
          className={styles['text-area']}
          placeholder="Расскажите о заказе..."
          aria-label="Расскажите о заказе."
          required
        />
      </Form>
    </section>
  );
};

export default Order;