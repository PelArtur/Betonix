import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyles from '../mapStyles.json';

const mapSize = {
  width: '600px',
  height: '600px'
};

const betonixPosition = {
  lat: 49.819035,
  lng: 24.061590
};

const center = {
  lat: 49.755105,
  lng: 23.958092
};

function BetonixMap() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDwNxzDD8oPOqotA3jBOjHQk_3lwUxHpZI"
  });

  const [map, setMap] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(8);

  useEffect(() => {
  if (map) {
    map.data.loadGeoJson("../lvivAreaSimpl.json", null, (features) => {
      map.data.setStyle({
        fillOpacity: 0.1,
        strokeWeight: 2
      });
    });

    const marker = new window.google.maps.Marker({
      position: betonixPosition,
      map: map,
      title: "Betonix Position"
    });
  }
}, [map]);

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
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}

export default React.memo(BetonixMap);
