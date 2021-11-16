import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { roomOffers } from '../mocks/offers';
import { START_CITY,START_SORT_TYPE } from '../const';

const initialState = {
  thisCity: START_CITY,
  offers: roomOffers,
  currentSortType: START_SORT_TYPE,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, thisCity: action.payload, offers: roomOffers };
    case ActionType.FillingOffers : {
      return { ...state, offers: action.payload };
    }
    default:
      return state;
  }
};

export { reducer };
