import { Offer } from '../../types/offer';
import HeaderComponet from '../header/header';
import RoomGalleryComponent from '../room-gallary/room-gallary';
import RoomGoodsComponent from '../room-goods/room-goods';
import ReviewsComponent from '../reviews/reviews';
import NearPlacesComponent from '../near-places/near-places';
import { useHistory, useParams } from 'react-router-dom';
import Map from '../map/map';
import { useEffect, useState } from 'react';
import { getRating } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus, MAX_IMAGES } from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { fetchCommentsAction, fetchNearOffersAction, fetchOfferByIdAction, postFavorititeAction } from '../../store/actions/api-actions';
import { getAuthorizationStatus, getNearOffers, getOfferById } from '../../store/selectors/selectors';

function RoomScreen(): JSX.Element {

  const offerById = useSelector(getOfferById);
  const nearOffers = useSelector(getNearOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const { id } = useParams() as { id: string };
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const handleActiveCard = (card: Offer | null): void => {
    setActiveCard(card);
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFavoriteBthClick = (offer: Offer) => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(postFavorititeAction(offer.id, !offer.isFavorite));
    } else {
      history.push(AppRoute.SignIn);
    }
  };

  useEffect(() => {
    dispatch(fetchNearOffersAction(id));
    dispatch(fetchOfferByIdAction(id));
    dispatch(fetchCommentsAction(id));
  }, [id, dispatch]);

  if (!offerById) {
    return <NotFoundScreen />;
  }
  const { images, isFavorite, title, isPremium, host, price, rating, bedrooms, maxAdults, type, goods, description } = offerById;
  const { name, avatarUrl, isPro } = host;

  const offerRating = getRating(offerById.rating);

  const bookmarkButtonClass = isFavorite ? 'property__bookmark-button property__bookmark-button--active button'
    : 'property__bookmark-button button';
  const propertyWrapperClass = isPro
    ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'
    : 'property__avatar-wrapper user__avatar-wrapper';

  return (
    <div className="page">
      <HeaderComponet />
      <main className="page__main page__main--property">
        <section className="property">
          {images.length > 0 && <RoomGalleryComponent images={images.slice(0, MAX_IMAGES)} />}
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={bookmarkButtonClass}
                  type="button"
                  onClick={() => handleFavoriteBthClick(offerById)}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: offerRating }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {goods.length > 0 && <RoomGoodsComponent goods={goods} />}
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={propertyWrapperClass}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <ReviewsComponent />
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={nearOffers}
              activeCard={activeCard}
            />
          </section>
        </section>
        <NearPlacesComponent
          nearOffers={nearOffers}
          handleActiveCard={handleActiveCard}
        />
      </main>
    </div>
  );
}

export default RoomScreen;
