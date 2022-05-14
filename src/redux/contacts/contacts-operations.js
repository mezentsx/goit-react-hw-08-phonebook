import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://627ebebeb75a25d3f3bcb391.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const r = await axios.get('/contacts');
  return r.data;
});

export const addContact = createAsyncThunk('contacts/add', async data => {
  const contact = {
    name: data.name,
    number: data.number,
    completed: false,
  };
  const r = await axios.post('/contacts', contact);
  return r.data;
});

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async contactId => {
    const r = await axios.delete(`/contacts/${contactId}`);
    return r.data;
  },
);
