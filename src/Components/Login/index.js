import React, { useState, useEffect } from 'react';
import BaseButton from '../Base/Button';
import TextInput from '../Base/TextInput';
import { connect } from 'react-redux';
import { login } from '../../Actions/Login';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = () => {
    if (!username || !password) return;
    props.login({ username, password });
    props.history.push('/notes');
  };

  return (
    <div className='wrapper'>
      <form className='container' onSubmit={onSubmit}>
        <TextInput
          id='username'
          label='Username'
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextInput
          id='pasword'
          label='Password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
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
  const { user } = state.loginState;
  return { user };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { login }, dispatch
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));