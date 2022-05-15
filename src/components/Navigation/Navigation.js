import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav>
                <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}>
                Home
                </NavLink>
    
            {isLoggedIn && (
                <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}>
                Phonebook
                </NavLink>
            )}
        </nav>
    );
  }
  
  export default Navigation;