import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';

type placeCardListProps = {
  offers: Offer[],
  handleActiveCard: (offer: Offer | null) => void;
}

function PlaceCardListComponent({ offers, handleActiveCard }: placeCardListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          handleActiveCard={handleActiveCard}
        />),
      )}
    </div>
  );
}

export default PlaceCardListComponent;
