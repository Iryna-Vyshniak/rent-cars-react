import PropTypes from 'prop-types';

const RentalCondItem = ({ conditionText, conditionValue }) => {
  return (
    <li className="modal-btn-cond">
      <p className="cond">{conditionText}</p>
      {conditionValue && <span className="modal-accent-cond">{conditionValue}</span>}
    </li>
  );
};

RentalCondItem.propTypes = {
  conditionText: PropTypes.string.isRequired,
  conditionValue: PropTypes.string
};

export default RentalCondItem;
