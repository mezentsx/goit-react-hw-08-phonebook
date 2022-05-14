import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import s from './App.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';


export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchContacts())}, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You don't have any contacts</p>
      )}
    </div>
  );
};
