import { Review } from '../../types/review';
import { getFormatDate, getRating } from '../../utils/utils';

type ReviewsItemProps = {
  review: Review,
}

function ReviewsItemComponent({ review }: ReviewsItemProps): JSX.Element {
  const { date, rating, user, comment } = review;
  const { avatarUrl, name } = user;
  const reviewRating = getRating(rating);
  const reviewDate = getFormatDate(date, 'MMMM YYYY');
  const reviewDateTime = getFormatDate(date, 'YYYY-MM-DD');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: reviewRating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={reviewDateTime}>{reviewDate}</time>
      </div>
    </li>
  );
}

export default ReviewsItemComponent;
