import React from 'react';
import { TextField } from '@material-ui/core';

const TextInput = (props) => (
  <TextField
    variant='outlined'
    fullWidth={true}
    margin='normal'
    {...props}
  />
);

export default TextInput;