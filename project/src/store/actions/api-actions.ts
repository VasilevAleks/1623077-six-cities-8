import { ThunkActionResult } from '../../types/actions';
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
  loginActionFailure,
  loginActionRequest,
  logoutFailure,
  logoutRequest,
  postCommentFailure,
  postCommentRequest,
  postCommentSuccess,
  postFavoriteFailure,
  postFavoriteRequest,
  postFavoriteSuccess,
  requireAuthorizationFailure,
  requireAuthorizationRequest,
  requireAuthorizationSucces,
  requireLogout
} from './action';
import { saveToken, dropToken } from '../../services/token';
import { APIRoute, AuthorizationStatus, ToastMessage } from '../../const';
import { AuthData } from '../../types/auth-data';
import { adaptCommentsToClient, adaptOffersToClient, adaptOfferToClient, adaptUserInfoToClient } from '../../utils/utils';
import { BackOffer } from '../../types/back-offer';
import { BackReview } from '../../types/back-review';
import { CommentPost } from '../../types/commentPost';
import { toast } from 'react-toastify';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOffersRequest());
    try {
      const { data } = await api.get<BackOffer[]>(APIRoute.Hotels);
      const adaptedOffers = adaptOffersToClient(data);
      dispatch(loadOffersSucces(adaptedOffers));
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(loadOffersFailure(error.toString()));
      }
    }
  };

export const fetchOfferByIdAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOfferByIdRequest());
    try {
      const { data } = await api.get<BackOffer>(`${APIRoute.Hotels}/${id}`);
      const adaptedOffer = adaptOfferToClient(data);
      dispatch(loadOfferByIdSuccess(adaptedOffer));
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(loadOfferByIdFailure(error.toString()));
      }
      toast.error(ToastMessage.FetchOfferByIdFailMessage);
    }
  };

export const fetchCommentsAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOfferCommentsRequest());
    try {
      const { data } = await api.get<BackReview[]>(`${APIRoute.Comments}/${id}`);
      const adaptedComments = adaptCommentsToClient(data);
      dispatch(loadOfferCommentsSuccess(adaptedComments));
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(loadOfferCommentsFailure(error.toString()));
      }
      toast.error(ToastMessage.FetchCommentsFailMessage);
    }
  };

export const postCommentsAction = ({ id, rating, comment }: CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(postCommentRequest());
    try {
      await api.post(`${APIRoute.Comments}/${id}`, { rating, comment });
      dispatch(postCommentSuccess());
      dispatch(fetchCommentsAction(id as string));
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(postCommentFailure(error.toString()));
      }
      toast.error(ToastMessage.PostCommentFailMessage);
    }
  };

export const fetchNearOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadNearOffersRequest());
    try {
      const { data } = await api.get<BackOffer[]>(`${APIRoute.Hotels}/${id}/nearby`);
      const adaptedOffers = adaptOffersToClient(data);
      dispatch(loadNearOffersSuccess(adaptedOffers));
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(loadNearOffersFailure(error.toString()));
      }
      toast.warn(ToastMessage.FetchNearOfferFailMessage);
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(requireAuthorizationRequest());
    try {
      const { data } = await api.get(APIRoute.Login);
      const adaptedData = adaptUserInfoToClient(data);
      dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth, adaptedData));
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(requireAuthorizationFailure(error.toString()));
      }
      toast.info(ToastMessage.AuthPromtMessage);
    }
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(loginActionRequest());
    try {
      const { data } = await api.post(APIRoute.Login, { email, password });
      const { token } = data;
      saveToken(token);
      const adaptedData = adaptUserInfoToClient(data);
      dispatch(requireAuthorizationSucces(AuthorizationStatus.Auth, adaptedData));
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(loginActionFailure(error.toString()));
      }
      toast.warn(ToastMessage.LoginFailMessage);
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(logoutRequest());
    try {
      api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogout());
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(logoutFailure(error.toString()));
      }
      toast.error(ToastMessage.LogoutFailMessage);
    }
  };

export const fetchFavoriteOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadFavoriteOffersRequest());
    try {
      const { data } = await api.get<BackOffer[]>(APIRoute.Favorite);
      const adaptedOffers = adaptOffersToClient(data);
      dispatch(loadFavoriteOffersSuccess(adaptedOffers));
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(loadFavoriteOffersFailure(error.toString()));
      }
      toast.error(ToastMessage.FetchFavoritesFailMessage);
    }
  };

export const postFavorititeAction = (id: number, status: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(postFavoriteRequest());
    try {
      await api.post(`${APIRoute.Favorite}/${id}/${Number(status)}`);
      dispatch(postFavoriteSuccess(id, status));
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(postFavoriteFailure(error.toString()));
      }
      toast.error(ToastMessage.PostFavoriteFailMessage);
    }
  };
