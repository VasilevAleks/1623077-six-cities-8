type RoomGoodsProps = {
  goods: string[],
}

function RoomGoodsComponent({ goods }: RoomGoodsProps): JSX.Element {
  const goodsItems = goods.map((item) => (
    <li className="property__inside-item" key={item}>
      {item}
    </li>
  ));

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goodsItems}
      </ul>
    </div>
  );
}

export default RoomGoodsComponent;
