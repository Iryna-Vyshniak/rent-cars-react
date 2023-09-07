import PropTypes from 'prop-types';

import Button from '../Button';

import { filteredCars } from '../../shared/utils';
import { COUNT_CARS } from '../../shared/constants';

import { useLoadMore } from '../../shared/hooks';

import CarItem from './CarItem';

const CarsList = ({ adverts }) => {
  const [currentPage, carsLimit, loadMore] = useLoadMore(COUNT_CARS);

  const indexOfLastCar = currentPage * carsLimit;

  return (
    <>
      <ul className="cards-list">
        {filteredCars(adverts, indexOfLastCar).map(car => (
          <CarItem car={car} fav={true} key={car.id} onOpen={open} />
        ))}
      </ul>
      {adverts.length >= indexOfLastCar ? (
        <Button className="button-load" label="Load more" onClick={loadMore} />
      ) : (
        <p>Finish</p>
      )}
    </>
  );
};

CarsList.propTypes = {
  adverts: PropTypes.array
};

export default CarsList;
