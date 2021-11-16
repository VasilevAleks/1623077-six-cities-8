
import { Offer } from '../types/offers';
import { ActionType } from '../types/action';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const fillingOffers = (offers: Offer[]) => ({
  type: ActionType.FillingOffers,
  payload: offers,
} as const);

export const changeSortType = (sortType: string) => ({
  type: ActionType.ChangeSortType,
  payload: sortType,
} as const);
