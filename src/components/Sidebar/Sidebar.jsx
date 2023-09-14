import { useSelector } from 'react-redux';

import FavoritesList from '../Cars/FavoritesList';

import Button from '../Button';
import Title from '../Title';
import { useToggle } from '../../shared/hooks';

import { selectFavorites } from '../../redux/cars/carsSelectors';
import RadioFilter from '../Filter/RadioFilter';
import Filter from '../Filter/Filter';

const Sidebar = () => {
  const { isOpen, toggle } = useToggle(false);

  const favoriteCars = useSelector(selectFavorites);

  return (
    <aside className="absolute top-0 z-[1] w-full ">
      <div className={`${isOpen ? 'sidebar-open' : 'sidebar-close'} sidebar relative`}>
        <Button
          iconURL="#icon-arrow"
          type="button"
          className="sidebar-btn"
          svgClass={`w-3 fill-secondary-text hover:fill-white ${
            !isOpen && '-rotate-180 transition duration-200 ease-in-out'
          } transition duration-200 ease-in-out`}
          onClick={toggle}
        />
        <div className="flex flex-col items-center gap-x-4">
          {favoriteCars.length > 0 && (
            <Title
              className={`gradient mt-[30px] origin-left text-xl font-semibold text-main-text  transition duration-200 ease-in-out dark:text-accent-color ${
                !isOpen && 'hidden'
              } ${isOpen && 'scale-[1]'}`}
            >
              Company
            </Title>
          )}
        </div>
        <RadioFilter open={isOpen} />
        <div className={`ml-5 mt-10 ${!isOpen ? 'hidden' : ''}`}>
          <Filter cars={favoriteCars} />
        </div>
      </div>
      <FavoritesList />
    </aside>
  );
};
export default Sidebar;
