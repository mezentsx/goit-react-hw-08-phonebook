import React, {useEffect} from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import s from './PhonebookView.module.css'
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from "redux/auth";



export default function PhonebookView() {
    const contacts = useSelector(state => state.contacts.items);
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => { 
      if (!isLoggedIn) {
      return;
    }
    dispatch(fetchContacts())}, [isLoggedIn, dispatch]
    );

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
}