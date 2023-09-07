import { useState } from 'react';

import FavoritesList from '../Cars/FavoritesList';
import { navLinks } from '../../shared/data';
import ThumbImage from '../ThumbImage';
import Button from '../Button';
import Title from '../Title';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } relative min-h-screen bg-accent-color p-5 pt-8 transition duration-200 ease-in-out`}
      >
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/circled-left-2.png"
          alt="circled-left-2"
          className={`absolute cursor-pointer -right-3 top-16 w-7 ring-white
           border-2 rounded-full ${!open && 'rotate-180'} transition duration-200 ease-in-out`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4">
          <Title
            className={`mt-[30px] origin-left text-xl font-medium text-white transition duration-200 ease-in-out ${
              !open && 'hidden'
            } ${open && 'scale-[1]'}`}
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
                className={`${!open && 'hidden'} origin-left transition duration-200 ease-in-out`}
              >
                {menu.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="no-scrollbar h-screen flex-1 overflow-y-auto p-7">
        <FavoritesList />
      </div>
    </div>
  );
};
export default Sidebar;
