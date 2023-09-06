import PropTypes from 'prop-types';

const MainTitle = ({ children }) => {
  return <h1>{children}</h1>;
};

MainTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainTitle;
