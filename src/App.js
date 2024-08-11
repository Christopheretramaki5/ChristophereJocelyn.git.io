
import './App.css';
import 'leaflet/dist/leaflet.css'
import Header from '././Components/header/Header';
import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import './App.css';
import Nav from './Components/header/Nav';
import LayersTypes from './Components/Boutonstypes/Layers'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CurrentPosition from './Components/Markers/CurrentPosition';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios'
import MarkerSchools from './Components/Markers/MarkerSchools';
import MarkerUniversity from './Components/Markers/MarkerUniversity';



function App() {

  const [fontCard, setFontCard] = useState("https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=DMegOGWUblZZU2xq1haB");

  // state pour schooltype
  const [schoolType, setSchoolType] = useState("tous");

  // handle schoolType to tous
  const handleSchoolTypeToTous = () => { setSchoolType("tous") }

  // handle schoolType to tous
  const handleSchoolTypeToEcole = () => { setSchoolType("ecole") }

  // handle schoolType to tous
  const handleSchoolTypeToUniversite = () => { setSchoolType("universite") }
  
  const choiceFontMaps = () => {
    setFontCard("https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=DMegOGWUblZZU2xq1haB");
  };

  const choiceFontOSM = () => {
    setFontCard("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  };

  const choiceFontSatelite = () => {
    setFontCard("https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png");
  };


  // function du bouton current position
  const [latP, setLatP] = useState('');
  const [lonP, setLonP] = useState('');

  const handleCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatP(position.coords.latitude);
          setLonP(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    }
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };


  // Markers
  // #### Recuperation de données ########
  const [donneeSchool, setDonneeSchool] = useState(null);
  const [donneeUniversity, setDonneeUniversity] = useState(null);

  useEffect(() => {
    dataSchool();
    dataUniversity();

  }, []);

  const dataSchool = () => {
    const overpassSchool = `
      [out:json];
      area["name"="Fianarantsoa"]->.searchArea;
      
        node["amenity"="school"](area.searchArea);
      
      out body;
      >;
      out skel qt;
    `;

    const overpassSchoolURL = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassSchool)}`;

    // Faire une requête pour les écoles
    axios.get(overpassSchoolURL)
      .then((response) => {
        setDonneeSchool(response.data.elements);
      })
      .catch(() => {
        console.log("Erreur de serveur lors de la récupération des écoles");
      });
  }

  const dataUniversity = () => {
    const overpassUniver = `
          [out:json];
          area["name"="Fianarantsoa"]->.searchArea;
          
            node["amenity"="university"](area.searchArea);
          out body;
          >;
          out skel qt;
          `;



    const overpassUniverURL = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassUniver)}`;
    // Faire une requête pour les universités
    axios.get(overpassUniverURL)
      .then((response) => {
        setDonneeUniversity(response.data.elements);
      })
      .catch(() => {
        console.log("Erreur de serveur lors de la récupération des universités");
      });
  }

  switch (schoolType) {
    case "tous":      
      // afficher tous les établissements
      return (
        <>
          <Header />
          <div>
            <MapContainer center={[-21.44669, 47.08100]} zoom={13} className='Map-contenue'>
    
              <Nav handleTous={handleSchoolTypeToTous} handleECollege={handleSchoolTypeToEcole} handleUnivers={handleSchoolTypeToUniversite} />
    
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
                url={fontCard}
                minZoom={5}
                maxZoom={20}
              />
    
              {/* Marker position actuel sur la carte */}
              {latP && lonP && (
                <CurrentPosition latP={latP} lonP={lonP} />
              )}
    
              {/* **************************Afficher tous schools********************************** */}
              {donneeSchool && Object.keys(donneeSchool).length>0 && <MarkerSchools donnee={donneeSchool} />}
              {donneeUniversity && Object.keys(donneeUniversity).length>0 && <MarkerUniversity donnee={donneeUniversity} />}
    
              {/* <Layers /> changer le fond du carte */}
              <LayersTypes choiceFontMaps={choiceFontMaps} choiceFontOSM={choiceFontOSM} choiceFontSatelite={choiceFontSatelite} />
    
              {/* CurrentPosition */}
              <Box sx={{
                height: 330, transform: 'translateZ(0px)',
                flexGrow: 1,
                zIndex: 1000,
                position: 'absolute',
                top: '560px',
                left: 5
              }}
                tooltipTitle="Ma position"
                tooltipOpen
                tooltipPlacement='right'
              >
    
                <Tooltip disableFocusListener
                  title="Ma position"
                  placement='right'
                  open
                >
                  <Fab color="primary" aria-label="add" onClick={handleCurrentPosition} >
                    <AccessibilityIcon />
                  </Fab>
                </Tooltip>
    
              </Box>
    
            </MapContainer>
          </div>
        </>
      );
    case "ecole":
      // afficher les écoles
      return (
        <>
          <Header />
          <div>
            <MapContainer center={[-21.44669, 47.08100]} zoom={13} className='Map-contenue'>
    
            <Nav handleTous={handleSchoolTypeToTous} handleECollege={handleSchoolTypeToEcole} handleUnivers={handleSchoolTypeToUniversite} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
                url={fontCard}
                minZoom={5}
                maxZoom={20}
              />
    
              {/* Marker position actuel sur la carte */}
              {latP && lonP && (
                <CurrentPosition latP={latP} lonP={lonP} />
              )}
    
              {/* **************************Afficher tous schools********************************** */}
              {donneeSchool && Object.keys(donneeSchool).length>0 && <MarkerSchools donnee={donneeSchool} />}
    
              {/* <Layers /> changer le fond du carte */}
              <LayersTypes choiceFontMaps={choiceFontMaps} choiceFontOSM={choiceFontOSM} choiceFontSatelite={choiceFontSatelite} />
    
              {/* CurrentPosition */}
              <Box sx={{
                height: 330, transform: 'translateZ(0px)',
                flexGrow: 1,
                zIndex: 1000,
                position: 'absolute',
                top: '560px',
                left: 5
              }}
                tooltipTitle="Ma position"
                tooltipOpen
                tooltipPlacement='right'
              >
    
                <Tooltip disableFocusListener
                  title="Ma position"
                  placement='right'
                  open
                >
                  <Fab color="primary" aria-label="add" onClick={handleCurrentPosition} >
                    <AccessibilityIcon />
                  </Fab>
                </Tooltip>
    
              </Box>
    
            </MapContainer>
          </div>
        </>
      );

    case "universite":
        // afficher les universites
        return (
    <>
      <Header />
      <div>
        <MapContainer center={[-21.44669, 47.08100]} zoom={13} className='Map-contenue'>

        <Nav handleTous={handleSchoolTypeToTous} handleECollege={handleSchoolTypeToEcole} handleUnivers={handleSchoolTypeToUniversite} />
        
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
            url={fontCard}
            minZoom={5}
            maxZoom={20}
          />

          {/* Marker position actuel sur la carte */}
          {latP && lonP && (
            <CurrentPosition latP={latP} lonP={lonP} />
          )}

          {/* **************************Afficher tous schools********************************** */}
          {donneeUniversity && Object.keys(donneeUniversity).length>0 && <MarkerUniversity donnee={donneeUniversity} />}

          {/* <Layers /> changer le fond du carte */}
          <LayersTypes choiceFontMaps={choiceFontMaps} choiceFontOSM={choiceFontOSM} choiceFontSatelite={choiceFontSatelite} />

          {/* CurrentPosition */}
          <Box sx={{
            height: 330, transform: 'translateZ(0px)',
            flexGrow: 1,
            zIndex: 1000,
            position: 'absolute',
            top: '560px',
            left: 5
          }}
            tooltipTitle="Ma position"
            tooltipOpen
            tooltipPlacement='right'
          >

            <Tooltip disableFocusListener
              title="Ma position"
              placement='right'
              open
            >
              <Fab color="primary" aria-label="add" onClick={handleCurrentPosition} >
                <AccessibilityIcon />
              </Fab>
            </Tooltip>

          </Box>

        </MapContainer>
      </div>
    </>
  );
    default:
      return null;
  }

  
}

export default App;
