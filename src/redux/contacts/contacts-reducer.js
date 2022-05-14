import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { contactSearch } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => {
    const contactsNames = state.map(contact => {
      return contact.name.toLowerCase();
    });

    contactsNames.includes(payload.name.toLowerCase())
      ? alert(`${payload.name} is already in contacts `)
      : state.push(payload);
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const filter = createReducer('', {
  [contactSearch]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  items,
  loading,
  filter,
  error,
});
