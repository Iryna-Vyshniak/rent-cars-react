import PropTypes from 'prop-types';

import { formatedValue } from '../../shared/utils';
import Separator from '../Separator';
import { renderItems } from '../../shared/utils/utils';

const CardInfoBlock = ({ locationData, carData }) => {
  return (
    <>
      <ul className="card-info-block flex-wrap">{renderItems(locationData, <Separator />)}</ul>
      <ul className="card-info-block mb-[28px]">
        {Object.entries(carData).map(([key, value], idx, arr) => (
          <li key={idx} className="text-description">
            {formatedValue(key, value)}
            {idx < arr.length - 1 && <Separator />}
          </li>
        ))}
      </ul>
    </>
  );
};

CardInfoBlock.propTypes = {
  carData: PropTypes.object.isRequired,
  locationData: PropTypes.array.isRequired
};

export default CardInfoBlock;
