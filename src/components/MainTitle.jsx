import PropTypes from 'prop-types';

const MainTitle = ({ children }) => {
  return (
    <h1 className="mb-4 mt-10 text-left font-montserrat text-4xl font-bold max-sm:text-center max-sm:text-3xl">
      {children}
    </h1>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainTitle;
