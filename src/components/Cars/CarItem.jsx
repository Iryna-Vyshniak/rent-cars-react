import PropTypes from 'prop-types';

import { useEffect, useRef, useState } from 'react';

import Button from '../Button';
import ThumbImage from '../ThumbImage';
import Title from '../Title';
import DefaultCar from '../../assets/images/car.jpg';

import { useToggle } from '../../shared/hooks';
import { Modal, ModalCardDetail } from '../Modal';

import { addFav, deleteFav, getCarData, getFav, getLocationData } from '../../shared/utils/utils';

import CardInfoBlock from './CardInfoBlock';

const CarItem = ({ car, fav }) => {
  const { isOpen, open, close } = useToggle(false);

  const { id, year, make, model, img, rentalPrice, address } = car;

  const carData = getCarData(car);
  const locationData = getLocationData(address, car);

  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  let favLength = useRef(0);

  useEffect(() => {
    const isFavorite = getFav(id);
    setIsActive(!!isFavorite);
  }, [id]);

  const buttonHandler = () => {
    if (isActive) {
      deleteFav(id);
      setIsActive(false);
      if (fav) {
        setIsVisible(false);
      }
    } else {
      addFav(car);
      setIsActive(true);
    }
    const storedFavorites = Object.keys(localStorage).filter(key => key.startsWith('car'));
    favLength.current = storedFavorites.length;
  };

  if (favLength.current < 1 && isVisible === false) {
    return <p>No favorite cars found.</p>;
  }

  return (
    <>
      {isVisible && (
        <li className="card flex-auto">
          <Button
            data-id={id}
            type="button"
            iconURL="#icon-heart"
            ariaLabel="heart icon"
            onClick={buttonHandler}
            className={`${isActive ? 'heart favorite' : 'heart'}`}
          />
          <ThumbImage
            className="card-image"
            src={img ? img : DefaultCar}
            alt={`${make} ${model}`}
            width="274"
            height="426"
          />
          <Title>
            <span className="truncate hover:text-clip">
              {make}
              <span className="title-accent ml-1">{model}</span>, {year}
            </span>
            <span>{rentalPrice}</span>
          </Title>

          <CardInfoBlock locationData={locationData} carData={carData} />

          <Button label="Learn more" className="card-big-button" onClick={open} />
          {isOpen && (
            <Modal isOpen={isOpen} onClose={close}>
              <ModalCardDetail car={car} />
            </Modal>
          )}
        </li>
      )}
    </>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired
  }).isRequired,
  fav: PropTypes.bool
};

export default CarItem;
