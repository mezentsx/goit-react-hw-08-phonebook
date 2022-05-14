import React from 'react';
import s from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import selector from 'redux/contacts/contats-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => selector.getVisibleContacts(state));

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            {name}: {number}
            <button
              type="button"
              onClick={() => onDelete(id)}
              className={s.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
