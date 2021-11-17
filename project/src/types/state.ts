import { Offer } from './offers';

export type State = {
  thisCity: string,
  offers: Offer[],
  currentSortType: string,
};
