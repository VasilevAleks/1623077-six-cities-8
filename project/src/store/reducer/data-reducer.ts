import { createReducer } from '@reduxjs/toolkit';
import { DataReducerState } from '../../types/state';
import {
  loadFavoriteOffersFailure,
  loadFavoriteOffersRequest,
  loadFavoriteOffersSuccess,
  loadNearOffersFailure,
  loadNearOffersRequest,
  loadNearOffersSuccess,
  loadOfferByIdFailure,
  loadOfferByIdRequest,
  loadOfferByIdSuccess,
  loadOfferCommentsFailure,
  loadOfferCommentsRequest,
  loadOfferCommentsSuccess,
  loadOffersFailure,
  loadOffersRequest,
  loadOffersSucces,
  postCommentFailure,
  postCommentRequest,
  postCommentSuccess,
  postFavoriteFailure,
  postFavoriteRequest,
  postFavoriteSuccess
} from '../actions/action';

const initialState: DataReducerState = {
  offers: [],
  offerById: null,
  nearOffers: [],
  reviews: [],
  favoriteOffers: [],
  error: null,
  loadOffersLoading: false,
  loadNearOffersLoading: false,
  loadOfferByIdLoading: false,
  loadOfferCommentsLoading: false,
  postCommentLoading: false,
  postCommentSuccess: false,
  loadFavoriteOffersLoading: false,
  postFavoriteLoading: false,
  isOfferLoaded: false,
  isNearOffersLoaded: false,
  isCommentsLoaded: false,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersRequest, (state: DataReducerState) => {
      state.loadOffersLoading = true;
    })
    .addCase(loadOffersSucces, (state: DataReducerState, action) => {
      const { offers } = action.payload;
      state.offers = offers;
      state.loadOffersLoading = false;
    })
    .addCase(loadOffersFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(loadNearOffersRequest, (state: DataReducerState) => {
      state.loadNearOffersLoading = true;
    })
    .addCase(loadNearOffersSuccess, (state: DataReducerState, action) => {
      const { nearOffers } = action.payload;
      state.nearOffers = nearOffers;
      state.loadNearOffersLoading = false;
      state.isNearOffersLoaded = true;
    })
    .addCase(loadNearOffersFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(loadOfferByIdRequest, (state: DataReducerState) => {
      state.loadOfferByIdLoading = true;
    })
    .addCase(loadOfferByIdSuccess, (state: DataReducerState, action) => {
      const { offerById } = action.payload;
      state.offerById = offerById;
      state.loadOfferByIdLoading = false;
      state.isOfferLoaded = true;

    })
    .addCase(loadOfferByIdFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(loadOfferCommentsRequest, (state: DataReducerState) => {
      state.loadOfferCommentsLoading = true;
    })
    .addCase(loadOfferCommentsSuccess, (state: DataReducerState, action) => {
      const { reviews } = action.payload;
      state.reviews = reviews;
      state.loadOfferCommentsLoading = false;
      state.isCommentsLoaded = true;
    })
    .addCase(loadOfferCommentsFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(postCommentRequest, (state: DataReducerState) => {
      state.postCommentLoading = true;
    })
    .addCase(postCommentSuccess, (state: DataReducerState) => {
      state.postCommentLoading = false;
      state.postCommentSuccess = true;
    })
    .addCase(postCommentFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(loadFavoriteOffersRequest, (state: DataReducerState) => {
      state.loadFavoriteOffersLoading = true;
    })
    .addCase(loadFavoriteOffersSuccess, (state: DataReducerState, action) => {
      const { favoriteOffers } = action.payload;
      state.favoriteOffers = favoriteOffers;
      state.loadFavoriteOffersLoading = false;
    })
    .addCase(loadFavoriteOffersFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(postFavoriteRequest, (state: DataReducerState) => {
      state.postFavoriteLoading = true;
    })
    .addCase(postFavoriteSuccess, (state: DataReducerState, action) => {
      const { id, status } = action.payload;
      const favoriteOfferMain = state.offers.find((offer) => offer.id === id);
      if (favoriteOfferMain) {
        favoriteOfferMain.isFavorite = status;
      }
      const favoriteOfferIndex = state.favoriteOffers.findIndex((offer) => offer.id === id);
      if (favoriteOfferIndex !== -1) {
        state.favoriteOffers.splice(favoriteOfferIndex, 1);
      }
      if (state.offerById && state.offerById.id === id) {
        state.offerById.isFavorite = status;
      }
      const favoriteOfferNear = state.nearOffers.find((offer) => offer.id === id);
      if (favoriteOfferNear) {
        favoriteOfferNear.isFavorite = status;
      }
      state.postFavoriteLoading = false;
    })
    .addCase(postFavoriteFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    });
});

export { dataReducer };
