import { AuthorizationStatus } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user-info';
import { NameSpace } from '../reducer/root-reducer';

export const getOffers = (state: State): Offer[] => state[NameSpace.data].offers;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.data].nearOffers;
export const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.data].favoriteOffers;
export const getReviews = (state: State): Review[] => state[NameSpace.data].reviews;
export const getOfferById = (state: State): Offer | null => state[NameSpace.data].offerById;

export const getIsDataLoadedStatus = (state: State): boolean | undefined => state[NameSpace.user].isDataLoaded;
export const getUserData = (state: State): UserInfo | null | undefined => state[NameSpace.user].userData;
export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.user].authorizationStatus;

export const getCurrentCity = (state: State): string => state[NameSpace.main].currentCity;
export const getCurrentSortType = (state: State): string => state[NameSpace.main].currentSortType;

