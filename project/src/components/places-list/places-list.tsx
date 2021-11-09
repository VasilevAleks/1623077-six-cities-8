/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import {Offer} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
}

function PlacesList({ offers }: OffersListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<Offer | number | null>(null);


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((data: Offer) => (
        <article key={data.id}
          onPointerEnter={() => {
            setActiveCardId(data.id);
            console.log(activeCardId); // УБРАТЬ
          }}
          onPointerLeave={() => {
            setActiveCardId(null);
          }}
          className="cities__place-card place-card"

        >
          {data.IsPremium &&
            <div className="place-card__mark">
              <span>Premium</span>
            </div>}
          <div className="cities__image-wrapper place-card__image-wrapper">
            <img className="place-card__image" src={data.PreviewImage} width="260" height="200" alt="Place" />
          </div>
          <PlaceCard  offers={data} />
        </article>
      ))}
    </div>
  );
}


export default PlacesList;
