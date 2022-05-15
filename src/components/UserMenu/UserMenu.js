import s from './UserMenu.module.css';
import { useDispatch, useSelector } from "react-redux";
import authOperations from 'redux/auth/auth-operations';
import { authSelectors } from "redux/auth";
import defaultAvatar from "components/default-avatar.png"

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  
    return (
        <div className={s.container}>
          <img src={avatar} alt="" width="32" height="32" className={s.img}/>
          <span className={s.name}>Welcome, {name}</span>
          <button variant="outlined" type="button" onClick={() => dispatch(authOperations.logOut())}>
          Log out
          </button>
        </div>
      );
}