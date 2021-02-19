import React from 'react';
import { Paper } from '@material-ui/core';

const Card = (props) => (
  <Paper
    style={{
      paddingLeft: '2rem',
      paddingTop: '2rem',
      paddingBottom: '2rem',
      paddingRight: '2rem',
      display: 'flex',
      boxShadow: '0px 0px 3px #313C4F59',
      flexDirection: 'column',
      alignItems: 'center',
      ...props.style,
    }}
  >
    {props.children}
  </Paper>
);

export default Card;
