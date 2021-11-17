
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/action';
import { Dispatch } from 'redux';
import { changeCity, changeSortType } from '../../store/action';
import { START_SORT_TYPE } from '../../const';

type CitiesListProps = {
  cities: string[],
}

const mapStateToProps = ({ thisCity, offers }: State) => ({ thisCity, offers });

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
    dispatch(changeSortType(START_SORT_TYPE));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CitiesListProps;

function CitiesListComponents({ cities, onChangeCity, thisCity }: ConnectedComponentProps): JSX.Element {

  const getClassNameActive = (city: string) => city === thisCity ? 'tabs__item--active' : '';

  return (
    <><h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
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


export { CitiesListComponents };
export default connector(CitiesListComponents);
