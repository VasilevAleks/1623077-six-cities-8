import FavoritesList from '../favorite-list/favorites-list';
import Header from '../header/header-site';
import {Offer} from '../../types/offers';

type FavoritesProps = {
  userName: string,
  offers: Offer[],
}

function FavoritesScreen({userName, offers}: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header userName = {userName}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
