import { Link } from 'react-router-dom';

import MainTitle from '../MainTitle';

const Hero = () => {
  return (
    <section className="hero mt-[-8rem] w-screen">
      <div className="max-container absolute left-0 top-[4rem] flex h-full w-full flex-col items-start justify-start p-20 text-white wide:top-[8rem] wide:mt-[2rem]">
        <p>All Inclusive</p>
        <MainTitle className="mb-6 max-w-[950px] p-3 font-bold drop-shadow-2xl md:text-8xl">
          Your Key to <span className="gradient">Freedom</span> on Ukrainian Roads
        </MainTitle>
        <p className="mb-4 max-w-[600px] py-2 text-[1.1rem] drop-shadow-2xl">
          Experience the freedom of exploring Ukraine at your own pace with our car rental app.
          Discover picturesque landscapes, vibrant cities, and hidden gems with ease. Your adventure
          begins here.
        </p>
        <Link to="/catalog" className="small-button cursor-pointer px-2 text-center">
          Reserve Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
