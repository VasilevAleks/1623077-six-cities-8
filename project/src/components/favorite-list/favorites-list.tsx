/* eslint-disable no-console */
import {Offer} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
}

const url = '';

function FavoritesList({ offers }: OffersListProps): JSX.Element {
  const individualCities = Array.from(new Set( offers.map((offer) => offer.city.name)));

  return (
    <ul className="favorites__list">
      {individualCities.map((city) => (
        <li
          key={city}
          className="favorites__locations-items"
        >
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href={url}>
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            { offers.map((offer: Offer) => {
              if (offer.city.name !== city) {
                return '';
              }
              return (
                <article key={offer.id}
                  className="favorites__card place-card"
                >
                  <div className="favorites__image-wrapper place-card__image-wrapper">
                    <a href={url}>
                      <img className="place-card__image" src={offer.PreviewImage} width="150" height="110" alt="Place" />
                    </a>
                  </div>
                  <PlaceCard
                    offers={offer}
                  />
                </article>);
            },
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
