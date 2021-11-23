import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import FavoritesItemCardComponent from '../favorites-item-card/favorites-item-card';

type FavoritesItemProps = {
  favoritesOffers: Offer[];
  city: string,
}

function FavoritesItemComponent({ city, favoritesOffers }: FavoritesItemProps): JSX.Element {
  const cityByOffers = favoritesOffers.filter((offer) => city === offer.city.name);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {/* ссылка на город */}
          <Link className="locations__item-link" to={'/'}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {cityByOffers.map((offer) => (
          <FavoritesItemCardComponent
            key={offer.id}
            offer={offer}
          />),
        )}
      </div>
    </li>
  );
}

export default FavoritesItemComponent;
