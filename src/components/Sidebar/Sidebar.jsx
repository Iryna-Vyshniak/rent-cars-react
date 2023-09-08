import FavoritesList from '../Cars/FavoritesList';
import { navLinks } from '../../shared/data';

import Button from '../Button';
import Title from '../Title';
import { useToggle } from '../../shared/hooks';

const Sidebar = () => {
  const { isOpen, toggle } = useToggle(true);

  return (
    <div className="ml-2 flex flex-1 items-center justify-center self-start pl-2 md:min-h-screen">
      <div className={`${isOpen ? 'sidebar-open' : 'sidebar-close'} sidebar`}>
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
            Models
          </Title>
        </div>
        <ul className="pt-6">
          {navLinks.map(menu => (
            <li
              key={menu.id}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-white/50 text-gray-300 text-sm items-center gap-x-4 
              ${menu ? 'mt-9' : 'mt-2'} ${menu.id === 1 && 'bg-white/50'} `}
            >
              <Button
                type="button"
                iconURL="#icon-heart"
                ariaLabel="heart icon"
                className="heart"
              />
              <span
                className={`${!isOpen && 'hidden'} origin-left transition duration-200 ease-in-out`}
              >
                {menu.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="no-scrollbar h-screen flex-auto overflow-y-auto px-2 py-7">
        <FavoritesList open={isOpen} />
      </div>
    </div>
  );
};
export default Sidebar;
