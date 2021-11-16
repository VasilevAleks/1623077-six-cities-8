/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */


import leaflet from 'leaflet';
import {Offer} from '../../types/offers';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';


const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

type MapProps = {
  offers: Offer[];
  activeCard: Offer | null;
}

function Map({ offers, activeCard }: MapProps): JSX.Element {
  const city = offers[0].city;
  console.log(city);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer === activeCard)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [activeCard, map, offers]);

  return (
    <div
      style={{ minHeight: '100%', width: '100%' }}
      ref={mapRef}
    >
    </div>
  );


}

export default Map;
