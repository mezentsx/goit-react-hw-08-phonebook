import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import s from './LoginView.module.css'

export default function LoginView(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = ({ target: { name, value } }) => {
      switch (name) {
        case 'email':
          return setEmail(value);
        case 'password':
          return setPassword(value);
        default:
          return;
      }
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(authOperations.logIn({ email, password }));
      reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
      }
  
      return (
          <div className={s.container}>
            <h1 className={s.title}>Sign in</h1>
      
            <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
              <label className={s.label}>
              Email
                <input className={s.input}
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </label>
      
              <label className={s.label}>
              Password
                <input className={s.input}
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  autoComplete="off"
                  pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                />
              </label>
              <button className={s.button} type="submit" >Sign in</button>
            </form>
          </div>
        );
      }
  