import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getFav } from '../../shared/utils';

import CarItem from './CarItem';

const FavoritesList = ({ open }) => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);

    const favorites = keys.map(car => {
      return JSON.parse(getFav(car));
    });

    setFavoriteCars(favorites);
  }, []);

  if (!favoriteCars.length) {
    return <p>No favorite cars found</p>;
  }

  return (
    <div className={open ? 'fav-list mt-[40px] p-8' : 'cards-list mt-[70px]'}>
      {favoriteCars.map(car =>
        car && car.id ? <CarItem car={car} fav={true} key={car.id} onOpen={open} /> : null
      )}
    </div>
  );
};

FavoritesList.propTypes = {
  open: PropTypes.bool.isRequired
};

export default FavoritesList;
