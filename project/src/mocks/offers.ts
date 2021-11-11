import {Offer} from '../types/offers';

export const roomOffers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.390955,
        longitude: 4.853096,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      AvatarUrl: 'img/1.png',
      id: 3,
      IsPro: true,
      name: 'Angelina',
    },
    id: 111,
    images: ['../img/apartment-01.jpg', '../img/apartment-02.jpg'],
    IsFavorite: false,
    IsPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    MaxAdults: 4,
    PreviewImage: '../img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 44,
    city: {
      location: {
        latitude: 52.369553,
        longitude: 4.853096,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozya appartament in Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV'],
    host: {
      AvatarUrl: 'img/3.png',
      id: 4,
      IsPro: false,
      name: 'Marina',
    },
    id: 222,
    images: ['../img/apartment-01.jpg', '../img/room.jpg'],
    IsFavorite: false,
    IsPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    MaxAdults: 5,
    PreviewImage: '../img/room.jpg',
    price: 222,
    rating: 2.8,
    title: 'mock-room 2',
    type: 'room',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.390955,
        longitude: 4.929309,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Room in Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV'],
    host: {
      AvatarUrl: 'img/3.png',
      id: 6,
      IsPro: true,
      name: 'Galina',
    },
    id: 444,
    images: ['../img/apartment-02.jpg', '../img/apartment-03.jpg'],
    IsFavorite: false,
    IsPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    MaxAdults: 1,
    PreviewImage: '../img/apartment-02.jpg',
    price: 10,
    rating: 4.0,
    title: 'mock-room 3.',
    type: 'apartment',
  },
  {
    bedrooms: 21,
    city: {
      location: {
        latitude: 52.380955,
        longitude: 4.939309,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'One more room in Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV'],
    host: {
      AvatarUrl: 'img/5.png',
      id: 8,
      IsPro: true,
      name: 'Julia',
    },
    id: 666,
    images: ['../img/studio-01.jpg', '../img/room.jpg'],
    IsFavorite: true,
    IsPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    MaxAdults: 10,
    PreviewImage: '../img/studio-01.jpg',
    price: 1456,
    rating: 5.0,
    title: 'mock-room 4',
    type: 'room',
  },
];
