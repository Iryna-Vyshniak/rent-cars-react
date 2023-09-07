import { WhiteCar, Sgn } from '../../assets/images';
import MainTitle from '../MainTitle';

const RentService = () => {
  return (
    <section className="mb-10">
      <div className="flex flex-wrap items-center justify-between gap-x-10 lg:flex-nowrap">
        <div className="w-full lg:w-2/5">
          <MainTitle className="capitalize text-black/80">
            Unlock Your Journey with
            <span className="font-semibold text-accent-color"> Our Wheels</span>!
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
