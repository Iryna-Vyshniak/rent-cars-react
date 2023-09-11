import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  const containerClasses = `max-container ${className || ''} dark:bg-slate-900`;
  return <div className={containerClasses}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Container;
