import dayjs from 'dayjs';
import { AuthorizationStatus, SortTypes } from '../const';
import { Offer } from '../types/offer';
import { BackOffer } from '../types/back-offer';
import { BackReview } from '../types/back-review';
import { Review } from '../types/review';
import { BackUserInfo } from '../types/back-user-info';
import { UserInfo } from '../types/user-info';

export const getFormatDate = (date: string, format: string): string => dayjs(date).format(format);
export const getRating = (rating: number): string => `${(Math.round(rating) / 5) * 100}%`;

export const sortReviewsUpDate = (reviewA: Review, reviewB: Review): number => Date.parse(reviewB.date) - Date.parse(reviewA.date);

export const getSortedOffers = (SortType: string, offers: Offer[]): Offer[] => {
  switch (SortType) {
    case SortTypes.PriceUp: {
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    }
    case SortTypes.PriceDown: {
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    }
    case SortTypes.RatingDown: {
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
    default: {
      return offers;
    }
  }
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const adaptOffersToClient = (offers: BackOffer[]): Offer[] => (
  offers.map((item: BackOffer): Offer => (
    adaptOfferToClient(item)
  ))
);

export const adaptOfferToClient = (offer: BackOffer): Offer => {
  const adaptedData = Object.assign(
    {},
    offer,
    {
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      previewImage: offer.preview_image,
    },
    {
      host: {
        avatarUrl: offer.host.avatar_url,
        isPro: offer.host.is_pro,
      },
    },
  ) as Offer;

  delete adaptedData.is_favorite;
  delete adaptedData.is_premium;
  delete adaptedData.max_adults;
  delete adaptedData.preview_image;
  delete adaptedData.host.is_pro;
  delete adaptedData.host.avatar_url;

  return adaptedData;
};


export const adaptCommentsToClient = (reviews: BackReview[]): Review[] => (
  reviews.map((item: BackReview): Review => (
    adaptCommentToClient(item)
  ))
);

export const adaptCommentToClient = (review: BackReview): Review => {
  const adaptedReview = Object.assign(
    {},
    review,
    {
      user: {
        avatarUrl: review.user.avatar_url,
        isPro: review.user.is_pro,
        id: review.user.id,
        name: review.user.name,
      },
    },
  ) as Review;

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

export const adaptUserInfoToClient = (userInfo: BackUserInfo): UserInfo => {

  const adaptedUserInfo = Object.assign(
    {},
    userInfo,
    {
      avatarUrl: userInfo.avatar_url,
      isPro: userInfo.is_pro,
    },
  ) as UserInfo;

  delete adaptedUserInfo.avatar_url;
  delete adaptedUserInfo.is_pro;

  return adaptedUserInfo;
};
