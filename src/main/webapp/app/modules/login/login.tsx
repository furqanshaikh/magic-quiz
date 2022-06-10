import React, { useState, useEffect } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { login } from 'app/shared/reducers/authentication';
import LoginModal from './login-modal';
import { AccountBalance } from '@material-ui/icons';

export const Login = (props: RouteComponentProps<any>) => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const acc = useAppSelector(state => state.authentication.account);
  const loginError = useAppSelector(state => state.authentication.loginError);
  const showModalLogin = useAppSelector(state => state.authentication.showModalLogin);
  const [showModal, setShowModal] = useState(showModalLogin);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleLogin = (username, password, rememberMe = false) => dispatch(login(username, password, rememberMe));

  const handleClose = () => {
    setShowModal(false);
    props.history.push('/');
  };

  const { location } = props;
  const { from } = (location.state as any) || { from: { pathname: '/userdashboard/home', search: location.search } };

  if (isAuthenticated && acc.login === 'user') {
    return <Redirect to={from} />;
  } else if (isAuthenticated && acc.login === 'admin') {
    return <Redirect to={{ pathname: '/admindashboard/home' }} />;
  }

  return <LoginModal showModal={showModal} handleLogin={handleLogin} handleClose={handleClose} loginError={loginError} />;
};

export default Login;
