import { FormEvent, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ratingStars } from '../../const';
import { postCommentsAction } from '../../store/actions/api-actions';
import { getOfferById } from '../../store/selectors/selectors';
import { CommentPost } from '../../types/commentPost';
import { ReviewsItemForm } from '../../types/reviews-item-form';
import RatingInputComponent from '../rating-input/rating-input';

function ReviewNewComponent(): JSX.Element {
  const offerById = useSelector(getOfferById);
  const dispatch = useDispatch();

  const onSubmit = (commentPost: CommentPost) => {
    dispatch(postCommentsAction(commentPost));
  };

  const [formState, setFormState] = useState<{ [key: string]: ReviewsItemForm }>({
    rating: {
      value: '0',
      isValid: false,
    },
    review: {
      value: '',
      isValid: false,
      minValue: 50,
      maxValue: 300,
    },
  });

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    onSubmit({
      id: offerById?.id as string | undefined,
      rating: Number(formState.rating.value),
      comment: formState.review.value,
    });

    setFormState({
      ...formState,
      rating: {
        ...formState.rating,
        value: '0',
      },
      review: {
        ...formState.review,
        value: '',
      },
    });

  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;

    let isValid = false;
    if (name === 'review' && formState.review.maxValue && formState.review.minValue) {
      isValid = Boolean(value.length >= formState.review.minValue && value.length < formState.review.maxValue);
    } else {
      isValid = Boolean(value);
    }

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        isValid,
      },
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(ratingStars).reverse().map((number) => (
          <RatingInputComponent
            number={number}
            key={number}
            title={ratingStars[number]}
            value={formState.rating.value}
            onChange={handleChange}
          />))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.review.value}
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!formState.review.isValid || !formState.rating.isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewNewComponent;
