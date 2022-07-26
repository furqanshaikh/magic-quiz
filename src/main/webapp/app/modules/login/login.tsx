import React, { useState, useEffect } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { login } from 'app/shared/reducers/authentication';
import LoginModal from './login-modal';
import { AccountBalance } from '@mui/icons-material';
import { AUTHORITIES } from 'app/config/constants';
import { identity } from 'lodash';

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
  const { authorities } = acc;

  const { location } = props;
  const { from } = (location.state as any) || { from: { pathname: '/userdashboard/home', search: location.search } };

  if (isAuthenticated) {
    const dashboard = authorities.map(i => {
      if (i === AUTHORITIES.ADMIN) {
        return <Redirect to={{ pathname: '/admindashboard/home' }} />;
      } else if (i === AUTHORITIES.USER) {
        return <Redirect to={{ pathname: '/userdashboard/home' }} />;
      }
    });

    return dashboard;
  }

  return <LoginModal showModal={showModal} handleLogin={handleLogin} handleClose={handleClose} loginError={loginError} />;
};

export default Login;
