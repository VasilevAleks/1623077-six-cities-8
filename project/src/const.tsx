export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Root = '/',
}
export const USER_NAME ='Oliver.conner@gmail.com';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin.svg';

export const Sorting = {
  Popular: 'Popular',
  PriceToHigh: 'Price: low to high',
  PriceToLow: 'Price: high to low',
  TopRated: 'Top rated first',
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const START_CITY = 'Paris';

export const SortTypes = {
  POPULAR: 'Popular',
  PRICE_DOWN: 'Price: low to high',
  PRICE_UP: 'Price: high to low',
  RATING_DOWN: 'Top rated first',
};

export const START_SORT_TYPE = 'Popular';
