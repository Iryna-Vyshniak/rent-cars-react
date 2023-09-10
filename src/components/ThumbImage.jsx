import PropTypes from 'prop-types';

import { DefaultCar } from '../assets/images';

const ThumbImage = ({ src, alt, className, blockClass, width, height }) => {
  return (
    <div
      className={
        blockClass
          ? `mb-[14px] max-w-full overflow-hidden rounded-[14px] ${blockClass}`
          : 'thumb mb-[14px] max-w-full overflow-hidden rounded-[14px]'
      }
    >
      <img
        src={src ? `${src}` : DefaultCar}
        alt={alt}
        className={
          className
            ? `block h-auto max-w-full object-cover object-center ${className}`
            : 'block h-auto max-w-full  object-cover object-center'
        }
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
};

ThumbImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  blockClass: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default ThumbImage;
