import 'leaflet/dist/leaflet.css';
import leaflet, { LayerGroup, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { Offer } from '../../types/offer';
import useMap from '../../hooks/useMap/useMap';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';
const PIN_WIDTH = 30;
const PIN_HEIGHT = 40;

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [PIN_WIDTH, PIN_HEIGHT],
  iconAnchor: [PIN_WIDTH / 2, PIN_HEIGHT],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [PIN_WIDTH, PIN_HEIGHT],
  iconAnchor: [PIN_WIDTH / 2, PIN_HEIGHT],
});

type MapProps = {
  offers: Offer[];
  activeCard: Offer | null;
}

function Map({ offers, activeCard }: MapProps): JSX.Element {

  const [{ city }] = offers;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayerRef = useRef<LayerGroup>();

  useEffect(() => {
    if (map) {
      if (markerLayerRef.current) {
        markerLayerRef.current.clearLayers();
      }

      markerLayerRef.current = new LayerGroup().addTo(map);

      if (markerLayerRef.current) {
        offers.forEach((offer) => {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });

          marker
            .setIcon(
              offer === activeCard
                ? currentCustomIcon
                : defaultCustomIcon,
            )
            .addTo(markerLayerRef.current as LayerGroup);
        });
      }

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
