import { SortTypes } from '../../const';
import { useState } from 'react';
import { changeSortType } from '../../store/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentSortType } from '../../store/selectors/selectors';

function SortingComponent(): JSX.Element {

  const currentSortType = useSelector(getCurrentSortType);
  const [isOpenSort, setOpenSort] = useState(false);
  const dispatch = useDispatch();
  const handleToggleSort = () => {
    setOpenSort(!isOpenSort);
  };

  const handleClickItemSort = (type: string) => {
    dispatch(changeSortType(type));
    setOpenSort(!isOpenSort);
  };

  const getOpenSortClass = (openSort: boolean) => (openSort) ? 'places__options places__options--opened' : '';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        tabIndex={0}
        onClick={handleToggleSort}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${getOpenSortClass(isOpenSort)}`}>
        {Object.values(SortTypes).map((item) => (
          <li
            key={item}
            className={`places__option ${currentSortType === item && 'places__option--active'}`}
            tabIndex={0}
            onClick={() => handleClickItemSort(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form >
  );
}

export default SortingComponent;
