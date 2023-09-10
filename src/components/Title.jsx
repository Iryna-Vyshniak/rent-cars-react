import PropTypes from 'prop-types';

const Title = ({ children, className }) => {
  return (
    <h2
      className={
        className
          ? `${className} dark:text-white`
          : 'title-card flex w-full items-center justify-between gap-2 dark:text-white lg:text-[14px] wide:text-[16px]'
      }
    >
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Title;
