
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites/favorites';
import LoginScreen from '../login/login';
import PropertyScreen from '../property-screen/property-screen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus } from '../../const';
import NotFoundScreen from '../screen-404/404-screen';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offers';
import {ReviewsComment} from '../../types/reviews';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

type AppScreenProps = {
  offers: Offer[],
  reviews: ReviewsComment[],
  cities: string[],
  userName: string,
}

const mapStateToProps = ({ thisCity, offers }: State) => ({
  thisCity,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & AppScreenProps;

function App({userName, offers, cities, reviews, thisCity}: ConnectedComponentProps): JSX.Element {
  const favoritesOffers = offers.filter((offer) => offer.IsFavorite);
  const cityOffers = offers.filter((offer) => offer.city.name === thisCity );


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen userName = {userName}  offers = {cityOffers}  cities = {cities} thisCity = {thisCity} />
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen userName = {userName} offers = {favoritesOffers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen userName = {userName} offers = {offers}  reviews = {reviews}/>
        </Route>
        <Route>
          <NotFoundScreen userName = {userName} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
