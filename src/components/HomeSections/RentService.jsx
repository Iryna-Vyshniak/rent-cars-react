import { WhiteCar, Sgn } from '../../assets/images';
import MainTitle from '../MainTitle';

const RentService = () => {
  return (
    <section className="mb-10 max-mob:mt-[290px] mob:mt-[400px] max-sm:mt-[460px] leading-[0.05rem]">
      <div className="flex flex-wrap items-center justify-between gap-x-10 lg:flex-nowrap">
        <div className="w-full lg:w-2/5">
          <MainTitle className="capitalize text-black/80">
            Unlock Your Journey with
            <span className="font-semibold text-accent-color drop-shadow-[0_0.8px_0.8px_rgba(0,0,20,1)]">
              {' '}
              Our Wheels
            </span>
            !
          </MainTitle>

          <p className="modal-second-title text-secondary-text">Best Rental Service</p>

          <p className="modal-second-title text-secondary-text">
            Are you ready to explore Ukraine like never before? Say goodbye to the limitations of
            public transportation and embrace the freedom of the open road with our top-notch car
            rental services! At <span className="text-accent-color">RentCars</span>, we`re dedicated
            to making your travel experiences unforgettable.
          </p>
          <img src={Sgn} alt="signin" />
        </div>

        <div className="sm:w-full md:w-2/5 lg:block lg:w-3/5">
          <img src={WhiteCar} alt="car" />
        </div>
      </div>
    </section>
  );
};

export default RentService;
