import React from 'react';
import Typography from '@mui/material/Typography';
import { CopyrightsProps } from './types';

function Copyrights(props: CopyrightsProps) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Daniel '}   
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyrights;
