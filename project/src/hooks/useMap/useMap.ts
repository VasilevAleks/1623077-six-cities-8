import { MutableRefObject, useEffect, useState } from 'react';
import leaflet from 'leaflet';
import { Map } from 'leaflet';
import { City } from '../../types/offer';

const MAP_TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const MAP_COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const { location } = city;
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          MAP_TILE_LAYER,
          {
            attribution: MAP_COPYRIGHT,
          },
        )
        .addTo(instance);

      setMap(instance);
    } else {
      map?.setView({
        lat: location.latitude,
        lng: location.longitude,
      }, location.zoom);
    }
  }, [mapRef, map, location, city]);

  return map;
}

export default useMap;
