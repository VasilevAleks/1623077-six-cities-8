import { useSelector } from 'react-redux';
import { MAX_REVIEWS } from '../../const';
import { getAuthorizationStatus, getReviews } from '../../store/selectors/selectors';
import { sortReviewsUpDate } from '../../utils/utils';
import ReviewsItemComponent from '../reviews-item/reviews-item';
import ReviewsNewComponent from '../reviews-new/reviews-new';

function ReviewsComponent(): JSX.Element {

  const reviews = useSelector(getReviews);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const cropedSortedReviews = [...reviews].sort(sortReviewsUpDate).slice(0, MAX_REVIEWS);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {cropedSortedReviews.map((review) => <ReviewsItemComponent key={review.id} review={review} />)}
      </ul>
      {authorizationStatus === 'AUTH' ? <ReviewsNewComponent /> : 'Sign in to add a comment'}
    </section>
  );
}

export default ReviewsComponent;
