import { Offer } from '../../types/offer';
import PlaceCardListComponent from '../place-card-list/place-card-list';
import SortingComponent from '../sorting/sorting';
import Map from '../map/map';

type MainScreenContentProps = {
  cityName: string,
  sortedOffers: Offer[],
  activeCard: Offer | null,
  handleActiveCard: (offer: Offer | null) => void;
}

function MainScreenContent({ cityName, sortedOffers, activeCard, handleActiveCard }: MainScreenContentProps): JSX.Element {
  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedOffers.length} places to stay in {cityName}</b>
        <SortingComponent />
        <PlaceCardListComponent
          offers={sortedOffers}
          handleActiveCard={handleActiveCard}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers={sortedOffers}
            activeCard={activeCard}
          />
        </section>
      </div>
    </>
  );
}

export default MainScreenContent;
