import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';
import { Action } from 'redux';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType = 'main/changeSortType',
  LoadOffersRequest = 'data/loadOffersRequest',
  LoadOffersSucces = 'data/loadOffersSucces',
  LoadOffersFailure = 'data/loadOffersFailure',
  LoadOfferByIdRequest = 'data/loadOffersByIdRequest',
  LoadOfferByIdSuccess = 'data/loadOfferByIdSuccess',
  LoadOfferByIdFailure = 'data/loadOfferByIdFailure',
  LoadNearOffersRequest = 'data/loadNearOffersRequest',
  LoadNearOffersSuccess = 'data/loadNearOffersSuccess',
  LoadNearOffersFailure = 'data/loadNearOffersFailure',
  LoadOfferCommentsRequest = 'data/loadOfferCommentsRequest',
  LoadOfferCommentsSuccess = 'data/loadOfferCommentsSuccess',
  LoadOfferCommentsFailure = 'data/loadOfferCommentsFailure',
  PostCommentRequest = 'data/postCommentRequest',
  PostCommentSuccess = 'data/postCommentSuccess',
  PostCommentFailure = 'data/postCommentFailure',
  RequireAuthorizationRequest = 'user/requireAuthorizationRequest',
  RequireAuthorizationFailure = 'user/requireAuthorization',
  RequireAuthorizationSucces = 'user/requireAuthorizationSucces',
  LoginActionRequest = 'user/loginActionRequest',
  LoginActionFailure = 'user/loginActionFailure',
  RequireLogout = 'user/requireLogout',
  LogoutRequest = 'user/logoutRequest',
  LogoutFailure = 'user/logoutFailure',
  LoadFavoriteOffersRequest = 'data/loadFavoriteOffersRequest',
  LoadFavoriteOffersSuccess = 'data/loadFavoriteOffersSuccess',
  LoadFavoriteOffersFailure = 'data/loadFavoriteOffersFailure',
  PostFavoriteRequest = 'data/postFavoriteRequest',
  PostFavoriteSuccess = 'data/postFavoriteSuccess',
  PostFavoriteFailure = 'data/postFavoriteFailure',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
