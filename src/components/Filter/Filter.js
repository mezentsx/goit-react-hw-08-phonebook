import React from 'react';
import { nanoid } from 'nanoid';
import s from './Filter.module.css';
import { contactSearch } from 'redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import selector from 'redux/contacts/contats-selectors';

const Filter = () => {
  const inputFilter = nanoid();

  const value = useSelector(state => selector.getFilter(state));
  const dispatch = useDispatch();

  return (
    <>
      <h3 className={s.title}>Find contacts by name</h3>
      <label htmlFor={inputFilter} className={s.label}>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(contactSearch(e.currentTarget.value))}
          id={inputFilter}
          className={s.input}
        />
      </label>
    </>
  );
};

export default Filter;
