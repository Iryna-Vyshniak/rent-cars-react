import { LogoCar, Sgn } from '../../assets/images';
import MainTitle from '../MainTitle';

const RentService = () => {
  return (
    <section className="mb-10 max-w-[1440px] px-4 leading-[0.05rem]">
      <div className="flex flex-col items-center justify-between gap-x-10 lg:flex-row">
        <div className="w-full lg:w-2/5">
          <MainTitle className="capitalize text-black/80 dark:text-white">
            Unlock Your Journey with
            <span className="font-semibold text-accent-color drop-shadow-[0_0.8px_0.8px_rgba(0,0,20,1)]">
              {' '}
              Our Wheels
            </span>
            !
          </MainTitle>

          <p className="modal-second-title text-secondary-text dark:text-white">
            Best Rental Service
          </p>

          <p className="modal-second-title text-secondary-text dark:text-white/50">
            Are you ready to explore Ukraine like never before? Say goodbye to the limitations of
            public transportation and embrace the freedom of the open road with our top-notch car
            rental services! At <span className="text-accent-color">RentCars</span>, we`re dedicated
            to making your travel experiences unforgettable.
          </p>
          <img src={Sgn} alt="signin" />
        </div>

        <div className="w-full lg:w-3/5">
          <img src={LogoCar} alt="car" width="2200" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default RentService;
