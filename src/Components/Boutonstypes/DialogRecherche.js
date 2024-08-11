import { AppBar, Button, Dialog, IconButton, Toolbar, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import React from 'react'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '20%',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '10ch',
        '&:focus': {
          width: '28ch',
        },
      },
    },
  }));

export default function DialogRecherche({open, Transition, handleClose}) {
  return (
    <Dialog
    fullScreen
    open={open}
    TransitionComponent={Transition}
  >
    <AppBar sx={{ position: 'relative'}}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

        <Typography sx={{ ml: 6 }} variant="h6" component="div"></Typography>
        <Search>
          <SearchIconWrapper >
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Button autoFocus color='primary' onClick={handleClose} sx={{ ml: 2 }}>
          Recherche
        </Button>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
    <List>
      <ListItemButton>
        <ListItemText primary="Phone ringtone" secondary="Titania" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText
          primary="Default notification ringtone"
          secondary="Tethys"
        />
      </ListItemButton>
    </List>
  </Dialog>
  )
}
