import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites/favorites';
import LoginScreen from '../login/login';
import PropertyScreen from '../property-screen/property-screen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus } from '../../const';
import NotFoundScreen from '../screen-404/404-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  userName: string,
  placesCount: number,
  offerCount: number,
}


function App({userName, placesCount, offerCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen userName = {userName} placesCount = {placesCount} offerCount= {offerCount}/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen userName = {userName} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <PropertyScreen userName = {userName}/>
        </Route>
        <Route>
          <NotFoundScreen userName = {userName} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
