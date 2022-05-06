import React from "react";
import GoogleMapReact from "google-map-react";
import { Typography, Paper, useMediaQuery } from "@mui/material";
import LocationOutlineIcon from "@mui/icons-material/LocationOnOutlined";
import useStyles from "./styles.js";

const Map = ({ coords, setCoords, setBounds, places }) => {
  
  const isdesktop = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isdesktop?(
              <LocationOutlineIcon color="primary"  fontSize="large"/>
            ):(
              <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} varient="subtitle2" gutterBottom>
                   {place.name}
                </Typography>
                <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                 

              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};
export default Map;
