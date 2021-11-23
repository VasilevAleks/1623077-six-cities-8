type RoomGalleryComponentProps = {
  images: string[],
}

function RoomGalleryComponent({ images }: RoomGalleryComponentProps): JSX.Element {
  const imagesGallery = images.map((image, index) => (
    <div className="property__image-wrapper" key={image + index.toString()}>
      <img className="property__image" src={image} alt="Interior view" />
    </div>
  ));

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {imagesGallery}
      </div>
    </div>
  );
}

export default RoomGalleryComponent;
