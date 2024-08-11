import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LayersIcon from '@mui/icons-material/Layers';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import MapIcon from '@mui/icons-material/Map';
import Rotate90DegreesCwIcon from '@mui/icons-material/Rotate90DegreesCw';
import React from 'react';


export default function LayersTypes({choiceFontMaps, choiceFontOSM, choiceFontSatelite}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, top: 300, zIndex:1000, position:'absolute'}}>
      
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', right: 0, left: 35}}
        icon={<LayersIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
      
        <SpeedDialAction
            icon={<Rotate90DegreesCwIcon />}
            tooltipTitle="Maps"
            tooltipOpen
            tooltipPlacement='right'
            onClick={choiceFontMaps}
          />
          <SpeedDialAction
            icon={<MapIcon />}
            tooltipTitle="OSM"
            tooltipOpen
            tooltipPlacement='right'
            onClick={choiceFontOSM}
          />
          <SpeedDialAction
            icon={<SatelliteAltIcon />}
            tooltipTitle="Satelite"
            tooltipOpen
            tooltipPlacement='right'
            onClick={choiceFontSatelite}
          />
        
      </SpeedDial>
    </Box>
  );
}