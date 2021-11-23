import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserReducerState } from '../../types/state';
import {
  loginActionFailure,
  loginActionRequest,
  logoutFailure,
  logoutRequest,
  requireAuthorizationFailure,
  requireAuthorizationRequest,
  requireAuthorizationSucces,
  requireLogout
} from '../actions/action';

const initialState: UserReducerState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  userData: null,
  error: null,
  authorizationLoading: false,
  logoutLoading: false,
  loginActionLoading: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorizationRequest, (state: UserReducerState) => {
      state.authorizationLoading = true;
    })
    .addCase(requireAuthorizationSucces, (state: UserReducerState, action) => {
      const { authStatus, userData } = action.payload;
      state.authorizationStatus = authStatus;
      state.userData = userData;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorizationFailure, (state: UserReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(logoutRequest, (state: UserReducerState) => {
      state.logoutLoading = true;
    })
    .addCase(logoutFailure, (state: UserReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(requireLogout, (state: UserReducerState) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginActionRequest, (state: UserReducerState) => {
      state.loginActionLoading = true;
    })
    .addCase(loginActionFailure, (state: UserReducerState, action) => {
      state.error = action.payload;
    });
});

export { userReducer };
