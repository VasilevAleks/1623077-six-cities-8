import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT_TYPE } from '../../const';
import { MainReducerState } from '../../types/state';
import { changeCity, changeSortType } from '../actions/action';

const initialState: MainReducerState = {
  currentCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT_TYPE,
};

const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeSortType, (state: MainReducerState, action) => {
      state.currentSortType = action.payload;
    })
    .addCase(changeCity, (state: MainReducerState, action) => {
      state.currentCity = action.payload;
    });
});

export { mainReducer };
