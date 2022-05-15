import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import s from './AppBar.module.css';

import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';


export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return (
    <header className={s.header} >
        <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}