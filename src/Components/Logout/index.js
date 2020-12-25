import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { loginSuccess } from '../../Actions/Login';
import { IconButton } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Logout = ({ loginSuccess }) => {
  return (
    <IconButton color="secondary" color="primary" onClick={() => loginSuccess({ user: null })}>
      <ExitToAppIcon />
    </IconButton>
  )
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { loginSuccess }, dispatch
);

export default connect(null, mapDispatchToProps)(Logout);