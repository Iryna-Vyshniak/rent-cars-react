import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useUniquePropValues } from '../../shared/hooks';
import { selectFavorites, selectFilter } from '../../redux/cars/carsSelectors';

import { setFilter } from '../../redux/cars/carsSlice';

const RadioFilter = ({ open }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);
  const uniqueMakes = useUniquePropValues(cars, 'rentalCompany');

  const handleMakeChange = rentalCompany => {
    if (!filter || filter.rentalCompany !== null) {
      dispatch(setFilter({ rentalCompany }));
    } else if (filter.make === rentalCompany) {
      dispatch(setFilter({ ...filter, rentalCompany: '' }));
    } else {
      dispatch(setFilter({ ...filter, rentalCompany }));
    }
  };
  return (
    <ul className="mt-10 flex flex-col gap-5">
      {uniqueMakes.map((rentalCompany, index) => (
        <li key={index} className="relative">
          <input
            id={rentalCompany}
            type="radio"
            name="make"
            value={rentalCompany}
            checked={filter?.rentalCompany === rentalCompany}
            className="radio"
            onChange={() => handleMakeChange(rentalCompany)}
          />
          <label
            htmlFor={rentalCompany}
            className="responsive-text inline-block pl-[0.15rem] text-white hover:cursor-pointer"
          >
            {' '}
            {open
              ? rentalCompany
              : rentalCompany
                  .split(' ')
                  .map(word => word[0])
                  .join('')}
          </label>
        </li>
      ))}
    </ul>
  );
};

RadioFilter.propTypes = {
  open: PropTypes.bool
};

export default RadioFilter;
