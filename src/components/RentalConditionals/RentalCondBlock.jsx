import PropTypes from 'prop-types';

import RentalCondItem from './RentalCondItem';

const RentalCondBlock = ({ rentConditions, mile, price, title }) => {
  return (
    <div className="mb-[24px] ">
      <p className="modal-second-title dark:text-white">{title}:</p>
      <ul className="modal-cond-block gap-3">
        <RentalCondItem conditionText={rentConditions[0]} conditionValue={rentConditions[1]} />
        <RentalCondItem conditionText={rentConditions[2]} />
        <RentalCondItem conditionText={rentConditions[3]} />
        <RentalCondItem conditionText={'Mileage: '} conditionValue={mile} />
        <RentalCondItem conditionText={'Price: '} conditionValue={`${price}$`} />
      </ul>
    </div>
  );
};

RentalCondBlock.propTypes = {
  rentConditions: PropTypes.array.isRequired,
  mile: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default RentalCondBlock;
