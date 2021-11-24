import { Offer } from '../../types/offer';
import { ActionType } from '../../types/actions';
import { AuthorizationStatus } from '../../const';
import { Review } from '../../types/review';
import { UserInfo } from '../../types/user-info';
import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction(
  ActionType.ChangeCity, (city: string) => ({
    payload: city,
  }),
);

export const loadOffersRequest = createAction(ActionType.LoadOffersRequest);

export const loadOffersSucces = createAction(
  ActionType.LoadOffersSucces, (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const loadOffersFailure = createAction(
  ActionType.LoadOffersFailure, (error: string | null) => ({
    payload: error,
  }),
);

export const loadOfferByIdRequest = createAction(ActionType.LoadOfferByIdRequest);

export const loadOfferByIdSuccess = createAction(
  ActionType.LoadOfferByIdSuccess, (offerById: Offer) => ({
    payload: {
      offerById,
    },
  }),
);

export const loadOfferByIdFailure = createAction(
  ActionType.LoadOfferByIdFailure, (error: string | null) => ({
    payload: error,
  }),
);

export const loadNearOffersRequest = createAction(ActionType.LoadNearOffersRequest);

export const loadNearOffersSuccess = createAction(
  ActionType.LoadNearOffersSuccess, (nearOffers: Offer[]) => ({
    payload: {
      nearOffers,
    },
  }),
);

export const loadNearOffersFailure = createAction(
  ActionType.LoadNearOffersFailure, (error: string | null) => ({
    payload: error,
  }),
);

export const loadOfferCommentsRequest = createAction(ActionType.LoadOfferCommentsRequest);

export const loadOfferCommentsSuccess = createAction(
  ActionType.LoadOfferCommentsSuccess, (reviews: Review[]) => ({
    payload: {
      reviews,
    },
  }),
);

export const loadOfferCommentsFailure = createAction(
  ActionType.LoadOfferCommentsFailure, (error: string | null) => ({
    payload: error,
  }),
);

export const changeSortType = createAction(
  ActionType.ChangeSortType, (sortType: string) => ({
    payload: sortType,
  }),
);

export const requireAuthorizationRequest = createAction(ActionType.RequireAuthorizationRequest);

export const requireAuthorizationSucces = createAction(
  ActionType.RequireAuthorizationSucces, (authStatus: AuthorizationStatus, userData?: UserInfo | null) => ({
    payload: {
      authStatus,
      userData,
    },
  }),
);

export const requireAuthorizationFailure = createAction(
  ActionType.RequireAuthorizationFailure, (error: string | null) => ({
    payload: error,
  }),
);

export const loginActionRequest = createAction(ActionType.LoginActionRequest);

export const loginActionFailure = createAction(
  ActionType.LoginActionFailure, (error: string | null) => ({
    payload: error,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const logoutRequest = createAction(ActionType.LogoutRequest);

export const logoutFailure = createAction(
  ActionType.LogoutFailure, (error: string | null) => ({
    payload: error,
  }),
);

export const postCommentRequest = createAction(ActionType.PostCommentRequest);

export const postCommentSuccess = createAction(ActionType.PostCommentSuccess);

export const postCommentFailure = createAction(
  ActionType.PostCommentFailure, (error: string | null) => ({
    payload: error,
  }),
);

export const loadFavoriteOffersRequest = createAction(ActionType.LoadFavoriteOffersRequest);

export const loadFavoriteOffersSuccess = createAction(
  ActionType.LoadFavoriteOffersSuccess, (favoriteOffers: Offer[]) => ({
    payload: {
      favoriteOffers,
    },
  }),
);

export const loadFavoriteOffersFailure = createAction(
  ActionType.LoadFavoriteOffersFailure, (error: string | null) => ({
    payload: error,
  }),
);

export const postFavoriteRequest = createAction(ActionType.PostFavoriteRequest);

export const postFavoriteSuccess = createAction(
  ActionType.PostFavoriteSuccess, (id: number, status: boolean) => ({
    payload: {
      id,
      status,
    },
  }),
);

export const postFavoriteFailure = createAction(
  ActionType.PostFavoriteFailure, (error: string | null) => ({
    payload: error,
  }),
);
