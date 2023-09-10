import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { navLinks } from '../../shared/data';

import { activeLink } from '../../shared/constants';
import Switcher from '../Switcher';

const NavMenu = ({ closeNav, className }) => {
  const item = navLinks.map(({ id, link, label }) => (
    <li key={id}>
      {closeNav ? (
        <NavLink
          to={link}
          onClick={closeNav}
          className={({ isActive }) => (isActive ? activeLink : 'navbar-link')}
        >
          {label}
        </NavLink>
      ) : (
        <NavLink to={link} className={({ isActive }) => (isActive ? activeLink : 'navbar-link')}>
          {label}
        </NavLink>
      )}
    </li>
  ));
  return (
    <div className="flex items-center justify-between gap-3 max-md:flex-col-reverse">
      <ul className={className}>{item}</ul>
      <div>
        <Switcher />
      </div>
    </div>
  );
};

NavMenu.propTypes = {
  closeNav: PropTypes.func,
  className: PropTypes.string
};

export default NavMenu;
