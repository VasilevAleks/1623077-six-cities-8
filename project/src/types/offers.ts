export type MapLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityLocation = {
  location: MapLocation;
  name: string;
};

export type HumanInfo = {
  AvatarUrl : string;
  id : number;
  IsPro : boolean,
  name : string;
};


export type Offer = {
  bedrooms: number;
  city: CityLocation;
  description: string;
  goods: string[];
  host: HumanInfo;
  id: number;
  images: string[];
  IsFavorite: boolean;
  IsPremium: boolean;
  location: MapLocation;
  MaxAdults: number;
  PreviewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};
