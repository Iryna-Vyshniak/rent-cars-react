import { useState } from 'react';

export const useSlide = (initialIndex, slideCount) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideCount - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideCount - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  return {
    currentIndex,
    prevSlide,
    nextSlide,
    goToSlide
  };
};
