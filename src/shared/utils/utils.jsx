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
    <li
      key={idx}
      className={
        className
          ? `text-description ${className} dark:text-white/50`
          : 'text-description dark:text-white/50'
      }
    >
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
  const newArr = arr?.slice(0, num);
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

export const parseMileage = num => num.toLocaleString('en-EN');

export const parsePrice = str => str.split('').slice(1).join('');

export const priceOptions = arr => {
  if (!arr.length) {
    return undefined;
  }

  let max = 0;
  const priceOptions = [];

  arr.forEach(item => {
    const price = +parsePrice(item.rentalPrice);
    if (price > max) {
      max = price;
    }
  });

  let i = 10;
  while (i <= max) {
    priceOptions.push(i);
    i += 10;
  }

  return priceOptions;
};

export const filterCars = (cars, filter) => {
  if (!filter) {
    return cars;
  }

  return cars.filter(car => {
    const rentalPrice = parseInt(car.rentalPrice.substring(1));
    const mileage = parseFloat(car.mileage);

    const brandMatch = !filter.brand || car.make.toLowerCase() === filter.brand.toLowerCase();
    const priceMatch = !filter.price || rentalPrice <= filter.price;
    const minMileageMatch = !filter.from || mileage >= filter.from;
    const maxMileageMatch = !filter.to || mileage <= filter.to;
    const companyMatch =
      !filter.rentalCompany ||
      car.rentalCompany.toLowerCase() === filter.rentalCompany.toLowerCase();

    return brandMatch && priceMatch && minMileageMatch && maxMileageMatch && companyMatch;
  });
};
