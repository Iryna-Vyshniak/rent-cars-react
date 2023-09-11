import PropTypes from 'prop-types';

import {
  getFuelEngineData,
  getFullCarData,
  parseMileage,
  parsePrice,
  parseRentalConditions,
  renderItems
} from '../../shared/utils';
import Separator from '../Separator';
import ThumbImage from '../ThumbImage';
import Title from '../Title';
import RentalCondBlock from '../RentalConditionals/RentalCondBlock';

import AccessoriesBlock from '../Accessories/AccessoriesBlock';

const ModalCardDetail = ({ car }) => {
  const {
    year,
    make,
    model,
    img,
    rentalPrice,
    address,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage
  } = car;

  const carData = getFuelEngineData(car);
  const locationData = getFullCarData(address, car);
  const rentConditions = parseRentalConditions(rentalConditions);
  const mile = parseMileage(mileage);
  const price = parsePrice(rentalPrice);

  return (
    <>
      <ThumbImage
        width="461"
        height="248"
        src={img}
        alt={`${make} ${model}`}
        className="modal-car"
        blockClass="w-[461px] h-[248px]"
        loading="lazy"
      />
      <Title className="modal-title">
        {make} <span className="modal-accent-title">{model}</span>, {year}
      </Title>
      <div className="mb-[14px] gap-[4px]">
        <ul className="modal-description mb-[4px] flex items-center justify-start">
          {renderItems(locationData, <Separator />)}
        </ul>
        <ul className="modal-description flex items-center justify-start">
          {renderItems(carData, <Separator />)}
        </ul>
      </div>
      <div className="modal-accent-descr dark:text-white">{description}</div>
      <AccessoriesBlock
        title="Accessories and functionalities"
        accessories={accessories}
        functionalities={functionalities}
      />
      <RentalCondBlock
        title="Rental Conditions"
        rentConditions={rentConditions}
        mile={mile}
        price={price}
      />

      <a href="tel:+380730000000" className="modal-btn-link">
        Rental car
      </a>
    </>
  );
};

ModalCardDetail.propTypes = {
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
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.array.isRequired,
    rentalConditions: PropTypes.string.isRequired
  }).isRequired
};

export default ModalCardDetail;
