import icons from '../../assets/images/icons.svg';

import Logo from '../Logo';

import { useNavbar } from '../../shared/hooks';

import Button from '../Button';

import MobileNavbar from './MobileNavbar';
import DeskNavbar from './DeskNavbar';

const Navbar = () => {
  const { navbarOpen, toggleNavbar } = useNavbar();

  return (
    <nav>
      <MobileNavbar icons={icons} navbar={navbarOpen} openNav={toggleNavbar} />
      <DeskNavbar />
      <div className="mobile-hamb" onClick={toggleNavbar}>
        <Logo text="RentCars" classText="logo-text" />
        <Button svgClass="mobile-navbar-menu" iconURL="#icon-menu" ariaLabel="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
