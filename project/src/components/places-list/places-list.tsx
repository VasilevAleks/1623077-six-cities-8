/* eslint-disable no-console */


import {Offer} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  handleActiveCard: (offer: Offer | null) => void,
}

function PlacesList({ offers, handleActiveCard  }: OffersListProps): JSX.Element {


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((data: Offer) => (
        <article key={data.id}
          onPointerEnter={() => {
            handleActiveCard(data);
          }}
          onPointerLeave={() => {
            handleActiveCard(null);
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
