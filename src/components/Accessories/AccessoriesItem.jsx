import PropTypes from 'prop-types';

const AccessoriesItem = ({ items, separator }) => {
  return (
    <ul className="mb-[4px] flex flex-wrap items-center justify-start">
      {items.map((item, idx) => (
        <li key={idx} className="text-description dark:text-white/50">
          {item}
          {idx < items.length - 1 && separator}
        </li>
      ))}
    </ul>
  );
};

AccessoriesItem.propTypes = {
  items: PropTypes.array.isRequired,
  separator: PropTypes.any
};

export default AccessoriesItem;
