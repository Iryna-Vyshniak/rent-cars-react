import PropTypes from 'prop-types';

const MainTitle = ({ children }) => {
  return (
    <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[32px] font-bold text-left">
      {children}
    </h1>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainTitle;
