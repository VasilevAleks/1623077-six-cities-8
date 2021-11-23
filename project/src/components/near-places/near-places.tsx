import { Offer } from '../../types/offer';
import NearPlaceCardComponent from '../near-place-card/near-place-card';

type NearPlacesProprs = {
  nearOffers: Offer[],
  handleActiveCard: (card: Offer | null) => void;
}

function NearPlacesComponent({ nearOffers, handleActiveCard }: NearPlacesProprs): JSX.Element {

  const nearPlaces = nearOffers.map((nearOffer) => (
    <NearPlaceCardComponent
      key={nearOffer.id}
      nearOffer={nearOffer}
      handleActiveCard={handleActiveCard}
    />
  ));

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearPlaces}
        </div>
      </section>
    </div>
  );
}

export default NearPlacesComponent;
