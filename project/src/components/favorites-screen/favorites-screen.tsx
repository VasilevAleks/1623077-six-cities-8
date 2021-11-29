import FooterComponet from '../footer/footer';
import HeaderComponet from '../header/header';
import FavoritesEmptyComponent from '../favorites-empty/favorites-empty';
import FavoritesComponent from '../favorites/favorites';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteOffers } from '../../store/selectors/selectors';
import { useEffect } from 'react';
import { fetchFavoriteOffersAction } from '../../store/actions/api-actions';

function FavoritesScreen(): JSX.Element {
  const favoritesOffers = useSelector(getFavoriteOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);


  const pageMainFavoritesClass = favoritesOffers.length ? 'page' : 'page page--favorites-empty';
  const content = favoritesOffers.length ? <FavoritesComponent favoritesOffers={favoritesOffers} /> : <FavoritesEmptyComponent />;
  return (
    <div className={pageMainFavoritesClass}>
      <HeaderComponet />
      {content}
      <FooterComponet />
    </div>
  );
}

export default FavoritesScreen;

