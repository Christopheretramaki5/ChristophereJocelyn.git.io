import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function BoutonCurrentPosition() {
  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', 
    flexGrow: 1, 
    zIndex:1000, 
    position:'absolute',
    top:'560px',
    left: 5}}> 
      <Fab color="primary" aria-label="add">
        <AccessibilityIcon/>
      </Fab>
    </Box>
  )
}
