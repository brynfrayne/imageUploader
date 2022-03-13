import React from 'react';
// import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './LoadingCard.css';

export default function LoadingCard() {
  return (
    <div className='loading-card'>
        <h1 className='uploadCard__title'>Uploading...</h1>
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    </div>
  )
}
