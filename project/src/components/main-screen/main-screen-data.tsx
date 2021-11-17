import { Offer} from '../../types/offers';
import PlacesList from '../places-list/places-list';
import SortingComponent from './sorting';
import Map from '../map/map';

type MainScreenContentProps = {
  city: string,
  offers: Offer[],
  sortType: string,
  sortedOffers: Offer[],
  activeCard: Offer | null,
  handleActiveCard: (offer: Offer | null) => void;
}

function MainScreenContent({ city, offers, sortType, sortedOffers, activeCard, handleActiveCard }: MainScreenContentProps): JSX.Element {

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {city}</b>
        <SortingComponent />
        <PlacesList
          offers={sortedOffers}
          handleActiveCard={handleActiveCard}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers={offers}
            activeCard={activeCard}
          />
        </section>
      </div>
    </>
  );
}

export default MainScreenContent;
