import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { selectFavorites, selectFilter } from '../../redux/cars/carsSelectors';

import NoLikes from '../NotFound';

import Filter from '../Filter/Filter';

import { filterCars } from '../../shared/utils';

import CarItem from './CarItem';

const FavoritesList = ({ open }) => {
  const favoriteCars = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);
  const filteredCars = filterCars(favoriteCars, filter);

  return (
    <div className="flex flex-col gap-5">
      <div className="ml-5 mt-10">
        <Filter cars={favoriteCars} open={open} />
      </div>
      {!filteredCars.length && <NoLikes />}
      <div className={open ? 'fav-list relative mt-[40px] p-8' : 'cards-list relative mt-[70px]'}>
        {filteredCars.map(car => (
          <CarItem car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

FavoritesList.propTypes = {
  open: PropTypes.bool
};

export default FavoritesList;
