import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useSelector } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../utils/utils';
import { getAuthorizationStatus, getIsDataLoadedStatus } from '../../store/selectors/selectors';

function App(): JSX.Element {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getIsDataLoadedStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route
          exact
          path={AppRoute.SignIn}
          render={() => (
            authorizationStatus === AuthorizationStatus.Auth
              ? <Redirect to={AppRoute.Main} />
              : <SignInScreen />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <RoomScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
