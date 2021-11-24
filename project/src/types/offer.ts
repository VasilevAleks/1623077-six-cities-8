export type City = {
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  name: string,
}

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: {
    avatarUrl: string,
    ['avatar_url']?: string,
    id: number,
    isPro: boolean,
    ['is_pro']?: boolean,
    name: string,
  },

  id: number,
  images: string[],
  isFavorite: boolean,
  ['is_favorite']?: boolean,
  isPremium: boolean,
  ['is_premium']?: boolean,

  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },

  maxAdults: number,
  ['max_adults']?: number,
  previewImage: string,
  ['preview_image']?: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};
