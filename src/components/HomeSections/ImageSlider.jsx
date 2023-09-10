import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import { carSlides } from '../../shared/data';
import { useSlide } from '../../shared/hooks';

const ImageSlider = () => {
  const slideCount = carSlides.length;
  const { currentIndex, prevSlide, nextSlide, goToSlide } = useSlide(0, slideCount);

  return (
    <section className="group relative m-auto mb-8 mt-20 h-[580px] w-full max-w-[1140px] px-4 py-16">
      <div
        className="h-full w-full rounded-2xl bg-cover bg-center transition duration-500 ease-linear"
        style={{ backgroundImage: `url(${carSlides[currentIndex].url})` }}
      ></div>

      <div className="absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl text-white group-hover:bg-black/20">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl text-white group-hover:bg-black/20">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="top-4 flex justify-center py-2">
        {carSlides.map((slide, slideIndex) => (
          <div
            className="cursor-pointer text-2xl"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;