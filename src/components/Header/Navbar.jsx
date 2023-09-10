import icons from '../../assets/images/icons.svg';

import Logo from '../Logo';

import { useToggle } from '../../shared/hooks';

import Button from '../Button';

import MobileNavbar from './MobileNavbar';
import DeskNavbar from './DeskNavbar';

const Navbar = () => {
  const { isOpen, toggle } = useToggle(false);

  return (
    <nav>
      <MobileNavbar icons={icons} navbar={isOpen} openNav={toggle} />
      <DeskNavbar />

      <div className="mobile-hamb" onClick={toggle}>
        <Logo text="RentCars" classText="logo-text" />
        <Button svgClass="mobile-navbar-menu" iconURL="#icon-menu" ariaLabel="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
