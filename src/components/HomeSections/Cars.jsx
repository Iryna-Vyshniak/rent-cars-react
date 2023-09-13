import { carImages } from '../../shared/data';
import MainTitle from '../MainTitle';

const Cars = () => {
  return (
    <section className="mx-auto my-20 grid h-[500px] max-w-[1440px] gap-4 rounded-2xl bg-gradient-to-b from-blue-100 to-white/5 px-4 pt-16 shadow-2xl dark:bg-slate-500 md:mb-[35%] lg:mb-[20%] lg:grid-cols-3">
      <div className="relative col-span-2 lg:top-5 lg:col-span-1">
        <MainTitle className="mt-0 flex items-start justify-start text-[32px]">
          Drive Your Dreams
        </MainTitle>
        <p className="modal-second-title text-[16px]">
          At <span className="font-semibold text-accent-color dark:text-white"> RentCars</span>,
          we`re not just a car rental service; we`re your ticket to unforgettable experiences,
          adventures, and memories waiting to be created. Whether you`re a solo traveler, exploring
          with family and friends, or on a business trip, we have the perfect vehicle to suit your
          needs.
        </p>
      </div>

      <div className="col-span-2 grid grid-cols-2 gap-2">
        {carImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={
              index === 1
                ? 'row-span-2 h-full w-full rounded-2xl object-cover shadow-2xl'
                : 'h-full w-full rounded-2xl object-cover'
            }
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Cars;
