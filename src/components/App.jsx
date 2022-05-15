import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { authSelectors } from "redux/auth";
import s from './App.module.css';
import authOperations from 'redux/auth/auth-operations';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivatRoute';
import AppBar from './AppBar'

const HomeView = lazy(() => import('views/HomeView'))
const RegisterView = lazy(() => import('views/RegisterView'))
const LoginView = lazy(() => import('views/LoginView'))
const PhonebookView = lazy(() => import('views/PhonebookView'))
const NotFoundView =lazy(() => import('views/NotFoundView'))


export const App = () => {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(authOperations.fetchCurrentUser()) }, [dispatch]);

  return (
    <>
    {isFetchingCurrentUser ? (
      <h1 className={s.title}>Loading...</h1>
    ) : (
      <>
      <AppBar />
      <Suspense fallback={<p className={s.text}>Loading...</p>}>
        <Routes>
          <Route index path="/" element={<PublicRoute><HomeView /></PublicRoute>} />
          <Route path="/register" element={ <PublicRoute restricted ><RegisterView /></PublicRoute> } />
          <Route path="/login" element={<PublicRoute restricted ><LoginView /></PublicRoute>} />
          <Route path="/contacts" element={ <PrivateRoute><PhonebookView /></PrivateRoute>} />
          <Route path="*" element={<NotFoundView/>}/>
        </Routes>
      </Suspense>
      </>
  )}
  </>
  );
};
