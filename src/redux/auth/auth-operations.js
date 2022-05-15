import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk(
    'auth/register', 
    async (credentials) =>{
        try{
            const {data} = await axios.post('/users/signup', credentials);
            token.set(data.token);
            console.log(data);
            return data;
        }
        catch (error) {
          return alert('Please try another email address');
        }
});

const logIn = createAsyncThunk(
    'auth/login', 
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } 
        catch (error) {
          rejectWithValue('Incorrect email address or password')
        }
  });

const logOut = createAsyncThunk(
    'auth/logout', 
    async () => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } 
        catch (error) {
          return alert('ERROR');
        }
})

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, {getState, rejectWithValue }) => {
      const state = getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return rejectWithValue();
      }
  
      token.set(persistedToken);
      
      try {
        const { data } = await axios.get('/users/current');
        return data;
      } catch (error) {
        rejectWithValue(error.message)
      }
    },
  );

const authOperations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
  };
export default authOperations;