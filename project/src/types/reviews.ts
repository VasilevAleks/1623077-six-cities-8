import {HumanInfo} from '../types/offers';

export type ReviewsComment ={
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: HumanInfo;
};
