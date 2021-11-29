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
  Popular: 'Popular',
  PriceDown: 'Price: low to high',
  PriceUp: 'Price: high to low',
  RatingDown: 'Top rated first',
};

export const StarRating: { [key: string]: string } = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

export const MAX_IMAGES = 6;
export const MAX_REVIEWS = 10;
export const MAX_COUNT_NEAR_OFFERS = 3;

export enum ToastMessage {
  AuthPromtMessage = 'Do not forget to log in',
  LogoutFailMessage = 'Something went wrong',
  LoginFailMessage = 'Login failed. Please try again',
  FetchOfferByIdFailMessage = 'Failed to get data. Please try again',
  FetchNearOfferFailMessage = 'Failed to get data. Please try again',
  FetchCommentsFailMessage = 'Failed to get data. Please try again',
  PostCommentFailMessage = 'Failed to send message. Please try again',
  FetchFavoritesFailMessage = 'Failed to get data. Please try again',
  PostFavoriteFailMessage = 'Failed to send data. Please try again',
}
