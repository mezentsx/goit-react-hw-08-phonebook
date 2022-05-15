import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import s from './RegisterView.module.css'


export default function RegisterView(){
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  function reset() {
    setName('');
    setEmail('');
    setPassword('');
  };

    return (
        <div className={s.container}>
          <h1 className={s.title}>Create your account</h1>
    
          <form  onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
              Name
              <input className={s.input}
              type="text" 
              name="name" 
              value={name} 
              onChange={handleChange} 
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required />
            </label>
    
            <label className={s.label}>
            Email
              <input className={s.input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required />
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
            <button className={s.button} type="submit">Sign up</button>
          </form>
        </div>
      );
}