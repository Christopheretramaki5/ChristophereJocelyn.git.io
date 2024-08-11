import React, { Fragment } from 'react'
import { Circle, Marker, Popup, useMap } from 'react-leaflet';
import Icon from "./../../Assets/images/HomePosit.png";
import L from "leaflet";

export default function CurrentPosition({ latP, lonP }) {
  const map = useMap();
  map.flyTo(([latP, lonP]), 17);

  const icon = L.icon({
    iconUrl: Icon,
    iconSize: [60, 50],
    popupAnchor: [-1,-15]
  });

  return (
    <Fragment>
      <Marker position={[latP, lonP]} icon={icon}>
        <Popup>Ma position</Popup>
      </Marker>
      <Circle center={[latP, lonP]} 
      radius={500} 
      color='blue' 
      fillColor='blue' 
      fillOpacity={0.2} >
      </Circle>
    </Fragment>
  )
}
