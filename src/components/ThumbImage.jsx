import PropTypes from 'prop-types';

const ThumbImage = ({ src, alt, className }) => {
  return (
    <div className="thumb mb-[14px] max-w-full overflow-hidden rounded-[14px]">
      <img
        src={src}
        alt={alt}
        className={
          className
            ? `block object-cover object-center ${className}`
            : 'block h-auto max-w-full  object-cover object-center'
        }
        width="274"
        height="426"
        loading="lazy"
      />
    </div>
  );
};

ThumbImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ThumbImage;
