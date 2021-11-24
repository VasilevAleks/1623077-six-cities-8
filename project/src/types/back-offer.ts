import { City } from './offer';

export type BackOffer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: {
    ['avatar_url']: string,
    id: number,
    ['is_pro']: boolean,
    name: string,
  },
  id: number,
  images: string[],
  ['is_favorite']: boolean,
  ['is_premium']: boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  ['max_adults']: number,
  ['preview_image']: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}
