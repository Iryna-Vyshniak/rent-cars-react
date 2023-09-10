import PropTypes from 'prop-types';

import Logo from '../Logo';

import Button from '../Button';

import NavMenu from './NavMenu';

const MobileNavbar = ({ navbar, openNav }) => {
  return (
    <div className={`mobile-navbar dark:bg-slate-800 ${navbar ? 'open-nav' : ''}`}>
      <Logo className="absolute inset-x-0 bottom-3 z-[60]" />
      <Button
        onClick={openNav}
        svgClass="mobile-navbar-close"
        iconURL="#icon-close"
        ariaLabel="close"
      />

      <NavMenu closeNav={openNav} className="mobile-navbar-items" />
    </div>
  );
};

MobileNavbar.propTypes = {
  navbar: PropTypes.bool,
  openNav: PropTypes.func
};

export default MobileNavbar;
