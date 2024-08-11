import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import AppsIcon from "@mui/icons-material/Apps";
import logo from "./../../Assets/images/logoHeader.png";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import { CloseOutlined, Login } from "@mui/icons-material";
import { BiCodeBlock, BiSolidUserAccount, BiUserCircle } from "react-icons/bi";
import { BsClock, BsEnvelope } from "react-icons/bs";
import { PiEnvelopeSimpleBold, PiUserGearFill } from "react-icons/pi";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  // const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = () => {
    setOpen(true);
    // setScroll(scrollType);
  };
  const handleClickLogin = () => {
    setOpenLogin(true);
  };
  // const handleClickOpen = (scrollType) => () => {
  //   setOpen(true);
  //   setScroll(scrollType);
  // };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  // ****************************Recherche*****************************************
  // const [donnee, setDonnee] = useState(null);
  // const [input, setInput] = useState('')

  // const InputRecherche = () => {
  //   const overpassQuery = `
  //     [out:json];
  //         area["name"="Fianarantsoa"]->.searchArea;

  //           node["name"~"${input}"](area.searchArea);
  //         out body;
  //         >;
  //         out skel qt;
  //         `;
  //   const overpassUniverURL = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;
  //   // Faire une requête pour les universités
  //   axios.get(overpassUniverURL)
  //     .then((response) => {
  //       setDonnee(response.data.elements);
  //       console.log(donnee);
  //     })
  //     .catch(() => {
  //       console.log("Erreur de serveur lors de la récupération des universités");
  //     });
  // }

  // const donnees = donnee.map((element) => ({
  //   id: element.id,
  //   latitude: element.lat,
  //   longitude: element.lon,
  // }));

  // const map = useMap();
  // const lat = donnees['latitude'];
  // const lon = donnees['longitude'];

  // console.log(lat);
  // console.log(lon);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img src={logo} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Map-etabli
          </Typography>

          {/* <Search sx={{ display: 'flex' }}>

            <StyledInputBase
              sx={{ marginLeft: -3.9 }}
              placeholder="Search…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton onClick={InputRecherche}>
              <SearchIcon sx={{
                cursor: 'pointer',
                marginTop: '3px',
                background: '#1976d2 ',
                borderRadius: '5px',
                padding: '3px',
                height: '35px',
                width: '30px',
                fontSize: '25px'
              }} />
            </IconButton>
          </Search> */}
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
            }}
          >
            <IconButton
              sx={{ p: "5px" }}
              aria-label="menu"
              onClick={handleClickOpen}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
              onClick={handleClickOpen}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleClickOpen}
            >
              {/* <SearchIcon /> */}
              <AppsIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
              onClick={handleClickLogin}
            >
              {/* <DirectionsIcon /> */}
              <LockIcon />
            </IconButton>
          </Paper>

          {/* <div style={{ marginLeft: '5px' }}>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled button group"
            >
              <Button>
                <Tooltip title="Rechercher multiple" onClick={handleClickOpen}>
                  <AppsIcon />
                </Tooltip>
              </Button>

              
              <Button>
                <Tooltip title="Se connecter">
                  <LockIcon />
                </Tooltip>
              </Button>
              
            </ButtonGroup>

          </div> */}
        </Toolbar>
      </AppBar>
      {/* // *******************************************Recherche resultat****************************************************************** */}
      <React.Fragment>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ ml: 0, p: 2 }} id="customized-dialog-title">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 450,
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
              />
              {/* <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton> */}
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <DirectionsIcon />
              </IconButton>
            </Paper>
          </DialogTitle>
          <DialogContent dividers>
            <List>
              <ListItemButton>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  primary="Default notification ringtone"
                  secondary="Tethys"
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  primary="Default notification ringtone"
                  secondary="Tethys"
                />
              </ListItemButton>
            </List>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              primary="#1976d2"
              secondary="Titania"
            >
              Fermer
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>

      {/* // *******************************************Formulaire login****************************************************************** */}
      <React.Fragment>
        <BootstrapDialog
          onClose={handleCloseLogin}
          aria-labelledby="customized-dialog-title"
          open={openLogin}
        >
          <DialogTitle sx={{ ml: 0, p: 2}}
          style={{background:"#1976d2"}}
           id="customized-dialog-title">
            <div
              style={{
                padding: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 450,
                color:"white"
              }}
            >
              <IconButton sx={{ p: "10px" }} style={{color:"white"}} aria-label="menu">
                <Login />
              </IconButton>
              <InputBase
                sx={{ ml: 8, flex: 1, border:"none" }}
                placeholder="Search Google Maps"
                style={{color:"White"}} 
              />
              <Divider sx={{ height: 28, m: 0.5}} style={{color:"white"}}  orientation="vertical" />
              <IconButton
                color="white"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <CloseOutlined onClick={handleCloseLogin} />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers >
            <form
              style={{
                display: "flex",
                flexDirection:"column",
                gap:"32px",
                alignItems: "center",
                justifyContent: "center",
                top:"32px"
              }}
            >
              <div>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 350,
                  }}
                >
                  <IconButton
                    color="primary"
                    sx={{ p: "10px" }}
                    aria-label="directions"
                  >
                    <PiEnvelopeSimpleBold />
                  </IconButton>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Entrer votre e-mail"
                    inputProps={{ "aria-label": "Entrer votre e-mail" }}
                  />
                </Paper>
              </div>
              <div>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 350,
                  }}
                >
                  <IconButton
                    color="primary"
                    sx={{ p: "10px" }}
                    aria-label="directions"
                  >
                    <LockIcon />
                  </IconButton>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Entrer votre mot de passe !"
                    inputProps={{ "aria-label": "Entrer votre mot de passe !" }}
                  />
                </Paper>
              </div>
            </form>
          </DialogContent>
          <DialogActions style={{ display:"flex", alignItems:"center", justifyContent:"center",padding:"20px"}}>
            <Button
              autoFocus
              onClick={handleCloseLogin}
              style={{ background: "#1976d2", color:"#f5f7f8", width:"300px", padding: "12px"}}
              
            >
              Connexion
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    </Box>
  );
}
