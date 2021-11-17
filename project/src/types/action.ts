import { changeCity, fillingOffers,changeSortType } from '../store/action';
export enum ActionType {
  ChangeCity = 'changeCity',
  FillingOffers = 'fillingOffers',
  SelectCurrentOffer = 'selectCurrentOffer',
  ChangeSortType = 'changeSortType',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof fillingOffers>
  | ReturnType<typeof changeSortType>;
