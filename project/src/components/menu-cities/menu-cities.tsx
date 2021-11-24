import { useDispatch, useSelector } from 'react-redux';
import { changeCity, changeSortType } from '../../store/actions/action';
import { CITIES, DEFAULT_SORT_TYPE } from '../../const';
import { getCurrentCity } from '../../store/selectors/selectors';

function MenuCitiesComponent(): JSX.Element {

  const currentCity = useSelector(getCurrentCity);

  const dispatch = useDispatch();

  const onChangeCity = (city: string) => {
    dispatch(changeCity(city));
    dispatch(changeSortType(DEFAULT_SORT_TYPE));
  };

  const getClassNameActive = (city: string) => city === currentCity ? 'tabs__item--active' : '';

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <li className="locations__item" key={city}>
                <a href="/#"
                  className={`locations__item-link tabs__item ${getClassNameActive(city)}`}
                  onClick={() => onChangeCity(city)}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default MenuCitiesComponent;
