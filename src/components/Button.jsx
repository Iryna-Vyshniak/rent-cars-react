import PropTypes from 'prop-types';

import icons from '../assets/images/icons.svg';

const Button = ({ label, iconURL, ariaLabel, className, svgClass, onClick, type, id }) => {
  return (
    <button
      data-id={id}
      type={type}
      className={
        className
          ? `${className}`
          : 'flex h-[28px] w-[28px] items-center justify-center rounded-full border-none outline-none transition duration-200 ease-in-out active:shadow-sm'
      }
      onClick={onClick}
    >
      {label}

      {iconURL && (
        <svg width="18" height="18" aria-label={ariaLabel} className={svgClass}>
          <use href={icons + iconURL} />
        </svg>
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  iconURL: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  svgClass: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.any
};

export default Button;
