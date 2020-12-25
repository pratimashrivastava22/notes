import React, { useState, useEffect } from 'react';
import BaseButton from '../Base/Button';
import TextInput from '../Base/TextInput';
import { connect } from 'react-redux';
import { login, setLoginError } from '../../Actions/Login';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

const Login = ({ history, login, user, loginError, setLoginError }) => {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    if (user && user.token) history.push('/notes');
  }, [user]);

  useEffect(() => {
    if (user && user.token) history.push('/notes');
  }, [user]);

  useEffect(() => {
    if (loginError) {
      alert(loginError);
      setLoginError({ loginError: null });
    }
  }, [loginError]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return;
    login({ username, password });
  };

  return (
    <div className='wrapper'>
      <form className='container' onSubmit={onSubmit}>
        <TextInput
          id='username'
          label='Username'
          onChange={(e) => setUserName(e.target.value)}
          helperText={!username ? '*required' : ''}
        />
        <TextInput
          id='pasword'
          label='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          helperText={!password ? '*required' : ''}
        />
        <BaseButton
          text='Login'
          type='submit'
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.loginState };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { login, setLoginError }, dispatch
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));