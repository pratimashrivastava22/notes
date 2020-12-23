import React from 'react';
import { Button } from '@material-ui/core';

const BaseButton = (props) => {
  const { text } = props;
  return (
  <Button
    variant='contained'
    color='primary'
    margin='normal'
    {...props}
  >
    {text}
  </Button>
)};

export default BaseButton;