import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  const containerClasses = `container ${className || ''}`;
  return <div className={containerClasses}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Container;
