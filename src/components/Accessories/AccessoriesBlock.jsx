import PropTypes from 'prop-types';

import Separator from '../Separator';

import AccessoriesItem from './AccessoriesItem';

const AccessoriesBlock = ({ accessories, functionalities, title }) => {
  return (
    <div className="mb-[24px]">
      <p className="modal-second-title dark:text-white">{title}:</p>
      <AccessoriesItem items={accessories} separator={<Separator />} />
      <AccessoriesItem items={functionalities} separator={<Separator />} />
    </div>
  );
};

AccessoriesBlock.propTypes = {
  accessories: PropTypes.array.isRequired,
  functionalities: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default AccessoriesBlock;
