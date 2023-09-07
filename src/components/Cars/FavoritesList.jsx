import { useEffect, useState } from 'react';

import { getFav } from '../../shared/utils';

import CarItem from './CarItem';

const FavoritesList = () => {
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
    <div className="cards-list mt-[40px] p-8">
      {favoriteCars.map(car =>
        car && car.id ? <CarItem car={car} fav={true} key={car.id} onOpen={open} /> : null
      )}
    </div>
  );
};

export default FavoritesList;
