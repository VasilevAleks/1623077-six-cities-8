import CitiesListComponents from './city-list';
import MainScreenEmptyComponents from './main-screen-empty';
import MainScreenData from './main-screen-data';
import Header from '../header/header-site';
import { Offer} from '../../types/offers';
import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { SortTypes } from '../../const';

type MainScreenProps = {
  userName: string,
  offers: Offer[],
  cities: string[],
  thisCity: string,
}

const mapStateToProps = ({ currentSortType }: State) => ({
  currentSortType,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainScreenProps;

function MainScreen({ cities, offers, thisCity, userName, currentSortType }: ConnectedComponentProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | null>(null);

  const handleActiveCard = (offer: Offer | null): void => {
    setActiveCard(offer);
  };

  const getSortedOffers = (SortType: string, offer: Offer[]) => {
    switch (SortType) {
      case SortTypes.PRICE_UP: {
        return offer.slice().sort((offerA, offerB) => offerB.price - offerA.price);
      }
      case SortTypes.PRICE_DOWN: {
        return offer.slice().sort((offerA, offerB) => offerA.price - offerB.price);
      }
      case SortTypes.RATING_DOWN: {
        return offer.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
      }
      default: {
        return offer;
      }
    }
  };

  const sortedOffers = getSortedOffers(currentSortType, offers);

  const mainClass = offers.length > 0 ? 'page__main page__main--index'
    : 'page__main page__main--index page__main--index-empty';

  const containerClass = offers.length > 0
    ? 'cities__places-container container'
    : 'cities__places-container cities__places-container--empty container';

  return (
    <div className="page page--gray page--main">
      <Header userName = {userName}/>
      <main className={mainClass}>
        <CitiesListComponents cities={cities} />
        <div className="cities">
          <div className={containerClass}>
            {offers.length === 0 && <MainScreenEmptyComponents city={thisCity} />}
            {offers.length > 0 &&
              <MainScreenData
                city={thisCity}
                offers={offers}
                sortType={currentSortType}
                sortedOffers={sortedOffers}
                handleActiveCard={handleActiveCard}
                activeCard={activeCard}
              />}
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainScreen };
export default connector(MainScreen);

