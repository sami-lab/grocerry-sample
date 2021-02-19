import React from 'react';
import { Typography, Box } from '@material-ui/core';

import Card from './Card';

//cardStyle , backgroundColor,icon,heading,number
const MiniCard = (props) => (
  <Card style={props.cardStyle}>
    <Box
      style={{
        backgroundColor: props.backgroundColor,
        width: '5rem',
        height: '5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
      }}
    >
      {props.icon}
    </Box>
    <Typography variant="subtitle1" style={{ marginTop: '0.3em' }}>
      {props.heading}
    </Typography>

    <Typography
      variant="h3"
      gutterBottom={false}
      style={{ fontWeight: '700', fontFamily: 'serif' }}
    >
      {props.number}
    </Typography>
  </Card>
);

export default MiniCard;
