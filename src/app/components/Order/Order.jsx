'use client'

import {useState} from 'react';

import orderStyles from './Order.module.css';

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
    <section className={orderStyles.container}>
      <Title text="Заказ" place="order"/>
      <Form
        onSubmit={handleSubmit}
        validate={false}
        place="popup"
        theme="light"
        size="small"
      >
        <Input
          defaultValue={'currentUser.name'}
          onUpdate={handleValuesUpdate}
          validate={true}
          place="popup"
          name="userName"
          type="text"
          placeholder="Имя"
          aria-label="Имя."
          minLength="2"
          maxLength="40"
          required
        />
      </Form>
    </section>
  );
};

export default Order;