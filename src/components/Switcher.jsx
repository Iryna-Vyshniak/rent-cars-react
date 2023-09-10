import { useState } from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useDarkSide } from '../shared/hooks';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch
      checked={darkSide}
      onChange={toggleDarkMode}
      size={26}
      moonColor="#fbbf24"
      sunColor="#fbbf24"
    />
  );
}
