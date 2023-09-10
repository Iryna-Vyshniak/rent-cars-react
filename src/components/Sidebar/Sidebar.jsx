import { useSelector } from 'react-redux';

import FavoritesList from '../Cars/FavoritesList';

import Button from '../Button';
import Title from '../Title';
import { useToggle } from '../../shared/hooks';

import { selectFavorites } from '../../redux/cars/carsSelectors';
import RadioFilter from '../Filter/RadioFilter';

const Sidebar = () => {
  const { isOpen, toggle } = useToggle(true);

  const favoriteCars = useSelector(selectFavorites);

  return (
    <div className="relative z-[80] ml-2 flex flex-1 items-center justify-center self-start pl-2 dark:bg-slate-800 md:min-h-screen">
      <div className={`${isOpen ? 'sidebar-open' : 'sidebar-close'} sidebar relative z-[70]`}>
        <Button
          iconURL="#icon-arrow"
          type="button"
          className="sidebar-btn"
          svgClass={`w-3 fill-nav-link hover:fill-white ${
            !isOpen && 'rotate-180 transition duration-200 ease-in-out;'
          } transition duration-200 ease-in-out`}
          onClick={toggle}
        />
        <div className="flex items-center gap-x-4">
          <Title
            className={`mt-[30px] origin-left text-xl font-medium text-white transition duration-200 ease-in-out ${
              !isOpen && 'hidden'
            } ${isOpen && 'scale-[1]'}`}
          >
            Company
          </Title>
        </div>
        <RadioFilter open={isOpen} />
      </div>
      <div
        className={
          !favoriteCars?.length
            ? 'no-scrollbar h-screen flex-auto overflow-hidden px-2 py-7'
            : 'no-scrollbar h-screen flex-auto overflow-y-auto px-2 py-7'
        }
      >
        <FavoritesList open={isOpen} />
      </div>
    </div>
  );
};
export default Sidebar;
