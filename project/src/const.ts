export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export const DEFAULT_CITY = 'Paris';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_SORT_TYPE = 'Popular';

export const SortTypes = {
  POPULAR: 'Popular',
  PRICE_DOWN: 'Price: low to high',
  PRICE_UP: 'Price: high to low',
  RATING_DOWN: 'Top rated first',
};

export const ratingStars: { [key: string]: string } = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

export const MAX_IMAGES = 6;
export const MAX_REVIEWS = 10;
