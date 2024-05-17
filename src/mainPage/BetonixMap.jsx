import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';
import mapStyles from '../../mapStyles.json';
// import regionData from '../lvivArea.geojson';

const mapSize = {
  width: '500px',
  height: '500px'
};

const center = {
  lat: 49.839680,
  lng: 24.029720
};

function BetonixMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDwNxzDD8oPOqotA3jBOjHQk_3lwUxHpZI"
  });

  const [map, setMap] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(8);

  useEffect(() => {
    const storedZoom = localStorage.getItem('mapZoomLevel');
    if (storedZoom) {
      setZoomLevel(parseFloat(storedZoom));
    }
  }, []);

  const handleZoomChange = (newZoom) => {
    setZoomLevel(newZoom);
    localStorage.setItem('mapZoomLevel', newZoom);
  };

  const onLoad = React.useCallback(function callback(mapInstance) {
    setMap(mapInstance);
    mapInstance.addListener('zoom_changed', () => handleZoomChange(mapInstance.getZoom()));
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  return (
    <section className="mapContainer">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapSize}
          center={center}
          zoom={zoomLevel}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            styles: mapStyles
          }}
        >
          {/* {regionData.features && regionData.features.map((feature, index) => ( // Select Lviv area
            <Polygon
              key={index}
              paths={feature.geometry.coordinates}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
              }}
            />
          ))} */}
        </GoogleMap>
      ) : (
        <></>
      )}
    </section>
  );
}

export default React.memo(BetonixMap);
