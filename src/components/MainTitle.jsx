import PropTypes from 'prop-types';

const MainTitle = ({ children }) => {
  return (
    <h1 className="mt-10 text-left font-montserrat text-4xl font-bold max-sm:text-[32px]">
      {children}
    </h1>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainTitle;
