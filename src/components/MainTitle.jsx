import PropTypes from 'prop-types';

const MainTitle = ({ children, className }) => {
  return (
    <h1
      className={
        className
          ? `mb-4 mt-10 text-left font-montserrat text-4xl font-bold dark:text-white  max-sm:text-3xl ${className}`
          : 'mb-4 mt-10 text-left font-montserrat text-4xl font-bold dark:text-white max-sm:text-center max-sm:text-3xl'
      }
    >
      {children}
    </h1>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default MainTitle;
