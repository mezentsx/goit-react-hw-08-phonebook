import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './AuthNav.module.css';

export default function AuthNav() {
    return (
      <div>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}>
          Sign up
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}>
          Sign in
        </NavLink>
      </div>
    );
  }