import { useState } from 'react';

export const useLoadMore = (initialCount = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [carsLimit] = useState(initialCount);

  const loadMore = () => setCurrentPage(prevPage => prevPage + 1);

  return [carsLimit, currentPage, loadMore];
};
