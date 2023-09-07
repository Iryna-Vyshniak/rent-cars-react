export const scrollToTop = () => {
  window.scrollTo(0, 0, { behavior: true });
};

export const parseAddress = address => {
  const arr = address.split(', ');
  const city = arr[1];
  const country = arr[arr.length - 1];
  return { city, country };
};

export const getCarData = car => {
  const { type, mileage, functionalities } = car;
  return { type, mileage, functionalities };
};

export const getLocationData = (address, car) => {
  const { city, country } = parseAddress(address);
  const { rentalCompany } = car;
  return [city, country, rentalCompany];
};

export const renderItems = (arr, el, className) => {
  return arr.map((item, idx) => (
    <li key={idx} className={className ? `text-description ${className}` : 'text-description'}>
      {item}
      {idx < arr.length - 1 && el}
    </li>
  ));
};

export const findShortestString = arrStrings => {
  if (!arrStrings || arrStrings.length === 0) {
    return '';
  }

  let shortest = arrStrings[0];
  for (let i = 1; i < arrStrings.length; i++) {
    const currentString = arrStrings[i];
    if (currentString.split(' ').length < shortest.split(' ').length) {
      shortest = currentString;
    }
  }

  const shortestWords = shortest.split(' ');

  return shortestWords.length > 3 ? shortestWords.slice(0, 3).join(' ') : shortest;
};

export const formatedValue = (key, value) => {
  if (key === 'functionalities') {
    return findShortestString(value);
  } else if (key === 'type') {
    return value.split(',')[0].trim();
  }
  return value;
};

export const filteredCars = (arr, num) => {
  const newArr = arr.slice(0, num);
  return newArr;
};

export const handleClose = ({ target, currentTarget, code }, onCloseCallback) => {
  if (target === currentTarget || code === 'Escape') {
    onCloseCallback();
  }
};

export const getFullCarData = (address, car) => {
  const { city, country } = parseAddress(address);
  const { year, type, id } = car;
  return [city, country, `Id: ${id}`, `Year: ${year}`, `Type: ${type}`];
};

export const getFuelEngineData = car => {
  const { fuelConsumption, engineSize } = car;
  return [`Fuel Consumption: ${fuelConsumption}`, `Engine Size: ${engineSize}`];
};

export const parseRentalConditions = str => {
  const arr = str.split('\n');
  const num = arr[0].split(' ').slice(-1).join('');

  arr[0] = arr[0].replace(num, '');
  arr.splice(1, 0, num);

  return arr;
};

export const parseMileage = num => (num / 1000).toFixed(3);

export const parsePrice = str => str.split('').slice(1).join('');

export const addFav = car => {
  localStorage.setItem(car.id, JSON.stringify(car));
};

export const getFav = car => {
  return localStorage.getItem(car);
};

export const deleteFav = key => {
  localStorage.removeItem(key);
};

export const handleMakeChange = setterFunction => {
  return make => {
    setterFunction(make);
  };
};