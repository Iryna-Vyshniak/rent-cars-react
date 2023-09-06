import { useState } from 'react';

export function useNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(prevState => !prevState);
  };

  return {
    navbarOpen,
    toggleNavbar
  };
}
