import React, { useContext } from "react";
import StatContext from "../../../context/stat/statContext";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import * as countries from "../../../data/countries.json";
import mapStyles from "./mapStyles";

const mapContainerStyle = {
  height: "100%",
};

const center = { lat: 31.791702, lng: -7.09262 };

const Map = () => {
  const statContext = useContext(StatContext);
  const { stats, setCurrent, current } = statContext;

  const setCurrentHandler = (country) => {
    const current = stats.filter((item) => item.Country === country.name);
    current.latlng = country.latlng;
    setCurrent(current);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_SECRET_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2}
        center={center}
        options={{
          styles: mapStyles,
          fullscreenControl: false,
          mapTypeControl: false,
          panControl: false,
          streetViewControl: false,
          zoomControl: false,
        }}
        className="map"
      >
        {stats !== null &&
          countries.features.map((country, index) => (
            <Marker
              key={index}
              position={{
                lat: country.latlng[0],
                lng: country.latlng[1],
              }}
              onClick={() => setCurrentHandler(country)}
              options={{
                icon: {
                  url:
                    "https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg",
                  scaledSize: { width: 12, height: 12 },
                },
              }}
            />
          ))}
        {current && (
          <InfoWindow
            onCloseClick={() => {
              setCurrent(null);
            }}
            position={{
              lat: current.latlng[0],
              lng: current.latlng[1],
            }}
            options={{
              boxStyle: {
                width: "200px",
                background: "white",
              },
            }}
            style={{
              backgroundColor: `yellow`,
              opacity: 0.75,
              padding: `12px`,
            }}
          >
            <div className="wrapper">
              <h2 className="country-name">{current[0].Country}</h2>
              <ul>
                <li>
                  Confirmed: <span>{current[0].TotalConfirmed}</span>
                </li>
                <li>
                  Recovered: <span>{current[0].TotalRecovered}</span>
                </li>
                <li>
                  Deaths: <span>{current[0].TotalDeaths}</span>
                </li>
              </ul>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
