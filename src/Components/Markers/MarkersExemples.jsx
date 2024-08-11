import React, { Fragment } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function MarkerExemples({ donnee }) {
  
  console.log(donnee);

  const iconSchools = L.icon({
    iconUrl: "./college.png",
    iconSize: [30, 30]
  });

  const donnees = donnee.filter(element => element.lat !== undefined && element.lon !== undefined 
    && element.tags !== undefined).map((element) => ({
    id: element.id,
    latitude: element.lat,
    longitude: element.lon,
    tags: element.tags
  }));

  return (
    <Fragment>
      {donnees.map((element) => (
        <Marker 
          key={element.id} 
          position={[element.latitude, element.longitude]}
          icon={iconSchools}
        >
          <Popup>
              <div>
                <h3>{element.tags['name']}</h3>
                <p>{element.tags["school:MG"]}</p>
                <p>{element.tags["note"]}</p>
                <p>{element.tags["short_name"]}</p>
              </div>
              {/* <img src={iconSchools}/> */}
          </Popup>
        </Marker>
      ))}
    </Fragment>
  );
}
