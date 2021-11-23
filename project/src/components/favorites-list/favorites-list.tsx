import { Offer } from '../../types/offer';
import FavoritesItem from '../favorites-item/favorites-item';

type FavorItemListProps = {
  favoritesOffers: Offer[],
  cities: string[],
}

function FavoriteListComponent({ cities, favoritesOffers }: FavorItemListProps): JSX.Element {

  return (
    <ul className="favorites__list">
      {cities.map((city) => <FavoritesItem city={city} favoritesOffers={favoritesOffers} key={city} />)}
    </ul>
  );
}

export default FavoriteListComponent;
