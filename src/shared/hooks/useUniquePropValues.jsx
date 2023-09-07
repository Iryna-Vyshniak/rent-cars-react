import { useState, useEffect } from 'react';

export const useUniquePropValues = (data, propertyName) => {
  const [uniqueValues, setUniqueValues] = useState([]);

  useEffect(() => {
    if (!propertyName) {
      return;
    }

    const values = [...new Set(data.map(item => item[propertyName]))];
    setUniqueValues(values);
  }, [data, propertyName]);

  return uniqueValues;
};
