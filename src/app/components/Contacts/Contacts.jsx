import contactsStyles from './Contacts.module.css';

import Title from '../Shared/Title';


const Contacts = () => {
  return (
    <section className={contactsStyles.contacts}>
      <Title text="Контакты" place="contacts"/>
      <div className={contactsStyles['contact-container']}>
        <div className={`${contactsStyles.pict} ${contactsStyles['pict_phone']}`}></div>
        <p className={contactsStyles.text}>+7 (111) 222-33-44</p>
      </div>
      <div className={contactsStyles['contact-container']}>
        <div className={`${contactsStyles.pict} ${contactsStyles['pict_email']}`}></div>
        <p className={contactsStyles.text}>info@plypie.ru</p>
      </div>
      <div className={contactsStyles['circle-container']}>
        <div className={contactsStyles.circle}></div>
      </div>
    </section>
  );
};

export default Contacts;