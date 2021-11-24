import { ChangeEvent } from 'react';

type RatingInputProps = {
  number: string;
  title: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingInputComponent({ number, title, value, onChange }: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={number}
        id={`${number}-stars`}
        type="radio"
        onChange={onChange}
        checked={value === number}
      />

      <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default RatingInputComponent;
